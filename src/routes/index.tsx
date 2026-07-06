import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Education } from "@/components/site/Education";
import { Experience } from "@/components/site/Experience";
import { Achievements } from "@/components/site/Achievements";
import { Projects } from "@/components/site/Projects";
import { Resume } from "@/components/site/Resume";
import { Contact } from "@/components/site/Contact";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { MouseSpotlight } from "@/components/site/MouseSpotlight";
import { InteractionLayer } from "@/components/site/InteractionLayer";
import { SectionReveal } from "@/components/site/SectionReveal";


const TITLE = "Srinivasa Raghavan — Computer Science Engineer";
const DESCRIPTION =
  "Portfolio of Srinivasa Raghavan — Computer Science engineer at SRM Institute crafting fast, thoughtful software across web, systems and AI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <AmbientBackground />
      <MouseSpotlight />
      <InteractionLayer />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navigation />

      <main id="main" className="relative">
        <Hero />
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><Skills /></SectionReveal>
        <SectionReveal><Projects /></SectionReveal>
        <SectionReveal><Experience /></SectionReveal>
        <SectionReveal><Education /></SectionReveal>
        <SectionReveal><Achievements /></SectionReveal>
        <SectionReveal><Resume /></SectionReveal>
        <SectionReveal><Contact /></SectionReveal>
      </main>
      <Footer />
      <FloatingActions />
      <Toaster theme="dark" position="bottom-center" />
    </div>
  );
}
