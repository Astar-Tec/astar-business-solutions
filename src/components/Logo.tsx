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
        <circle cx="44" cy="20" r="15" fill="url(#hero-halo)" />

        {/* 3. 3D EXTRUDED "A" — smaller, lower-left so the star is hero.
            Apex at (22, 30), feet at (12, 52) and (32, 52), crossbar mid-height.
            Strategy: back/shadow layer offset down-right + front face on top. */}

        {/* === BACK / SHADOW LAYER (offset 1.2 down, 1.2 right) === */}
        <g transform="translate(1.2 1.2)" fill="url(#gold-dark)">
          {/* Left stroke of A */}
          <polygon points="12,52 21.4,30 23,30 14,52" />
          {/* Right stroke of A */}
          <polygon points="21,30 22.6,30 32,52 30,52" />
          {/* Crossbar */}
          <rect x="15" y="42" width="14" height="2.6" />
          {/* Foot blocks */}
          <rect x="9.5" y="50" width="4" height="4" />
          <rect x="30.5" y="50" width="4" height="4" />
        </g>

        {/* === SIDE FACES (connecting front to back) === */}
        <g fill="url(#gold-dark)">
          {/* Right side of left stroke */}
          <polygon points="13.4,52 21.4,30 22.6,31.2 14.6,53.2" />
          {/* Bottom of crossbar */}
          <polygon points="15,44.6 29,44.6 30.2,45.8 16.2,45.8" />
          {/* Right side of right stroke */}
          <polygon points="22.6,30 32,52 33.2,53.2 23.8,31.2" />
          {/* Foot side faces */}
          <polygon points="13.5,50 13.5,54 14.7,55.2 14.7,51.2" />
          <polygon points="13.5,54 9.5,54 10.7,55.2 14.7,55.2" />
          <polygon points="34.5,50 34.5,54 35.7,55.2 35.7,51.2" />
          <polygon points="34.5,54 30.5,54 31.7,55.2 35.7,55.2" />
        </g>

        {/* === FRONT FACE (bright gold) === */}
        {/* Left stroke */}
        <polygon points="12,52 21.4,30 22.6,30 13.4,52" fill="url(#gold-light)" />
        {/* Right stroke */}
        <polygon points="21.4,30 22.6,30 32,52 30.6,52" fill="url(#gold-light)" />
        {/* Crossbar */}
        <rect x="15" y="42" width="14" height="2.6" fill="url(#crossbar-grad)" />
        {/* Foot blocks (front face) */}
        <rect x="9.5" y="50" width="4" height="4" fill="url(#gold-light)" />
        <rect x="30.5" y="50" width="4" height="4" fill="url(#gold-light)" />

        {/* Crisp dark outline on front strokes for definition */}
        <g
          fill="none"
          stroke="#78350F"
          strokeWidth="0.3"
          strokeLinejoin="miter"
        >
          <polygon points="12,52 21.4,30 22.6,30 13.4,52" />
          <polygon points="21.4,30 22.6,30 32,52 30.6,52" />
          <rect x="15" y="42" width="14" height="2.6" />
          <rect x="9.5" y="50" width="4" height="4" />
          <rect x="30.5" y="50" width="4" height="4" />
        </g>

        {/* 4. 7-POINT NAUTICAL STAR — center (44,20), outer r=11, inner r=4.7 */}
        <g transform="translate(44 20)">
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
