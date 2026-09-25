export const WHATSAPP_NUMBER = "905301822270";
export const PHONE_DISPLAY = "+90 530 182 22 70";
export const MAPS_URL = "https://maps.app.goo.gl/h6yJHbL4vkA2HwRU9";
export const INSTAGRAM_URL = "https://www.instagram.com/tahirdastanhairdesign/";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=38.4065251,27.1234049&z=17&output=embed";

export function whatsappLink(prefilled?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!prefilled) return base;
  return `${base}?text=${encodeURIComponent(prefilled)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Merhaba, Tahir Dastan Hair Design'dan randevu almak istiyorum. Uygun gün ve saatleri öğrenebilir miyim?";
