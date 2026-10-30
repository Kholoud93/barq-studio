"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/metadata";

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Barq%20Studio,%20I%20would%20like%20to%20discuss%20a%20project.`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-xl hover:shadow-[#25D366]/40 max-sm:bottom-20"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-[#128C7E]" />
      </span>
    </motion.a>
  );
}
