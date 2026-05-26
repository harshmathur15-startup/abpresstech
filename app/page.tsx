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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-6 py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-7xl relative">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300">
              <Award className="h-3.5 w-3.5" />
              ISO 9001:2008 Certified Manufacturer
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Precision Spare Parts for
              <span className="block text-blue-300">Web Offset Presses</span>
            </h1>
            <p className="mt-6 text-lg text-blue-100/80 leading-relaxed max-w-xl">
              Manufacturer and exporter of high-quality replacement components
              for Komori, Orient, Newsline, Goss, and Fast printing presses.
              Based in New Delhi — serving printers across India for 25+ years.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400 transition-colors"
              >
                Browse Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Get a Quote
              </Link>
            </div>
            <p className="mt-4 text-xs text-blue-200/60">
              No minimum order · Custom sizes available · Pan-India delivery
            </p>
          </div>
        </div>

        {/* Brand strip */}
        <div className="mx-auto max-w-7xl mt-16 relative">
          <p className="text-xs text-blue-300/60 uppercase tracking-widest mb-4">
            Compatible with
          </p>
          <div className="flex flex-wrap gap-3">
            {brands.map((b) => (
              <span
                key={b}
                className="rounded-lg border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[var(--border)] bg-[var(--card)] px-6 py-10">
        <div className="mx-auto max-w-7xl grid gap-6 grid-cols-2 sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-extrabold text-[var(--primary)]">
                {value}
              </p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-6 py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-2">
              Why AB Presstech
            </p>
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              Built to OEM specification. Delivered on time.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                  <Icon className="h-5 w-5 text-[var(--primary)]" />
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
      <section className="px-6 py-20 bg-[var(--muted)]/40">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-2">
                Product Catalogue
              </p>
              <h2 className="text-3xl font-bold text-[var(--foreground)]">
                Popular spare parts
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:opacity-80 transition-opacity"
            >
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <Link
                key={product.id}
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 hover:border-blue-500/40 hover:shadow-lg transition-all"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-2xl">
                    {categoryIcons[product.category] ?? "🔧"}
                  </span>
                  <span className="rounded-full bg-[var(--muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--muted-foreground)]">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-2 mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {product.compatible.slice(0, 3).map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-[var(--border)] bg-[var(--muted)] px-2 py-0.5 text-[10px] font-medium text-[var(--muted-foreground)]"
                    >
                      {c}
                    </span>
                  ))}
                  {product.compatible.length > 3 && (
                    <span className="text-[10px] text-[var(--muted-foreground)] py-0.5">
                      +{product.compatible.length - 3} more
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-blue-500/5 to-slate-500/5 p-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              Need a specific part?
            </h2>
            <p className="mt-3 text-[var(--muted-foreground)] max-w-md mx-auto">
              Send us your press model and part number. We'll confirm
              availability and get you a quote within 24 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-8 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                Send Enquiry
              </Link>
              <a
                href="tel:+911125613801"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-8 py-3.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
              >
                📞 Call (11) 25613801
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
