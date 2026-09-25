import { INSTAGRAM_URL, MAPS_URL, whatsappLink, DEFAULT_WA_MESSAGE } from "../lib/data";

const nav = [
  { label: "Ana Sayfa", href: "#ana-sayfa" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-display text-base font-semibold tracking-[0.18em] uppercase text-bone">
              Tahir Dastan <span className="text-bronze">Hair Design</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              Profesyonel saç tasarımı ve kişisel stil.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-mute">Gezinme</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="link-underline text-sm text-sand hover:text-bone">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-mute">İletişim</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <a
                href={whatsappLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-bronze px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-bronze hover:bg-bronze hover:text-ink transition-colors duration-300 focus-ring"
              >
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-bone/25 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-bone hover:border-bone transition-colors duration-300 focus-ring"
              >
                Instagram
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-bone/25 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-bone hover:border-bone transition-colors duration-300 focus-ring"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-3 text-xs text-mute">
          <p>© {new Date().getFullYear()} Tahir Dastan Hair Design. Tüm hakları saklıdır.</p>
          <p>İstanbul, Türkiye</p>
        </div>
      </div>
    </footer>
  );
}
