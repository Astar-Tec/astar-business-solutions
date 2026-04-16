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
      {/* Container — squared with a hairline radius for a system/seal feel */}
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        rx="8"
        className="fill-foreground"
      />

      {/* Inner hairline frame — engineered/CAD feel */}
      <rect
        x="5"
        y="5"
        width="54"
        height="54"
        rx="5"
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
        <line x1="16" y1="48" x2="32" y2="14" />
        {/* Right edge: apex node → foot node */}
        <line x1="32" y1="14" x2="48" y2="48" />
        {/* Crossbar — heuristic line */}
        <line x1="22.5" y1="35" x2="41.5" y2="35" />
      </g>

      {/* Graph nodes — small precise squares at the two feet */}
      <g className="fill-background">
        <rect x="13.5" y="45.5" width="5" height="5" />
        <rect x="45.5" y="45.5" width="5" height="5" />
      </g>

      {/* Apex / goal node — the A* star, integrated as the structural vertex.
          4-point compass star = directionality, pathfinding, the "goal". */}
      <g transform="translate(32 14)">
        {/* Subtle halo ring — signal/optimization */}
        <circle
          cx="0"
          cy="0"
          r="6.5"
          fill="none"
          className="stroke-[hsl(var(--accent-ring,45_90%_60%))]"
          stroke="hsl(45 92% 58%)"
          strokeWidth="0.6"
          opacity="0.55"
        />
        {/* The 4-point star — sharp, mathematical, not decorative */}
        <path
          d="M0 -7 L1.4 -1.4 L7 0 L1.4 1.4 L0 7 L-1.4 1.4 L-7 0 L-1.4 -1.4 Z"
          fill="hsl(45 92% 58%)"
        />
        {/* Center node dot */}
        <circle cx="0" cy="0" r="1.1" className="fill-foreground" />
      </g>
    </svg>
  );
}
