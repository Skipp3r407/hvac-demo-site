import type { Metadata } from "next";

import { CtaBanner } from "@/components/CtaBanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/data/siteContent";

export const metadata: Metadata = createMetadata({
  title: "HVAC FAQs",
  description:
    "Find answers to common HVAC questions about maintenance, repair vs replacement, brands, and service coverage in Central Florida.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common Questions About HVAC Service in Central Florida"
        description="Quick answers to help you make informed decisions about your comfort system."
      />

      <section className="container-base py-16 sm:py-20">
        <FAQAccordion />
      </section>

      <section className="container-base py-16">
        <CtaBanner
          title="Still Have Questions?"
          description="Our team is happy to help. Reach out for straightforward advice and a free quote for your HVAC needs."
        />
      </section>
    </>
  );
}
