import { testimonials } from "@/data/siteContent";

type TestimonialCardsProps = {
  limit?: number;
};

export function TestimonialCards({ limit }: TestimonialCardsProps) {
  const cards = typeof limit === "number" ? testimonials.slice(0, limit) : testimonials;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((review) => (
        <article
          key={`${review.name}-${review.location}`}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
        >
          <div className="mb-4 flex items-center gap-1 text-amber-500" aria-label={`${review.rating} star rating`}>
            {Array.from({ length: review.rating }).map((_, index) => (
              <span key={`${review.name}-star-${index}`} aria-hidden>
                ★
              </span>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-charcoal/85">
            &ldquo;{review.quote}&rdquo;
          </p>
          <footer className="mt-5 border-t border-slate-200 pt-4">
            <p className="font-semibold text-deepNavy">{review.name}</p>
            <p className="text-xs uppercase tracking-wide text-charcoal/70">{review.location}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primaryBlue">{review.service}</p>
          </footer>
        </article>
      ))}
    </div>
  );
}
