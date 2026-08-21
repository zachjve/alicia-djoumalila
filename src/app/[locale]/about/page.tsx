"use client";

import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Header from "../../../components/Header";

export default function About() {
  const t = useTranslations("about");

  return (
    <div className="min-h-screen bg-[#0e0c0a]">
      <Header />

      <section className="min-h-screen bg-[#0e0c0a]">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16">
            <div className="text-center mb-16">
              <h1
                className="text-5xl md:text-7xl font-thin mb-6 tracking-wider text-zinc-100"
                style={{ fontFamily: "Didot, serif" }}
              >
                {t("title")}
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="aspect-[3/4] bg-zinc-900 overflow-hidden shadow-2xl">
                  <img
                    src="/pics/new/_DSC4035.jpeg"
                    alt={t("altPortrait")}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <p
                  className="text-sm sm:text-base tracking-[0.25em] text-zinc-200"
                  style={{ fontFamily: "Didot, serif" }}
                >
                  {t("tagline")}
                </p>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                  <p className="text-lg sm:text-xl font-light">{t("bio1")}</p>
                  <p className="text-lg sm:text-xl font-light">{t("bio2")}</p>
                  <p className="text-lg sm:text-xl font-light">{t("bio3")}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 rounded-[2rem] border border-white/8 px-6 py-10 sm:px-10 sm:py-12">
              <h3
                className="text-center text-3xl sm:text-4xl font-thin tracking-[0.35em] text-zinc-100 mb-10"
                style={{ fontFamily: "Didot, serif" }}
              >
                {t("profileTitle")}
              </h3>
              <div className="grid md:grid-cols-2 gap-10 md:gap-16">
                <ul className="space-y-4">
                  {(
                    [
                      ["eyesLabel", "eyesValue"],
                      ["hairLabel", "hairValue"],
                      ["skinLabel", "skinValue"],
                      ["tattoosLabel", "tattoosValue"],
                    ] as const
                  ).map(([label, value]) => (
                    <li
                      key={label}
                      className="flex items-baseline justify-between gap-6 border-b border-white/10 pb-3"
                    >
                      <span className="text-zinc-500 text-sm tracking-wider uppercase">
                        {t(label)}
                      </span>
                      <span className="text-[#c5b8a5] font-light text-right">
                        {t(value)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div>
                  <p
                    className="text-zinc-100 text-sm tracking-[0.25em] uppercase mb-5"
                    style={{ fontFamily: "Didot, serif" }}
                  >
                    {t("measurementsTitle")}
                  </p>
                  <ul className="space-y-4">
                    {(
                      [
                        ["heightLabel", "heightValue"],
                        ["bustLabel", "bustValue"],
                        ["cupLabel", "cupValue"],
                        ["waistLabel", "waistValue"],
                        ["hipsLabel", "hipsValue"],
                        ["weightLabel", "weightValue"],
                        ["shoesLabel", "shoesValue"],
                        ["clothesTopLabel", "clothesTopValue"],
                        ["clothesBottomLabel", "clothesBottomValue"],
                      ] as const
                    ).map(([label, value]) => (
                      <li
                        key={label}
                        className="flex items-baseline justify-between gap-6 border-b border-white/10 pb-3"
                      >
                        <span className="text-zinc-500 text-sm tracking-wider">
                          {t(label)}
                        </span>
                        <span className="text-[#c5b8a5] font-light tabular-nums">
                          {t(value)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3
                className="text-lg font-thin text-zinc-100 mb-4 tracking-wider"
                style={{ fontFamily: "Didot, serif" }}
              >
                {t("agencyTitle")}
              </h3>
              <ul className="space-y-1 text-zinc-400 text-sm">
                <li className="font-medium">
                  <a
                    href="https://www.enjoy-models.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                  >
                    ENJOY MODELS
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+33493721000"
                    className="hover:text-white transition-colors duration-200"
                  >
                    +33 4 93 72 10 00
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:booking@enjoy-models.net"
                    className="hover:text-white transition-colors duration-200"
                  >
                    booking@enjoy-models.net
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=27+avenue+Jean+M%C3%A9decin,+06000+Nice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200"
                  >
                    27 avenue Jean Médecin
                    <br />
                    06000 Nice
                  </a>
                </li>
                <li className="font-medium pt-3">
                  <a
                    href="https://www.hourra.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors duration-200"
                  >
                    HOURRA MODELS
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+33478890104"
                    className="hover:text-white transition-colors duration-200"
                  >
                    +33 4 78 89 01 04
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:lyon@hourra.net"
                    className="hover:text-white transition-colors duration-200"
                  >
                    lyon@hourra.net
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=53+avenue+mar%C3%A9chal+Foch,+Lyon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200"
                  >
                    53 avenue maréchal Foch
                    <br />
                    Lyon
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-lg font-thin text-zinc-100 mb-4 tracking-wider"
                style={{ fontFamily: "Didot, serif" }}
              >
                {t("locationTitle")}
              </h3>
              <ul className="space-y-1 text-zinc-400 text-sm">
                <li>{t("location")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 sm:py-8 px-4 sm:px-6">
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
