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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) return;

    setLoading(true);
    openWhatsApp(
      buildContactMessage({
        name,
        email,
        company,
        phone,
        service,
        message,
        locale,
      })
    );
    setSubmitted(true);
    setLoading(false);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-primary/20 bg-primary/5 p-12 text-center">
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{f.name}</Label>
          <Input id="name" name="name" placeholder={f.namePlaceholder} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{f.email}</Label>
          <Input id="email" name="email" type="email" placeholder={f.emailPlaceholder} required />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">{f.company}</Label>
          <Input id="company" name="company" placeholder={f.companyPlaceholder} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{f.phone}</Label>
          <Input id="phone" name="phone" type="tel" placeholder={f.phonePlaceholder} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">{f.service}</Label>
        <Input id="service" name="service" placeholder={f.servicePlaceholder} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{f.message}</Label>
        <Textarea id="message" name="message" placeholder={f.messagePlaceholder} required />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 hover:bg-[#1ebe57] hover:shadow-[#25D366]/40 sm:w-auto rtl:flex-row-reverse"
        disabled={loading}
      >
        {loading ? f.sending : (<>{f.send}<MessageCircle className="h-4 w-4" /></>)}
      </Button>
    </form>
  );
}
