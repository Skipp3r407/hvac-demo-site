type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-lightGray">
      <div className="container-base py-14 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primaryBlue">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-balance font-heading text-4xl uppercase leading-tight text-deepNavy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-charcoal/80 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
