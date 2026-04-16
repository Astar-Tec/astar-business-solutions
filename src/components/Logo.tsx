import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 group ${className}`}>
      <div className="relative">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold text-gold-foreground font-bold text-lg shadow-glow transition-transform group-hover:scale-105">
          A<span className="text-foreground -ml-0.5">*</span>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight text-foreground">
          Astar Technologies
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Pty Ltd
        </span>
      </div>
    </Link>
  );
}
