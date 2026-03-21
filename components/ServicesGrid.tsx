import { services } from "@/data/siteContent";
import Link from "next/link";

type ServicesGridProps = {
  compact?: boolean;
};

const iconByTitle: Record<string, string> = {
  "AC Repair": "🔧",
  "AC Installation": "❄️",
  Maintenance: "🛠️",
  "Heating Services": "🔥",
  "Commercial HVAC": "🏢",
  "Emergency Service": "⚡",
};

export function ServicesGrid({ compact = false }: ServicesGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <article
          key={service.title}
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(14,90,138,0.16)]"
        >
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primaryBlue/10 text-xl">
            <span aria-hidden>{iconByTitle[service.title] ?? "✓"}</span>
          </div>
          <h3 className="text-xl font-heading uppercase leading-tight text-deepNavy">{service.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{service.description}</p>
          <ul className={`mt-4 space-y-2 text-sm text-charcoal ${compact ? "hidden sm:block" : ""}`}>
            {service.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-skyBlue" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-5 inline-flex text-sm font-semibold uppercase tracking-wide text-primaryBlue transition hover:text-deepNavy"
          >
            Learn More
          </Link>
        </article>
      ))}
    </div>
  );
}
