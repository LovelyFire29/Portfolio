import { useEffect, useState } from "react";

export function TypingText({
  phrases,
  className = "",
  typingSpeed = 70,
  deletingSpeed = 35,
  pause = 1400,
  trailing = "",
}: {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  /** Optional punctuation glued to the cursor so it never wraps alone. */
  trailing?: string;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }
    const next = deleting
      ? current.slice(0, text.length - 1)
      : current.slice(0, text.length + 1);
    const t = setTimeout(() => setText(next), deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pause]);

  // Keep the last word + cursor + trailing punctuation together so a lone
  // "." can never wrap onto its own line on narrow screens.
  const lastSpace = text.lastIndexOf(" ");
  const head = lastSpace === -1 ? "" : text.slice(0, lastSpace + 1);
  const tail = lastSpace === -1 ? text : text.slice(lastSpace + 1);

  return (
    <span className={className}>
      {head}
      <span className="whitespace-nowrap">
        {tail}
        <span className="ml-0.5 inline-block h-[0.9em] w-[2px] -translate-y-[-0.05em] animate-pulse bg-primary align-middle" />
        {trailing}
      </span>
    </span>
  );
}
