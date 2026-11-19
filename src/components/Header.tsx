"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const SECTIONS = ["profile", "portfolio", "booking", "about"] as const;
const NAV_LABELS = {
  profile: "profile",
  portfolio: "gallery",
  booking: "booking",
  about: "about",
} as const;

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
    <div className={`flex items-center gap-1 md:gap-2 ${className}`}>
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1 md:gap-2">
          {i > 0 && <span className="opacity-40">|</span>}
          <button
            type="button"
            onClick={() => {
              router.replace(pathname, { locale: loc });
              onSelect?.();
            }}
            className={`uppercase transition-opacity ${
              locale === loc ? "opacity-100" : "opacity-50 hover:opacity-80"
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

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const offset = 120;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(SECTIONS[SECTIONS.length - 1]);
        return;
      }
      let current: string | null = null;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return active;
}

export default function Header() {
  const t = useTranslations("nav");
  const { handleLinkClick } = useSmoothScroll();
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm text-ink border-b-[0.5px] border-rule">
      <nav className="w-full h-12 px-4 md:px-8 flex items-center justify-between gap-3">
        <Link
          href="/"
          aria-label="Alicia Djoumalila"
          className="shrink-0 transition-opacity hover:opacity-70"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="font-serif text-lg md:text-2xl leading-none tracking-[0.02em]">
            A<span className="italic">D</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-12">
          <ul className="flex items-center gap-x-3 md:gap-x-10">
            {SECTIONS.map((id) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <Link
                    href={`/#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative block py-1 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.12em] md:tracking-[0.25em] whitespace-nowrap transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                    }`}
                    onClick={(e) => handleLinkClick(e, id)}
                  >
                    {t(NAV_LABELS[id])}
                    <span
                      aria-hidden
                      className={`absolute left-0 right-0 -bottom-0.5 h-px bg-current origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <LanguageSwitcher className="font-mono text-[9px] md:text-[11px] tracking-[0.12em] md:tracking-[0.25em] whitespace-nowrap" />
        </div>
      </nav>
    </header>
  );
}
