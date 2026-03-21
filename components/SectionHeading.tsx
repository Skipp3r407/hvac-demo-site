type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <header className={`${center ? "text-center mx-auto" : ""} max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-skyBlue">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-heading uppercase leading-tight text-deepNavy sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-charcoal/80 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
