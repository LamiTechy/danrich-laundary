import Link from "next/link";
import { Service } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import {
  WashingMachine,
  Shirt,
  BrushCleaning,
  Building2,
  ArrowRight,
} from "lucide-react";

const iconComponents = {
  WashingMachine,
  Shirt,
  BrushCleaning,
  Building2,
};

const iconColors = [
  "bg-blue-500/10 text-blue-500",
  "bg-green-500/10 text-green-500",
  "bg-purple-500/10 text-purple-500",
  "bg-orange-500/10 text-orange-500",
];

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const IconComponent = iconComponents[service.icon as keyof typeof iconComponents] || WashingMachine;
  const iconColor = iconColors[index % iconColors.length];
  
  return (
    <div className="group card-elevated h-full flex flex-col overflow-hidden">
      <div className="flex flex-col flex-1 p-6">
        <div
          className={cn(
            "mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110",
            iconColor
          )}
        >
          <IconComponent className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" />
        </div>
        <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground flex-1 leading-relaxed">
          {service.description}
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground/80">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 transition-colors duration-200 group-hover:text-foreground">
              <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60 transition-transform duration-200 group-hover:scale-125" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between border-t border-card-border px-6 py-4 bg-muted/30 transition-colors duration-300 group-hover:bg-primary/5">
        <span className="text-lg font-bold text-primary transition-colors duration-300 group-hover:text-primary-dark">{service.price}</span>
        <Link
          href="/book"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors group-hover:gap-2.5"
        >
          Book now
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </ArrowRight>
        </Link>
      </div>
    </div>
  );
}
