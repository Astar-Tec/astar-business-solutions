import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4"
        >
          {[
            { value: "100+", label: "Farmers reached" },
            { value: "94%", label: "AgroSense adoption" },
            { value: "2", label: "Countries served" },
            { value: "UNDP", label: "Finalist recognition" },
          ].map((s) => (
            <div key={s.label} className="bg-surface px-6 py-6 text-center">
              <div className="text-2xl font-semibold text-gradient-gold md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
