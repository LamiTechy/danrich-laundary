import { services } from "@/lib/site-config";

export const paystackCurrency = process.env.PAYSTACK_CURRENCY || "NGN";

const serviceAmounts: Record<string, number> = {
  "dry-cleaning": 50000,
  "wash-fold": 50000,
  ironing: 20000,
  "bulk-corporate": 100000,
};

export function getServiceAmount(serviceId: string) {
  return serviceAmounts[serviceId] || 0;
}

export function getServiceTitle(serviceId: string) {
  return services.find((service) => service.id === serviceId)?.title || serviceId;
}
