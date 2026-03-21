import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="text-balance text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
          Modern Websites That Make Your Business Look Professional and Bring in More Customers
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
          I design clean, high-converting websites for businesses that want to stand out and grow.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            Start Your Project
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
