"use client";

import { useState } from "react";
import {
  CheckCircle2,
  MapPin,
  TrendingUp,
  Package,
  Handshake,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Package,
    title: "500+ Products to Sell",
    desc: "Access our full catalogue of web offset press spare parts — rollers, gears, rubber products, gaskets, and more — to offer your customers a one-stop solution.",
  },
  {
    icon: TrendingUp,
    title: "Attractive Dealer Margins",
    desc: "Competitive pricing structure with healthy margins for distributors. Volume tiers available as your business grows with us.",
  },
  {
    icon: MapPin,
    title: "Territory Protection",
    desc: "Exclusive or semi-exclusive territories available for serious partners. We don't flood regions — your investment in building the market is protected.",
  },
  {
    icon: CheckCircle2,
    title: "ISO-Certified Products",
    desc: "Sell with confidence. Every product you supply carries our ISO 9001:2008 quality backing — easy to justify to quality-conscious print buyers.",
  },
  {
    icon: Users,
    title: "Sales & Technical Support",
    desc: "Our team supports your sales process. Technical guidance, product selection help, and customer query support provided directly to you.",
  },
  {
    icon: Handshake,
    title: "25+ Years of Reputation",
    desc: "Partner with an established name in the Indian printing industry. Our track record sells itself to press owners who already know the AB Presstech brand.",
  },
];

const idealPartner = [
  "Existing business serving printing houses, newspaper publishers, or packaging companies",
  "Engineering or industrial supply background preferred",
  "Presence in a state or region with active printing industry",
  "Ability to maintain basic stock of fast-moving parts",
  "Interest in building a long-term business relationship",
];

export default function PartnershipsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--background)]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-[#06080f] px-6 py-20 text-white">
        <div className="pointer-events-none absolute -top-20 right-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="mx-auto max-w-7xl relative flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-400/70 mb-4">
              Partner With Us
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Become an AB Presstech
              <br />
              Authorised Dealer
            </h1>
            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
            <p className="mt-6 max-w-lg text-white/50 leading-relaxed">
              We&apos;re expanding our distribution network across India. If you
              serve the printing industry and want to add a trusted,
              ISO-certified spare parts brand to your portfolio — we want to
              hear from you.
            </p>
            <a
              href="#apply"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              <Handshake className="h-4 w-4" />
              Apply to Partner
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-10 lg:mt-0 lg:w-72 shrink-0">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-400/60 mb-5">
                Why dealers choose us
              </p>
              <div className="space-y-4">
                {[
                  { value: "500+", label: "Products in catalogue" },
                  { value: "25+", label: "Years of brand trust" },
                  { value: "50+", label: "Press models covered" },
                  { value: "ISO", label: "9001:2008 Certified" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 border-b border-white/6 pb-4 last:border-0 last:pb-0"
                  >
                    <p className="text-2xl font-black text-white w-16 shrink-0">
                      {value}
                    </p>
                    <p className="text-xs text-white/45">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)] mb-2">
              Dealer Benefits
            </p>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              What you get as an AB Presstech dealer
            </h2>
          </div>
          <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-[var(--border)]">
            {benefits.map(({ icon: Icon, title, desc }) => (
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

      {/* Ideal partner */}
      <section className="px-6 py-16 bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)] mb-3">
              Who We&apos;re Looking For
            </p>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
              The ideal AB Presstech dealer
            </h2>
            <ul className="space-y-3">
              {idealPartner.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--muted-foreground)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
            <p className="text-sm font-bold text-[var(--foreground)] mb-2">
              Priority regions
            </p>
            <p className="text-xs text-[var(--muted-foreground)] mb-5">
              We are actively looking for dealers in these states:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Maharashtra",
                "Karnataka",
                "Tamil Nadu",
                "Telangana",
                "Gujarat",
                "Rajasthan",
                "West Bengal",
                "Punjab",
                "Uttar Pradesh",
                "Madhya Pradesh",
              ].map((state) => (
                <span
                  key={state}
                  className="flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--muted)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]"
                >
                  <MapPin className="h-3 w-3 text-[var(--accent)]" />
                  {state}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-[var(--muted-foreground)]">
              Don&apos;t see your state? Apply anyway — we review all enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)] mb-2">
              Apply Now
            </p>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Dealer partnership enquiry
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Fill in the form and our team will get back to you within 2
              business days.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-12 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                Application Received
              </h3>
              <p className="text-[var(--muted-foreground)]">
                Thank you, {form.name}. Our partnerships team will contact you
                within 2 business days.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    city: "",
                    state: "",
                    experience: "",
                    message: "",
                  });
                }}
                className="mt-6 text-sm text-[var(--primary)] hover:underline"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 space-y-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[var(--muted-foreground)]">
                    Your Name *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Suresh Kumar"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[var(--muted-foreground)]">
                    Company Name *
                  </label>
                  <input
                    required
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    placeholder="Your Business Name"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[var(--muted-foreground)]">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[var(--muted-foreground)]">
                    Phone / WhatsApp *
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+91 98100 XXXXX"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[var(--muted-foreground)]">
                    City
                  </label>
                  <input
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="Mumbai"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[var(--muted-foreground)]">
                    State *
                  </label>
                  <input
                    required
                    value={form.state}
                    onChange={(e) =>
                      setForm({ ...form, state: e.target.value })
                    }
                    placeholder="Maharashtra"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-[var(--muted-foreground)]">
                  Current business / industry experience
                </label>
                <input
                  value={form.experience}
                  onChange={(e) =>
                    setForm({ ...form, experience: e.target.value })
                  }
                  placeholder="e.g. Engineering supplies, printing consumables, 8 years"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-[var(--muted-foreground)]">
                  Tell us about your business
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Describe your current customers, geographic reach, and why you'd like to partner with AB Presstech…"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500/40 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[var(--primary)] py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Submit Partnership Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
