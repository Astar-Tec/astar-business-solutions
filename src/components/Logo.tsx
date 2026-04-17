import { Link } from "@tanstack/react-router";
import skyImage from "@/assets/logo-sky.jpg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-3 group ${className}`}
      aria-label="Astar Technologies — Home"
    >
      <AstarMark className="h-10 w-10 transition-transform duration-300 group-hover:scale-[1.04]" />
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
 * Astar mark — 3D extruded "A" + 7-point gold star inside a real-cloud seal.
 *
 * Layers (back → front):
 *  1. Photo cloud sky (clipped to circle)
 *  2. Soft warm halo behind hero star
 *  3. 3D extruded "A" — front face + side/depth faces for true dimensionality
 *  4. 7-point gold star with light/shadow facets
 *  5. Outer hairline ring
 */
export function AstarMark({ className = "" }: { className?: string }) {
  // 7-point star geometry, centered at origin.
  // Outer radius = 8, inner radius = 3.4. 14 alternating points starting at top.
  const star7 = (() => {
    const points: string[] = [];
    const N = 7;
    const outer = 8;
    const inner = 3.4;
    for (let i = 0; i < N * 2; i++) {
      const r = i % 2 === 0 ? outer : inner;
      const angle = (Math.PI / N) * i - Math.PI / 2; // start at top
      const x = r * Math.cos(angle);
      const y = r * Math.sin(angle);
      points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return points.join(" ");
  })();

  // Outer-point indices for shadow facets (every other point starting at 0).
  const shadowFacets = (() => {
    const N = 7;
    const outer = 8;
    const inner = 3.4;
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i < N * 2; i++) {
      const r = i % 2 === 0 ? outer : inner;
      const angle = (Math.PI / N) * i - Math.PI / 2;
      pts.push({ x: r * Math.cos(angle), y: r * Math.sin(angle) });
    }
    // For each outer point, draw a triangle from center → outer point → next inner point (right side = shadow)
    const facets: string[] = [];
    for (let i = 0; i < N * 2; i += 2) {
      const outerPt = pts[i];
      const nextInner = pts[(i + 1) % pts.length];
      facets.push(`0,0 ${outerPt.x.toFixed(2)},${outerPt.y.toFixed(2)} ${nextInner.x.toFixed(2)},${nextInner.y.toFixed(2)}`);
    }
    return facets;
  })();

  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Astar Technologies"
    >
      <defs>
        {/* Gold palette */}
        <linearGradient id="gold-light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#F5B400" />
        </linearGradient>
        <linearGradient id="gold-dark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        {/* Hero star halo */}
        <radialGradient id="hero-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#F5B400" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#F5B400" stopOpacity="0" />
        </radialGradient>

        {/* Crossbar gradient */}
        <linearGradient id="crossbar-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Clip everything to the seal */}
        <clipPath id="seal-clip">
          <circle cx="32" cy="32" r="31" />
        </clipPath>

        {/* Pattern: photo sky background */}
        <pattern
          id="sky-pattern"
          patternUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="64"
          height="64"
        >
          <image
            href={skyImage}
            x="0"
            y="0"
            width="64"
            height="64"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
      </defs>

      {/* 1. Photo sky background (clipped to seal) */}
      <circle cx="32" cy="32" r="31" fill="url(#sky-pattern)" />

      <g clipPath="url(#seal-clip)">
        {/* 2. Hero star halo bloom (behind everything else gold) */}
        <circle cx="48" cy="18" r="13" fill="url(#hero-halo)" />

        {/* 3. 3D EXTRUDED "A" — drawn as proper depth.
            Strategy: draw a darker "back" copy offset down-right (the extruded
            depth), then draw the bright front face on top. This gives a true
            isometric 3D feel rather than just a beveled outline. */}

        {/* === BACK / SHADOW LAYER (offset 1.4 down, 1.4 right) === */}
        <g transform="translate(1.4 1.4)" fill="url(#gold-dark)">
          {/* Left stroke of A */}
          <polygon points="13,48 25.5,20 28,20 16.5,48" />
          {/* Right stroke of A */}
          <polygon points="36,20 38.5,20 51,48 48,48" />
          {/* Crossbar */}
          <rect x="18" y="35" width="16" height="3.5" />
          {/* Foot blocks */}
          <rect x="10" y="46" width="5" height="5" />
          <rect x="49" y="46" width="5" height="5" />
        </g>

        {/* === SIDE FACES (connecting front to back) === */}
        <g fill="url(#gold-dark)">
          {/* Right side of left stroke */}
          <polygon points="14.5,48 25.5,20 26.9,21.4 15.9,49.4" />
          {/* Bottom of crossbar */}
          <polygon points="18,38 34,38 35.4,39.4 19.4,39.4" />
          {/* Right side of right stroke */}
          <polygon points="38.5,20 51,48 52.4,49.4 39.9,21.4" />
          {/* Foot side faces */}
          <polygon points="15,46 15,51 16.4,52.4 16.4,47.4" />
          <polygon points="15,51 10,51 11.4,52.4 16.4,52.4" />
          <polygon points="54,46 54,51 55.4,52.4 55.4,47.4" />
          <polygon points="54,51 49,51 50.4,52.4 55.4,52.4" />
        </g>

        {/* === FRONT FACE (bright gold) === */}
        {/* Left stroke */}
        <polygon points="13,48 25.5,20 27,20 14.5,48" fill="url(#gold-light)" />
        {/* Right stroke */}
        <polygon points="37,20 38.5,20 51,48 49.5,48" fill="url(#gold-light)" />
        {/* Crossbar */}
        <rect x="18" y="35" width="16" height="3" fill="url(#crossbar-grad)" />
        {/* Foot blocks (front face) */}
        <rect x="10" y="46" width="5" height="5" fill="url(#gold-light)" />
        <rect x="49" y="46" width="5" height="5" fill="url(#gold-light)" />

        {/* Crisp dark outline on front strokes for definition */}
        <g
          fill="none"
          stroke="#78350F"
          strokeWidth="0.35"
          strokeLinejoin="miter"
        >
          <polygon points="13,48 25.5,20 27,20 14.5,48" />
          <polygon points="37,20 38.5,20 51,48 49.5,48" />
          <rect x="18" y="35" width="16" height="3" />
          <rect x="10" y="46" width="5" height="5" />
          <rect x="49" y="46" width="5" height="5" />
        </g>

        {/* 4. 7-POINT NAUTICAL STAR — center (48,18), outer r=8, inner r=3.4 */}
        <g transform="translate(48 18)">
          {/* Base star fill — light gold */}
          <polygon points={star7} fill="url(#gold-light)" />
          {/* Shadow facets — every other half-point */}
          <g fill="url(#gold-dark)" opacity="0.92">
            {shadowFacets.map((pts, i) => (
              <polygon key={i} points={pts} />
            ))}
          </g>
          {/* Crisp outline */}
          <polygon
            points={star7}
            fill="none"
            stroke="#78350F"
            strokeWidth="0.3"
            strokeLinejoin="miter"
          />
          {/* Tiny center highlight */}
          <circle r="0.6" fill="#FDE68A" />
        </g>
      </g>

      {/* Outer hairline ring */}
      <circle
        cx="32"
        cy="32"
        r="31"
        fill="none"
        stroke="#FCD34D"
        strokeOpacity="0.35"
        strokeWidth="0.5"
      />
    </svg>
  );
}
