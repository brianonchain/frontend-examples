import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="pb-20 flex justify-center bg-black text-white">
      <div className="landingPageWidth">
        <p className="text-center text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.2] py-10 md:py-16">Website Mockups Showcasing Animation Techniques</p>
        <div className="w-full flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-evenly gap-12 md:gap-16">
          <Link
            href="/github"
            target="_blank"
            className="w-[348px] bg-slate-900 border-2 border-slate-700 rounded-2xl overflow-hidden hover:shadow-[0px_0px_40px_10px_#373D63] transition-all duration-500 cursor-pointer"
          >
            <Image src="/github.png" alt="Github" width={2527} height={1290} className="w-full h-[200px] object-cover border-b border-slate-400" />
            <div className="p-3">
              <p className="font-bold text-center text-2xl mb-4">www.github.com/home</p>
              <p>Features:</p>
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
          <Link
            href="/stripe"
            target="_blank"
            className="w-[348px] bg-slate-900 border-2 border-slate-700 rounded-2xl overflow-hidden hover:shadow-[0px_0px_40px_10px_#373D63] transition-all duration-500 cursor-pointer"
          >
            <Image src="/stripe.png" alt="Github" width={2521} height={1295} className="w-full h-[200px] object-cover border-b border-slate-400" />
            <div className="p-3">
              <p className="font-bold text-center text-2xl mb-4">www.stripe.com</p>
              <p>Features:</p>
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
        </div>
      </div>
    </div>
  );
}
