export const businessName = "Danrich Laundry Services" as const;

export const siteConfig = {
  name: businessName,
  shortName: "Danrich",
  tagline: "Professional Dry Cleaning You Can Trust",
  description:
    "Danrich Laundry Services is Lagos's trusted professional dry cleaner, offering expert garment care, stain removal, and laundry services with a 5-star Google rating.",
  url: "https://www.danrichlaundry.com",
  email: "hello@danrichlaundry.com",
  phone: "0703 113 3304",
  address: {
    street: "3 Yakoyo Street, opposite Alpha Morgan Bank",
    city: "Ojodu Berger",
    state: "Lagos",
    zip: "",
    country: "Nigeria",
    landmark: "Sabo Bus Stop, Ojodu",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5!2d3.35!3d6.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzQnNDguMCJOIDPCsDIxJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000",
  },
  hours: [
    { day: "Monday", open: "8:00 AM", close: "7:00 PM" },
    { day: "Tuesday", open: "8:00 AM", close: "7:00 PM" },
    { day: "Wednesday", open: "8:00 AM", close: "7:00 PM" },
    { day: "Thursday", open: "8:00 AM", close: "7:00 PM" },
    { day: "Friday", open: "8:00 AM", close: "7:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Sunday", open: "Closed", close: "Closed" },
  ] as const,
  social: {},
} as const;

export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    description:
      "Expert dry cleaning for suits, dresses, and delicate fabrics using premium solvents and professional techniques.",
    price: "From \u20a62,000",
    icon: "Shirt",
    features: ["Stain removal", "Garment pressing", "Fast turnaround"],
  },
  {
    id: "wash-fold",
    title: "Wash & Fold",
    description:
      "Professional washing, drying, and neatly folded laundry. Drop off your clothes and pick them up fresh and clean.",
    price: "From \u20a6500/kg",
    icon: "WashingMachine",
    features: ["Same-day service", "Professional folding", "Quality detergents"],
  },
  {
    id: "ironing",
    title: "Pressing & Ironing",
    description:
      "Professional pressing and ironing services to give your clothes a crisp, polished finish.",
    price: "From \u20a6200/piece",
    icon: "BrushCleaning",
    features: ["Crisp finish", "All fabric types", "Quick service"],
  },
  {
    id: "bulk-corporate",
    title: "Bulk & Corporate",
    description:
      "Tailored laundry solutions for hotels, restaurants, gyms, and corporate organizations in Lagos.",
    price: "Custom quote",
    icon: "Building2",
    features: ["Volume discounts", "Regular pickup", "Reliable delivery"],
  },
];

export const priceList = [
  { service: "Dry Cleaning - Shirt/Blouse", price: "\u20a61,500" },
  { service: "Dry Cleaning - Suit (2-pc)", price: "\u20a65,000" },
  { service: "Dry Cleaning - Dress/Gown", price: "\u20a63,500" },
  { service: "Dry Cleaning - Jacket/Coat", price: "\u20a64,000" },
  { service: "Wash & Fold (per kg)", price: "\u20a6500" },
  { service: "Wash & Iron (per piece)", price: "\u20a6300" },
  { service: "Pressing Only (per piece)", price: "\u20a6200" },
  { service: "Curtain Cleaning", price: "From \u20a62,000" },
  { service: "Bulk/Corporate Orders", price: "Contact for quote" },
] as const;

export const bookingSlots = [
  "2026-09-10",
  "2026-09-11",
  "2026-09-12",
  "2026-09-13",
  "2026-09-14",
  "2026-09-15",
  "2026-09-16",
] as const;

export const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
] as const;

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Book Online", href: "/book" },
] as const;
