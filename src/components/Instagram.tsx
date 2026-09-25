import { INSTAGRAM_URL } from "../lib/data";

const tiles = [
  { src: "/images/ig-1.jpg", alt: "Modern saç kesimi ve stil tasarımı" },
  { src: "/images/ig-2.jpg", alt: "Profesyonel saç ve sakal aletleri" },
  { src: "/images/ig-3.jpg", alt: "Sakal tasarımı ve bakım" },
  { src: "/images/ig-4.jpg", alt: "Ayna karşısında saç tasarımı sonucu" },
  { src: "/images/ig-5.jpg", alt: "Atölye iç mekânı" },
  { src: "/images/ig-6.jpg", alt: "Saç bakım ürünleri" },
];

export default function Instagram() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="section-label mb-4">Instagram</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-bone">
              Stilimizden Kareler
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-bronze px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-bronze transition-colors duration-300 hover:bg-bronze hover:text-ink focus-ring"
          >
            Instagram'da Bizi Takip Et
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {tiles.map((t) => (
            <div key={t.src} className="ig-tile aspect-square bg-ash border border-line">
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
