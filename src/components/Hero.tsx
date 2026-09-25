import { Star, Navigation } from "lucide-react";
import { MAPS_URL, whatsappLink, DEFAULT_WA_MESSAGE } from "../lib/data";

export default function Hero() {
  return (
    <section id="ana-sayfa" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Tahir Dastan Hair Design saç atölyesinin dış cephesi"
          className="h-full w-full object-cover"
        />
        {/* Dark elegant overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-ink/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <p className="section-label mb-6">İstanbul — Premium Saç Tasarımı</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold uppercase leading-[1.02] text-bone">
            Tahir Dastan
            <span className="block text-bronze">Hair Design</span>
          </h1>
          <p className="mt-8 font-display text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-bone">
            Tarzını Baştan Tasarla.
          </p>
          <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-sand">
            Profesyonel saç tasarımı, modern kesimler ve kişisel stil dokunuşları.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <a
              href={whatsappLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-bronze px-8 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-bone focus-ring"
            >
              WhatsApp'tan Randevu Al
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-bone/40 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-bone transition-colors duration-300 hover:border-bone hover:bg-bone/10 focus-ring"
            >
              <Navigation size={16} className="mr-2" strokeWidth={2} />
              Yol Tarifi Al
            </a>
          </div>

          {/* Trust indicator */}
          <div className="mt-8 inline-flex items-center gap-2 border-l-2 border-bronze pl-4">
            <div className="flex items-center gap-1 text-bronze">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm font-semibold tracking-wide text-bone">
              4.6 <span className="font-normal text-sand">Google Puanı</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
