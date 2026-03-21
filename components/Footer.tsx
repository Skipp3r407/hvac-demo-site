import Link from "next/link";

import { businessInfo, navItems } from "@/data/siteContent";

// TODO: Replace with https://elevatedigitalco.com when domain is purchased
const ELEVATE_DOMAIN = "https://elevate-digital-co.vercel.app";

export function Footer() {
  return (
    <footer className="mt-20 bg-deepNavy pb-24 pt-14 text-white md:pb-12">
      <div className="container-base grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h2 className="text-2xl font-heading uppercase">{businessInfo.name}</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-200">
            Residential and commercial HVAC repair, installation, and maintenance in St. Cloud and
            the Greater Orlando area.
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <p>
              Phone:{" "}
              <a href={businessInfo.phoneHref} className="font-semibold text-white">
                {businessInfo.phoneDisplay}
              </a>
            </p>
            <p>Email: {businessInfo.email}</p>
            <p>Service Area: {businessInfo.serviceAreaSummary}</p>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-200 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg uppercase">Business Hours</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {businessInfo.hours.map((hoursItem) => (
              <li key={hoursItem}>{hoursItem}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-base mt-10 border-t border-white/20 pt-6">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
        </p>
        <p className="mt-1 text-sm text-gray-400">
          Website Design by{" "}
          <a
            href={ELEVATE_DOMAIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 transition-colors duration-200 hover:text-blue-300 hover:underline underline-offset-2"
          >
            Elevate Digital Co.
          </a>
        </p>
      </div>
    </footer>
  );
}
