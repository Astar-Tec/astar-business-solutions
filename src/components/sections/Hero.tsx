import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 grain" />
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-px relative mx-auto max-w-7xl pt-20 pb-24 md:pt-28 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Smart digital solutions for African businesses
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            We Help African Businesses{" "}
            <span className="text-gradient-gold">Get More Customers</span>{" "}
            Through Smart Digital Systems
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            From bookings to automation to AI — we design and build the
            digital infrastructure your business needs to grow, run leaner,
            and reach more customers.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold text-gold-foreground shadow-glow hover:opacity-90"
            >
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border bg-surface/60 backdrop-blur"
            >
              <Link to="/work">View Our Work</Link>
            </Button>
          </div>
        </motion.div>

        {/* Real client proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <div className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur md:p-8">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 items-center rounded-full border border-gold/30 bg-gold/5 px-2.5 text-[10px] font-medium uppercase tracking-wider text-gold">
                    Live Client Project
                  </span>
                  <span className="text-xs text-muted-foreground">Real Work. Real Clients.</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-foreground md:text-xl">
                  Green Acorn Guest House
                </h3>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                  Not a demo — a live business powered by systems we built and manage.
                </p>
              </div>
              <a
                href="http://www.greenacorn.co.za"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-medium text-gold transition-colors hover:bg-gold/20"
              >
                Visit greenacorn.co.za <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Live Client Website",
                "Booking System Implemented",
                "Digital Presence Built from Scratch",
                "Ongoing Marketing & Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-border bg-background/40 px-4 py-3"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
