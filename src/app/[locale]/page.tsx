"use client";

import { Instagram, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Header from "../../components/Header";

const GALLERY_IMAGES = [
  "/pics/new/CYO_9518.jpg",
  "/pics/new/CYO_9443 2.jpg",
  "/pics/new/CYO_9504.jpg",
  "/pics/new/CYO_9425.jpg",
  "/pics/new/CYO_9509.jpg",
  "/pics/new/CYO_9500.jpg",
  "/pics/IMG_0212.JPG",
  "/pics/new/CYO_9384.jpg",
  "/pics/sharpen-40.jpg",
  "/pics/sharpen-22.jpg",
  "/pics/sharpen-14.jpg",
  "/pics/22-sharpen-7.jpg",
  "/pics/_DSC4039.jpg",
  "/pics/sharpen-11.jpg",
  "/pics/_DSC3406_DxO.jpg",
  "/pics/_DSC4057.jpg",
  "/pics/_DSC4150.jpg",
  "/pics/_DSC3985.jpg",
  "/pics/_DSC3439.jpg",
  "/pics/_DSC3456.jpg",
  "/pics/_DSC3978.jpg",
  "/pics/lightX 3.PNG",
];

function distributeToColumns(arr: string[], cols: number): string[][] {
  const columns: string[][] = Array.from({ length: cols }, () => []);
  arr.forEach((item, i) => {
    columns[i % cols].push(item);
  });
  if (cols === 3 && columns[0].length > columns[2].length) {
    const moved = columns[0].pop();
    if (moved) columns[2].push(moved);
  }
  return columns;
}

function GalleryPhoto({
  src,
  alt,
  reflect = false,
}: {
  src: string;
  alt: string;
  reflect?: boolean;
}) {
  return (
    <div className={`group cursor-pointer overflow-hidden ${reflect ? "mb-0" : "mb-8"}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-sm transition-transform duration-700 hover:scale-105"
      />
      {reflect && (
        <div className="pointer-events-none select-none mt-1" aria-hidden>
          <img
            src={src}
            alt=""
            className="w-full h-auto rounded-sm scale-y-[-1] origin-center"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.35), transparent 70%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.35), transparent 70%)",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const t = useTranslations("home");

  return (
    <div className="min-h-screen bg-[#0e0c0a]">
      <Header />

      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 md:hidden">
          <img
            src="/pics/new/CYO_9425.jpg"
            alt={t("altHeroMobile")}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 hidden md:block">
          <img
            src="/pics/sharpen-40.jpg"
            alt={t("altHeroWeb")}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1
            className="text-6xl md:text-8xl font-thin tracking-wider mb-6"
            style={{ fontFamily: "Didot, serif" }}
          >
            {t("heroTitle")}
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="w-full">
          <h2
            className="text-5xl md:text-7xl font-light text-center mb-16 tracking-wider text-zinc-100"
            style={{ fontFamily: "Didot, serif" }}
          >
            {t("galleryTitle")}
          </h2>

          <div className="block md:hidden">
            {GALLERY_IMAGES.map((src, i) => (
              <GalleryPhoto
                key={src}
                src={src}
                alt={t("altPhoto", { index: i + 1 })}
                reflect={i === GALLERY_IMAGES.length - 1}
              />
            ))}
          </div>

          <div className="hidden md:flex lg:hidden gap-8">
            {distributeToColumns(GALLERY_IMAGES, 2).map((col, colIdx) => (
              <div key={col[0]} className="flex-1">
                {col.map((src, rowIdx) => {
                  const index = rowIdx * 2 + colIdx;
                  return (
                    <GalleryPhoto
                      key={src}
                      src={src}
                      alt={t("altPhoto", { index: index + 1 })}
                      reflect={rowIdx === col.length - 1}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex gap-8">
            {distributeToColumns(GALLERY_IMAGES, 3).map((col, colIdx) => (
              <div key={col[0]} className="flex-1">
                {col.map((src, rowIdx) => {
                  const index = rowIdx * 3 + colIdx;
                  return (
                    <GalleryPhoto
                      key={src}
                      src={src}
                      alt={t("altPhoto", { index: index + 1 })}
                      reflect={rowIdx === col.length - 1}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-5xl md:text-7xl font-light mb-16 tracking-wider text-zinc-100"
            style={{ fontFamily: "Didot, serif" }}
          >
            {t("contactTitle")}
          </h2>
          <h3
            className="text-2xl md:text-3xl font-light mb-8 tracking-wider text-zinc-100"
            style={{ fontFamily: "Didot, serif" }}
          >
            {t("bookingsTitle")}
          </h3>
          <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
            <p>{t("bookingsLead")}</p>
            <p>{t("bookingsLocation")}</p>
            <p>{t("bookingsCta")}</p>
            <p className="flex items-center justify-center gap-3 pt-2 text-zinc-200">
              <Mail size={18} className="text-zinc-400" />
              <a
                href="mailto:djoumalilaa@gmail.com"
                className="hover:text-white transition-colors"
              >
                djoumalilaa@gmail.com
              </a>
            </p>
          </div>
          <p className="flex items-center justify-center gap-3 mt-12 text-zinc-200 text-lg font-light">
            <Instagram size={18} className="text-zinc-400" />
            <a
              href="https://instagram.com/_alicia_djm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              @_alicia_djm
            </a>
          </p>
        </div>
      </section>

      <footer className="py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="text-zinc-500 text-xs"
            style={{ fontFamily: "Didot, serif" }}
          >
            {t("copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
}
