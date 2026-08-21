"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

function LanguageSwitcher({
  className,
  onSelect,
}: {
  className: string;
  onSelect?: () => void;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-2">
          {i > 0 && <span className="opacity-40">|</span>}
          <button
            type="button"
            onClick={() => {
              router.replace(pathname, { locale: loc });
              onSelect?.();
            }}
            className={`text-sm tracking-wider uppercase transition-opacity ${
              locale === loc
                ? "opacity-100 font-medium"
                : "opacity-50 hover:opacity-80"
            }`}
            aria-current={locale === loc ? "true" : undefined}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}

export default function Header() {
  const t = useTranslations("nav");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { handleLinkClick } = useSmoothScroll();
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    if (!isHomePage) {
      router.push(`/#${sectionId}`);
    } else {
      handleLinkClick(e, sectionId);
    }
  };

  const navLinkClass = `text-sm tracking-wider transition-all duration-300 cursor-pointer ${
    isScrolled || isMenuOpen
      ? "text-zinc-300 hover:text-white"
      : "text-white hover:text-gray-200"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-[#0e0c0a]/90 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-light tracking-wider cursor-pointer hover:opacity-70 transition-all duration-300 text-white"
            style={{ fontFamily: "Didot, serif" }}
          >
            Alicia Djoumalila
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/#portfolio"
              className={navLinkClass}
              onClick={(e) => handleAnchorClick(e, "portfolio")}
            >
              {t("gallery")}
            </Link>
            <Link href="/about" className={navLinkClass}>
              {t("about")}
            </Link>
            <Link
              href="/#contact"
              className={navLinkClass}
              onClick={(e) => handleAnchorClick(e, "contact")}
            >
              {t("contact")}
            </Link>
            <LanguageSwitcher
              className={
                isScrolled || isMenuOpen ? "text-zinc-300" : "text-white"
              }
            />
          </div>

          <button
            type="button"
            className="md:hidden relative flex justify-center items-center w-8 h-8"
            onClick={toggleMenu}
            aria-label={t("toggleMenu")}
          >
            <span
              className={`absolute w-6 h-px transition-all duration-300 ${
                isScrolled || isMenuOpen ? "bg-zinc-300" : "bg-white"
              } ${isMenuOpen ? "rotate-45" : "-translate-y-1"}`}
            />
            <span
              className={`absolute w-6 h-px transition-all duration-300 ${
                isScrolled || isMenuOpen ? "bg-zinc-300" : "bg-white"
              } ${isMenuOpen ? "-rotate-45" : "translate-y-1"}`}
            />
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "h-screen opacity-100" : "h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 flex flex-col items-center justify-center h-full">
            <Link
              href="/#portfolio"
              className="block text-2xl text-zinc-300 hover:text-white transition-colors cursor-pointer"
              style={{ fontFamily: "Didot, serif" }}
              onClick={(e) => {
                handleAnchorClick(e, "portfolio");
                setIsMenuOpen(false);
              }}
            >
              {t("gallery")}
            </Link>
            <Link
              href="/about"
              className="block text-2xl text-zinc-300 hover:text-white transition-colors cursor-pointer"
              style={{ fontFamily: "Didot, serif" }}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href="/#contact"
              className="block text-2xl text-zinc-300 hover:text-white transition-colors cursor-pointer"
              style={{ fontFamily: "Didot, serif" }}
              onClick={(e) => {
                handleAnchorClick(e, "contact");
                setIsMenuOpen(false);
              }}
            >
              {t("contact")}
            </Link>
            <LanguageSwitcher
              className="text-zinc-300 pt-4"
              onSelect={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
