import { createFileRoute } from "@tanstack/react-router";
import { Services } from "../components/sections/Services";
import { CTA } from "../components/sections/CTA";
import { Section, SectionHeader } from "../components/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Astar Technologies" },
      {
        name: "description",
        content:
          "Websites that convert, booking systems, AI automation, and data dashboards — productized solutions for African businesses.",
      },
      { property: "og:title", content: "Services — Astar Technologies" },
      {
        property: "og:description",
        content:
          "Productized digital solutions: websites, booking systems, AI automation and dashboards.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section className="pt-12 md:pt-16">
        <SectionHeader
          eyebrow="Our services"
          title={<>Solutions built for <span className="text-gradient-gold">measurable outcomes</span></>}
          description="Every engagement starts with your business goals. Technology is just how we get you there."
        />
      </Section>
      <Services />
      <CTA />
    </>
  );
}
