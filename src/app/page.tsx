import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="py-20 flex justify-center">
      <div className="landingPageWidth">
        <div className="w-full flex justify-evenly">
          <Link
            href="/github"
            target="_blank"
            className="w-[348px] h-[520px] border border-slate-400 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <Image src="/github.png" alt="Github" width={2527} height={1290} className="w-full h-[200px] object-cover border-b border-slate-400" />
            <div className="p-3">
              <p className="font-bold text-center">Github Mockup</p>
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
            className="w-[348px] h-[520px] border border-slate-400 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <Image src="/stripe.png" alt="Github" width={2521} height={1295} className="w-full h-[200px] object-cover border-b border-slate-400" />
            <div className="p-3">
              <p className="font-bold text-center">Stripe Mockup</p>
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
