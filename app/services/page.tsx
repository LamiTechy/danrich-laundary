import { services } from "@/lib/site-config";
import { SectionHeader } from "@/components/common/section-header";
import { ServiceCard } from "@/components/common/service-card";
import Link from "next/link";
import { Sparkles, Truck, Clock, Shield, Leaf, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Services",
  description:
    "Explore our full range of professional laundry and dry cleaning services at Danrich Laundry Services in Lagos.",
};

const benefits = [
  { icon: Sparkles, title: "Eco-Friendly", desc: "Green detergents and professional solvents for a lighter footprint." },
  { icon: Truck, title: "Convenient Location", desc: "Easily accessible at Sabo Bus Stop, Ojodu Berger, Lagos." },
  { icon: Clock, title: "Fast Turnaround", desc: "Quick service so your clothes are ready when you need them." },
  { icon: Shield, title: "Satisfaction Guaranteed", desc: "We stand behind every order with a quality promise." },
];

const processSteps = [
  { step: "01", title: "Drop Off Your Clothes", desc: "Bring your garments to our shop at 3 Yakoyo Street, Ojodu Berger, or schedule a pickup." },
  { step: "02", title: "We Clean With Care", desc: "Our team uses professional techniques and premium detergents for the best results." },
  { step: "03", title: "Ready for Pickup", desc: "Your clean, fresh garments are ready for pickup or delivery within the agreed time." },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="section-lg bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container">
          <SectionHeader
            label="Services"
            title="Professional Laundry Services"
            subtitle="We offer a complete range of dry cleaning and laundry services to fit your schedule and needs."
            className="mb-20"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background border-y border-border">
        <div className="container">
          <SectionHeader
            label="How It Works"
            title="Simple Process, Perfect Results"
            subtitle="Three easy steps to fresh, clean laundry without the hassle."
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative card p-5 sm:p-8 text-center group hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <div className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30 border-y border-border">
        <div className="container">
          <SectionHeader
            label="Why Choose Us"
            title="Lagos's Trusted Dry Cleaner"
            subtitle="We deliver exceptional garment care with a personal touch."
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="card p-4 sm:p-6 text-center card-hover group"
              >
                  <div className="mx-auto mb-4 icon-box-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background border-t border-border">
        <div className="container">
          <div className="relative rounded-2xl bg-gradient-to-r from-primary to-primary-light p-6 sm:p-8 lg:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-light/30 via-transparent to-transparent" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white mb-6 animate-fade-in">
                <CheckCircle2 className="h-4 w-4" />
                Bulk & Corporate Orders
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl animate-slide-up stagger-1">
                Need bulk laundry services?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80 animate-slide-up stagger-2">
                We offer tailored solutions for hotels, restaurants, gyms, and corporate organizations. Contact us for a personalized quote.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 animate-slide-up stagger-3"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
