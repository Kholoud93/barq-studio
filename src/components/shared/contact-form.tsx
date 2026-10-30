"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, CheckCircle } from "lucide-react";
import { useApp } from "@/providers/app-provider";
import { buildContactMessage, openWhatsApp } from "@/lib/whatsapp";

export function ContactForm() {
  const { t, locale } = useApp();
  const f = t.contact.form;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const budget = String(data.get("budget") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !phone || !service || !message) {
      setError(f.requiredError);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(f.emailError);
      return;
    }

    setLoading(true);
    const details = [message, budget ? `Budget: ${budget}` : null]
      .filter(Boolean)
      .join("\n");

    openWhatsApp(
      buildContactMessage({
        name,
        email,
        company,
        phone,
        service,
        message: details,
        locale,
      })
    );
    setSubmitted(true);
    setLoading(false);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-12">
        <CheckCircle className="mb-4 h-12 w-12 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">{f.success}</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">{f.successDesc}</p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
          {f.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{f.name}</Label>
          <Input id="name" name="name" placeholder={f.namePlaceholder} required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{f.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={f.emailPlaceholder}
            required
            autoComplete="email"
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">{f.phone}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder={f.phonePlaceholder}
            required
            autoComplete="tel"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">{f.company}</Label>
          <Input id="company" name="company" placeholder={f.companyPlaceholder} autoComplete="organization" />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="service">{f.service}</Label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="" disabled>
              {f.servicePlaceholder}
            </option>
            {f.services.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">{f.budget}</Label>
          <Input id="budget" name="budget" placeholder={f.budgetPlaceholder} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{f.message}</Label>
        <Textarea id="message" name="message" placeholder={f.messagePlaceholder} required rows={5} />
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto rtl:flex-row-reverse"
        disabled={loading}
      >
        {loading ? (
          f.sending
        ) : (
          <>
            {f.send}
            <MessageCircle className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
