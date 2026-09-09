import { priceList } from "@/lib/site-config";
import { SectionHeader } from "@/components/common/section-header";
import Link from "next/link";
import { Tag, Info, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Pricing",
  description:
    "View our straightforward pricing for dry cleaning and laundry services at Danrich Laundry Services in Lagos.",
};

const highlights = [
  "No hidden fees or surprises",
  "Transparent pricing for all services",
  "Volume discounts for corporate orders",
  "Premium detergents included",
];

export default function PricingPage() {
  return (
    <div className="bg-background">
      <section className="section-lg bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container">
          <SectionHeader
            label="Pricing"
            title="Simple, Transparent Pricing"
            subtitle="No hidden fees. No surprises. Just fair, straightforward pricing for every service."
            className="mb-16"
          />

          <div className="mx-auto max-w-4xl">
            <div className="card-elevated overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-light p-4 sm:p-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white mb-2">
                  <Tag className="h-4 w-4" />
                  All Services
                </div>
                <h3 className="text-xl font-bold text-white">Our Price List</h3>
              </div>
              <table className="hidden sm:table min-w-full divide-y divide-border">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Service
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {priceList.map((item, index) => (
                    <tr key={item.service} className={`transition-colors hover:bg-muted/30 ${index % 2 === 0 ? 'bg-muted/10' : 'bg-background'}`}>
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{item.service}</td>
                      <td className="px-6 py-4 text-sm font-bold text-primary text-right">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="sm:hidden divide-y divide-border">
                {priceList.map((item, index) => (
                  <div key={item.service} className={`flex items-center justify-between gap-4 px-4 py-3 ${index % 2 === 0 ? 'bg-muted/10' : 'bg-background'}`}>
                    <span className="text-sm text-foreground font-medium">{item.service}</span>
                    <span className="text-sm font-bold text-primary shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 card p-4 sm:p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Info className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Note</h4>
                  <p className="text-sm text-muted-foreground mt-1">Prices are subject to change. Bulk and corporate orders receive custom pricing. Contact us for a personalized quote.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/book"
                className="btn-primary h-12 px-8"
              >
                Book Your Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
