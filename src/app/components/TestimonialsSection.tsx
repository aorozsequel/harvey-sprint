import { sanityFetch } from '@/sanity/client'
import { urlFor } from '@/sanity/image'

type Testimonial = {
  _id: string
  name: string
  quote: string
  logo: { asset: { _ref: string; _type: 'reference' } }
}

const QUERY = `*[_type == "testimonial"] | order(order asc) {
  _id, name, quote, logo
}`

// Layout positions are a design decision — kept in code, not Sanity
const desktopLayout = [
  { rotation: -6.85, left: '7.08%',  top: 142, wrapperW: 380.876, wrapperH: 295.234 },
  { rotation:  2.9,  left: '46.94%', top: 272, wrapperW: 361.958, wrapperH: 203.867 },
  { rotation:  2.23, left: '21.18%', top: 553, wrapperW: 363.132, wrapperH: 280.316 },
  { rotation: -4.15, left: '68.54%', top: 546, wrapperW: 366.766, wrapperH: 228.169 },
]

const fallbackTestimonials = [
  { _id: '1', name: 'Marko Stojković', quote: 'A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.', logo: 'https://www.figma.com/api/mcp/asset/d0c280cc-32ae-4c73-ac7f-416e705ce5ec' },
  { _id: '2', name: 'Lukas Weber', quote: 'Professional, precise, and incredibly fast at handling complex product visualizations and templates.', logo: 'https://www.figma.com/api/mcp/asset/908ad958-ef29-40c2-9cf3-b73a5b52a677' },
  { _id: '3', name: 'Sarah Jenkins', quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.", logo: 'https://www.figma.com/api/mcp/asset/d2a4c921-6aa5-4682-a707-e37ba6a1373c' },
  { _id: '4', name: 'Sofia Martínez', quote: 'An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.', logo: 'https://www.figma.com/api/mcp/asset/d9111220-aebf-48d1-9e35-2980f6db0968' },
]

const fallbackMobile = [
  { logo: 'https://www.figma.com/api/mcp/asset/f71c4ff3-f78f-4120-9aca-c6f61b8bfac5', rotation: -3.5, wW: 277, wH: 316, cW: 260, maxH: '19px', maxW: '143px' },
  { logo: 'https://www.figma.com/api/mcp/asset/4b37a5b1-e374-4050-83b4-ea6d9a3adfa5', rotation:  2.0, wW: 268, wH: 264, cW: 260, maxH: '36px', maxW: '81px' },
]

function Card({ name, quote, logoSrc }: { name: string; quote: string; logoSrc: string }) {
  return (
    <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 w-[353px]">
      <img src={logoSrc} alt="" aria-hidden="true" className="w-auto object-contain object-left" style={{ maxHeight: '38px', maxWidth: '145px' }} />
      <p className="text-[18px] text-[#1f1f1f] tracking-[-0.72px] leading-[1.3]">{quote}</p>
      <p className="font-black text-[16px] text-black uppercase tracking-[-0.64px] leading-[1.1]">{name}</p>
    </div>
  )
}

export default async function TestimonialsSection() {
  const sanityData = await sanityFetch<Testimonial>(QUERY)

  type DisplayItem = { _id: string; name: string; quote: string; logoSrc: string }

  const items: DisplayItem[] = sanityData.length > 0
    ? sanityData.slice(0, 4).map((t, i) => ({
        _id: t._id,
        name: t.name,
        quote: t.quote,
        logoSrc: t.logo ? urlFor(t.logo)?.height(76).url() ?? fallbackTestimonials[i]?.logo ?? '' : fallbackTestimonials[i]?.logo ?? '',
      }))
    : fallbackTestimonials.map((t) => ({ _id: t._id, name: t.name, quote: t.quote, logoSrc: t.logo }))

  const mobileItems = items.slice(0, 2)

  return (
    <section>

      {/* ── Desktop ── */}
      <div className="hidden md:block relative min-h-[900px] overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <h2 className="font-medium capitalize text-center text-black leading-[1.1]"
              style={{ fontSize: '198px', letterSpacing: '-13.86px' }}>
            Testimonials
          </h2>
        </div>
        {items.map((item, i) => {
          const pos = desktopLayout[i]
          if (!pos) return null
          return (
            <div key={item._id} className="absolute z-10 flex items-center justify-center"
                 style={{ left: pos.left, top: `${pos.top}px`, width: `${pos.wrapperW}px`, height: `${pos.wrapperH}px` }}>
              <div className="flex-none" style={{ transform: `rotate(${pos.rotation}deg)` }}>
                <Card name={item.name} quote={item.quote} logoSrc={item.logoSrc} />
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <h2 className="font-medium capitalize text-center text-black"
            style={{ fontSize: '64px', letterSpacing: '-4.48px', lineHeight: 0.8 }}>
          Testimonials
        </h2>
        <div className="-mx-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex px-4 gap-3">
            {mobileItems.map((item, i) => {
              const ml = fallbackMobile[i]
              return (
                <div key={item._id} className="flex-none flex items-center justify-center"
                     style={{ width: `${ml.wW}px`, height: `${ml.wH}px` }}>
                  <div style={{ transform: `rotate(${ml.rotation}deg)` }}>
                    <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4"
                         style={{ width: `${ml.cW}px` }}>
                      <img src={item.logoSrc} alt="" aria-hidden="true" className="block object-contain"
                           style={{ maxHeight: ml.maxH, maxWidth: ml.maxW }} />
                      <p className="text-[18px] text-[#1f1f1f] tracking-[-0.72px] leading-[1.3]">{item.quote}</p>
                      <p className="font-black text-[16px] text-black uppercase tracking-[-0.64px] leading-[1.1]">{item.name}</p>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className="flex-none w-4" />
          </div>
        </div>
      </div>

    </section>
  )
}
