import { Link } from "@tanstack/react-router";

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
 * Astar mark — 3D nautical star + beveled "A" inside a nebula seal.
 *
 * Layers (back → front):
 *  1. Dark seal base
 *  2. Brown nebula clouds (radial gradients)
 *  3. Scattered tiny stars (white dots, varied opacity)
 *  4. Warm halo bloom around hero star
 *  5. Beveled 3D "A" (light top-face + darker side-face per stroke)
 *  6. 3D nautical 5-point star (alternating light/shadow facets)
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

        {/* Nebula clouds — warm browns */}
        <radialGradient id="nebula-1" cx="65%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#7C4A21" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#3D2817" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1A0F08" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula-2" cx="25%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#5C3A1F" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#1A0F08" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="seal-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1F1410" />
          <stop offset="100%" stopColor="#0A0604" />
        </radialGradient>

        {/* Hero star halo */}
        <radialGradient id="hero-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#F5B400" stopOpacity="0.5" />
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
      </defs>

      {/* 1. Seal base */}
      <circle cx="32" cy="32" r="31" fill="url(#seal-bg)" />

      <g clipPath="url(#seal-clip)">
        {/* 2. Nebula brown clouds */}
        <rect x="0" y="0" width="64" height="64" fill="url(#nebula-1)" />
        <rect x="0" y="0" width="64" height="64" fill="url(#nebula-2)" />

        {/* 3. Scattered tiny stars */}
        <g fill="#FFFFFF">
          <circle cx="8" cy="12" r="0.5" opacity="0.9" />
          <circle cx="14" cy="6" r="0.35" opacity="0.6" />
          <circle cx="22" cy="14" r="0.4" opacity="0.7" />
          <circle cx="30" cy="6" r="0.3" opacity="0.5" />
          <circle cx="54" cy="10" r="0.45" opacity="0.85" />
          <circle cx="58" cy="22" r="0.3" opacity="0.55" />
          <circle cx="6" cy="30" r="0.4" opacity="0.7" />
          <circle cx="10" cy="44" r="0.5" opacity="0.9" />
          <circle cx="4" cy="52" r="0.3" opacity="0.5" />
          <circle cx="20" cy="56" r="0.4" opacity="0.65" />
          <circle cx="34" cy="58" r="0.35" opacity="0.6" />
          <circle cx="48" cy="54" r="0.45" opacity="0.8" />
          <circle cx="56" cy="44" r="0.4" opacity="0.7" />
          <circle cx="60" cy="34" r="0.3" opacity="0.55" />
          <circle cx="40" cy="10" r="0.35" opacity="0.6" />
          <circle cx="46" cy="18" r="0.3" opacity="0.5" />
        </g>

        {/* 5. Beveled 3D "A" — each stroke = light top face + dark shadow face */}
        {/* Left edge: shadow polygon (offset down-right) */}
        <polygon
          points="14.5,49 27,21 28.5,22 16,50"
          fill="url(#gold-dark)"
        />
        {/* Left edge: light face */}
        <polygon
          points="13,48 25.5,20 27,21 14.5,49"
          fill="url(#gold-light)"
        />

        {/* Right edge: shadow */}
        <polygon
          points="39,21 40.5,22 53,50 51.5,49"
          fill="url(#gold-dark)"
        />
        {/* Right edge: light face */}
        <polygon
          points="37.5,20 39,21 51.5,49 50,48"
          fill="url(#gold-light)"
        />

        {/* Crossbar with bevel — shadow strip below */}
        <rect x="18" y="38" width="16" height="1.5" fill="url(#gold-dark)" />
        {/* Crossbar light face */}
        <rect x="18" y="35" width="16" height="3" fill="url(#crossbar-grad)" />

        {/* Foot nodes — 3D cubes (light top + dark side) */}
        <g>
          {/* Left foot */}
          <rect x="10" y="46" width="5" height="5" fill="url(#gold-dark)" />
          <rect x="10" y="46" width="5" height="3.5" fill="url(#gold-light)" />
          {/* Right foot */}
          <rect x="49" y="46" width="5" height="5" fill="url(#gold-dark)" />
          <rect x="49" y="46" width="5" height="3.5" fill="url(#gold-light)" />
        </g>

        {/* 4. Hero star halo bloom (behind star) */}
        <circle cx="48" cy="18" r="13" fill="url(#hero-halo)" />

        {/* 6. 3D nautical 5-point star — alternating light/shadow facets.
            Center at (48,18), outer radius 8, inner radius 3.2.
            Outer points (top, top-right, bottom-right, bottom-left, top-left):
              P0 = (48, 10)        top
              P1 = (52.61, 20.94)  bottom-right
              P2 = (40.39, 13.05)  top-left
              P3 = (55.61, 13.05)  top-right
              P4 = (43.39, 20.94)  bottom-left
            Inner points between them:
              I0 top-right inner (between P0,P3): rotate 36° from top
                = (48 + 3.2*sin36, 18 - 3.2*cos36) = (49.88, 15.41)
              I1 right inner    (between P3,P1): rotate 72°
                = (48 + 3.2*sin72, 18 - 3.2*cos72) = (51.04, 17.01)
              I2 bottom-right inner (between P1, bottom): 108°
                = (48 + 3.2*sin108, 18 - 3.2*cos108) = (51.04, 18.99)... wait reorder
            Using standard 10-point star polygon (alternating outer/inner) is
            simpler — we'll draw fill + facet shadows on top. */}
        <g transform="translate(48 18)">
          {/* Base star fill — light gold */}
          <polygon
            points="0,-8 1.88,-2.59 7.61,-2.47 3.05,1.0 4.7,6.47 0,3.2 -4.7,6.47 -3.05,1.0 -7.61,-2.47 -1.88,-2.59"
            fill="url(#gold-light)"
          />
          {/* Shadow facets — every other half-point gets a dark triangle from center */}
          <g fill="url(#gold-dark)" opacity="0.95">
            {/* top point right-half */}
            <polygon points="0,0 0,-8 1.88,-2.59" />
            {/* top-right point lower-half */}
            <polygon points="0,0 7.61,-2.47 3.05,1.0" />
            {/* bottom-right point left-half */}
            <polygon points="0,0 4.7,6.47 0,3.2" />
            {/* bottom-left point upper-half */}
            <polygon points="0,0 -3.05,1.0 -7.61,-2.47" />
            {/* top-left point lower-half */}
            <polygon points="0,0 -1.88,-2.59 0,-8" />
          </g>
          {/* Crisp outline for definition */}
          <polygon
            points="0,-8 1.88,-2.59 7.61,-2.47 3.05,1.0 4.7,6.47 0,3.2 -4.7,6.47 -3.05,1.0 -7.61,-2.47 -1.88,-2.59"
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
        strokeOpacity="0.25"
        strokeWidth="0.5"
      />
    </svg>
  );
}
