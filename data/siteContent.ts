import type { Metadata } from "next";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  highlights: string[];
};

export type ServiceDetail = {
  title: string;
  description: string;
  benefits: string[];
  ctaCopy: string;
};

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
  service: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

const siteUrl = "https://rightcoastairmechanical.com";

export const businessInfo = {
  name: "Right Coast Air & Mechanical",
  phoneDisplay: "407-548-4402",
  phoneHref: "tel:+14075484402",
  ctaLabel: "Get a Free Quote",
  email: "service@rightcoastairmechanical.com",
  serviceAreaSummary: "Central Florida, St. Cloud, and Greater Orlando area",
  serviceAreas: [
    "St. Cloud",
    "Orlando",
    "Kissimmee",
    "Lake Nona",
    "Winter Park",
    "Oviedo",
    "Hunter's Creek",
    "Celebration",
    "Poinciana",
    "East Orlando",
  ],
  hours: [
    "Monday - Friday: 7:00 AM - 7:00 PM",
    "Saturday: 8:00 AM - 4:00 PM",
    "Sunday: Emergency service only",
  ],
  yearsExperience: "10+ years",
  brandsLine: "We service and install all major HVAC brands.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const trustBarItems = [
  "Residential & Commercial",
  "10+ Years Experience",
  "All Major Brands",
  "Fast, Reliable Service",
];

export const services: Service[] = [
  {
    title: "AC Repair",
    description:
      "Fast diagnostics and dependable AC repair for no-cool issues, airflow problems, and uneven temperatures.",
    highlights: ["Same-day appointments", "Upfront recommendations", "Long-term fixes"],
  },
  {
    title: "AC Installation",
    description:
      "Energy-efficient system replacements and new installations designed for your home or building load.",
    highlights: ["System sizing", "High-efficiency options", "Clean install process"],
  },
  {
    title: "Maintenance",
    description:
      "Seasonal tune-ups that improve performance, lower energy use, and reduce surprise breakdowns.",
    highlights: ["Filter checks", "Coil cleaning", "Performance testing"],
  },
  {
    title: "Heating Services",
    description:
      "Florida-ready heating diagnostics and repairs for heat pumps and electric heating systems.",
    highlights: ["Heat pump support", "Quick repair turnaround", "Safe operation checks"],
  },
  {
    title: "Commercial HVAC",
    description:
      "Reliable commercial HVAC support for offices, retail spaces, and light industrial properties.",
    highlights: ["Rooftop unit service", "Minimal downtime", "Planned maintenance"],
  },
  {
    title: "Emergency Service",
    description:
      "Urgent HVAC response when your system goes down and comfort cannot wait.",
    highlights: ["Priority dispatch", "Rapid diagnostics", "Critical system stabilization"],
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    title: "AC Repair",
    description:
      "When your system stops cooling, our technicians diagnose quickly and resolve the root issue with dependable repairs.",
    benefits: [
      "Fast troubleshooting for no-cool and weak airflow",
      "Repairs for all major residential and commercial systems",
      "Clear recommendations before work begins",
    ],
    ctaCopy: "Book AC Repair",
  },
  {
    title: "AC Installation & Replacement",
    description:
      "Upgrade to an efficient, properly sized comfort system with professional installation and clean project execution.",
    benefits: [
      "Right-sized equipment for better comfort and efficiency",
      "Quality installation practices for long-term performance",
      "Straightforward options for replacement projects",
    ],
    ctaCopy: "Get an Installation Quote",
  },
  {
    title: "Preventive Maintenance",
    description:
      "Routine tune-ups help prevent breakdowns, protect efficiency, and extend equipment lifespan in Florida heat.",
    benefits: [
      "Seasonal inspections and performance checks",
      "Early detection of wear-and-tear issues",
      "Cleaner operation and improved reliability",
    ],
    ctaCopy: "Schedule Maintenance",
  },
  {
    title: "Heating Services",
    description:
      "We service and repair Florida heating systems, including heat pumps and electric heat, for dependable cold-weather comfort.",
    benefits: [
      "Heating diagnostics and repair support",
      "Safe startup and performance verification",
      "Preventive service for seasonal reliability",
    ],
    ctaCopy: "Request Heating Service",
  },
  {
    title: "Commercial HVAC",
    description:
      "Commercial service plans and repair support designed to reduce downtime and protect business operations.",
    benefits: [
      "Rooftop units and light commercial systems",
      "Maintenance plans for predictable performance",
      "Service built around operational schedules",
    ],
    ctaCopy: "Request Commercial Support",
  },
  {
    title: "Emergency Service",
    description:
      "When comfort fails unexpectedly, our team delivers rapid HVAC response to restore cooling or heating as quickly as possible.",
    benefits: [
      "Priority scheduling for urgent service calls",
      "Fast diagnostics for critical system failures",
      "Clear repair options to get you back online quickly",
    ],
    ctaCopy: "Request Emergency Service",
  },
];

export const whyChooseItems = [
  {
    title: "10+ Years of Experience",
    description:
      "Our team brings proven HVAC expertise to every service call, maintenance visit, and installation project.",
  },
  {
    title: "Residential & Commercial Expertise",
    description:
      "From homes to business facilities, we tailor solutions to each space, load, and comfort requirement.",
  },
  {
    title: "Fast Service Response",
    description:
      "Quick scheduling and responsive communication help you restore comfort without unnecessary delays.",
  },
  {
    title: "All Major Brands Supported",
    description:
      "We service all major HVAC brands using quality parts and professional, warranty-safe practices.",
  },
  {
    title: "Reliable and Professional",
    description:
      "You get clean workmanship, respectful service, and clear next steps from your first call to job completion.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Maria G.",
    location: "St. Cloud, FL",
    rating: 5,
    quote:
      "Right Coast Air responded quickly and fixed our AC the same day. Professional, clean, and easy to work with.",
    service: "AC Repair",
  },
  {
    name: "James R.",
    location: "Lake Nona, FL",
    rating: 5,
    quote:
      "They replaced our system and explained every option clearly. Our home cools faster and our power bill dropped.",
    service: "AC Installation",
  },
  {
    name: "Alicia T.",
    location: "Orlando, FL",
    rating: 5,
    quote:
      "The maintenance visit was thorough and on time. They caught a problem before it became a major repair.",
    service: "Preventive Maintenance",
  },
  {
    name: "Daniel P.",
    location: "Kissimmee, FL",
    rating: 5,
    quote:
      "Great service for our office HVAC. Communication was excellent and downtime was minimal.",
    service: "Commercial HVAC",
  },
  {
    name: "Samantha L.",
    location: "Winter Park, FL",
    rating: 5,
    quote:
      "Very honest team. No pressure, just clear recommendations and quality workmanship from start to finish.",
    service: "System Replacement",
  },
  {
    name: "Carlos M.",
    location: "Oviedo, FL",
    rating: 5,
    quote:
      "We called for emergency service and they were there fast. They got us back up and running the same day.",
    service: "Emergency Service",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Do you service residential and commercial properties?",
    answer:
      "Yes. Right Coast Air & Mechanical supports both residential and commercial HVAC projects throughout Central Florida and the Greater Orlando area.",
  },
  {
    question: "What HVAC services do you provide?",
    answer:
      "We provide AC repair, AC installation and replacement, preventive maintenance, heating services, commercial HVAC support, and emergency service.",
  },
  {
    question: "Do you offer maintenance?",
    answer:
      "For most homes and small businesses, twice per year is ideal: once before cooling season and once before heating season. Regular maintenance helps extend system life and improve efficiency in Florida's high-heat climate.",
  },
  {
    question: "Do you work on all major brands?",
    answer:
      "We service all major HVAC brands and system types. If you have questions about your equipment, call us and we can confirm support before your appointment.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Yes. We provide free quote consultations for new installations and replacement projects. Use the contact form or call 407-548-4402 to schedule.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Central Florida including St. Cloud, Orlando, Kissimmee, Lake Nona, Winter Park, Oviedo, and surrounding communities.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/ac-install-1.svg",
    alt: "Residential AC condenser installation in Central Florida",
    caption: "High-efficiency condenser installation",
  },
  {
    src: "/images/gallery/commercial-rooftop-1.svg",
    alt: "Commercial rooftop HVAC service in Greater Orlando",
    caption: "Commercial rooftop unit service",
  },
  {
    src: "/images/gallery/maintenance-1.svg",
    alt: "HVAC maintenance technician inspecting system",
    caption: "Preventive maintenance visit",
  },
  {
    src: "/images/gallery/air-handler-1.svg",
    alt: "Air handler replacement project",
    caption: "Air handler upgrade",
  },
  {
    src: "/images/gallery/ductwork-1.svg",
    alt: "Ductwork sealing and airflow balancing",
    caption: "Ductwork optimization",
  },
  {
    src: "/images/gallery/service-truck-1.svg",
    alt: "Right Coast Air service truck on-site",
    caption: "Fast local response",
  },
];

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${businessInfo.name} | Central Florida HVAC`,
    template: `%s | ${businessInfo.name}`,
  },
  description:
    "Trusted HVAC repair, installation, and maintenance for residential and commercial properties in Central Florida.",
  openGraph: {
    title: businessInfo.name,
    description:
      "Residential and commercial HVAC services across St. Cloud and Greater Orlando.",
    url: "/",
    siteName: businessInfo.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/hero-hvac.svg", width: 1200, height: 630, alt: businessInfo.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: businessInfo.name,
    description:
      "Residential and commercial HVAC services across Central Florida.",
    images: ["/images/hero-hvac.svg"],
  },
};

export function createMetadata({ title, description, path }: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${businessInfo.name}`,
      description,
      url: path,
      images: [{ url: "/images/hero-hvac.svg", width: 1200, height: 630, alt: businessInfo.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${businessInfo.name}`,
      description,
      images: ["/images/hero-hvac.svg"],
    },
  };
}
