// Desktop: vertical rotated headline on the left, 3 staggered news cards with dividers on the right.
// Mobile: inline headline + horizontal snap-scroll strip of 3 cards.

const imgNews1       = 'https://www.figma.com/api/mcp/asset/de784f30-c867-4d0f-aa1b-a457efb25102';
const imgNews2       = 'https://www.figma.com/api/mcp/asset/a0a6bc53-235f-49dc-98e4-cb90a4631acf';
const imgNews3       = 'https://www.figma.com/api/mcp/asset/97245a67-f4c6-4e81-bb79-96f38972df0e';
const imgArrow       = 'https://www.figma.com/api/mcp/asset/05edb86e-0e4a-4fa4-a477-60a72f0a3474';

const imgNews1Mobile = 'https://www.figma.com/api/mcp/asset/e8cf4db8-1916-468c-ac7b-eb1b23184e9d';
const imgNews2Mobile = 'https://www.figma.com/api/mcp/asset/64715c20-9146-4a73-b6ca-5763f0bbd0ad';
const imgNews3Mobile = 'https://www.figma.com/api/mcp/asset/9a613568-fe55-43b4-9c30-fd71b37d19d8';
const imgArrowMobile = 'https://www.figma.com/api/mcp/asset/eea1b209-ebe2-4139-b571-e38106e20292';

const caption =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

function ReadMore({ arrow }: { arrow: string }) {
  return (
    <a
      href="#"
      className="flex items-center gap-[10px] border-b border-black pb-[4px] w-fit"
    >
      <span className="font-medium text-[14px] text-black tracking-[-0.56px] leading-none">
        Read more
      </span>
      <div className="flex items-center justify-center size-[18px]">
        <div className="-rotate-90">
          <img src={arrow} alt="" aria-hidden="true" className="block size-[18px]" />
        </div>
      </div>
    </a>
  );
}

export default function NewsSection() {
  return (
    <section className="bg-[#f3f3f3]">

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-end justify-between px-8 py-[120px] overflow-hidden">

        {/* Vertical label — rotated -90° */}
        <div className="flex h-[706px] w-[110px] items-center justify-center shrink-0">
          <div className="-rotate-90 flex-none">
            <div className="flex flex-col font-light text-[64px] text-black uppercase tracking-[-0.08em] whitespace-nowrap">
              <p className="leading-[0.86]">Keep up with my latest</p>
              <p className="leading-[0.86]">news &amp; achievements</p>
            </div>
          </div>
        </div>

        {/* 3-column news grid */}
        <div className="flex gap-[31px] items-start w-[1020px]">

          {/* Card 1 — full height, photo at top */}
          <div className="w-[353px] h-[581px] flex flex-col gap-4">
            <div className="relative w-full h-[469px] overflow-hidden shrink-0">
              <img src={imgNews1} alt="" aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            </div>
            <p className="flex-1 text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]">{caption}</p>
            <ReadMore arrow={imgArrow} />
          </div>

          {/* Vertical divider */}
          <div className="self-stretch shrink-0 w-px bg-[#ddd]" />

          {/* Card 2 — offset 120px down, natural height */}
          <div className="w-[353px] flex flex-col gap-4 pt-[120px]">
            <div className="relative w-full h-[469px] overflow-hidden shrink-0">
              <img src={imgNews2} alt="" aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            </div>
            <p className="text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]">{caption}</p>
            <ReadMore arrow={imgArrow} />
          </div>

          {/* Vertical divider */}
          <div className="self-stretch shrink-0 w-px bg-[#ddd]" />

          {/* Card 3 — full height, photo at top */}
          <div className="w-[353px] h-[581px] flex flex-col gap-4">
            <div className="relative w-full h-[469px] overflow-hidden shrink-0">
              <img src={imgNews3} alt="" aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            </div>
            <p className="flex-1 text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]">{caption}</p>
            <ReadMore arrow={imgArrow} />
          </div>

        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">

        {/* Headline */}
        <h2 className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.86]">
          Keep up with my latest news &amp; achievements
        </h2>

        {/* Horizontal scroll strip — bleeds to screen edges, padded content */}
        <div className="-mx-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 px-4">

            {[
              { img: imgNews1Mobile, arrow: imgArrowMobile },
              { img: imgNews2Mobile, arrow: imgArrowMobile },
              { img: imgNews3Mobile, arrow: imgArrowMobile },
            ].map((item, i) => (
              <div key={i} className="flex-none w-[300px] flex flex-col gap-4">
                <div className="relative w-full h-[398px] overflow-hidden">
                  <img src={item.img} alt="" aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                </div>
                <p className="text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]">{caption}</p>
                <ReadMore arrow={item.arrow} />
              </div>
            ))}

            {/* Trailing spacer */}
            <div className="flex-none w-4" />
          </div>
        </div>

      </div>

    </section>
  );
}
