import Link from "next/link";
import Image from "next/image";
import { siteConfig, services } from "@/lib/site-config";
import { SectionHeader } from "@/components/common/section-header";
import { ServiceCard } from "@/components/common/service-card";
import { Clock, MapPin, Phone, Shield, Star, Truck } from "lucide-react";

export default function HomePage() {
  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  const todayHours =
    siteConfig.hours.find((h) => h.day === today) ?? siteConfig.hours[0];

  const stats = [
    { label: "Google Rating", value: "5.0" },
    { label: "Happy Customers", value: "2000+" },
    { label: "Garments Cleaned", value: "50K+" },
    { label: "5-Star Reviews", value: "100+" },
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/1787306069117.publer.com.jpg"
            alt=""
            fill
            className="object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-22">
          <div className="max-w-2xl space-y-5 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm animate-slide-up">
              Professional Dry Cleaning
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1] animate-slide-up stagger-1">
              Danrich Laundry Services
            </h1>
            <p className="text-lg font-light text-white max-w-xl leading-relaxed animate-slide-up stagger-2">
              {siteConfig.tagline}
            </p>
            <p className="text-base text-white/90 max-w-md leading-relaxed animate-slide-up stagger-3">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up stagger-4">
              <Link
                href="/book"
                className="btn-primary h-12 px-8"
              >
                Book Online
              </Link>
              <a
                href="tel:07031133304"
                className="btn-secondary h-12 px-8 border-white/30 text-white hover:bg-white/10 hover:border-white/50 focus:ring-white/30 focus:ring-offset-black"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/20 animate-slide-up stagger-5">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Today: {todayHours.open === "Closed" ? "Closed" : `${todayHours.open} - ${todayHours.close}`}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background border-t border-border">
        <div className="container">
          <SectionHeader
            label="Our Services"
            title="Professional Laundry Services"
            subtitle="From expert dry cleaning to wash & fold, we provide premium garment care for individuals and businesses in Lagos."
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-elevated p-4 sm:p-6 text-center animate-fade-in stagger-1"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background border-t border-border">
        <div className="container">
          <SectionHeader
            label="Why Choose Us"
            title="Lagos's Trusted Dry Cleaner"
            subtitle="We deliver exceptional garment care with a personal touch."
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Star, title: "5.0 Google Rating", desc: "Consistently rated 5 stars by our satisfied customers across Lagos." },
              { icon: Shield, title: "Expert Garment Care", desc: "Professional techniques and premium solvents for the best results on every fabric." },
              { icon: Truck, title: "Convenient Location", desc: "Easily accessible at Sabo Bus Stop, Ojodu Berger with friendly service." },
              { icon: Clock, title: "Fast Turnaround", desc: "Quick and efficient service so your clothes are ready when you need them." },
              { icon: MapPin, title: "Central Ojodu Berger", desc: "Conveniently located on Yakoyo Street, opposite Alpha Morgan Bank." },
              { icon: Phone, title: "Always Available", desc: "Call us anytime on 0703 113 3304 for bookings and enquiries." },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="card-elevated p-4 sm:p-6 text-center animate-fade-in stagger-1"
              >
                <div className="mx-auto mb-4 icon-box-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30 border-t border-border">
        <div className="container">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-primary-light p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-light/30 via-transparent to-transparent" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white mb-6 animate-fade-in">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Bulk & Corporate Orders
              </span>
              <h2 className="text-3xl font-bold text-white sm:text-4xl animate-slide-up stagger-1">
                Need bulk laundry services?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80 animate-slide-up stagger-2">
                We offer tailored solutions for hotels, restaurants, gyms, and corporate organizations. Contact us for a personalized quote.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-3">
                <a
                  href="tel:07031133304"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary hover:bg-white/90 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call 0703 113 3304
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
