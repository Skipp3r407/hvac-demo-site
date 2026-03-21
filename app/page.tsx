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
    "Right Coast Air & Mechanical provides trusted residential and commercial HVAC repair, installation, and maintenance in St. Cloud and the Greater Orlando area.",
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

export default function Home() {
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
            description="Experienced service, honest communication, and quality workmanship for homes and businesses throughout St. Cloud and Greater Orlando."
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
              alt="Right Coast Air & Mechanical service team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="About Right Coast Air"
              title="A Trusted Local HVAC Team"
              description="For over 10 years, we have helped Central Florida homeowners and businesses stay comfortable with dependable HVAC solutions."
            />
            <ul className="mt-5 space-y-2 text-sm text-charcoal/85">
              <li>- Residential and commercial service support</li>
              <li>- Clear recommendations and honest communication</li>
              <li>- Skilled workmanship focused on long-term performance</li>
            </ul>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center font-semibold uppercase tracking-wide text-primaryBlue transition hover:text-deepNavy"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="container-base py-16 sm:py-20">
        <ServiceAreaSection />
      </section>

      <section className="bg-lightGray py-16 sm:py-20">
        <div className="container-base">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Customers Are Saying"
            description="Our reputation is built on reliable service and quality results in every project."
            center
          />
          <div className="mt-10">
            <TestimonialCards limit={3} />
          </div>
        </div>
      </section>

      <section className="container-base py-16">
        <CtaBanner
          title="Need HVAC Service Fast?"
          description="Call now or request your quote online. We are ready to help with repairs, maintenance, and installations."
          primaryLabel="Request Your Quote"
        />
      </section>

      <section id="quote" className="bg-lightGray py-16 sm:py-20">
        <div className="container-base grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Quick Quote Request"
            title="Get Fast HVAC Help in Central Florida"
            description={`Call ${businessInfo.phoneDisplay} or submit your request online for repair, maintenance, installation, or emergency service.`}
          />
          <ContactForm compact />
        </div>
      </section>
    </>
  );
}
