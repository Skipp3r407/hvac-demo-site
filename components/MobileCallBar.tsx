import { businessInfo } from "@/data/siteContent";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-300 bg-white p-3 shadow-[0_-8px_30px_rgba(10,46,69,0.15)] md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <a
          href={businessInfo.phoneHref}
          className="inline-flex flex-1 items-center justify-center rounded-xl bg-primaryBlue px-3 py-3 text-sm font-semibold uppercase tracking-wide text-white"
        >
          Call Now
        </a>
        <a
          href="/contact"
          className="inline-flex flex-1 items-center justify-center rounded-xl bg-ctaAccent px-3 py-3 text-sm font-semibold uppercase tracking-wide text-white"
        >
          Free Quote
        </a>
      </div>
    </div>
  );
}
