import Image from "next/image";

import { businessInfo } from "@/data/siteContent";
import { CTAButton } from "./CTAButton";

export function ServiceAreaSection() {
  return (
    <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] lg:grid-cols-[1.2fr_1fr] lg:items-center lg:p-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-skyBlue">Service Area</p>
        <h3 className="mt-2 text-3xl font-heading uppercase leading-tight text-deepNavy">
          Proudly Serving Central Florida
        </h3>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          {businessInfo.name} provides residential and commercial HVAC services across{" "}
          {businessInfo.serviceAreaSummary}. If you are nearby, give us a call and we will confirm
          availability.
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {businessInfo.serviceAreas.map((area) => (
            <li key={area} className="rounded-full bg-lightGray px-3 py-1.5 text-xs font-semibold text-deepNavy">
              {area}
            </li>
          ))}
        </ul>

        <CTAButton href="/contact" className="mt-7">
          Book Service in Your Area
        </CTAButton>
      </div>

      <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 bg-lightGray">
        <Image
          src="/images/service-area-map.svg"
          alt="Service map covering St. Cloud and Greater Orlando"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    </section>
  );
}
