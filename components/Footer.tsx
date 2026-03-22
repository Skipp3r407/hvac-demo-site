import Image from "next/image";
import Link from "next/link";

import { businessInfo, navItems } from "@/data/siteContent";

const ELEVATE_DOMAIN = "https://elevatedigitalstudios.net";

export function Footer() {
  return (
    <footer className="mt-20 bg-deepNavy pb-24 pt-14 text-white md:pb-12">
      <div className="container-base grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Right Coast Air home" className="inline-flex items-center">
            <Image
              src="/images/logo.png"
              alt="Right Coast Air & Mechanical"
              width={180}
              height={60}
              className="h-10 w-auto object-contain opacity-90"
            />
          </Link>
          <h2 className="mt-3 text-2xl font-heading uppercase">{businessInfo.name}</h2>
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
        <div className="text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
          <p className="mt-3">
            Website Design by{" "}
            <a
              href={ELEVATE_DOMAIN}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block font-medium text-gray-300 transition duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]"
            >
              Elevate Digital Studio.
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
