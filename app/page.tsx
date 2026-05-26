import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  Truck,
  Wrench,
  Phone,
} from "lucide-react";
import { stats, brands, products } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  Rollers: "⚙️",
  "Gears & Pinions": "🔩",
  "Rubber Products": "🔧",
  "Gaskets & Profiles": "🛡️",
  "Sockets & Wheels": "⚡",
  "Complete Machines": "🏭",
};

export default function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06080f] px-6 py-24 text-white">
        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Blue glow */}
        <div className="pointer-events-none absolute -top-32 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-sky-500/8 blur-[80px]" />

        <div className="mx-auto max-w-7xl relative">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            {/* Left — headline + CTAs */}
            <div className="flex-1">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/8 px-3.5 py-1.5 text-xs font-medium text-sky-300">
                <Award className="h-3.5 w-3.5" />
                ISO 9001:2008 Certified Manufacturer
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Precision Spare Parts
                <br />
                for Web Offset Presses
              </h1>
              <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
              <p className="mt-6 text-base text-white/60 leading-relaxed max-w-lg">
                Manufacturer and exporter of high-quality replacement components
                for Komori, Orient, Newsline, Goss, and Fast printing presses.
                Based in New Delhi — serving printers across India for 25+
                years.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
                >
                  Browse Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Get a Quote
                </Link>
              </div>
              <p className="mt-5 text-xs text-white/30 tracking-wide">
                No minimum order &nbsp;·&nbsp; Custom sizes available
                &nbsp;·&nbsp; Pan-India delivery
              </p>
            </div>

            {/* Right — stats card */}
            <div className="mt-12 lg:mt-0 lg:w-80 shrink-0">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-400/60 mb-5">
                  By the numbers
                </p>
                <div className="grid grid-cols-2 gap-px bg-white/8 rounded-xl overflow-hidden">
                  {stats.map(({ value, label }) => (
                    <div
                      key={label}
                      className="bg-white/4 px-5 py-5 hover:bg-white/8 transition-colors"
                    >
                      <p className="text-3xl font-black text-white tracking-tight">
                        {value}
                      </p>
                      <p className="mt-1 text-[11px] text-white/45 leading-snug">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 border-t border-white/8 pt-4 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <p className="text-xs text-white/40">
                    Trusted by printers across India & South Asia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand strip */}
        <div className="mx-auto max-w-7xl mt-16 relative border-t border-white/5 pt-10">
          <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-5">
            Compatible with
          </p>
          <div className="flex flex-wrap gap-2">
            {brands.map((b) => (
              <span
                key={b}
                className="rounded-md border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/70 tracking-wide"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-6 py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)] mb-3">
              Why AB Presstech
            </p>
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              Built to OEM specification.
              <br />
              Delivered on time.
            </h2>
          </div>
          <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-[var(--border)]">
            {[
              {
                icon: Award,
                title: "ISO Certified Quality",
                desc: "Every product batch passes through our in-house QC lab. Dimensional accuracy, hardness, and surface finish verified before dispatch.",
              },
              {
                icon: Wrench,
                title: "Full Customisation",
                desc: "Rubber hardness, gear module, bore size, profile shape — all customisable to your exact press specifications.",
              },
              {
                icon: Truck,
                title: "Fast, Reliable Delivery",
                desc: "We understand press downtime costs money. Stocked items ship within 24 hours. Custom parts within agreed lead times.",
              },
              {
                icon: CheckCircle2,
                title: "OEM-Matched Tolerances",
                desc: "Drop-in replacement parts machined to original equipment dimensions. No adjustment, no rework on installation.",
              },
              {
                icon: CheckCircle2,
                title: "25+ Years Experience",
                desc: "Serving the Indian printing industry since the 1990s. Deep knowledge of every major web offset press platform.",
              },
              {
                icon: CheckCircle2,
                title: "Export Ready",
                desc: "We supply to printers across South Asia and beyond. All documentation and packaging for international shipments provided.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[var(--card)] p-7 hover:bg-[var(--muted)] transition-colors"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10">
                  <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-sm font-bold text-[var(--foreground)] mb-2">
                  {title}
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="px-6 py-20 bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)] mb-2">
                Product Catalogue
              </p>
              <h2 className="text-3xl font-bold text-[var(--foreground)]">
                Popular spare parts
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:opacity-70 transition-opacity"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <Link
                key={product.id}
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 hover:border-blue-500/50 hover:shadow-md transition-all"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xl">
                    {categoryIcons[product.category] ?? "🔧"}
                  </span>
                  <span className="rounded-md bg-[var(--muted)] px-2 py-0.5 text-[10px] font-semibold text-[var(--muted-foreground)] uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[var(--foreground)] mb-1.5 group-hover:text-[var(--primary)] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-2 mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {product.compatible.slice(0, 3).map((c) => (
                    <span
                      key={c}
                      className="rounded border border-[var(--border)] px-2 py-0.5 text-[10px] font-medium text-[var(--muted-foreground)]"
                    >
                      {c}
                    </span>
                  ))}
                  {product.compatible.length > 3 && (
                    <span className="text-[10px] text-[var(--muted-foreground)] py-0.5">
                      +{product.compatible.length - 3}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-[#06080f] text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-400 mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need a specific part?
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto leading-relaxed">
            Send us your press model and part number. We'll confirm availability
            and get you a quote within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Send Enquiry
            </Link>
            <a
              href="tel:+911125613801"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white/80 hover:bg-white/10 transition-colors"
            >
              📞 Call (11) 25613801
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
