import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/common/section-header";
import { Shield, Star, Truck, Leaf, Users, Award, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about Danrich Laundry Services and our commitment to quality dry cleaning in Lagos.",
};

const values = [
  { icon: Shield, title: "Quality First", desc: "Professional-grade equipment and premium detergents ensure the best clean every time." },
  { icon: Star, title: "Customer Care", desc: "Friendly, knowledgeable staff dedicated to making your experience effortless." },
  { icon: Leaf, title: "Eco-Conscious", desc: "Green cleaning solutions for a smaller environmental footprint." },
  { icon: Truck, title: "Convenience", desc: "Easy drop-off and pickup at our Ojodu Berger location with quick turnaround." },
  { icon: Users, title: "Community Focused", desc: "Locally owned and operated, serving the Ojodu Berger community with pride." },
  { icon: Award, title: "Trusted Reputation", desc: "Consistently rated 5.0 stars on Google by our satisfied customers." },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="section-lg bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container">
          <SectionHeader
            label="Our Story"
            title="About Danrich Laundry Services"
            subtitle="We are dedicated to providing clean, reliable, and professional dry cleaning services in Lagos."
            className="mb-20"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Danrich Laundry Services is a trusted professional dry cleaner located in the heart of
                Ojodu Berger, Lagos. We specialize in expert garment care, stain removal, and laundry
                services for individuals and businesses.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is simple: to provide exceptional garment care with a personal touch. Whether
                you need a single shirt pressed or bulk laundry for your hotel, we treat every item with
                the utmost care and attention.
              </p>
              <div className="card p-4 sm:p-6 border-primary/20 bg-primary/5">
                <h3 className="text-lg font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide fast, reliable, and professional dry cleaning services while
                  maintaining the highest standards of cleanliness and customer satisfaction
                  in Lagos.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="font-semibold text-foreground">Vision:</strong> To be
                the most trusted dry cleaning service in Lagos, known for quality, reliability,
                and exceptional customer care.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-border group">
              <Image
                src="/1787306069117.publer.com.jpg"
                alt="Danrich Laundry Services"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background border-y border-border">
        <div className="container">
          <SectionHeader
            label="Our Values"
            title="What We Stand For"
            subtitle="These principles guide everything we do, from the detergents we choose to how we treat every customer."
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="card p-4 sm:p-6 card-hover group">
                <div className="mb-4 icon-box-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted/30 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-border group">
              <Image
                src="/SaveInta.com_622581249_18090225917080747_5151745536608502724_n.jpg"
                alt="Danrich Laundry Services - garment care"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Commitment to You</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every piece of clothing that comes through our doors is treated with care.
                We understand that your garments are more than fabric — they&apos;re investments,
                memories, and essentials for daily life.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="badge-primary">5.0 Google Rating</span>
                <span className="badge-primary">Professional Service</span>
                <span className="badge-primary">Eco-Friendly Products</span>
                <span className="badge-primary">Fast Turnaround</span>
              </div>
              <Link
                href="/services"
                className="btn btn-primary group mt-4 min-h-11 px-5"
              >
                View Our Services
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
