import { whatsappLink, DEFAULT_WA_MESSAGE } from "../lib/data";

export default function Appointment() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      {/* background image, very subtle */}
      <div className="absolute inset-0 opacity-20">
        <img src="/images/appt.jpg" alt="" aria-hidden="true" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-ink/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-label mb-4">Randevu</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-bone">
            Yeni Tarzın İçin<br />Randevunu Oluştur.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-sand">
            Randevu için WhatsApp üzerinden bize ulaş.
          </p>
          <a
            href={whatsappLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center bg-bronze px-9 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-bone focus-ring"
          >
            WhatsApp'tan Randevu Al
          </a>
          <p className="mt-4 text-sm text-mute">
            Hafta içi 09:00–20:00, Pazar 10:00–19:00
          </p>
        </div>
      </div>
    </section>
  );
}
