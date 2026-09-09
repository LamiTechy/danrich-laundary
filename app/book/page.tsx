"use client";

import { useEffect, useState } from "react";
import { bookingSlots, timeSlots, services, type Service } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/common/section-header";
import { CheckCircle2, Calendar, User, FileText } from "lucide-react";

type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  createdAt: string;
};

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0].id,
    date: bookingSlots[0],
    time: timeSlots[0],
    notes: "",
  });
  const [submitted, setSubmitted] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const reference = new URLSearchParams(window.location.search).get("reference");
    if (!reference) return;

    const verifyPayment = async () => {
      await Promise.resolve();
      setLoading(true);
      return fetch(`/api/paystack/verify?reference=${encodeURIComponent(reference)}`)
      .then(async (response) => {
        const result = (await response.json()) as { booking?: Booking; error?: string };
        if (!response.ok || !result.booking) {
          throw new Error(result.error || "Payment could not be verified.");
        }
        setSubmitted(result.booking);
        window.history.replaceState({}, "", "/book");
      })
      .catch((verificationError) => {
        setError(verificationError instanceof Error ? verificationError.message : "Payment could not be verified.");
      })
      .finally(() => setLoading(false));
    };

    void verifyPayment();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as {
        authorizationUrl?: string;
        error?: string;
      };

      if (!response.ok || !result.authorizationUrl) {
        throw new Error(result.error || "Could not start payment. Please try again.");
      }

      window.location.assign(result.authorizationUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSubmitted(null);
    setForm({
      name: "",
      email: "",
      phone: "",
      service: services[0].id,
      date: bookingSlots[0],
      time: timeSlots[0],
      notes: "",
    });
  };

  const serviceLabel = (id: string) => {
    const s = (services as Service[]).find((svc) => svc.id === id);
    return s ? s.title : id;
  };

  if (submitted) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-background py-16">
        <div className="mx-auto max-w-lg px-4 text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-success to-green-400 flex items-center justify-center shadow-lg shadow-success/30">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Booking Confirmed!</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Thank you, <span className="font-semibold text-foreground">{submitted.name}</span>. Your payment and booking have been received. Our team will contact you by email at <span className="font-semibold text-foreground">{submitted.email}</span> to confirm the appointment.
          </p>
          <div className="mt-8 card p-6 text-left space-y-4">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Service</dt>
                <dd className="mt-1 text-sm text-foreground font-medium">{serviceLabel(submitted.service)}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Date & Time</dt>
                <dd className="mt-1 text-sm text-foreground font-medium">
                  {new Date(submitted.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                  {" at "}
                  {submitted.time}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Reference</dt>
                <dd className="mt-1 text-sm text-foreground font-medium">#{submitted.id.split("-")[0]}</dd>
              </div>
            </div>
          </div>
          <button
            onClick={reset}
            className="mt-8 btn-primary"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <section className="section-lg bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container">
          <SectionHeader
            label="Schedule Now"
            title="Book Your Service Online"
            subtitle="Pick your service, date, and time, then complete payment securely to submit your booking."
            className="mb-12"
          />
          <div className="mx-auto max-w-2xl">
            <form
              onSubmit={handleSubmit}
              className="card-elevated p-5 sm:p-8 space-y-5 sm:space-y-6"
            >
              <div>
                <label className="label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="input"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0703 113 3304"
                    className="input"
                  />
                </div>
              </div>
              <div>
                <label className="label">Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="input"
                >
                  {services.map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {svc.title} - {svc.price}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="label">Date</label>
                  <select
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="input"
                  >
                    {bookingSlots.map((d) => (
                      <option key={d} value={d}>
                        {new Date(d).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label">Time</label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="input"
                  >
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="label">
                  Special Instructions (optional)
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="e.g. large comforter, prefer pickup, etc."
                  className="input resize-none"
                />
              </div>
              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">{error}</p>
              )}
              <Button type="submit" disabled={loading} variant="primary" className="w-full h-12">
                {loading ? "Preparing payment..." : "Continue to payment"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
