import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="pb-20 flex justify-center bg-black text-white">
      <div className="landingPageWidth">
        <p className="text-center text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.2] py-10 md:py-16">Mockups Showcasing Animation Techniques</p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-12 justify-items-center">
          {/*--- Github ---*/}
          <Link
            href="/github"
            target="_blank"
            className="w-[348px] lg:h-150 bg-slate-900 border-2 border-slate-700 rounded-2xl overflow-hidden hover:shadow-[0px_0px_40px_10px_#373D63] transition-all duration-500 cursor-pointer"
          >
            <Image src="/github.png" alt="Github" width={2527} height={1290} className="w-full h-[200px] object-cover border-b border-slate-400" />
            <div className="w-full px-3 pb-6 ">
              <div className="py-6 font-bold text-center text-2xl">www.github.com/home</div>
              <p className="text-slate-400 font-bold mb-2">Animation Highlights:</p>
              <div className="space-y-1">
                <p className="flex items-start gap-2">
                  <span className="shrink-0">&bull;</span>
                  <span>animated navbar menu items</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="shrink-0">&bull;</span>
                  <span>Hero icons slide in from bottom</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="shrink-0">&bull;</span>
                  <span>Hero section fades out/scales down as user scrolls down</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="shrink-0">&bull;</span>
                  <span>infinite looping of logos</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="shrink-0">&bull;</span>
                  <span>a 3D icon that tilts toward the mouse position</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="shrink-0">&bull;</span>
                  <span>animated links</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="shrink-0">&bull;</span>
                  <span>accordion</span>
                </p>
              </div>
            </div>
          </Link>

          {/*--- Stripe ---*/}
          <Link
            href="/stripe"
            target="_blank"
            className="w-[348px] lg:h-150 bg-slate-900 border-2 border-slate-700 rounded-2xl overflow-hidden hover:shadow-[0px_0px_40px_10px_#373D63] transition-all duration-500 cursor-pointer"
          >
            <Image src="/stripe.png" alt="Github" width={2521} height={1295} className="w-full h-[200px] object-cover border-b border-slate-400" />
            <div className="w-full px-3 pb-6">
              <div className="py-6 font-bold text-center text-2xl">www.stripe.com</div>
              <p className="text-slate-400 font-bold mb-2">Animation Highlights:</p>
              <div className="space-y-1">
                <p className="flex items-start gap-2">
                  <span className="shrink-0">&bull;</span>
                  <span>animated rainbow gradient with diaganol clip path</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="shrink-0">&bull;</span>
                  <span>section-specific images that is always centered in viewport as user scrolls down, images fade in/out</span>
                </p>
              </div>
            </div>
          </Link>

          {/*--- Logy ---*/}
          <Link
            href="/logy"
            target="_blank"
            className="w-[348px] lg:h-150 bg-slate-900 border-2 border-slate-700 rounded-2xl overflow-hidden hover:shadow-[0px_0px_40px_10px_#373D63] transition-all duration-500 cursor-pointer"
          >
            <Image src="/logy-preview.png" alt="Logy" width={2521} height={1295} className="w-full h-[200px] object-cover border-b border-slate-400" />
            <div className="w-full px-3 pb-6">
              <div className="py-6 font-bold text-center text-2xl relative flex justify-center">
                www.logy.tw
                <div className="absolute font-normal bottom-1.5 text-center text-sm">(restaurant website)</div>
              </div>
              <p className="text-slate-400 font-bold mb-2">Animation Highlights:</p>
              <div className="space-y-1">
                <p className="flex items-start gap-2">
                  <span className="shrink-0">&bull;</span>
                  <span>splash screen with animated text outline (any font)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="shrink-0">&bull;</span>
                  <span>when user scrolls down, a screen-sized image scales down and snaps back into a grid</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
