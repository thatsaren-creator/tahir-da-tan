import { MAPS_EMBED, MAPS_URL, INSTAGRAM_URL, whatsappLink, DEFAULT_WA_MESSAGE } from "../lib/data";

const hours = [
  ["Pazartesi", "09:00–20:00"],
  ["Salı", "Kapalı"],
  ["Çarşamba", "09:00–20:00"],
  ["Perşembe", "09:00–20:00"],
  ["Cuma", "09:00–20:00"],
  ["Cumartesi", "09:00–20:00"],
  ["Pazar", "10:00–19:00"],
] as const;

export default function Location() {
  return (
    <section id="iletisim" className="bg-coal py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Copy + hours */}
          <div className="lg:col-span-5">
            <p className="section-label mb-4">Konum</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-bone">
              Bizi Ziyaret Et
            </h2>
            <p className="mt-6 text-base leading-relaxed text-sand">
              Tahir Dastan Hair Design, İstanbul'da kişisel saç ve sakal
              tasarımı üzerine odaklı premium bir atölyedir.
            </p>

            {/* Opening hours */}
            <div className="mt-10 border-t border-line">
              {hours.map(([day, time]) => (
                <div
                  key={day}
                  className="flex items-baseline justify-between border-b border-line py-3"
                >
                  <span className="text-sm text-sand">{day}</span>
                  <span
                    className={
                      time === "Kapalı"
                        ? "text-sm font-medium text-bronze"
                        : "text-sm text-bone"
                    }
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-bronze px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-bone focus-ring"
              >
                Yol Tarifi Al
              </a>
              <a
                href={whatsappLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-bone/40 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-bone transition-colors duration-300 hover:border-bone hover:bg-bone/10 focus-ring"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7">
            <div className="h-[320px] sm:h-[420px] w-full border border-line overflow-hidden">
              <iframe
                title="Tahir Dastan Hair Design konum haritası"
                className="h-full w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer"
                src={MAPS_EMBED}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
