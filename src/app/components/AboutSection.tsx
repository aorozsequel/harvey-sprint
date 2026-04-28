const aboutImage =
  'https://www.figma.com/api/mcp/asset/9531b0ed-9842-4111-9d54-e22083da0bc5';

type CornerPos = 'tl' | 'tr' | 'bl' | 'br';

function CornerBracket({ position }: { position: CornerPos }) {
  const rotation = { tl: 0, tr: 90, bl: -90, br: 180 }[position];
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{ transform: `rotate(${rotation}deg)`, flexShrink: 0 }}
    >
      <path d="M1 15 L1 1 L15 1" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const bodyText =
  'Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.';

export default function AboutSection() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-20">

      {/* ── Mobile-only header ── */}
      <div className="flex flex-col gap-5 mb-6 md:hidden">
        <span className="font-mono text-[14px] text-[#1f1f1f]">002</span>
        <span className="font-mono text-[14px] text-[#1f1f1f] uppercase">[ About ]</span>
      </div>

      {/* ── Main row ── */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">

        {/* Left: [ About ] label — desktop only */}
        <span className="hidden md:block font-mono text-[14px] text-[#1f1f1f] uppercase shrink-0">
          [ About ]
        </span>

        {/* Right: text + image */}
        <div className="flex flex-col md:flex-row md:gap-8 md:items-end md:w-[71%]">

          {/* Text block with corner brackets */}
          <div className="flex gap-3 items-stretch flex-1 mb-8 md:mb-0">
            {/* Left brackets */}
            <div className="flex flex-col justify-between shrink-0">
              <CornerBracket position="tl" />
              <CornerBracket position="bl" />
            </div>

            {/* Body text */}
            <p className="flex-1 py-3 text-[14px] text-[#1f1f1f] tracking-[-0.04em] leading-[1.3]">
              {bodyText}
            </p>

            {/* Right brackets */}
            <div className="flex flex-col justify-between shrink-0">
              <CornerBracket position="tr" />
              <CornerBracket position="br" />
            </div>
          </div>

          {/* Image + 002 counter */}
          <div className="flex gap-6 items-start shrink-0">
            <span className="hidden md:block font-mono text-[14px] text-[#1f1f1f]">002</span>
            <div className="w-full md:w-[436px] aspect-[436/614] overflow-hidden rounded">
              <img
                src={aboutImage}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
