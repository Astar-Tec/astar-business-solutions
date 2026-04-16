import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Cloud, Code2, Lightbulb } from "lucide-react";
import { Section, SectionHeader } from "../components/Section";
import { Edge } from "../components/sections/Edge";
import { CTA } from "../components/sections/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Astar Technologies" },
      {
        name: "description",
        content:
          "Astar Technologies is a South African software company building smart digital systems for businesses across SA and Lesotho.",
      },
      { property: "og:title", content: "About Astar Technologies" },
      {
        property: "og:description",
        content:
          "A South African software company building real systems for African businesses.",
      },
    ],
  }),
  component: AboutPage,
});

const credentials = [
  { icon: Award, label: "UNDP Innovation Finalist", sub: "Recognized for AgroSense" },
  { icon: Cloud, label: "AWS IoT Experience", sub: "Production telecom deployment" },
  { icon: Code2, label: "Software Engineering", sub: "End-to-end product delivery" },
  { icon: Lightbulb, label: "Applied AI", sub: "Multilingual & offline-first systems" },
];

function AboutPage() {
  return (
    <>
      <Section className="pt-12 md:pt-16">
        <SectionHeader
          eyebrow="About us"
          title={<>A South African software company building <span className="text-gradient-gold">real systems</span> for real businesses</>}
          description="Astar Technologies was founded to close a gap we saw clearly: African businesses needed digital infrastructure built with their reality in mind — not imported assumptions."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          <p>
            We are software engineers and problem solvers. Our work spans
            agricultural AI, hospitality systems, telecom IoT infrastructure,
            and business automation — delivered to organizations across South
            Africa and Lesotho.
          </p>
          <p>
            Every solution we build starts with one question: <span className="text-foreground font-medium">what outcome does the business need?</span> We work backward from there — choosing technology that fits the problem, not the other way around.
          </p>
          <p>
            We're a registered South African company (CIPC: 2026/306686/07) and we take that seriously. When you work with us, you're working with a business — accountable, contractable, and built to last.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {credentials.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-surface/60 p-5 text-center"
            >
              <c.icon className="mx-auto h-6 w-6 text-gold" />
              <p className="mt-3 text-sm font-semibold text-foreground">{c.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.sub}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Edge />
      <CTA />
    </>
  );
}
