import { whyChooseItems } from "@/data/siteContent";

export function WhyChooseUs() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {whyChooseItems.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_6px_20px_rgba(15,23,42,0.08)]"
        >
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primaryBlue/10 text-primaryBlue">
            <span aria-hidden>✓</span>
          </div>
          <h3 className="text-xl font-heading uppercase text-deepNavy">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/80">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
