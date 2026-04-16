import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { whatsappLink } from "../../lib/contact";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 bg-hero" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-px relative mx-auto max-w-5xl py-24 text-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Let's build something that{" "}
            <span className="text-gradient-gold">grows your business</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Free 30-minute consultation. No jargon, no pressure — just a clear
            conversation about what's possible.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold text-gold-foreground shadow-glow hover:opacity-90"
            >
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-surface/60">
              <a
                href={whatsappLink(
                  "Hi Astar Technologies, I'd like to discuss a project."
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="mr-1 h-4 w-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
