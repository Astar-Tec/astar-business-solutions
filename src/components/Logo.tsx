import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-3 group ${className}`}
      aria-label="Astar Technologies — Home"
    >
      <AstarMark className="h-9 w-9 transition-transform duration-300 group-hover:scale-[1.04]" />
      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-[-0.01em] text-foreground">
          ASTAR<span className="text-muted-foreground font-light"> </span>
          <span className="font-light text-muted-foreground">TECHNOLOGIES</span>
        </span>
        <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.28em] text-muted-foreground/80">
          Pty Ltd · Engineered Systems
        </span>
      </div>
    </Link>
  );
}

/**
 * Astar mark — algorithmic monogram.
 *
 * Concept: The "A" is constructed as a pathfinding graph.
 * - Three nodes form the vertices of the A (two feet + apex)
 * - Edges connect them like a routed path
 * - A precision 4-point star sits AT the apex node — not decorative,
 *   it IS the destination/goal node of the A* search
 * - A faint crossbar suggests the algorithmic heuristic line
 *
 * Rendered monochrome (deep charcoal) with a single electric accent
 * on the star/goal node. Works in both light and dark modes.
 */
export function AstarMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Astar Technologies"
    >
      {/* Gradient + glow definitions */}
      <defs>
        <linearGradient id="astar-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="55%" stopColor="#F5B400" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <radialGradient id="astar-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Container — circular seal */}
      <circle cx="32" cy="32" r="31" className="fill-foreground" />

      {/* Inner hairline ring — engineered/CAD feel */}
      <circle
        cx="32"
        cy="32"
        r="27"
        fill="none"
        className="stroke-background/15"
        strokeWidth="0.5"
      />

      {/* Path edges of the "A" — drawn as routed graph edges */}
      <g
        className="stroke-background"
        strokeWidth="3.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      >
        {/* Left edge: foot node → apex node */}
        <line x1="18" y1="48" x2="32" y2="18" />
        {/* Right edge: apex node → foot node */}
        <line x1="32" y1="18" x2="46" y2="48" />
        {/* Crossbar — heuristic line */}
        <line x1="23.5" y1="36" x2="40.5" y2="36" />
      </g>

      {/* Graph nodes — small precise squares at the two feet */}
      <g className="fill-background">
        <rect x="15.5" y="45.5" width="5" height="5" />
        <rect x="43.5" y="45.5" width="5" height="5" />
      </g>

      {/* Apex / goal node — the A* star, prominent and gold */}
      <g transform="translate(32 18)">
        {/* Soft glow halo behind the star */}
        <circle cx="0" cy="0" r="11" fill="url(#astar-glow)" />
        {/* Outer halo ring */}
        <circle
          cx="0"
          cy="0"
          r="9.5"
          fill="none"
          stroke="url(#astar-gold)"
          strokeWidth="0.7"
          opacity="0.7"
        />
        {/* The 4-point star — larger, sharper, unmistakable */}
        <path
          d="M0 -10.5 L2.2 -2.2 L10.5 0 L2.2 2.2 L0 10.5 L-2.2 2.2 L-10.5 0 L-2.2 -2.2 Z"
          fill="url(#astar-gold)"
          stroke="#92400E"
          strokeWidth="0.3"
          strokeLinejoin="miter"
        />
        {/* Center node dot */}
        <circle cx="0" cy="0" r="1.4" className="fill-foreground" />
      </g>
    </svg>
  );
}
