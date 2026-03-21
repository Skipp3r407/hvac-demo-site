import Image from "next/image";
import type { Metadata } from "next";

import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { businessInfo, createMetadata } from "@/data/siteContent";

export const metadata: Metadata = createMetadata({
  title: "Service Areas",
  description:
    "Right Coast Air & Mechanical proudly serves Central Florida, including St. Cloud and the Greater Orlando area for HVAC repair, installation, and maintenance.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Proudly Serving Central Florida"
        description="Local HVAC service coverage for homes and businesses across St. Cloud, Orlando, and surrounding communities."
      />

      <section className="container-base py-16 sm:py-20">
        <ServiceAreaSection />
      </section>

      <section className="bg-lightGray py-16 sm:py-20">
        <div className="container-base grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Coverage Highlights"
              title="Local, Responsive HVAC Support Near You"
              description="We provide service throughout Central Florida with efficient scheduling and dependable workmanship."
            />
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {businessInfo.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-deepNavy"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-80 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src="/images/service-area-map.svg"
              alt="Map of Right Coast Air & Mechanical service areas in Central Florida"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="container-base py-16">
        <CtaBanner
          title="Not Sure If You Are in Our Service Area?"
          description={`Call ${businessInfo.phoneDisplay} and we will confirm availability for your neighborhood.`}
        />
      </section>
    </>
  );
}
