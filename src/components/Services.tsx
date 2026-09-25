import { Scissors } from "lucide-react";

const services = [
  {
    title: "Saç Kesimi",
    desc: "Yüz tipine uygun, temiz ve modern bir kesim ve stilize edilmiş biter.",
  },
  {
    title: "Modern Saç Tasarımı",
    desc: "Güncel trendleri kişisel tarzına uyarlayan tasarım ve stil.",
  },
  {
    title: "Sakal Tasarımı",
    desc: "Fırsatıslanan, düzeltilmiş ve bakımlı bir sakaldan şıklığa.",
  },
  {
    title: "Saç & Sakal Kombinasyonu",
    desc: "Saç ve sakalı tek seferde, bütünsel bir kişisel tarz olarak ele alınır.",
  },
  {
    title: "Şekillendirme",
    desc: "Gün içi bakım, canlandırıcı ve kontrollü bir saç şekillendirme.",
  },
  {
    title: "Özel Gün Saç Tasarımı",
    desc: "Özel günlerin ve önemli anların için tek seferlik bir tasarım.",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-coal py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="section-label mb-4">Hizmetler</p>
        <h2 className="font-display max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-bone">
          Profesyonel Dokunuş,<br />Net Sonuç.
        </h2>
        <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-mute">
          Her hizmet, randevu esasına göre planlanır ve kişisel sonuca göre uyarlanır.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {services.map((s, i) => (
            <div key={s.title} className="service-card bg-coal p-8 sm:p-10 min-h-[220px] flex flex-col">
              <div className="flex items-center justify-between">
                <span className="card-index font-display text-sm font-semibold text-mute">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Scissors size={18} strokeWidth={1.5} className="text-bronze/70" />
              </div>
              <h3 className="mt-14 font-display text-lg sm:text-xl font-semibold text-bone">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sand/90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
