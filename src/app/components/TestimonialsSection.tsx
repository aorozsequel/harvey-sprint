// Desktop: 198px "Testimonials" title centered with 4 tilted cards scattered around it (absolutely positioned).
// Mobile: title + horizontally scrollable strip of tilted cards.

// Desktop logo images (refreshed from Figma)
const imgLogoMarko = 'https://www.figma.com/api/mcp/asset/d0c280cc-32ae-4c73-ac7f-416e705ce5ec';
const imgLogoLukas = 'https://www.figma.com/api/mcp/asset/908ad958-ef29-40c2-9cf3-b73a5b52a677';
const imgLogoSarah = 'https://www.figma.com/api/mcp/asset/d2a4c921-6aa5-4682-a707-e37ba6a1373c';
const imgLogoSofia = 'https://www.figma.com/api/mcp/asset/d9111220-aebf-48d1-9e35-2980f6db0968';

// Mobile logo images (refreshed from Figma node 1:441)
const imgLogoMarkoMobile = 'https://www.figma.com/api/mcp/asset/f71c4ff3-f78f-4120-9aca-c6f61b8bfac5';
const imgLogoSofiaMobile = 'https://www.figma.com/api/mcp/asset/4b37a5b1-e374-4050-83b4-ea6d9a3adfa5';

type Testimonial = {
  name: string;
  quote: string;
  logo: string;
  rotation: number;
  left: string;   // % of 1440px frame — left edge of rotated bounding box
  top: number;    // px — top edge of rotated bounding box
  wrapperW: number; // px — bounding-box width of rotated card
  wrapperH: number; // px — bounding-box height of rotated card
};

const testimonials: Testimonial[] = [
  {
    name: 'Marko Stojković',
    quote:
      'A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.',
    logo: imgLogoMarko,
    rotation: -6.85,
    left: '7.08%',
    top: 142,
    wrapperW: 380.876,
    wrapperH: 295.234,
  },
  {
    name: 'Lukas Weber',
    quote:
      'Professional, precise, and incredibly fast at handling complex product visualizations and templates.',
    logo: imgLogoLukas,
    rotation: 2.9,
    left: '46.94%',
    top: 272,
    wrapperW: 361.958,
    wrapperH: 203.867,
  },
  {
    name: 'Sarah Jenkins',
    quote:
      "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    logo: imgLogoSarah,
    rotation: 2.23,
    left: '21.18%',
    top: 553,
    wrapperW: 363.132,
    wrapperH: 280.316,
  },
  {
    name: 'Sofia Martínez',
    quote:
      'An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.',
    logo: imgLogoSofia,
    rotation: -4.15,
    left: '68.54%',
    top: 546,
    wrapperW: 366.766,
    wrapperH: 228.169,
  },
];

function Card({ name, quote, logo }: { name: string; quote: string; logo: string }) {
  return (
    <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 w-[353px]">
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="w-auto object-contain object-left"
        style={{ maxHeight: '38px', maxWidth: '145px' }}
      />
      <p className="text-[18px] text-[#1f1f1f] tracking-[-0.72px] leading-[1.3]">{quote}</p>
      <p className="font-black text-[16px] text-black uppercase tracking-[-0.64px] leading-[1.1]">
        {name}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section>

      {/* ── Desktop ── */}
      <div className="hidden md:block relative min-h-[900px] overflow-hidden">

        {/* Large title — behind cards */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <h2
            className="font-medium capitalize text-center text-black leading-[1.1]"
            style={{ fontSize: '198px', letterSpacing: '-13.86px' }}
          >
            Testimonials
          </h2>
        </div>

        {/*
          Each card uses Figma's exact structure:
          outer div = rotated bounding box (positioned at Figma left/top, sized to wrapper dims)
          inner div = rotation applied, flex-centered inside the wrapper
        */}
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="absolute z-10 flex items-center justify-center"
            style={{
              left: t.left,
              top: `${t.top}px`,
              width: `${t.wrapperW}px`,
              height: `${t.wrapperH}px`,
            }}
          >
            <div className="flex-none" style={{ transform: `rotate(${t.rotation}deg)` }}>
              <Card name={t.name} quote={t.quote} logo={t.logo} />
            </div>
          </div>
        ))}

      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">

        <h2
          className="font-medium capitalize text-center text-black"
          style={{ fontSize: '64px', letterSpacing: '-4.48px', lineHeight: 0.8 }}
        >
          Testimonials
        </h2>

        {/*
          Figma shows 2 cards (Marko + Sofia) in a horizontal scroll strip.
          Wrapper approach matches desktop: outer div is the rotated bounding box,
          inner div carries the rotation.
        */}
        <div className="-mx-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex px-4 gap-3">

            {/* Marko — wrapper 277×316px, card 260px, -3.5° */}
            <div className="flex-none flex items-center justify-center" style={{ width: '277px', height: '316px' }}>
              <div style={{ transform: 'rotate(-3.5deg)' }}>
                <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 w-[260px]">
                  <img src={imgLogoMarkoMobile} alt="" aria-hidden="true"
                    className="w-auto object-contain object-left"
                    style={{ maxHeight: '19px', maxWidth: '143px' }} />
                  <p className="text-[18px] text-[#1f1f1f] tracking-[-0.72px] leading-[1.3]">{testimonials[0].quote}</p>
                  <p className="font-black text-[16px] text-black uppercase tracking-[-0.64px] leading-[1.1]">{testimonials[0].name}</p>
                </div>
              </div>
            </div>

            {/* Sofia — wrapper 268×264px, card 260px, 2° */}
            <div className="flex-none flex items-center justify-center" style={{ width: '268px', height: '264px' }}>
              <div style={{ transform: 'rotate(2deg)' }}>
                <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 w-[260px]">
                  {/* Sofia's logo has a subtle tilt per Figma */}
                  <div className="flex items-center justify-center" style={{ width: '83px', height: '42px' }}>
                    <div style={{ transform: 'rotate(-4deg)' }}>
                      <img src={imgLogoSofiaMobile} alt="" aria-hidden="true"
                        className="block object-contain"
                        style={{ width: '81px', height: '36px' }} />
                    </div>
                  </div>
                  <p className="text-[18px] text-[#1f1f1f] tracking-[-0.72px] leading-[1.3]">{testimonials[3].quote}</p>
                  <p className="font-black text-[16px] text-black uppercase tracking-[-0.64px] leading-[1.1]">{testimonials[3].name}</p>
                </div>
              </div>
            </div>

            {/* Trailing spacer */}
            <div className="flex-none w-4" />
          </div>
        </div>

      </div>

    </section>
  );
}
