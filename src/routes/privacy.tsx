import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "../components/Section";
import { CONTACT } from "../lib/contact";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Astar Technologies" },
      {
        name: "description",
        content:
          "How Astar Technologies collects, uses, and protects your personal information in line with South Africa's POPIA.",
      },
      { property: "og:title", content: "Privacy Policy — Astar Technologies" },
      {
        property: "og:description",
        content:
          "POPIA-compliant privacy notice for Astar Technologies (Pty) Ltd.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const updated = "18 April 2026";
  return (
    <Section className="pt-12 md:pt-16">
      <SectionHeader
        eyebrow="Legal"
        title={<>Privacy <span className="text-gradient-gold">Policy</span></>}
        description={`Last updated: ${updated}`}
      />

      <div className="prose-legal mx-auto mt-12 max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Who we are</h2>
          <p className="mt-2">
            Astar Technologies (Pty) Ltd ("Astar", "we", "us") is a company
            registered in the Republic of South Africa (CIPC Registration:{" "}
            {CONTACT.cipc}), based in {CONTACT.location}. We are the
            responsible party for personal information collected through our
            website and services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. Information we collect</h2>
          <p className="mt-2">When you contact us through our website, we collect:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Your name and email address</li>
            <li>Your company or business name (optional)</li>
            <li>The message and project details you send us</li>
            <li>
              Limited technical information (browser/user-agent string and
              timestamp) to help prevent spam and abuse
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">3. How we use your information</h2>
          <p className="mt-2">We process your personal information to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Respond to your inquiry and provide a quote or consultation</li>
            <li>Communicate with you about your project</li>
            <li>Keep records required for legitimate business and tax purposes</li>
            <li>Improve our services and prevent fraud or abuse</li>
          </ul>
          <p className="mt-3">
            We process your information under the lawful bases of{" "}
            <strong className="text-foreground">consent</strong> (when you
            submit our contact form) and{" "}
            <strong className="text-foreground">legitimate interest</strong>{" "}
            (responding to business inquiries).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">4. Sharing your information</h2>
          <p className="mt-2">
            We do not sell your personal information. We share it only with:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              Trusted infrastructure providers (e.g. our database and hosting
              platforms) acting as our operators under written agreements
            </li>
            <li>
              Authorities, where required by law or to protect our rights
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">5. International transfers</h2>
          <p className="mt-2">
            Some of our service providers may store data outside South Africa.
            Where this happens, we ensure equivalent protection through
            contractual safeguards in line with section 72 of POPIA.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">6. How long we keep it</h2>
          <p className="mt-2">
            We keep contact inquiries for as long as needed to serve the
            relationship and to meet legal, accounting, or reporting
            obligations — typically up to 5 years from your last interaction
            with us, unless you ask us to delete it sooner.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">7. Your rights under POPIA</h2>
          <p className="mt-2">You have the right to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Access the personal information we hold about you</li>
            <li>Request correction or deletion of your information</li>
            <li>Object to processing or withdraw your consent</li>
            <li>
              Lodge a complaint with the Information Regulator (South Africa)
              at <a className="text-gold hover:underline" href="https://inforegulator.org.za" target="_blank" rel="noreferrer">inforegulator.org.za</a>
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email us at{" "}
            <a className="text-gold hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">8. Security</h2>
          <p className="mt-2">
            We use reasonable technical and organisational safeguards —
            including encrypted transport (HTTPS), access controls, and a
            managed database with row-level security — to protect your
            information from loss, unauthorised access, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">9. Cookies</h2>
          <p className="mt-2">
            Our website uses only essential cookies needed for the site to
            function. We do not currently use advertising or third-party
            tracking cookies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">10. Changes to this policy</h2>
          <p className="mt-2">
            We may update this policy from time to time. The "Last updated"
            date at the top will reflect the latest version.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">11. Contact us</h2>
          <p className="mt-2">
            Astar Technologies (Pty) Ltd<br />
            {CONTACT.location}<br />
            Email:{" "}
            <a className="text-gold hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br />
            Phone:{" "}
            <a className="text-gold hover:underline" href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
          </p>
        </section>
      </div>
    </Section>
  );
}
