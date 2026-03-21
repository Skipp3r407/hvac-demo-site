import Image from "next/image";
import type { Metadata } from "next";

import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/data/siteContent";

export const metadata: Metadata = createMetadata({
  title: "About Our HVAC Company",
  description:
    "Learn about Right Coast Air & Mechanical, a customer-first Central Florida HVAC company with over 10 years of experience.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Trusted Local HVAC Partner for Homes and Businesses"
        description="Right Coast Air & Mechanical is built around quality workmanship, honest communication, and dependable service throughout Central Florida."
      />

      <section className="container-base py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative h-80 overflow-hidden rounded-2xl border border-slate-200 bg-lightGray">
            <Image
              src="/images/about-team.svg"
              alt="Right Coast Air & Mechanical team at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <article>
            <SectionHeading
              eyebrow="Company Overview"
              title="Over 10 Years of Experience"
              description="We provide residential and commercial HVAC services with a straightforward process and premium-level attention to detail."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/85">
              <p>
                Our customer-first approach means we listen, diagnose accurately, and explain your
                options in plain language before any work begins.
              </p>
              <p>
                We believe long-term trust comes from honest communication and quality workmanship,
                not pressure tactics. Every project is handled with respect for your time, budget,
                and comfort goals.
              </p>
              <p>
                Whether you need urgent repair, planned maintenance, or a full replacement, our
                team is committed to delivering clean, reliable results.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-lightGray py-16 sm:py-20">
        <div className="container-base grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Customer-First Service",
              body: "We prioritize responsiveness, transparency, and consistent communication from start to finish.",
            },
            {
              title: "Honest Recommendations",
              body: "You receive clear explanations and practical options tailored to your needs and property.",
            },
            {
              title: "Quality Workmanship",
              body: "From diagnostics to install details, we follow proven methods that support long-term performance.",
            },
            {
              title: "Local Central Florida Focus",
              body: "We understand regional heat and humidity demands and design solutions that perform in this climate.",
            },
          ].map((value) => (
            <article key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-heading uppercase text-deepNavy">{value.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/80">{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-base py-16">
        <CtaBanner
          title="Work With a Team You Can Trust"
          description="When comfort matters, choose a local HVAC company committed to honest service and high-quality results."
        />
      </section>
    </>
  );
}
