import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/Section";
import { CONTACT } from "../lib/contact";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Astar Technologies" },
      {
        name: "description",
        content:
          "The terms that govern your use of the Astar Technologies website and services.",
      },
      { property: "og:title", content: "Terms of Service — Astar Technologies" },
      {
        property: "og:description",
        content:
          "Terms of Service for Astar Technologies (Pty) Ltd.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const updated = "18 April 2026";
  return (
    <Section className="pt-12 md:pt-16">
      <SectionHeader
        eyebrow="Legal"
        title={<>Terms of <span className="text-gradient-gold">Service</span></>}
        description={`Last updated: ${updated}`}
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Agreement</h2>
          <p className="mt-2">
            These Terms of Service ("Terms") govern your access to and use of
            the website, content, and services provided by Astar Technologies
            (Pty) Ltd ("Astar", "we", "us"), CIPC Registration {CONTACT.cipc},
            based in {CONTACT.location}. By using this website you agree to
            be bound by these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. Use of the website</h2>
          <p className="mt-2">
            You agree to use the website lawfully and not to:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Submit false, misleading, or malicious content</li>
            <li>Attempt to gain unauthorised access to our systems</li>
            <li>Interfere with the operation of the website or its security</li>
            <li>
              Use any automated means to scrape or harvest information from
              the site
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">3. Inquiries are not contracts</h2>
          <p className="mt-2">
            Submitting an inquiry through our website does not create a
            contractual relationship. Any project work, deliverables,
            timelines, fees, and intellectual property terms will be set out
            in a separate written proposal or agreement signed by both
            parties.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">4. Intellectual property</h2>
          <p className="mt-2">
            The Astar name, logo, branding, website design, and content are
            owned by Astar Technologies (Pty) Ltd and are protected by
            applicable intellectual property laws. You may not copy, modify,
            redistribute, or create derivative works without our prior
            written consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">5. Third-party links</h2>
          <p className="mt-2">
            Our website may link to third-party websites or services that we
            do not control. We are not responsible for the content, policies,
            or practices of those third parties.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">6. Disclaimer</h2>
          <p className="mt-2">
            The website is provided on an "as is" and "as available" basis.
            To the maximum extent permitted by law, we make no warranties,
            express or implied, regarding the website's availability,
            accuracy, or fitness for a particular purpose.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">7. Limitation of liability</h2>
          <p className="mt-2">
            To the maximum extent permitted by law, Astar Technologies (Pty)
            Ltd will not be liable for any indirect, incidental, special, or
            consequential damages arising from your use of, or inability to
            use, the website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">8. Privacy</h2>
          <p className="mt-2">
            Your use of the website is also governed by our{" "}
            <a className="text-gold hover:underline" href="/privacy">Privacy Policy</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">9. Changes to these Terms</h2>
          <p className="mt-2">
            We may update these Terms from time to time. The "Last updated"
            date at the top reflects the latest version. Continued use of
            the website after changes means you accept the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">10. Governing law</h2>
          <p className="mt-2">
            These Terms are governed by the laws of the Republic of South
            Africa. Any dispute arising from or in connection with these
            Terms is subject to the non-exclusive jurisdiction of the South
            African courts.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">11. Contact</h2>
          <p className="mt-2">
            Questions about these Terms? Email{" "}
            <a className="text-gold hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>
        </section>
      </div>
    </Section>
  );
}
