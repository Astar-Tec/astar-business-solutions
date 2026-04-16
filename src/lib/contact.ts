// Centralized contact details for Astar Technologies (Pty) Ltd
export const CONTACT = {
  email: "info@astartech.co.za",
  phoneDisplay: "+27 67 159 1867",
  phoneTel: "+27671591867",
  whatsappNumber: "27671591867", // wa.me format (no +)
  linkedin: "https://www.linkedin.com/in/kutloano-moshao-1aa5003a1/",
  location: "Ficksburg, Free State, South Africa",
  serving: "Serving South Africa, Lesotho & beyond",
  cipc: "2026/306686/07",
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
