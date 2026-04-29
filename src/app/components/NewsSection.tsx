import { sanityFetch } from '@/sanity/client'
import { urlFor } from '@/sanity/image'

type NewsArticle = {
  _id: string
  title: string
  caption: string
  image: { asset: { _ref: string; _type: 'reference' } }
  link: string
}

const QUERY = `*[_type == "newsArticle"] | order(publishedAt desc) [0...3] {
  _id, title, caption, image, link
}`

// Fallback data shown before Sanity content is added
const fallbackCaption =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const fallbackArticles = [
  { _id: '1', title: '', caption: fallbackCaption, image: null, link: '#', fallbackImg: 'https://www.figma.com/api/mcp/asset/de784f30-c867-4d0f-aa1b-a457efb25102', fallbackImgMobile: 'https://www.figma.com/api/mcp/asset/e8cf4db8-1916-468c-ac7b-eb1b23184e9d' },
  { _id: '2', title: '', caption: fallbackCaption, image: null, link: '#', fallbackImg: 'https://www.figma.com/api/mcp/asset/a0a6bc53-235f-49dc-98e4-cb90a4631acf', fallbackImgMobile: 'https://www.figma.com/api/mcp/asset/64715c20-9146-4a73-b6ca-5763f0bbd0ad' },
  { _id: '3', title: '', caption: fallbackCaption, image: null, link: '#', fallbackImg: 'https://www.figma.com/api/mcp/asset/97245a67-f4c6-4e81-bb79-96f38972df0e', fallbackImgMobile: 'https://www.figma.com/api/mcp/asset/9a613568-fe55-43b4-9c30-fd71b37d19d8' },
]

const imgArrow       = 'https://www.figma.com/api/mcp/asset/05edb86e-0e4a-4fa4-a477-60a72f0a3474'
const imgArrowMobile = 'https://www.figma.com/api/mcp/asset/eea1b209-ebe2-4139-b571-e38106e20292'

function ReadMore({ arrow }: { arrow: string }) {
  return (
    <a href="#" className="flex items-center gap-[10px] border-b border-black pb-[4px] w-fit">
      <span className="font-medium text-[14px] text-black tracking-[-0.56px] leading-none">Read more</span>
      <div className="flex items-center justify-center size-[18px]">
        <div className="-rotate-90">
          <img src={arrow} alt="" aria-hidden="true" className="block size-[18px]" />
        </div>
      </div>
    </a>
  )
}

export default async function NewsSection() {
  const sanityArticles = await sanityFetch<NewsArticle>(QUERY)

  type DisplayArticle = {
    _id: string
    caption: string
    link: string
    imgDesktop: string
    imgMobile: string
  }

  const articles: DisplayArticle[] = sanityArticles.length > 0
    ? sanityArticles.map((a, i) => ({
        _id: a._id,
        caption: a.caption,
        link: a.link || '#',
        imgDesktop: a.image ? urlFor(a.image)?.width(800).url() ?? fallbackArticles[i]?.fallbackImg ?? '' : fallbackArticles[i]?.fallbackImg ?? '',
        imgMobile: a.image ? urlFor(a.image)?.width(600).url() ?? fallbackArticles[i]?.fallbackImgMobile ?? '' : fallbackArticles[i]?.fallbackImgMobile ?? '',
      }))
    : fallbackArticles.map((a) => ({
        _id: a._id,
        caption: a.caption,
        link: a.link,
        imgDesktop: a.fallbackImg,
        imgMobile: a.fallbackImgMobile,
      }))

  const [a1, a2, a3] = articles

  return (
    <section className="bg-[#f3f3f3]">

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-end justify-between px-8 py-[120px] overflow-hidden">

        <div className="flex h-[706px] w-[110px] items-center justify-center shrink-0">
          <div className="-rotate-90 flex-none">
            <div className="flex flex-col font-light text-[64px] text-black uppercase tracking-[-0.08em] whitespace-nowrap">
              <p className="leading-[0.86]">Keep up with my latest</p>
              <p className="leading-[0.86]">news &amp; achievements</p>
            </div>
          </div>
        </div>

        <div className="flex gap-[31px] items-start w-[1020px]">
          <div className="w-[353px] h-[581px] flex flex-col gap-4">
            <div className="relative w-full h-[469px] overflow-hidden shrink-0">
              <img src={a1.imgDesktop} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            </div>
            <p className="flex-1 text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]">{a1.caption}</p>
            <ReadMore arrow={imgArrow} />
          </div>

          <div className="self-stretch shrink-0 w-px bg-[#ddd]" />

          <div className="w-[353px] flex flex-col gap-4 pt-[120px]">
            <div className="relative w-full h-[469px] overflow-hidden shrink-0">
              <img src={a2.imgDesktop} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            </div>
            <p className="text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]">{a2.caption}</p>
            <ReadMore arrow={imgArrow} />
          </div>

          <div className="self-stretch shrink-0 w-px bg-[#ddd]" />

          <div className="w-[353px] h-[581px] flex flex-col gap-4">
            <div className="relative w-full h-[469px] overflow-hidden shrink-0">
              <img src={a3.imgDesktop} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            </div>
            <p className="flex-1 text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]">{a3.caption}</p>
            <ReadMore arrow={imgArrow} />
          </div>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <h2 className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.86]">
          Keep up with my latest news &amp; achievements
        </h2>
        <div className="-mx-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 px-4">
            {articles.map((a) => (
              <div key={a._id} className="flex-none w-[300px] flex flex-col gap-4">
                <div className="relative w-full h-[398px] overflow-hidden">
                  <img src={a.imgMobile} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                </div>
                <p className="text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]">{a.caption}</p>
                <ReadMore arrow={imgArrowMobile} />
              </div>
            ))}
            <div className="flex-none w-4" />
          </div>
        </div>
      </div>

    </section>
  )
}
