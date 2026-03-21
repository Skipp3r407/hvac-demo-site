"use client";

import Link from "next/link";
import { useState } from "react";

import { businessInfo, navItems } from "@/data/siteContent";
import { CTAButton } from "./CTAButton";
import { MobileNavDrawer } from "./MobileNavDrawer";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur">
        <div className="container-base flex h-20 items-center justify-between gap-4">
          <Link href="/" className="group inline-flex items-center" aria-label="Right Coast Air home">
            <div className="rounded-lg bg-deepNavy px-3 py-2 text-white shadow-md transition group-hover:bg-primaryBlue">
              <p className="font-heading text-sm uppercase tracking-widest">Right Coast Air</p>
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-sky-100">& Mechanical</p>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-charcoal transition hover:bg-lightGray hover:text-primaryBlue"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={businessInfo.phoneHref} className="text-sm font-semibold text-deepNavy">
              {businessInfo.phoneDisplay}
            </a>
            <CTAButton href="/contact" className="px-4 py-2 text-xs">
              {businessInfo.ctaLabel}
            </CTAButton>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 text-deepNavy lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open mobile navigation menu"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <MobileNavDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} navItems={navItems} />
    </>
  );
}
