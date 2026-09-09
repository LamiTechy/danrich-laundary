import Link from "next/link";
import Image from "next/image";
import { siteConfig, navigation } from "@/lib/site-config";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-2" aria-label="Danrich Laundry Services Home">
              <Image
                src="/logo.svg"
                alt="Danrich"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl shadow-md"
              />
              <span className="text-xl font-bold text-foreground">Danrich</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">{siteConfig.tagline}</p>
            <div className="flex space-x-4">
              <a href="#" className="icon-box-sm bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Facebook">
                <span className="text-sm font-bold" aria-hidden="true">f</span>
              </a>
              <a href="#" className="icon-box-sm bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Instagram">
                <span className="text-sm font-bold" aria-hidden="true">ig</span>
              </a>
              <a href="#" className="icon-box-sm bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="WhatsApp">
                <span className="text-sm font-bold" aria-hidden="true">wa</span>
              </a>
            </div>
            <p className="text-xs text-muted-foreground pt-4 border-t border-border">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    {item.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </ArrowRight>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Hours
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="font-medium text-foreground whitespace-nowrap">{h.open === "Closed" ? "Closed" : `${h.open} - ${h.close}`}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary/70" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.landmark}<br />
                  {siteConfig.address.city}, {siteConfig.address.state}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary/70" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary/70" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              Serving the Ojodu Berger community with pride
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-muted-foreground">
              <span className="badge-primary">5.0 Google Rating</span>
              <span className="badge-primary">Professional Service</span>
              <span className="badge-primary">Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
