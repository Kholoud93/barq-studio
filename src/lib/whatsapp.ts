import { siteConfig } from "@/lib/metadata";

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function buildQuickLeadMessage({
  name,
  email,
  message,
  locale,
}: {
  name: string;
  email: string;
  message: string;
  locale: string;
}) {
  if (locale === "ar") {
    return [
      "مرحباً Vision Hub 👋",
      "أريد طلب مكالمة بخصوص مشروع.",
      "",
      `الاسم: ${name}`,
      `البريد: ${email}`,
      `التفاصيل: ${message}`,
    ].join("\n");
  }

  return [
    "Hello Vision Hub 👋",
    "I would like to request a call about a project.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Details: ${message}`,
  ].join("\n");
}

export function buildContactMessage({
  name,
  email,
  company,
  phone,
  service,
  message,
  locale,
}: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
  locale: string;
}) {
  if (locale === "ar") {
    return [
      "مرحباً Vision Hub 👋",
      "رسالة جديدة من نموذج التواصل:",
      "",
      `الاسم: ${name}`,
      `البريد: ${email}`,
      company ? `الشركة: ${company}` : null,
      phone ? `الهاتف: ${phone}` : null,
      service ? `الخدمة: ${service}` : null,
      `التفاصيل: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  return [
    "Hello Vision Hub 👋",
    "New message from the contact form:",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    phone ? `Phone: ${phone}` : null,
    service ? `Service: ${service}` : null,
    `Details: ${message}`,
  ]
    .filter(Boolean)
    .join("\n");
}
