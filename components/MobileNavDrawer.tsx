"use client";

import Link from "next/link";
import { useEffect } from "react";

import type { NavItem } from "@/data/siteContent";
import { businessInfo } from "@/data/siteContent";
import { CTAButton } from "./CTAButton";

type MobileNavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

export function MobileNavDrawer({ isOpen, onClose, navItems }: MobileNavDrawerProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 transition ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-deepNavy/55 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Close mobile navigation menu"
      />

      <aside
        className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav aria-label="Mobile navigation" className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-4 py-3 text-base font-medium text-charcoal hover:bg-lightGray"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">
          <CTAButton href="/contact" className="w-full">
            {businessInfo.ctaLabel}
          </CTAButton>
          <CTAButton href={businessInfo.phoneHref} variant="secondary" className="w-full">
            Call {businessInfo.phoneDisplay}
          </CTAButton>
        </div>
      </aside>
    </div>
  );
}
