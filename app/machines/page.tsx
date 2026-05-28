"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, CheckCircle2, RefreshCw } from "lucide-react";
import { machinePlatforms, refurbishedMachines } from "@/lib/data";

const conditionColor: Record<string, string> = {
  Good: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  "Very Good": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  Excellent: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
};

const originFlag: Record<string, string> = {
  Japan: "🇯🇵",
  India: "🇮🇳",
  USA: "🇺🇸",
};

export default function MachinesPage() {
  const [selected, setSelected] = useState<
    (typeof refurbishedMachines)[0] | null
  >(null);

  return (
    <div className="bg-[var(--background)]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#06080f] px-6 py-20 text-white">
        <div className="pointer-events-none absolute -top-20 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="mx-auto max-w-7xl relative">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-400/70 mb-4">
            Machines
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Press Platforms We Support
          </h1>
          <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
          <p className="mt-6 max-w-xl text-white/50 leading-relaxed">
            We manufacture spare parts for every major web offset press used in
            India — and supply refurbished complete presses for buyers looking
            to expand or upgrade.
          </p>
        </div>
      </div>

      {/* Press Platforms */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)] mb-2">
              Spare Parts Support
            </p>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Press platforms we supply parts for
            </h2>
          </div>

          <div className="space-y-4">
            {machinePlatforms.map((m) => (
              <div
                key={m.brand}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8">
                  {/* Brand header */}
                  <div className="sm:w-48 shrink-0 mb-4 sm:mb-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">
                        {originFlag[m.origin] ?? "🏭"}
                      </span>
                      <h3 className="text-lg font-black text-[var(--foreground)]">
                        {m.brand}
                      </h3>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      Made in {m.origin}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {m.models.map((model) => (
                        <span
                          key={model}
                          className="rounded border border-[var(--border)] px-2 py-0.5 text-[10px] font-medium text-[var(--muted-foreground)]"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex-1">
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                      {m.description}
                    </p>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-2">
                        Parts we supply
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {m.partsSupplied.map((p) => (
                          <span
                            key={p}
                            className="flex items-center gap-1 rounded-lg bg-[var(--muted)] px-3 py-1 text-xs font-medium text-[var(--foreground)]"
                          >
                            <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 sm:mt-0 sm:w-36 shrink-0 flex sm:flex-col gap-2">
                    <Link
                      href={`/products?category=All`}
                      className="flex-1 sm:flex-none rounded-lg border border-[var(--border)] px-4 py-2 text-center text-xs font-semibold text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                    >
                      View Parts
                    </Link>
                    <Link
                      href={`/contact?press=${m.brand}`}
                      className="flex-1 sm:flex-none rounded-lg bg-[var(--primary)] px-4 py-2 text-center text-xs font-semibold text-white hover:opacity-90 transition-opacity"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refurbished Machines */}
      <section className="px-6 py-20 bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-start justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <RefreshCw className="h-4 w-4 text-[var(--accent)]" />
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                  Refurbished Machines
                </p>
              </div>
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Complete presses available now
              </h2>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] max-w-lg">
                Each machine is fully overhauled in our New Delhi facility — all
                wear parts replaced, electricals checked, trial run completed
                before dispatch.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Ask About Stock
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {refurbishedMachines.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelected(m)}
                className="group text-left rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-blue-500/40 hover:shadow-md transition-all"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-1">
                      {m.brand} · {m.year}
                    </p>
                    <h3 className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                      {m.name}
                    </h3>
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${conditionColor[m.condition]}`}
                  >
                    {m.condition}
                  </span>
                </div>

                {/* Key specs */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Cutoff", value: m.cutoff },
                    { label: "Speed", value: m.speed },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="rounded-lg bg-[var(--muted)] px-3 py-2"
                    >
                      <p className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="text-sm font-bold text-[var(--foreground)]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-2 mb-4">
                  {m.description}
                </p>

                <p className="text-xs font-semibold text-[var(--primary)]">
                  View details & request price →
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-[#06080f] text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-400/70 mb-4">
            Not finding what you need?
          </p>
          <h2 className="text-2xl font-bold text-white mb-3">
            We can source it for you
          </h2>
          <p className="text-white/50 max-w-md mx-auto mb-8">
            Tell us the press model and configuration you need. We'll search our
            network of verified press owners and get back to you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Send Requirement
          </Link>
        </div>
      </section>

      {/* Machine detail modal */}
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
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-1">
                  {selected.brand} · {selected.year}
                </p>
                <h2 className="text-lg font-bold text-[var(--foreground)]">
                  {selected.name}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${conditionColor[selected.condition]}`}
                >
                  {selected.condition}
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] text-xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>

            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
              {selected.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { label: "Cutoff", value: selected.cutoff },
                { label: "Max Speed", value: selected.speed },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl bg-[var(--muted)] px-4 py-3"
                >
                  <p className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  <p className="text-base font-bold text-[var(--foreground)]">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-3">
                What&apos;s included
              </p>
              <ul className="space-y-2">
                {selected.specs.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground)]">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/contact?machine=${encodeURIComponent(selected.name)}`}
              onClick={() => setSelected(null)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              Request Price & Availability
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
