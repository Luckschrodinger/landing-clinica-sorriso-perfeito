"use client";

import { MessageCircle } from "lucide-react";

const PHONE = "5511999990000"; // Trocar pelo número real (DDI+DDD+número)
const MSG = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de agendar uma avaliação."
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-soft transition-all hover:scale-110 hover:shadow-lg"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-red-500 text-[10px] font-bold">
        1
      </span>
    </a>
  );
}
