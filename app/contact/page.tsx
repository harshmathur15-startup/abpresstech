"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    pressModel: "",
    partName: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--background)]">
      {/* Header */}
      <div className="relative overflow-hidden bg-[#06080f] px-6 py-20 text-white">
        <div className="pointer-events-none absolute -top-20 right-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="mx-auto max-w-7xl relative">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-400/70 mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Get a Quote
          </h1>
          <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
          <p className="mt-6 max-w-lg text-white/50 leading-relaxed">
            Tell us your press model and the part you need. We'll confirm
            availability and send you a quote within 24 hours.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-4">
                Reach Us Directly
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "(11) 25613801",
                    href: "tel:+911125613801",
                  },
                  {
                    icon: Phone,
                    label: "Mobile",
                    value: "9810094476 / 9810093476",
                    href: "tel:+919810094476",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "moulikrubber@gmail.com",
                    href: "mailto:moulikrubber@gmail.com",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                      <Icon className="h-4 w-4 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                  <MapPin className="h-4 w-4 text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--muted-foreground)] mb-1">
                    Address
                  </p>
                  <p className="text-sm text-[var(--foreground)] leading-relaxed">
                    WZ-13D-3, LGF 3 & 4, Asalatpur
                    <br />
                    A-2 Block, Janakpuri
                    <br />
                    New Delhi 110058, India
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                  <Clock className="h-4 w-4 text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--muted-foreground)] mb-1">
                    Response Time
                  </p>
                  <p className="text-sm text-[var(--foreground)]">
                    Quotes within 24 hours
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    Mon – Sat, 9 AM – 6 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 p-12 text-center">
                <div>
                  <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                    Enquiry Received
                  </h3>
                  <p className="text-[var(--muted-foreground)]">
                    Thank you, {form.name}. We'll get back to you within 24
                    hours with a quote.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        pressModel: "",
                        partName: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-sm text-[var(--primary)] hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
                <h2 className="text-lg font-bold text-[var(--foreground)] mb-6">
                  Part Enquiry Form
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-[var(--muted-foreground)]">
                        Your Name *
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Suresh Kumar"
                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-[var(--muted-foreground)]">
                        Company Name
                      </label>
                      <input
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                        placeholder="XYZ Printers Pvt. Ltd."
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
                        placeholder="suresh@xyzprinters.com"
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
                        Press Model / Brand
                      </label>
                      <input
                        value={form.pressModel}
                        onChange={(e) =>
                          setForm({ ...form, pressModel: e.target.value })
                        }
                        placeholder="e.g. Komori System 25, Orient 508"
                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-[var(--muted-foreground)]">
                        Part Name / Part Number
                      </label>
                      <input
                        value={form.partName}
                        onChange={(e) =>
                          setForm({ ...form, partName: e.target.value })
                        }
                        placeholder="e.g. Nipping Roller, Part# K-2234"
                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-[var(--muted-foreground)]">
                      Additional Details / Quantity
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Describe your requirement, quantity needed, urgency, or any custom specifications…"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[var(--primary)] py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  >
                    Send Enquiry — Get Quote in 24 Hours
                  </button>

                  <p className="text-center text-xs text-[var(--muted-foreground)]">
                    Or call us directly:{" "}
                    <a
                      href="tel:+919810094476"
                      className="text-[var(--primary)] hover:underline font-medium"
                    >
                      9810094476
                    </a>
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
