/**
 * SINGLE SOURCE OF TRUTH for the gym's public contact channels.
 * Public information only — never place secrets or private keys here,
 * everything in this file ships to the browser.
 */
export const gymConfig = {
  /** WhatsApp number in international format, digits only. */
  whatsappNumber: "201271357602",
  /** Display / dialable phone number. */
  phone: "+201271357602",
  email: "info@titangym.eg",
  defaultWhatsappMessage: "السلام عليكم، أريد الاستفسار عن اشتراكات الجيم.",
} as const;

/** Build a wa.me link for the gym with a properly encoded Arabic message. */
export function buildWhatsappLink(message?: string): string {
  const text = message?.trim() || gymConfig.defaultWhatsappMessage;
  return `https://wa.me/${gymConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const gymTelLink = `tel:${gymConfig.phone}`;