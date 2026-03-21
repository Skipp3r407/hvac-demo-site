import { trustBarItems } from "@/data/siteContent";

export function TrustBar() {
  return (
    <section aria-label="Trust highlights" className="bg-deepNavy py-4">
      <div className="container-base">
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white/90 sm:text-sm">
          {trustBarItems.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ctaAccent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
