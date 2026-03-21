import type { Metadata } from "next";

import { CTAButton } from "@/components/CTAButton";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServicesGrid";
import { createMetadata, serviceDetails } from "@/data/siteContent";

export const metadata: Metadata = createMetadata({
  title: "HVAC Services",
  description:
    "Explore AC repair, AC installation and replacement, preventive maintenance, heating, commercial HVAC, and emergency service from Right Coast Air & Mechanical.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete HVAC Services for Central Florida Properties"
        description="We provide repair, installation, and maintenance services for both residential and commercial HVAC systems."
      />

      <section className="container-base py-16 sm:py-20">
        <SectionHeading
          eyebrow="What We Offer"
          title="Professional HVAC Solutions for Homes and Businesses"
          description="Every service is delivered with clear communication, quality workmanship, and options that make sense for your property."
          center
        />
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </section>

      <section className="bg-lightGray py-16 sm:py-20">
        <div className="container-base space-y-6">
          {serviceDetails.map((service) => (
            <article
              key={service.title}
              className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_26px_rgba(15,23,42,0.08)] lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
            >
              <div>
                <h2 className="text-2xl font-heading uppercase text-deepNavy">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-charcoal/85">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-skyBlue" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-lightGray p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primaryBlue">
                  Request Service
                </p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                  Speak with our team today for expert recommendations and fast scheduling.
                </p>
                <CTAButton href="/contact" className="mt-4 w-full">
                  {service.ctaCopy}
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-base py-16">
        <CtaBanner
          title="Need HVAC Service Right Away?"
          description="Our team is ready to help with diagnostics, repairs, installations, and planned maintenance across St. Cloud and Greater Orlando."
        />
      </section>
    </>
  );
}
