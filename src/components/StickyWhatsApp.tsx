import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "27000000000"; // Update with real number
const MESSAGE = encodeURIComponent(
  "Hi Astar Technologies, I'd like to learn more about your services."
);

export function StickyWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-110 md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={1.5} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
    </a>
  );
}
