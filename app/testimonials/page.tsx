import type { Metadata } from "next";

import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { TestimonialCards } from "@/components/TestimonialCards";
import { createMetadata } from "@/data/siteContent";

export const metadata: Metadata = createMetadata({
  title: "Customer Testimonials",
  description:
    "Read what homeowners and businesses in St. Cloud and Greater Orlando say about Right Coast Air & Mechanical.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Trusted by Homeowners and Businesses Across Central Florida"
        description="We earn trust through quality workmanship, responsive service, and clear communication."
      />

      <section className="container-base py-16 sm:py-20">
        <TestimonialCards />
      </section>

      <section className="container-base py-16">
        <CtaBanner
          title="Join Our Growing List of Happy Customers"
          description="Get dependable HVAC service from a local team committed to your comfort and long-term system performance."
        />
      </section>
    </>
  );
}
