import { Star } from "lucide-react";
import { MAPS_URL } from "../lib/data";

export default function Reviews() {
  return (
    <section id="yorumlar" className="bg-coal py-20 sm:py-24 border-y border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Score */}
          <div className="lg:col-span-4">
            <p className="section-label mb-4">Yorumlar</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-bone">
              Müşteriler Ne Diyor?
            </h2>
            <div className="mt-10 flex items-end gap-4">
              <div>
                <div className="font-display text-6xl sm:text-7xl font-semibold leading-none text-bone">
                  4.6
                </div>
                <div className="mt-2 text-sm text-mute">/ 5</div>
              </div>
              <div className="pb-1">
                <div className="flex items-center gap-1 text-bronze">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-1 text-xs text-mute">Google değerlendirmeleri</p>
              </div>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center bg-bronze px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-bone focus-ring"
            >
              Google'da Yorumları Gör
            </a>
          </div>

          {/* Quote / context (no fabricated individual reviews) */}
          <div className="lg:col-span-8">
            <div className="border border-line bg-ink p-8 sm:p-12">
              <p className="font-display text-xl sm:text-2xl leading-relaxed text-bone">
                "Profesyonel saç tasarımı, modern kesimler ve kişisel stil
                dokunuşları."
              </p>
              <p className="mt-6 text-sm text-mute leading-relaxed">
                Bu atölye; düzenli saç ve sakal hizmetleriyle, özenli kesim ve
                kişisel stil dünyasında yer alır. Tüm müşterilerimizin
                değerlendirmeleri Google Maps üzerinde yayımlanır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
