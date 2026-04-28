const imgBrandDiscovery = 'https://www.figma.com/api/mcp/asset/8736d83e-1852-4fe7-9c5c-370f1681a26c';
const imgWebDesign      = 'https://www.figma.com/api/mcp/asset/6732550e-55fd-4e8e-9b3b-e2b8180003b6';
const imgMarketing      = 'https://www.figma.com/api/mcp/asset/7ee43e87-fc49-4c49-b013-5532f97e1f67';
const imgPhotography    = 'https://www.figma.com/api/mcp/asset/f4031078-1ed9-492d-ba74-5df36d2a1f8b';

const imgBrandDiscoveryMobile = 'https://www.figma.com/api/mcp/asset/248f0d8f-5f40-49df-b64e-687922ff1803';
const imgWebDesignMobile      = 'https://www.figma.com/api/mcp/asset/bbc1516c-ba86-4fe4-aadc-74c589dfc078';
const imgMarketingMobile      = 'https://www.figma.com/api/mcp/asset/13a04d84-a32d-4e45-8fa3-6a85b61bf308';
const imgPhotographyMobile    = 'https://www.figma.com/api/mcp/asset/487bfe75-cdbf-48d2-a0dc-59713f451f1c';

const services = [
  {
    num: '[ 1 ]',
    name: 'Brand Discovery',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    desktopImg: imgBrandDiscovery,
    mobileImg: imgBrandDiscoveryMobile,
  },
  {
    num: '[ 2 ]',
    name: 'Web Design & Dev',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    desktopImg: imgWebDesign,
    mobileImg: imgWebDesignMobile,
  },
  {
    num: '[ 3 ]',
    name: 'Marketing',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    desktopImg: imgMarketing,
    mobileImg: imgMarketingMobile,
  },
  {
    num: '[ 4 ]',
    name: 'Photography',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    desktopImg: imgPhotography,
    mobileImg: imgPhotographyMobile,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black px-4 md:px-8 py-12 md:py-20 flex flex-col gap-8 md:gap-12">

      {/* [ services ] label */}
      <p className="font-mono text-[14px] text-white uppercase leading-[1.1]">
        [ services ]
      </p>

      {/* [4]   DELIVERABLES */}
      <div
        className="flex items-center justify-between font-light text-white uppercase tracking-[-0.08em] leading-none whitespace-nowrap"
        style={{ fontSize: 'clamp(32px, 6.67vw, 96px)' }}
      >
        <span>[4]</span>
        <span>Deliverables</span>
      </div>

      {/* Service rows */}
      <div className="flex flex-col gap-12">
        {services.map((s) => (
          <div key={s.num} className="flex flex-col gap-[9px]">

            {/* Number label */}
            <p className="font-mono text-[14px] text-white uppercase leading-[1.1]">{s.num}</p>

            {/* Divider */}
            <hr className="border-0 border-t border-white w-full" />

            {/* Row: name left, desc+image right */}
            <div className="flex flex-col gap-4 pt-[9px] md:flex-row md:items-start md:justify-between">

              {/* Service name */}
              <p className="font-bold italic text-[36px] text-white uppercase tracking-[-1.44px] leading-[1.1] whitespace-nowrap">
                {s.name}
              </p>

              {/* Description + thumbnail */}
              <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:items-start">
                <p className="text-[14px] text-white tracking-[-0.56px] leading-[1.3] md:w-[393px]">
                  {s.description}
                </p>
                <div className="relative w-[151px] h-[151px] shrink-0 overflow-hidden">
                  <img
                    src={s.desktopImg}
                    alt=""
                    aria-hidden="true"
                    className="hidden md:block absolute inset-0 w-full h-full object-cover"
                  />
                  <img
                    src={s.mobileImg}
                    alt=""
                    aria-hidden="true"
                    className="md:hidden absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
