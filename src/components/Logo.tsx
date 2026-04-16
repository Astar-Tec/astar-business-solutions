import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`} aria-label="Astar Technologies — Home">
      <AstarMark className="h-9 w-9 transition-transform duration-300 group-hover:scale-[1.04]" />
      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-foreground">
          Astar<span className="text-gold"> </span>Technologies
        </span>
        <span className="mt-1 text-[9.5px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Engineered in Africa
        </span>
      </div>
    </Link>
  );
}

/**
 * Astar mark — a geometric monogram.
 * Concept: a precision-engineered "A" formed by two angled strokes,
 * crowned with a four-point compass star (the A* / north-star reference).
 * Rendered with a gold gradient, hairline detailing and a soft inner ring
 * to suggest a struck/embossed corporate seal.
 */
export function AstarMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="astar-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(45 90% 72%)" />
          <stop offset="50%" stopColor="hsl(42 78% 56%)" />
          <stop offset="100%" stopColor="hsl(36 70% 42%)" />
        </linearGradient>
        <linearGradient id="astar-sheen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(48 100% 88%)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(40 80% 50%)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Outer rounded square seal */}
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="14"
        fill="url(#astar-gold)"
      />
      {/* Subtle top sheen for premium feel */}
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="14"
        fill="url(#astar-sheen)"
        opacity="0.35"
      />
      {/* Inner hairline ring (engraved seal) */}
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="11"
        fill="none"
        stroke="hsl(36 60% 28%)"
        strokeOpacity="0.45"
        strokeWidth="0.75"
      />

      {/* Geometric "A" — two strokes forming a chevron, with crossbar */}
      <g fill="hsl(220 35% 8%)">
        {/* Left leg */}
        <path d="M20 48 L30.2 16 L33.8 16 L23.6 48 Z" />
        {/* Right leg */}
        <path d="M30.2 16 L33.8 16 L44 48 L40.4 48 Z" />
        {/* Crossbar */}
        <rect x="25.5" y="33" width="13" height="3.4" rx="0.6" />
      </g>

      {/* Four-point compass star — the A* reference, sitting at the apex */}
      <g transform="translate(32 13)">
        <path
          d="M0 -7 L1.6 -1.6 L7 0 L1.6 1.6 L0 7 L-1.6 1.6 L-7 0 L-1.6 -1.6 Z"
          fill="hsl(220 35% 8%)"
        />
        <circle cx="0" cy="0" r="1.1" fill="url(#astar-gold)" />
      </g>
    </svg>
  );
}
