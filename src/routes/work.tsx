import { createFileRoute } from "@tanstack/react-router";
import { CaseStudies } from "../components/sections/CaseStudies";
import { CTA } from "../components/sections/CTA";
import { Section, SectionHeader } from "../components/Section";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Astar Technologies" },
      {
        name: "description",
        content:
          "Case studies from AgroSense, Green Acorn Guest House, and telecom IoT — real deployments, real impact.",
      },
      { property: "og:title", content: "Our Work — Case Studies" },
      {
        property: "og:description",
        content: "Real businesses, real outcomes: AgroSense, Green Acorn, and more.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <Section className="pt-12 md:pt-16 pb-0">
        <SectionHeader
          eyebrow="Our work"
          title={<>Systems that <span className="text-gradient-gold">moved the needle</span></>}
          description="Each project began with a real business problem — and ended with a working solution in production."
        />
      </Section>
      <CaseStudies />
      <CTA />
    </>
  );
}
