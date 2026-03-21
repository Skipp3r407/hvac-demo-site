import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TestimonialCards } from "@/components/TestimonialCards";
import { TrustBar } from "@/components/TrustBar";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { businessInfo, createMetadata } from "@/data/siteContent";

export const metadata: Metadata = createMetadata({
  title: "Central Florida HVAC Repair, Installation & Maintenance",
  description:
    "Right Coast Air & Mechanical provides trusted residential and commercial HVAC repair, installation, and maintenance in St. Cloud and Greater Orlando.",
  path: "/",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: businessInfo.name,
  areaServed: businessInfo.serviceAreaSummary,
  telephone: businessInfo.phoneDisplay,
  url: "https://rightcoastairmechanical.com",
  openingHours: ["Mo-Fr 07:00-19:00", "Sa 08:00-16:00"],
  serviceType: [
    "AC Repair",
    "AC Installation",
    "HVAC Maintenance",
    "Heating Services",
    "Commercial HVAC",
    "Emergency Service",
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <TrustBar />

      <section className="container-base py-16 sm:py-20">
        <SectionHeading
          eyebrow="Our Services"
          title="Our HVAC Services"
          description="From fast repairs to complete system replacements, our team delivers efficient, high-quality HVAC solutions across Central Florida."
          center
        />
        <div className="mt-10">
          <ServicesGrid compact />
        </div>
      </section>

      <section className="bg-lightGray py-16 sm:py-20">
        <div className="container-base">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose Right Coast Air & Mechanical"
            description="We focus on clear communication, long-term solutions, and customer-first service for every home and business we serve."
          />
          <div className="mt-8">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <section className="container-base py-16 sm:py-20">
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_14px_28px_rgba(15,23,42,0.08)] lg:grid-cols-[1fr_1.1fr] lg:p-10">
          <div className="relative h-72 overflow-hidden rounded-2xl bg-lightGray">
            <Image
              src="/images/about-team.svg"
              alt="Right Coast Air HVAC team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="About Right Coast Air"
              title="Over 10 Years of HVAC Experience in Central Florida"
              description="Our mission is simple: deliver reliable comfort through honest recommendations, high standards, and responsive service."
            />
            <ul className="mt-5 space-y-2 text-sm text-charcoal/85">
              <li>- Customer-first service from first call to final walkthrough</li>
              <li>- Honest communication with practical options and clear pricing</li>
              <li>- Skilled workmanship for long-lasting system performance</li>
            </ul>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center font-semibold uppercase tracking-wide text-primaryBlue hover:text-deepNavy"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-lightGray py-16 sm:py-20">
        <div className="container-base">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Central Florida Customers Say"
            description="Our reputation is built one project at a time, with dependable service and quality results."
            center
          />
          <div className="mt-10">
            <TestimonialCards limit={3} />
          </div>
        </div>
      </section>

      <section className="container-base py-16 sm:py-20">
        <ServiceAreaSection />
      </section>

      <section id="quote" className="bg-lightGray py-16 sm:py-20">
        <div className="container-base grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Get a Free Quote"
            title="Need HVAC Service in St. Cloud or Orlando?"
            description={`Call ${businessInfo.phoneDisplay} or send your service request online. We handle repairs, maintenance, and installations for homes and businesses.`}
          />
          <ContactForm compact />
        </div>
      </section>

      <section className="container-base py-16">
        <CtaBanner
          title="Need HVAC Service Fast?"
          description="Call Right Coast Air & Mechanical now for quick scheduling, trusted recommendations, and professional service in Central Florida."
        />
      </section>
    </>
  );
}
