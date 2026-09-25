import { Award, Sparkles, TrendingUp, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Kişiye Özel Stil",
    desc: "Her yüz tipine ve kişisel tarza uygun saç tasarımı.",
  },
  {
    icon: Sparkles,
    title: "Profesyonel Dokunuş",
    desc: "Detaylara odaklanan temiz ve özenli uygulama.",
  },
  {
    icon: TrendingUp,
    title: "Modern Yaklaşım",
    desc: "Güncel saç trendlerini kişisel stile uyarlayan tasarımlar.",
  },
  {
    icon: CalendarCheck,
    title: "Randevulu Hizmet",
    desc: "WhatsApp üzerinden hızlı ve kolay randevu iletişimi.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="hakkimizda" className="bg-ink py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left image */}
          <div className="lg:col-span-5">
            <div className="border border-line">
              <img src="/images/interior.jpg" alt="Tahir Dastan Hair Design atölye iç mekânı" className="w-full aspect-[4/5] object-cover" />
            </div>
            <p className="mt-4 text-xs tracking-[0.2em] uppercase text-mute">
              Tahir Dastan Hair Design, İstanbul
            </p>
          </div>

          {/* Right copy */}
          <div className="lg:col-span-7">
            <p className="section-label mb-4">Hakkımızda</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-bone">
              Gözünle Şık,<br />İşiyle Estil.
            </h2>
            <p className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-sand">
              Tahir Dastan Hair Design; modern kesim, saç ve sakal tasarımında
              mükemmenliği ön planda tutan bir saç atölyesidir. Her gün randevu
              esasına göre planlanan hizmetlerle kişisel stilini güçlendirir.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-px bg-line border border-line">
              {features.map((f) => (
                <div key={f.title} className="bg-ink p-6 sm:p-7">
                  <f.icon size={22} strokeWidth={1.5} className="text-bronze" />
                  <h3 className="mt-4 font-display text-base font-semibold text-bone">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand/90">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
