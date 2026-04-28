// Desktop: 2-column staggered layout (left starts at top, right offset by 240px).
// Mobile: single column, all 4 cards stacked, then CTA.

const imgSurfers    = 'https://www.figma.com/api/mcp/asset/1890fa85-87cc-4702-89fa-8d3fa631e560';
const imgCyberpunk  = 'https://www.figma.com/api/mcp/asset/6fcaf4cf-9f85-47b1-9580-fe53d48d8d74';
const imgAgency     = 'https://www.figma.com/api/mcp/asset/95b6cca9-2281-4ea4-b9c6-f927e38e4b78';
const imgMinimal    = 'https://www.figma.com/api/mcp/asset/ecfa6ac6-affd-4740-901a-a2944da273e8';
const imgArrow      = 'https://www.figma.com/api/mcp/asset/f93cd72d-2317-4498-931d-2ba902be167e';

type Project = {
  name: string;
  tags: string[];
  img: string;
  desktopHeight: string;
};

const projects: Project[] = [
  { name: 'Surfers Paradise', tags: ['Social Media', 'Photography'], img: imgSurfers,   desktopHeight: 'h-[744px]' },
  { name: 'Cyberpunk Caffe',  tags: ['Social Media', 'Photography'], img: imgCyberpunk, desktopHeight: 'h-[699px]' },
  { name: 'Agency 976',       tags: ['Social Media', 'Photography'], img: imgAgency,    desktopHeight: 'h-[699px]' },
  { name: 'Minimal Playground', tags: ['Social Media', 'Photography'], img: imgMinimal, desktopHeight: 'h-[744px]' },
];

function ArrowIcon() {
  return (
    <div className="flex items-center justify-center shrink-0 size-[32px]">
      <div className="-rotate-90">
        <img src={imgArrow} alt="" aria-hidden="true" className="block size-[32px]" />
      </div>
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded-[24px] font-medium text-[14px] text-[#111] tracking-[-0.56px] whitespace-nowrap">
      {label}
    </span>
  );
}

function ProjectCard({ project, heightClass }: { project: Project; heightClass: string }) {
  return (
    <div className="flex flex-col gap-[10px]">
      {/* Photo */}
      <div className={`relative ${heightClass} overflow-hidden flex items-end pb-4 pl-4`}>
        <img
          src={project.img}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />
        <div className="relative flex gap-3 items-center">
          {project.tags.map((t) => <Tag key={t} label={t} />)}
        </div>
      </div>
      {/* Title + arrow */}
      <div className="flex items-center justify-between">
        <p className="font-black text-[36px] md:text-[36px] text-black uppercase tracking-[-1.44px] leading-[1.1] whitespace-nowrap">
          {project.name}
        </p>
        <ArrowIcon />
      </div>
    </div>
  );
}

function MobileProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="relative h-[390px] overflow-hidden flex items-end pb-4 pl-4">
        <img
          src={project.img}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />
        <div className="relative flex gap-3 items-center">
          {project.tags.map((t) => <Tag key={t} label={t} />)}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-black text-[24px] text-black uppercase tracking-[-0.96px] leading-[1.1] whitespace-nowrap">
          {project.name}
        </p>
        <ArrowIcon />
      </div>
    </div>
  );
}

function CornerBracket({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const rotation = { tl: 0, tr: 90, bl: -90, br: 180 }[position];
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
         style={{ transform: `rotate(${rotation}deg)`, flexShrink: 0 }}>
      <path d="M1 15 L1 1 L15 1" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CTABox() {
  return (
    <div className="flex gap-3 items-center w-full md:w-[465px]">

      {/* Left bracket column — stretches full height, brackets at top+bottom */}
      <div className="flex flex-row items-center self-stretch">
        <div className="flex flex-col h-full items-start justify-between w-[24px] shrink-0">
          <CornerBracket position="tl" />
          <CornerBracket position="bl" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[10px] py-3 flex-1 min-w-px">
        <p className="italic text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]">
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <a
          href="#contact"
          className="flex items-center justify-center bg-black text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px] w-fit hover:bg-neutral-800 transition-colors"
        >
          Let&apos;s talk
        </a>
      </div>

      {/* Right bracket column */}
      <div className="flex flex-row items-center self-stretch">
        <div className="flex flex-col h-full items-start justify-between w-[24px] shrink-0">
          <CornerBracket position="tr" />
          <CornerBracket position="br" />
        </div>
      </div>

    </div>
  );
}

export default function SelectedWorkSection() {
  return (
    <section className="px-4 md:px-8 py-12 md:py-20 flex flex-col gap-8 md:gap-[61px]">

      {/* ── Header ── */}

      {/* Mobile header */}
      <div className="flex flex-col gap-4 md:hidden uppercase">
        <p className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">[ portfolio ]</p>
        <div className="flex items-start justify-between">
          <div className="font-light text-[32px] text-black tracking-[-0.08em] leading-none">
            <p className="leading-[0.86]">Selected</p>
            <p className="leading-[0.86]">Work</p>
          </div>
          <p className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">004</p>
        </div>
      </div>

      {/* Desktop header */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex gap-[10px] items-start uppercase whitespace-nowrap">
          <div className="font-light text-[96px] text-black tracking-[-0.08em] leading-none">
            <p className="leading-[0.86]">Selected</p>
            <p className="leading-[0.86]">Work</p>
          </div>
          <p className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">004</p>
        </div>

        {/* [ portfolio ] vertical label */}
        <div className="flex h-[110px] w-[15px] items-center justify-center">
          <p className="-rotate-90 font-mono text-[14px] text-[#1f1f1f] uppercase whitespace-nowrap leading-[1.1]">
            [ portfolio ]
          </p>
        </div>
      </div>

      {/* ── Desktop 2-column grid ── */}
      {/*
        items-end: columns bottom-align so the right col's last card and the
        left col's CTA sit at the same vertical level.
        Left outer: self-stretch so it grows to the outer div height.
        Left inner: h-full justify-between distributes the 3 items top-to-bottom.
      */}
      <div className="hidden md:flex gap-6 items-end">

        {/* Left outer — stretches to match right column height */}
        <div className="flex flex-1 self-stretch">
          {/* Left inner — fills height, CTA pushed to bottom */}
          <div className="flex flex-col h-full justify-between flex-1">
            <ProjectCard project={projects[0]} heightClass={projects[0].desktopHeight} />
            <ProjectCard project={projects[1]} heightClass={projects[1].desktopHeight} />
            <CTABox />
          </div>
        </div>

        {/* Right column — starts 240px lower */}
        <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
          <ProjectCard project={projects[2]} heightClass={projects[2].desktopHeight} />
          <ProjectCard project={projects[3]} heightClass={projects[3].desktopHeight} />
        </div>

      </div>

      {/* ── Mobile single-column stack ── */}
      <div className="flex flex-col gap-6 md:hidden">
        {projects.map((p) => (
          <MobileProjectCard key={p.name} project={p} />
        ))}
        <CTABox />
      </div>

    </section>
  );
}
