import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/sections/Hero";
import { TrustBar } from "../components/sections/TrustBar";
import { Services } from "../components/sections/Services";
import { CaseStudies } from "../components/sections/CaseStudies";
import { Edge } from "../components/sections/Edge";
import { CTA } from "../components/sections/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astar Technologies — Digital Systems That Grow African Businesses" },
      {
        name: "description",
        content:
          "We help African businesses get more customers through smart websites, booking systems, automation and AI. Serving South Africa & Lesotho.",
      },
      { property: "og:title", content: "Astar Technologies — Smart Digital Solutions" },
      {
        property: "og:description",
        content: "Websites, booking systems, AI and automation built for African businesses.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <CaseStudies />
      <Edge />
      <CTA />
    </>
  );
}
