import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "Ana Sayfa", href: "#ana-sayfa" },
    { label: "Hizmetler", href: "#hizmetler" },
    { label: "Hakkımızda", href: "#hakkimizda" },
    { label: "Yorumlar", href: "#yorumlar" },
    { label: "İletişim", href: "#iletisim" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between md:h-[72px]">
          {/* Brand */}
          <a href="#ana-sayfa" className="group flex items-baseline gap-2 focus-ring" aria-label="Tahir Dastan Hair Design — Ana Sayfa">
            <span className="font-display text-[15px] sm:text-base font-semibold tracking-[0.18em] uppercase text-bone whitespace-nowrap">
              Tahir Dastan
            </span>
            <span className="font-display text-[11px] sm:text-xs font-medium tracking-[0.32em] uppercase text-bronze whitespace-nowrap">
              Hair Design
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Ana gezinme">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-[13px] font-medium tracking-wide text-sand hover:text-bone"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/905301822270?text=Merhaba%2C%20Tahir%20Dastan%20Hair%20Design%27dan%20randevu%20almak%20istiyorum.%20Uygun%20g%C3%BCn%20ve%20saatleri%20%C3%B6%C4%9Frenebilir%20miyim%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center rounded-none border border-bronze bg-transparent px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-bronze transition-colors duration-300 hover:bg-bronze hover:text-ink focus-ring"
            >
              Randevu Al
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              className="inline-flex md:hidden items-center justify-center h-10 w-10 text-bone"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-white/10 bg-ink px-5 py-4">
          <nav className="flex flex-col" aria-label="Mobil gezinme">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3.5 text-[15px] font-medium tracking-wide text-sand hover:text-bone"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/905301822270?text=Merhaba%2C%20Tahir%20Dastan%20Hair%20Design%27dan%20randevu%20almak%20istiyorum.%20Uygun%20g%C3%BCn%20ve%20saatleri%20%C3%B6%C4%9Frenebilir%20miyim%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center border border-bronze px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-bronze"
            >
              Randevu Al
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
