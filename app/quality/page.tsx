import { ShieldCheck, Microscope, FileCheck, Layers } from "lucide-react";
import { certifications } from "@/lib/data";

const process = [
  {
    step: "01",
    title: "Raw Material Inspection",
    desc: "All incoming materials — steel alloys, rubber compounds, bronze billets — are inspected against material certificates. Non-conforming lots are rejected before entering production.",
  },
  {
    step: "02",
    title: "In-Process Dimensional Checks",
    desc: "Critical dimensions are checked at each machining stage using calibrated gauges and CMM equipment. Any deviation from OEM tolerances triggers immediate rework.",
  },
  {
    step: "03",
    title: "Hardness & Surface Testing",
    desc: "Rubber products are hardness-tested on every batch. Metallic parts undergo Brinell/Rockwell hardness verification. Surface finish is checked against specification.",
  },
  {
    step: "04",
    title: "Final Inspection & Sign-Off",
    desc: "Every finished part goes through a final inspection checklist before packaging. Only parts that pass all criteria receive a QC release stamp.",
  },
  {
    step: "05",
    title: "Traceability Documentation",
    desc: "Each batch is assigned a lot number traceable back to raw material source and production date. Material test certificates provided on request.",
  },
  {
    step: "06",
    title: "Packaging & Dispatch",
    desc: "Parts are individually wrapped and labelled to prevent transit damage. Export orders use moisture-barrier packaging and crating as required.",
  },
];

export default function QualityPage() {
  return (
    <div className="bg-[var(--background)]">
      {/* Header */}
      <div className="relative overflow-hidden bg-[#06080f] px-6 py-20 text-white">
        <div className="pointer-events-none absolute -top-20 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="mx-auto max-w-7xl relative">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-400/70 mb-4">
            Quality
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            ISO-Certified Quality
            <br />
            from First Principle
          </h1>
          <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
          <p className="mt-6 max-w-xl text-white/50 leading-relaxed">
            Our ISO 9001:2008 certification isn't a wall plaque — it's a
            manufacturing discipline applied at every step from raw material
            receipt to final dispatch.
          </p>
        </div>
      </div>

      {/* Certification highlights */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-2">
              Our Commitments
            </p>
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              Quality you can verify
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {certifications.map(({ title, desc }, i) => {
              const icons = [ShieldCheck, Microscope, FileCheck, Layers];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={title}
                  className="flex gap-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                    <Icon className="h-5 w-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--foreground)] mb-2">
                      {title}
                    </h3>
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QC process */}
      <section className="px-6 py-20 bg-[var(--muted)]/40">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-2">
              Our Process
            </p>
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              Six-stage quality control
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {process.map(({ step, title, desc }) => (
              <div
                key={step}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <p className="text-3xl font-extrabold text-[var(--primary)]/20 mb-3">
                  {step}
                </p>
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

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Need material certificates or QC documentation?
          </h2>
          <p className="text-[var(--muted-foreground)] mb-8">
            We provide full traceability documentation with every order on
            request. Contact us to discuss your quality requirements before
            placing an order.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-8 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Contact Our Quality Team
          </a>
        </div>
      </section>
    </div>
  );
}
