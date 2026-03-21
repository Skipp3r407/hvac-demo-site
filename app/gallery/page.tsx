import Image from "next/image";
import type { Metadata } from "next";

import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { createMetadata, galleryItems } from "@/data/siteContent";

export const metadata: Metadata = createMetadata({
  title: "Project Gallery",
  description:
    "View examples of HVAC installation, maintenance, and service work completed by Right Coast Air & Mechanical in Central Florida.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Recent HVAC Projects Across Central Florida"
        description="A look at our installation, repair, and maintenance work for residential and commercial customers."
      />

      <section className="container-base py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="p-4 text-sm font-medium text-charcoal">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container-base py-16">
        <CtaBanner
          title="Let’s Build Your Next HVAC Project"
          description="From system replacements to routine service, we deliver clean, professional results with local Central Florida support."
        />
      </section>
    </>
  );
}
