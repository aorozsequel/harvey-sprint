import { sanityFetch } from '@/sanity/client'
import { urlFor } from '@/sanity/image'

type PortfolioItem = {
  _id: string
  title: string
  tags: string[]
  coverImage: { asset: { _ref: string; _type: 'reference' } }
  link?: string
}

const QUERY = `*[_type == "portfolio"] | order(order asc) [0...4] {
  _id, title, tags, coverImage, link
}`

const imgArrow = 'https://www.figma.com/api/mcp/asset/f93cd72d-2317-4498-931d-2ba902be167e'

const fallbackProjects = [
  { _id: '1', name: 'Surfers Paradise', tags: ['Social Media', 'Photography'], img: 'https://www.figma.com/api/mcp/asset/1890fa85-87cc-4702-89fa-8d3fa631e560', desktopHeight: 'h-[744px]' },
  { _id: '2', name: 'Cyberpunk Caffe',  tags: ['Social Media', 'Photography'], img: 'https://www.figma.com/api/mcp/asset/6fcaf4cf-9f85-47b1-9580-fe53d48d8d74', desktopHeight: 'h-[699px]' },
  { _id: '3', name: 'Agency 976',       tags: ['Social Media', 'Photography'], img: 'https://www.figma.com/api/mcp/asset/95b6cca9-2281-4ea4-b9c6-f927e38e4b78', desktopHeight: 'h-[699px]' },
  { _id: '4', name: 'Minimal Playground', tags: ['Social Media', 'Photography'], img: 'https://www.figma.com/api/mcp/asset/ecfa6ac6-affd-4740-901a-a2944da273e8', desktopHeight: 'h-[744px]' },
]

const desktopHeights = ['h-[744px]', 'h-[699px]', 'h-[699px]', 'h-[744px]']

function ArrowIcon() {
  return (
    <div className="flex items-center justify-center shrink-0 size-[32px]">
      <div className="-rotate-90">
        <img src={imgArrow} alt="" aria-hidden="true" className="block size-[32px]" />
      </div>
    </div>
  )
}

function Tag({ label }: { label: string }) {
  return (
    <span className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded-[24px] font-medium text-[14px] text-[#111] tracking-[-0.56px] whitespace-nowrap">
      {label}
    </span>
  )
}

function ProjectCard({ name, tags, img, heightClass }: { name: string; tags: string[]; img: string; heightClass: string }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className={`relative ${heightClass} overflow-hidden flex items-end pb-4 pl-4`}>
        <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" />
        <div className="relative flex gap-3 items-center">
          {tags.map((t) => <Tag key={t} label={t} />)}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-black text-[36px] text-black uppercase tracking-[-1.44px] leading-[1.1] whitespace-nowrap">
          {name}
        </p>
        <ArrowIcon />
      </div>
    </div>
  )
}

function MobileProjectCard({ name, tags, img }: { name: string; tags: string[]; img: string }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="relative h-[390px] overflow-hidden flex items-end pb-4 pl-4">
        <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" />
        <div className="relative flex gap-3 items-center">
          {tags.map((t) => <Tag key={t} label={t} />)}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-black text-[24px] text-black uppercase tracking-[-0.96px] leading-[1.1] whitespace-nowrap">
          {name}
        </p>
        <ArrowIcon />
      </div>
    </div>
  )
}

function CornerBracket({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const rotation = { tl: 0, tr: 90, bl: -90, br: 180 }[position]
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
         style={{ transform: `rotate(${rotation}deg)`, flexShrink: 0 }}>
      <path d="M1 15 L1 1 L15 1" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CTABox() {
  return (
    <div className="flex gap-3 items-center w-full md:w-[465px]">
      <div className="flex flex-row items-center self-stretch">
        <div className="flex flex-col h-full items-start justify-between w-[24px] shrink-0">
          <CornerBracket position="tl" />
          <CornerBracket position="bl" />
        </div>
      </div>
      <div className="flex flex-col gap-[10px] py-3 flex-1 min-w-px">
        <p className="italic text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]">
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <a href="#contact" className="flex items-center justify-center bg-black text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px] w-fit hover:bg-neutral-800 transition-colors">
          Let&apos;s talk
        </a>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="flex flex-col h-full items-start justify-between w-[24px] shrink-0">
          <CornerBracket position="tr" />
          <CornerBracket position="br" />
        </div>
      </div>
    </div>
  )
}

export default async function SelectedWorkSection() {
  const sanityProjects = await sanityFetch<PortfolioItem>(QUERY)

  type DisplayProject = { _id: string; name: string; tags: string[]; img: string; desktopHeight: string }

  const projects: DisplayProject[] = sanityProjects.length > 0
    ? sanityProjects.slice(0, 4).map((p, i) => ({
        _id: p._id,
        name: p.title,
        tags: p.tags || [],
        img: p.coverImage ? urlFor(p.coverImage)?.width(800).url() ?? fallbackProjects[i]?.img ?? '' : fallbackProjects[i]?.img ?? '',
        desktopHeight: desktopHeights[i] || 'h-[699px]',
      }))
    : fallbackProjects

  return (
    <section className="px-4 md:px-8 py-12 md:py-20 flex flex-col gap-8 md:gap-[61px]">

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
        <div className="flex h-[110px] w-[15px] items-center justify-center">
          <p className="-rotate-90 font-mono text-[14px] text-[#1f1f1f] uppercase whitespace-nowrap leading-[1.1]">
            [ portfolio ]
          </p>
        </div>
      </div>

      {/* Desktop 2-column grid */}
      <div className="hidden md:flex gap-6 items-end">
        <div className="flex flex-1 self-stretch">
          <div className="flex flex-col h-full justify-between flex-1">
            <ProjectCard name={projects[0].name} tags={projects[0].tags} img={projects[0].img} heightClass={projects[0].desktopHeight} />
            <ProjectCard name={projects[1].name} tags={projects[1].tags} img={projects[1].img} heightClass={projects[1].desktopHeight} />
            <CTABox />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
          <ProjectCard name={projects[2].name} tags={projects[2].tags} img={projects[2].img} heightClass={projects[2].desktopHeight} />
          <ProjectCard name={projects[3].name} tags={projects[3].tags} img={projects[3].img} heightClass={projects[3].desktopHeight} />
        </div>
      </div>

      {/* Mobile single-column stack */}
      <div className="flex flex-col gap-6 md:hidden">
        {projects.map((p) => (
          <MobileProjectCard key={p._id} name={p.name} tags={p.tags} img={p.img} />
        ))}
        <CTABox />
      </div>

    </section>
  )
}
