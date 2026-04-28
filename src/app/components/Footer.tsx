// Footer
// Desktop: 3-col CTA/social row + horizontal rule, then clipped "H.Studio" big type at bottom.
// Mobile: stacked CTA + social + rule, then legal links + "H.Studio" below.

export default function Footer() {
  return (
    <footer className="bg-black">

      {/* ── Desktop ── */}
      <div className="hidden md:flex flex-col gap-[120px] pt-[48px] px-8">

        {/* Top row: CTA | Social centre | Social right */}
        <div className="flex flex-col gap-[48px]">
          <div className="flex items-start justify-between">

            {/* CTA block */}
            <div className="flex flex-col gap-3 w-[298px]">
              <p className="font-light italic text-[24px] text-white uppercase tracking-[-0.96px] leading-[1.1]">
                Have a{' '}
                <span className="font-black not-italic">project</span>
                {' '}in mind?
              </p>
              <a
                href="#contact"
                className="border border-white text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px] w-fit hover:bg-white hover:text-black transition-colors"
              >
                Let&apos;s talk
              </a>
            </div>

            {/* Social — centre */}
            <div className="text-center text-[18px] text-white uppercase tracking-[-0.72px] w-[298px]">
              <p className="leading-[1.1]">Facebook</p>
              <p className="leading-[1.1]">Instagram</p>
            </div>

            {/* Social — right */}
            <div className="text-right text-[18px] text-white uppercase tracking-[-0.72px] w-[298px]">
              <p className="leading-[1.1]">X.com</p>
              <p className="leading-[1.1]">LinkedIn</p>
            </div>

          </div>

          {/* Divider */}
          <hr className="border-0 border-t border-white/30 w-full" />
        </div>

        {/* Bottom row: H.Studio + legal */}
        <div className="flex items-end justify-between">

          {/* H.Studio — clipped container */}
          <div className="relative h-[219px] w-[1093px] overflow-hidden shrink-0">

            {/* Vertical "[ Coded By Claude ]" label */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex h-[160px] w-[15px] items-center justify-center">
              <p className="-rotate-90 font-mono text-[14px] text-white uppercase whitespace-nowrap leading-[1.1]">
                [ Coded By Claude ]
              </p>
            </div>

            {/* Big type — vertically centred with 6.5px downward offset, clipped */}
            <h2
              className="absolute left-[5px] top-[calc(50%+6.5px)] -translate-y-1/2 font-semibold capitalize text-white leading-[0.8] whitespace-nowrap"
              style={{ fontSize: '290px', letterSpacing: '-17.4px' }}
            >
              H.Studio
            </h2>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-[34px] pb-8 text-[12px] text-white uppercase tracking-[-0.48px] text-center whitespace-nowrap shrink-0">
            <a href="#" className="underline">Licences</a>
            <a href="#" className="underline">Privacy Policy</a>
          </div>

        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-12 pt-[48px] px-4">

        {/* Top block */}
        <div className="flex flex-col gap-6">

          {/* CTA */}
          <div className="flex flex-col gap-3 w-[298px]">
            <p className="font-light italic text-[24px] text-white uppercase tracking-[-0.96px] leading-[1.1]">
              Have a{' '}
              <span className="font-black not-italic">project</span>
              {' '}in mind?
            </p>
            <a
              href="#contact"
              className="border border-white text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px] w-fit"
            >
              Let&apos;s talk
            </a>
          </div>

          {/* Social links stacked */}
          {['Facebook', 'Instagram', 'X.com', 'LinkedIn'].map((s) => (
            <p key={s} className="text-[18px] text-white uppercase tracking-[-0.72px] leading-[1.1]">
              {s}
            </p>
          ))}

          {/* Divider */}
          <hr className="border-0 border-t border-white/30 w-full" />
        </div>

        {/* Bottom block */}
        <div className="flex flex-col gap-3 overflow-hidden">

          {/* Legal */}
          <div className="flex items-center gap-[34px] justify-center text-[12px] text-white uppercase tracking-[-0.48px] whitespace-nowrap">
            <a href="#" className="underline">Licences</a>
            <a href="#" className="underline">Privacy Policy</a>
          </div>

          {/* [ Coded By Claude ] */}
          <p className="font-mono text-[10px] text-white uppercase leading-[1.1]">
            [ Coded By Claude ]
          </p>

          {/* H.Studio — oversized, clips at bottom */}
          <h2
            className="font-semibold capitalize text-white leading-[0.8] whitespace-nowrap"
            style={{ fontSize: '91.425px', letterSpacing: '-5.4855px' }}
          >
            H.Studio
          </h2>

        </div>
      </div>

    </footer>
  );
}
