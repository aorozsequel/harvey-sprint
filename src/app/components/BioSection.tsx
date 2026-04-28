// "A creative director / Photographer / Born & raised on the south side of Chicago."
// Desktop: large staggered lines. Mobile: centered stack.

const textCls =
  'text-[clamp(32px,6.67vw,96px)] font-light text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap uppercase';

export default function BioSection() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-[120px]">

      {/* Label + rule */}
      <div className="flex flex-col gap-3 items-end mb-6">
        <span className="font-mono text-[14px] text-[#1f1f1f] uppercase">
          [ 8+ years in industry ]
        </span>
        <hr className="w-full border-0 border-t border-[#1f1f1f]" />
      </div>

      {/* Staggered bio lines */}
      <div className="flex flex-col gap-2 uppercase">

        {/* Mobile-only: 001 centered above line 1 */}
        <div className="flex justify-center md:hidden mb-1">
          <span className="font-mono text-[14px] text-[#1f1f1f]">001</span>
        </div>

        {/* Line 1: "A creative director   /" + desktop 001 */}
        <div className="flex items-start justify-center md:justify-start gap-3">
          <p className={textCls}>A creative director&nbsp;&nbsp;&nbsp;/</p>
          <span className="hidden md:block font-mono text-[14px] text-[#1f1f1f] leading-[1.1] shrink-0 mt-1">
            001
          </span>
        </div>

        {/* Line 2: PHOTOGRAPHER — centred both sides on desktop */}
        <div className="flex justify-center md:px-[15.5%]">
          <p className={textCls}>Photographer</p>
        </div>

        {/* Line 3: BORN & RAISED — pushed right on desktop */}
        <div className="flex justify-center md:justify-start md:pl-[44.3%]">
          <p className={textCls}>
            Born{' '}
            <span
              className="font-serif italic"
              style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}
            >
              &amp;
            </span>
            {' '}raised
          </p>
        </div>

        {/* Line 4: ON THE SOUTH SIDE — left edge */}
        <div className="flex justify-center md:justify-start">
          <p className={textCls}>on the south side</p>
        </div>

        {/* Line 5: OF CHICAGO. + [ creative freelancer ] label */}
        <div className="relative flex flex-col items-center md:items-start md:pl-[44%]">
          <p className={textCls}>of chicago.</p>

          {/* Desktop label — absolute far right of the row */}
          <span className="hidden md:block absolute right-0 top-6 font-mono text-[14px] text-[#1f1f1f] whitespace-nowrap">
            [ creative freelancer ]
          </span>

          {/* Mobile label — centered below */}
          <span className="md:hidden font-mono text-[14px] text-[#1f1f1f] mt-3">
            [ creative freelancer ]
          </span>
        </div>

      </div>
    </section>
  );
}
