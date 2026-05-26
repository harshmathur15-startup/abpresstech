"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, Phone } from "lucide-react";
import { products, categories } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  Rollers: "⚙️",
  "Gears & Pinions": "🔩",
  "Rubber Products": "🔧",
  "Gaskets & Profiles": "🛡️",
  "Sockets & Wheels": "⚡",
  "Complete Machines": "🏭",
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<(typeof products)[0] | null>(null);

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.compatible.some((c) => c.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Page header */}
      <div className="relative overflow-hidden bg-[#06080f] px-6 py-20 text-white">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="mx-auto max-w-7xl relative">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-400/70 mb-4">
            Product Catalogue
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Spare Parts for Web Offset Presses
          </h1>
          <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
          <p className="mt-6 max-w-xl text-white/50 leading-relaxed">
            Browse our full range of replacement parts compatible with Komori,
            Orient, Newsline, Goss, and Fast presses. Custom sizes available on
            request.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Search + filter bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, type, or press brand…"
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] pl-10 pr-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
            <SlidersHorizontal className="h-4 w-4" />
            <span>{filtered.length} products</span>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[var(--primary)] text-white"
                  : "border border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {cat !== "All" && (
                <span className="mr-1.5">{categoryIcons[cat]}</span>
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-[var(--muted-foreground)]">
              No products match your search.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-4 text-sm text-[var(--primary)] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelected(product)}
                className="group text-left rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 hover:border-blue-500/40 hover:shadow-lg transition-all"
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
                  {product.compatible.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-[var(--border)] bg-[var(--muted)] px-2 py-0.5 text-[10px] font-medium text-[var(--muted-foreground)]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs font-semibold text-[var(--primary)]">
                  View details →
                </p>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className="text-3xl">
                  {categoryIcons[selected.category] ?? "🔧"}
                </span>
                <div>
                  <p className="text-[11px] font-medium text-[var(--primary)] uppercase tracking-wide">
                    {selected.category}
                  </p>
                  <h2 className="text-base font-bold text-[var(--foreground)]">
                    {selected.name}
                  </h2>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] text-xl leading-none"
              >
                ×
              </button>
            </div>

            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
              {selected.description}
            </p>

            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-2">
                Specifications
              </p>
              <ul className="space-y-1.5">
                {selected.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                    <span className="text-[var(--foreground)]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-2">
                Compatible with
              </p>
              <div className="flex flex-wrap gap-2">
                {selected.compatible.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-[var(--border)] bg-[var(--muted)] px-3 py-1 text-xs font-medium text-[var(--foreground)]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/contact?product=${encodeURIComponent(selected.name)}`}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              onClick={() => setSelected(null)}
            >
              <Phone className="h-4 w-4" />
              Request Quote for This Part
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
