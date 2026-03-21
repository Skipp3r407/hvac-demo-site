import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantStyles: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "bg-ctaAccent text-white shadow-lg shadow-ctaAccent/30 hover:bg-[#a83327] focus-visible:outline-ctaAccent",
  secondary:
    "bg-primaryBlue text-white shadow-lg shadow-primaryBlue/30 hover:bg-[#0b4a72] focus-visible:outline-primaryBlue",
  ghost:
    "border border-deepNavy/30 bg-white text-deepNavy hover:bg-deepNavy hover:text-white focus-visible:outline-deepNavy",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  if (href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
