import Image from "next/image";

import { businessInfo } from "@/data/siteContent";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-hvac.svg"
          alt="HVAC professionals servicing a residential unit in Central Florida"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deepNavy/95 via-deepNavy/85 to-primaryBlue/50" />

      <div className="container-base py-22 sm:py-28 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr] lg:items-end">
          <div className="max-w-3xl text-white">
            <p className="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
              Central Florida HVAC Specialists
            </p>
            <h1 className="text-balance font-heading text-4xl uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
              Stay Cool with Trusted HVAC Experts in Central Florida
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100">
              Reliable residential and commercial HVAC repair, installation, and maintenance for
              homes and businesses.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/contact">{businessInfo.ctaLabel}</CTAButton>
              <CTAButton href={businessInfo.phoneHref} variant="secondary">
                Call Now
              </CTAButton>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white shadow-xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">Fast Local Service</p>
            <h2 className="mt-2 font-heading text-3xl uppercase leading-tight">Need Help Today?</h2>
            <p className="mt-3 text-sm text-slate-100">
              Speak directly with our team for emergency service and same-day scheduling options.
            </p>
            <a
              href={businessInfo.phoneHref}
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-ctaAccent px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#a83327]"
            >
              {businessInfo.phoneDisplay}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
