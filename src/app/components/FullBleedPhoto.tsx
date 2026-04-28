// Full-bleed photo section between About and Services.
// Desktop: 1440×900, image centred & covered.
// Mobile:  375×565, same photo but tighter crop (Figma offsets left −36.41%).

const imageDesktop =
  'https://www.figma.com/api/mcp/asset/fe05c65a-9ddd-4c75-8451-414d628a24ac';
const imageMobile =
  'https://www.figma.com/api/mcp/asset/412764dd-aff4-4330-b6e9-1b70c035835d';

export default function FullBleedPhoto() {
  return (
    <section className="relative w-full h-[565px] md:h-[900px] overflow-hidden">

      {/* Mobile — portrait crop, right-biased to match Figma offset */}
      <img
        src={imageMobile}
        alt=""
        aria-hidden="true"
        className="md:hidden absolute inset-0 w-full h-full object-cover object-[60%_center]"
      />

      {/* Desktop — wide landscape, centred */}
      <img
        src={imageDesktop}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
      />

    </section>
  );
}
