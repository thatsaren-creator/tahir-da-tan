import { PHONE_DISPLAY, INSTAGRAM_URL, MAPS_URL, whatsappLink, DEFAULT_WA_MESSAGE } from "../lib/data";

export default function Contact() {
  return (
    <section className="bg-coal py-20 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="section-label mb-4">İletişim</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-bone">
              Tahir Dastan<br />Hair Design
            </h2>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-line border border-line">
            <div className="bg-coal p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-mute">Telefon</p>
              <p className="mt-3 text-lg font-medium text-bone">{PHONE_DISPLAY}</p>
              <p className="mt-1 text-xs text-mute">WhatsApp</p>
              <p className="mt-1 text-lg font-medium text-bone">{PHONE_DISPLAY}</p>
            </div>
            <div className="bg-coal p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-mute">Instagram</p>
              <p className="mt-3 text-lg font-medium text-bone">@tahirdastanhairdesign</p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-mute">Google</p>
              <p className="mt-1 text-lg font-medium text-bone">4.6</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-3">
          <a
            href={whatsappLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-bronze bg-bronze/10 px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-bronze transition-colors duration-300 hover:bg-bronze hover:text-ink focus-ring"
          >
            WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-bone/25 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-bone transition-colors duration-300 hover:border-bone focus-ring"
          >
            Instagram
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-bone/25 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-bone transition-colors duration-300 hover:border-bone focus-ring"
          >
            Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
