import { siteConfig } from "@/lib/site-config";
import { SectionHeader } from "@/components/common/section-header";
import Link from "next/link";
import { MapPin, Clock, Phone, Mail, Send, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Contact Danrich Laundry Services. Call or visit us at our Ojodu Berger, Lagos location.",
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="section-lg bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container">
          <SectionHeader
            label="Get in Touch"
            title="Contact Us"
            subtitle="Have a question? Send us a message or call us directly."
            className="mb-10 sm:mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="card-elevated p-5 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Send us a message</h3>
                </div>
                <form className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="label">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="input"
                      />
                    </div>
                    <div>
                      <label className="label">Email</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label">Phone</label>
                    <input
                      type="tel"
                      placeholder="0703 113 3304"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="label">Message</label>
                    <textarea
                      rows={5}
                      placeholder="How can we help you?"
                      className="input resize-none"
                    />
                  </div>
                  <Link
                    href="/book"
                    className="btn-primary w-fit group"
                  >
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    Send Message
                  </Link>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card p-4 sm:p-6 card-hover group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.landmark}<br />
                      {siteConfig.address.city}, {siteConfig.address.state}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-4 sm:p-6 card-hover group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground">Hours</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      {siteConfig.hours.map((h) => (
                        <li key={h.day} className="flex justify-between gap-2">
                          <span className="truncate">{h.day}</span>
                          <span className="font-medium text-foreground whitespace-nowrap text-xs sm:text-sm">{h.open === "Closed" ? "Closed" : `${h.open} - ${h.close}`}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card p-4 sm:p-6 card-hover group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      <a
                        href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                        className="hover:text-primary transition-colors font-medium"
                      >
                        {siteConfig.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-4 sm:p-6 card-hover group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-light group-hover:text-white">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="hover:text-primary transition-colors font-medium"
                      >
                        {siteConfig.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
