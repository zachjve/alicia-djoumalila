"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Flag from "../../components/Flag";
import Header from "../../components/Header";

// Rangées 2 par 2 par couleur, des tons chauds vers les tons sombres.
const STUDIO_IMAGES = [
  // rouge / chaud
  "studio-01",
  "studio-11",
  // doré (miroir)
  "studio-12",
  "studio-09",
  // clair / neutre
  "studio-08",
  "studio-07",
  // froid, bleu-gris
  "studio-03",
  "studio-10",
  // jean / gris
  "studio-06",
  "studio-05",
  // sombre
  "studio-02",
  "studio-04",
].map((name) => `/pics/studio/${name}.jpg`);

// Même principe : paires par ambiance (mer / rochers, parc en automne, ville).
const OUTDOOR_IMAGES = [
  "exterieur-01",
  "exterieur-02",
  "exterieur-03",
  "exterieur-04",
  "exterieur-05",
  "exterieur-06",
].map((name) => `/pics/exterieur/${name}.jpg`);

const GALLERY_PARTS = [
  { titleKey: "galleryStudio", images: STUDIO_IMAGES },
  { titleKey: "galleryOutdoor", images: OUTDOOR_IMAGES },
] as const;

// Photo de la section À propos.
const ABOUT_PHOTO = "/pics/about/alicia.jpg";

// Polaroids (section Profil) : en pied → mi-corps → portraits serrés.
const POLAROID_IMAGES = Array.from(
  { length: 8 },
  (_, i) => `/pics/polaroids/polaroid-${String(i + 1).padStart(2, "0")}.jpg`,
);

// Vidéos de présentation (affichées dans les deux langues du site).
const VIDEOS = [
  {
    country: "fr",
    labelKey: "videoFr",
    src: "/videos/presentation-fr.mp4",
    poster: "/videos/presentation-fr.jpg",
  },
  {
    country: "gb",
    labelKey: "videoEn",
    src: "/videos/presentation-en.mp4",
    poster: "/videos/presentation-en.jpg",
  },
] as const;

// Une seule liste : « Mensurations » (FR) / « Stats » (EN)
const STATS_ROWS = [
  ["heightLabel", "heightValue"],
  ["bustLabel", "bustValue"],
  ["cupLabel", "cupValue"],
  ["waistLabel", "waistValue"],
  ["hipsLabel", "hipsValue"],
  ["weightLabel", "weightValue"],
  ["shoesLabel", "shoesValue"],
  ["eyesLabel", "eyesValue"],
  ["hairLabel", "hairValue"],
  ["clothesLabel", "clothesValue"],
] as const;

const AGENCIES = [
  {
    name: "Enjoy Models",
    city: "Nice",
    url: "https://www.enjoy-models.com",
    phone: "+33 4 93 72 10 00",
    tel: "+33493721000",
    email: "booking@enjoy-models.net",
    address: ["27 avenue Jean Médecin", "06000 Nice"],
    maps: "https://www.google.com/maps/dir/?api=1&destination=27+avenue+Jean+M%C3%A9decin,+06000+Nice",
  },
  {
    name: "Hourra Models",
    city: "Lyon",
    url: "https://www.hourra.net/",
    phone: "+33 4 78 89 01 04",
    tel: "+33478890104",
    email: "lyon@hourra.net",
    address: ["53 avenue maréchal Foch", "Lyon"],
    maps: "https://www.google.com/maps/dir/?api=1&destination=53+avenue+mar%C3%A9chal+Foch,+Lyon",
  },
];

export default function Portfolio() {
  const t = useTranslations("home");
  const ta = useTranslations("about");

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />

      {/* Hero — mobile : photo entière (largeur de l'écran, hauteur naturelle) puis infos en dessous.
          Web : panneau papier à gauche (infos), photo à droite. */}
      <section className="border-b-[0.5px] border-rule md:grid md:grid-cols-12 md:h-[calc(100svh-49px)]">
        <div className="md:order-2 md:col-span-6 lg:col-span-7 md:h-full overflow-hidden">
          <img
            src="/pics/exterieur/exterieur-05.jpg"
            alt={t("altHero")}
            className="block w-full h-auto md:h-full md:object-cover md:object-[50%_55%]"
          />
        </div>

        <div className="flex flex-col md:justify-between md:order-1 md:col-span-6 lg:col-span-5 px-4 md:px-8 lg:px-10 pt-10 pb-12 md:py-14 md:border-r-[0.5px] md:border-rule">
          <div>
            <h1 className="font-serif text-[clamp(3.5rem,15vw,8rem)] md:text-[clamp(3.5rem,6.5vw,7.5rem)] leading-[0.85] tracking-tight mb-8">
              {t("heroTitle")}
              <br />
              <span className="italic">{t("heroLastName")}</span>
            </h1>
            <p className="flex flex-wrap items-center font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em]">
              {t("heroSubtitle")
                .split("|")
                .map((word, i) => (
                  <span key={word} className="flex items-center">
                    {i > 0 && (
                      <span aria-hidden className="mx-3 md:mx-4 opacity-70">
                        –
                      </span>
                    )}
                    {word.trim()}
                  </span>
                ))}
            </p>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-ink">
              {t("heroLead")}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 mt-12 pt-6 border-t-[0.5px] border-rule">
            {[
              [ta("heightLabel"), ta("heightValue")],
              [ta("hairLabel"), ta("hairValue")],
              [ta("clothesLabel"), ta("clothesValue")],
              [ta("eyesLabel"), ta("eyesValue")],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col">
                <dt className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-ink">
                  {label}
                </dt>
                <dd className="mt-1 text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="profile" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-center mb-16">
            {ta("profileTitle")}
          </h2>

          {/* Polaroids */}
          <div className="flex items-baseline justify-between border-b-[0.5px] border-rule pb-3 mb-6">
            <h3 className="font-serif text-3xl md:text-4xl tracking-tight">
              {ta("polaroidsTitle")}
            </h3>
            {POLAROID_IMAGES.length > 0 && (
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-ink">
                {t("photoCount", { count: POLAROID_IMAGES.length })}
              </span>
            )}
          </div>
          {POLAROID_IMAGES.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {POLAROID_IMAGES.map((src, i) => (
                <div
                  key={src}
                  className="aspect-[9/16] overflow-hidden bg-muted-ink/10"
                >
                  <img
                    src={src}
                    alt={`${ta("polaroidsTitle")} — ${t("altPhoto", { index: i + 1 })}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Mensurations / Stats */}
          <div className="mt-20 flex items-baseline justify-between border-b-[0.5px] border-rule pb-3 mb-6">
            <h3 className="font-serif text-3xl md:text-4xl tracking-tight">
              {ta("measurementsTitle")}
            </h3>
          </div>
          <ul className="md:columns-2 md:gap-x-16">
            {STATS_ROWS.map(([label, value]) => (
              <li
                key={label}
                className="break-inside-avoid mb-4 flex items-baseline justify-between gap-6 border-b-[0.5px] border-rule pb-3"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-ink">
                  {ta(label)}
                </span>
                <span className="text-sm text-right tabular-nums">
                  {ta(value)}
                </span>
              </li>
            ))}
          </ul>

          {/* Vidéos */}
          <div className="mt-20 flex items-baseline justify-between border-b-[0.5px] border-rule pb-3 mb-6">
            <h3 className="font-serif text-3xl md:text-4xl tracking-tight">
              {ta("videosTitle")}
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {VIDEOS.map((v) => (
              <figure key={v.src} className="w-full sm:w-[340px]">
                {/* biome-ignore lint/a11y/useMediaCaption: pas encore de sous-titres pour ces vidéos */}
                <video
                  src={v.src}
                  poster={v.poster}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-[9/16] bg-muted-ink/10 object-cover"
                />
                <figcaption className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-ink">
                  <Flag
                    country={v.country}
                    className="h-2.5 w-auto shadow-[0_0_0_0.5px_rgb(14_10_7/0.25)]"
                  />
                  {ta(v.labelKey)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-center mb-16">
            {t("galleryTitle")}
          </h2>

          {GALLERY_PARTS.map((part, partIdx) => (
            <div key={part.titleKey} className={partIdx > 0 ? "mt-20" : ""}>
              <div className="flex items-baseline justify-between border-b-[0.5px] border-rule pb-3 mb-6">
                <h3 className="font-serif text-3xl md:text-4xl tracking-tight">
                  {t(part.titleKey)}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-ink">
                  {t("photoCount", { count: part.images.length })}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {part.images.map((src, i) => (
                  <div
                    key={src}
                    className="aspect-[2/3] overflow-hidden bg-muted-ink/10"
                  >
                    <img
                      src={src}
                      alt={`${t(part.titleKey)} — ${t("altPhoto", { index: i + 1 })}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-center mb-16">
            {t("contactTitle")}
          </h2>

          <div className="grid md:grid-cols-12 gap-12 md:gap-16 border-t-[0.5px] border-rule pt-10">
            {/* Accroche + email principal */}
            <div className="md:col-span-5">
              <div className="space-y-4 text-base leading-relaxed text-muted-ink">
                <p>{t("bookingsLead")}</p>
                <p>{t("bookingsLocation")}</p>
                <p className="text-ink">{t("bookingsCta")}</p>
              </div>
              <a
                href="mailto:djoumalilaa@gmail.com"
                className="group mt-6 inline-flex items-center gap-3 border-b-[0.5px] border-ink pb-2 font-serif text-2xl md:text-3xl tracking-tight"
              >
                djoumalilaa@gmail.com
                <ArrowUpRight
                  size={22}
                  strokeWidth={1}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Coordonnées détaillées */}
            <dl className="md:col-span-7 border-t-[0.5px] border-rule md:border-t-0">
              <div className="grid grid-cols-[7.5rem_1fr] sm:grid-cols-[10rem_1fr] gap-4 py-5 border-b-[0.5px] border-rule">
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-ink pt-1.5">
                  {t("bookingsInstagram")}
                </dt>
                <dd>
                  <a
                    href="https://instagram.com/_alicia_djm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-serif text-xl tracking-tight"
                  >
                    @_alicia_djm
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1}
                      className="opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </dd>
              </div>

              {AGENCIES.map((a) => (
                <div
                  key={a.name}
                  className="grid grid-cols-[7.5rem_1fr] sm:grid-cols-[10rem_1fr] gap-4 py-5 border-b-[0.5px] border-rule"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-ink pt-1.5">
                    {t("bookingsAgency")} — {a.city}
                  </dt>
                  <dd>
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-serif text-xl tracking-tight"
                    >
                      {a.name}
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1}
                        className="opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                    <div className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-muted-ink">
                      <a
                        href={`mailto:${a.email}`}
                        className="hover:text-ink transition-colors"
                      >
                        {a.email}
                      </a>
                      <a
                        href={`tel:${a.tel}`}
                        className="hover:text-ink transition-colors tabular-nums"
                      >
                        {a.phone}
                      </a>
                      <a
                        href={a.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-ink transition-colors sm:col-span-2"
                      >
                        {a.address.join(", ")}
                      </a>
                    </div>
                  </dd>
                </div>
              ))}

              <div className="grid grid-cols-[7.5rem_1fr] sm:grid-cols-[10rem_1fr] gap-4 py-5 border-b-[0.5px] border-rule">
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-ink pt-1.5">
                  {ta("locationTitle")}
                </dt>
                <dd className="font-serif text-xl tracking-tight">
                  {ta("location")}{" "}
                  <span className="italic text-muted-ink">
                    — {t("bookingsTravel")}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* À propos — photo à gauche, texte à droite (web) ; empilés en mobile */}
      <section
        id="about"
        className="scroll-mt-12 border-t-[0.5px] border-rule md:grid md:grid-cols-2"
      >
        <div className="aspect-[3/4] overflow-hidden bg-muted-ink/10 md:sticky md:top-[49px] md:self-start">
          <img
            src={ABOUT_PHOTO}
            alt={ta("altPortrait")}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-paper md:border-l-[0.5px] md:border-rule px-6 sm:px-10 lg:px-16 py-14 md:py-12 flex items-center">
          <div className="max-w-md font-serif text-[15px] md:text-base leading-relaxed">
            <h2
              className="text-center leading-[0.95]"
              style={{
                fontFamily: 'Didot, "Bodoni 72", var(--font-bodoni), serif',
              }}
            >
              <span className="block italic text-4xl md:text-5xl">
                {ta("aboutTitle1")}
              </span>
              <span className="block mt-1 text-6xl md:text-7xl uppercase tracking-[0.04em]">
                {ta("aboutTitle2")}
              </span>
            </h2>

            <span
              aria-hidden
              className="block w-10 h-[0.5px] bg-ink my-8 mx-auto"
            />

            <div className="space-y-5">
              <p>{ta("about1")}</p>
              <p>
                {ta("about2a")}
                <br />
                {ta("about2b")}
              </p>
              <p>{ta("about3")}</p>
              <p>{ta("about4")}</p>
              <p>{ta("about5")}</p>
            </div>

            <span aria-hidden className="block w-10 h-[0.5px] bg-ink my-8" />

            <div className="space-y-3">
              <p className="italic">{ta("aboutAvailability1")}</p>
              <p>{ta("aboutAvailability2")}</p>
            </div>

            <span aria-hidden className="block w-10 h-[0.5px] bg-ink my-8" />

            <div className="text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-ink">
                {ta("aboutExperience")}
              </p>
              {/* En attendant le fichier du logo officiel */}
              <p className="mt-5 leading-none">
                <span className="block text-xs tracking-[0.3em] uppercase">
                  Patrice
                </span>
                <span className="block text-3xl tracking-[0.08em] uppercase">
                  Mulato
                </span>
                <span className="block mt-1 text-[8px] tracking-[0.45em] uppercase">
                  Paris
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t-[0.5px] border-rule">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-ink">
            {t("copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
}
