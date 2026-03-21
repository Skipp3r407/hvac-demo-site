import { businessInfo } from "@/data/siteContent";
import { CTAButton } from "./CTAButton";

type CtaBannerProps = {
  title: string;
  description: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-deepNavy to-primaryBlue px-6 py-10 text-white shadow-[0_16px_36px_rgba(10,46,69,0.35)] sm:px-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-heading uppercase leading-tight">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-100">{description}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/contact">{businessInfo.ctaLabel}</CTAButton>
          <CTAButton href={businessInfo.phoneHref} variant="ghost" className="border-white/40 bg-white/10 text-white">
            Call {businessInfo.phoneDisplay}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
