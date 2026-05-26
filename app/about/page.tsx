import { CheckCircle2, Award, Globe, Users } from "lucide-react";
import { stats, brands } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="bg-[var(--background)]">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">
            About Us
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            25+ Years of Press
            <br />
            Engineering Excellence
          </h1>
          <p className="mt-5 max-w-xl text-blue-100/80 leading-relaxed">
            AB Presstech Machineries Private Limited has been the trusted
            partner for web offset press maintenance across India since the
            1990s — manufacturing spare parts that keep presses running.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-[var(--border)] bg-[var(--card)] px-6 py-10">
        <div className="mx-auto max-w-7xl grid grid-cols-2 gap-6 sm:grid-cols-4">
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
      </div>

      {/* Story */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3">
              Our Story
            </p>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-5">
              Born out of the Indian printing industry
            </h2>
            <div className="space-y-4 text-sm text-[var(--muted-foreground)] leading-relaxed">
              <p>
                AB Presstech Machineries was founded in New Delhi with a single
                purpose: to give Indian newspaper and commercial printers access
                to high-quality, affordable replacement parts for their web
                offset presses — without the long lead times and high costs of
                imported OEM components.
              </p>
              <p>
                Over the decades we've built deep expertise across the major
                press platforms used in India — Komori, Orient, Newsline, Goss,
                and Fast. Our engineering team reverse-engineers wear parts,
                manufacturers them to OEM tolerances, and ships them faster than
                any overseas supplier can.
              </p>
              <p>
                Today we serve printing houses ranging from single-press
                newspaper publishers to large commercial printing groups across
                India and South Asia. Every order, large or small, receives the
                same commitment to quality and on-time delivery.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: Award,
                title: "ISO Certified",
                desc: "Quality management system certified to ISO 9001:2008",
              },
              {
                icon: Globe,
                title: "Export Ready",
                desc: "Supplying printers across South Asia and beyond",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Engineers with decades of press industry experience",
              },
              {
                icon: CheckCircle2,
                title: "Zero Compromise",
                desc: "Every part tested before it leaves our facility",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
                  <Icon className="h-4 w-4 text-[var(--primary)]" />
                </div>
                <p className="text-sm font-bold text-[var(--foreground)] mb-1">
                  {title}
                </p>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible brands */}
      <section className="px-6 py-16 bg-[var(--muted)]/40">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3">
            Press Compatibility
          </p>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
            Parts for every major web offset platform
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((b) => (
              <div
                key={b}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-8 py-4"
              >
                <p className="text-lg font-bold text-[var(--foreground)]">
                  {b}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--muted-foreground)]">
            Don't see your press brand listed?{" "}
            <a
              href="/contact"
              className="text-[var(--primary)] hover:underline font-medium"
            >
              Contact us
            </a>{" "}
            — we may still be able to supply.
          </p>
        </div>
      </section>

      {/* Location */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3">
                  Our Location
                </p>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                  New Delhi, India
                </h3>
                <div className="space-y-2 text-sm text-[var(--muted-foreground)]">
                  <p>WZ-13D-3, LGF 3 & 4, Asalatpur</p>
                  <p>A-2 Block, Janakpuri</p>
                  <p>New Delhi 110058, India</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3">
                  Get in Touch
                </p>
                <div className="space-y-2 text-sm text-[var(--muted-foreground)]">
                  <p>
                    📞{" "}
                    <a
                      href="tel:+911125613801"
                      className="hover:text-[var(--foreground)]"
                    >
                      (11) 25613801
                    </a>
                  </p>
                  <p>
                    📱{" "}
                    <a
                      href="tel:+919810094476"
                      className="hover:text-[var(--foreground)]"
                    >
                      9810094476
                    </a>{" "}
                    /{" "}
                    <a
                      href="tel:+919810093476"
                      className="hover:text-[var(--foreground)]"
                    >
                      9810093476
                    </a>
                  </p>
                  <p>
                    ✉️{" "}
                    <a
                      href="mailto:moulikrubber@gmail.com"
                      className="hover:text-[var(--foreground)]"
                    >
                      moulikrubber@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
