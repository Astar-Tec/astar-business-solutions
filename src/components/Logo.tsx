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

      {/* Path edges of the "A" — yellow/gold to match the star */}
      <g
        stroke="url(#astar-gold)"
        strokeWidth="3.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      >
        {/* Left edge: foot node → apex node */}
        <line x1="13" y1="48" x2="26" y2="20" />
        {/* Right edge: apex node → foot node */}
        <line x1="26" y1="20" x2="39" y2="48" />
      </g>

      {/* Crossbar — heuristic line. Solid bright yellow + thicker so it
          stays readable on the dark seal at small sizes. */}
      <line
        x1="18"
        y1="36"
        x2="34"
        y2="36"
        stroke="#FCD34D"
        strokeWidth="4"
        strokeLinecap="square"
      />

      {/* Graph nodes — small precise squares at the two feet */}
      <g fill="url(#astar-gold)">
        <rect x="10.5" y="45.5" width="5" height="5" />
        <rect x="36.5" y="45.5" width="5" height="5" />
      </g>

      {/* The A* star — placed as a SUPERSCRIPT/POWER, top-right of the A.
          Same horizontal level as the apex of the A, mathematical exponent style. */}
      <g transform="translate(46 20)">
        {/* Soft glow halo behind the star */}
        <circle cx="0" cy="0" r="9" fill="url(#astar-glow)" />
        {/* Outer halo ring */}
        <circle
          cx="0"
          cy="0"
          r="7.5"
          fill="none"
          stroke="url(#astar-gold)"
          strokeWidth="0.6"
          opacity="0.7"
        />
        {/* The 4-point star — sharp, mathematical exponent */}
        <path
          d="M0 -8.5 L1.8 -1.8 L8.5 0 L1.8 1.8 L0 8.5 L-1.8 1.8 L-8.5 0 L-1.8 -1.8 Z"
          fill="url(#astar-gold)"
          stroke="#92400E"
          strokeWidth="0.3"
          strokeLinejoin="miter"
        />
        {/* Center node dot */}
        <circle cx="0" cy="0" r="1.2" className="fill-foreground" />
      </g>
    </svg>
  );
}
