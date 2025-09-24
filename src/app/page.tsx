import Image from "next/image";
import Link from "next/link";

const infos = [
  {
    name: "github",
    website: "www.github.com/home",
    imageSize: { width: 2527, height: 1290 },
    highlights: [
      "animated Hero icons",
      "Hero section fades out on scroll",
      "infinite logo carousel",
      "3D icon that tilts toward the mouse",
      "animated links on hover",
      "animated navbar",
      "mobile responsive",
    ],
  },
  {
    name: "airbnb",
    website: "www.airbnb.com",
    imageSize: { width: 2520, height: 1292 },
    highlights: ["various animations mimicking airbnb.com", "dynamic and aesthetic search bar", "date picker", "scroll snapping for images", "mobile responsive"],
  },
  {
    name: "logy",
    website: "www.logy.tw",
    imageSize: { width: 2515, height: 1285 },
    highlights: ["animated splash screen", "complex component layering and image positioning", "mobile responsive"],
  },
  {
    name: "stripe",
    website: "www.stripe.com",
    imageSize: { width: 2521, height: 1295 },
    highlights: ["animated rainbow gradient background", "section-specific images that is always centered in viewport as user scrolls down, images fade in/out"],
  },
];

export default function Landing() {
  return (
    <div className="pb-20 flex justify-center bg-black text-white">
      <div className="mx-[12px] xs:mx-[24px] lg:mx-[32px] w-full max-w-[600px] lg:max-w-[1128px]">
        <p className="text-center text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.2] py-10 md:py-16">Frontend Mockups Showcasing Animation Techniques</p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[50px] lg:gap-[32px] xl:gap-[24px]">
          {infos.map((info) => (
            <Link
              key={info.name}
              href={`/${info.name}`}
              target="_blank"
              className="bg-slate-900 border-2 border-slate-700 rounded-2xl overflow-hidden hover:shadow-[0px_0px_40px_10px_#373D63] transition-all duration-500 cursor-pointer"
            >
              <Image
                src={`/${info.name}-preview.png`}
                alt={info.name}
                width={info.imageSize.width}
                height={info.imageSize.height}
                className="w-full h-[220px] object-cover border-b border-slate-600"
              />
              <div className="w-full px-[12px] lg:px-[24px] pb-[24px]">
                <div className="py-6 font-bold text-center text-2xl">{info.website}</div>
                <p className="text-slate-400 font-bold mb-2">Animation Highlights:</p>
                <div className="space-y-1">
                  {info.highlights.map((highlight, index) => (
                    <p key={`github${index}`} className="flex gap-2">
                      <span>&bull;</span>
                      <span>{highlight}</span>
                    </p>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
