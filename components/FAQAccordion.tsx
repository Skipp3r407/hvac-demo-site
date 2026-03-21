"use client";

import { useState } from "react";

import { faqs } from "@/data/siteContent";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={faq.question} className="rounded-xl border border-slate-200 bg-white">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="text-base font-semibold text-deepNavy">{faq.question}</span>
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 text-lg text-deepNavy transition ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-charcoal/80">{faq.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
