import { BadgeCheck, Globe2, ShieldCheck } from "lucide-react";

export function TrustBar() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Registered SA Company",
      sub: "CIPC: 2026/306686/07",
    },
    {
      icon: Globe2,
      title: "Serving South Africa & Lesotho",
      sub: "Cross-border delivery",
    },
    {
      icon: BadgeCheck,
      title: "Trusted by real businesses",
      sub: "Live, deployed solutions",
    },
  ];

  return (
    <section className="border-y border-border/60 bg-surface/40">
      <div className="container-px mx-auto max-w-7xl py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
