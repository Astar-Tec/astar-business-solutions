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
      { title: "Astar Technologies — Digital Systems for Business Growth" },
      {
        name: "description",
        content:
          "Get more customers, automate your business, and scale faster. Astar Technologies builds websites, booking systems, automation and AI for businesses across South Africa and Lesotho.",
      },
      { property: "og:title", content: "Astar Technologies — Digital Systems for Business Growth" },
      {
        property: "og:description",
        content: "Websites, booking systems, AI and automation built to grow your business.",
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
