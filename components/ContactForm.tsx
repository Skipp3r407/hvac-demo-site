import { businessInfo } from "@/data/siteContent";
import { CTAButton } from "./CTAButton";

type ContactFormProps = {
  compact?: boolean;
};

export function ContactForm({ compact = false }: ContactFormProps) {
  return (
    <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.09)]">
      <h3 className="text-2xl font-heading uppercase text-deepNavy">Request a Free Quote</h3>
      <p className="mt-2 text-sm text-charcoal/75">
        Tell us what you need and our team will get back to you quickly.
      </p>

      <div className={`mt-5 grid gap-4 ${compact ? "sm:grid-cols-2" : ""}`}>
        <label className="block text-sm font-medium text-charcoal">
          Full Name
          <input
            type="text"
            name="fullName"
            autoComplete="name"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-primaryBlue focus:outline-none"
            placeholder="Your full name"
          />
        </label>

        <label className="block text-sm font-medium text-charcoal">
          Phone Number
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-primaryBlue focus:outline-none"
            placeholder="(407) 555-1234"
          />
        </label>

        <label className="block text-sm font-medium text-charcoal">
          Email Address
          <input
            type="email"
            name="email"
            autoComplete="email"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-primaryBlue focus:outline-none"
            placeholder="you@email.com"
          />
        </label>

        <label className="block text-sm font-medium text-charcoal">
          Service Needed
          <select
            name="service"
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm focus:border-primaryBlue focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>AC Repair</option>
            <option>AC Installation</option>
            <option>HVAC Maintenance</option>
            <option>Heating Services</option>
            <option>Commercial HVAC</option>
            <option>Emergency Service</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block text-sm font-medium text-charcoal">
        Project Details
        <textarea
          name="message"
          rows={5}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-primaryBlue focus:outline-none"
          placeholder="Describe your system issue, installation needs, or service request."
        />
      </label>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-ctaAccent px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#a83327]"
        >
          Submit Request
        </button>
        <CTAButton href={businessInfo.phoneHref} variant="ghost">
          Or Call {businessInfo.phoneDisplay}
        </CTAButton>
      </div>

      <p className="mt-4 text-xs text-charcoal/70">
        By submitting this form, you agree to be contacted about your HVAC request.
      </p>
    </form>
  );
}
