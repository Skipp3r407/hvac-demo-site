import Image from "next/image";
import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata, businessInfo } from "@/data/siteContent";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact Right Coast Air & Mechanical for HVAC repair, installation, and maintenance in St. Cloud and Greater Orlando.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request HVAC Service in St. Cloud and Greater Orlando"
        description="Call us directly or send a service inquiry online for repair, installation, and maintenance support."
      />

      <section className="container-base py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-8">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-heading uppercase text-deepNavy">Contact Information</h2>
              <a
                href={businessInfo.phoneHref}
                className="mt-4 inline-flex text-3xl font-heading uppercase text-ctaAccent sm:text-4xl"
              >
                {businessInfo.phoneDisplay}
              </a>
              <div className="mt-4 space-y-2 text-sm leading-relaxed text-charcoal/85">
                <p>
                  <span className="font-semibold text-deepNavy">Phone:</span>{" "}
                  <a href={businessInfo.phoneHref} className="font-semibold text-primaryBlue">
                    {businessInfo.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-deepNavy">Email:</span> {businessInfo.email}
                </p>
                <p>
                  <span className="font-semibold text-deepNavy">Service Area:</span>{" "}
                  {businessInfo.serviceAreaSummary}
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-heading uppercase text-deepNavy">Business Hours</h2>
              <ul className="mt-4 space-y-2 text-sm text-charcoal/85">
                {businessInfo.hours.map((hoursItem) => (
                  <li key={hoursItem}>{hoursItem}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-heading uppercase text-deepNavy">Service Inquiry</h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                Let us know if you need emergency AC repair, routine maintenance, or a full system
                replacement. We will guide you to the best next step.
              </p>
            </article>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-lightGray py-16 sm:py-20">
        <div className="container-base grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Service Area Map"
            title="Greater Orlando Coverage"
            description="Map placeholder for office/service zone coverage. Embed your live Google Map in this section when ready."
          />

          <div className="relative h-80 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src="/images/service-area-map.svg"
              alt="Map placeholder for HVAC service area in Greater Orlando"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
