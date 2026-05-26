import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AB Presstech Machineries — Web Offset Press Spare Parts",
  description:
    "ISO 9001:2008 certified manufacturer of spare parts for web offset printing presses. Compatible with Komori, Orient, Newsline, Goss, and Fast. New Delhi, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-[var(--border)] bg-[var(--card)] py-10 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                <div>
                  <p className="text-sm font-bold text-[var(--foreground)] mb-2">
                    AB Presstech Machineries
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    ISO 9001:2008 certified manufacturer of web offset press
                    spare parts. Trusted by printers across India for 25+ years.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-3">
                    Products
                  </p>
                  {[
                    "Nipping Rollers",
                    "Gears & Pinions",
                    "Rubber Products",
                    "Gaskets & Profiles",
                    "Sockets & Wheels",
                  ].map((p) => (
                    <a
                      key={p}
                      href="/products"
                      className="block text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] py-0.5 transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-3">
                    Company
                  </p>
                  {[
                    ["About Us", "/about"],
                    ["Quality Policy", "/quality"],
                    ["Contact Us", "/contact"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="block text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] py-0.5 transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-3">
                    Contact
                  </p>
                  <div className="space-y-1.5 text-xs text-[var(--muted-foreground)]">
                    <p>WZ-13D-3, LGF 3&4, Asalatpur</p>
                    <p>A-2 Block, Janakpuri</p>
                    <p>New Delhi 110058, India</p>
                    <p className="pt-1">📞 (11) 25613801</p>
                    <p>📱 9810094476 / 9810093476</p>
                    <p>✉️ moulikrubber@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-[var(--muted-foreground)]">
                  © 2026 AB Presstech Machineries Private Limited. All rights
                  reserved.
                </p>
                <p className="text-xs text-[var(--muted-foreground)]">
                  ISO 9001:2008 Certified · Made in India
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
