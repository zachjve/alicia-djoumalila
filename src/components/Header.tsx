"use client";

import { useState, useEffect } from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { handleLinkClick } = useSmoothScroll();

  // Détecter le scroll uniquement sur la page principale
  useEffect(() => {
    const isHomePage = window.location.pathname === '/';
    
    if (!isHomePage) {
      setIsScrolled(true); // Toujours en mode "scrolled" sur les autres pages
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifier l'état initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    // Si on n'est pas sur la page d'accueil, rediriger d'abord
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      // Si on est déjà sur la page d'accueil, utiliser le smooth scroll
      handleLinkClick(e, sectionId);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen
        ? 'bg-white/90 backdrop-blur-sm' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="/" 
            className={`text-xl font-light tracking-wider cursor-pointer hover:opacity-70 transition-all duration-300 ${
              isScrolled || isMenuOpen ? 'text-black' : 'text-white'
            }`} 
            style={{ fontFamily: 'Didot, serif' }}
          >
            Alicia Djoumalila
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a 
              href="/#portfolio" 
              className={`text-sm transition-all duration-300 cursor-pointer ${
                isScrolled || isMenuOpen
                  ? 'text-gray-600 hover:text-black' 
                  : 'text-white hover:text-gray-200'
              }`}
              onClick={(e) => handleAnchorClick(e, 'portfolio')}
            >
              Galerie
            </a>
            <a 
              href="/about" 
              className={`text-sm transition-all duration-300 cursor-pointer ${
                isScrolled || isMenuOpen
                  ? 'text-gray-600 hover:text-black' 
                  : 'text-white hover:text-gray-200'
              }`}
            >
              À propos
            </a>
            <a 
              href="/#contact" 
              className={`text-sm transition-all duration-300 cursor-pointer ${
                isScrolled || isMenuOpen
                  ? 'text-gray-600 hover:text-black' 
                  : 'text-white hover:text-gray-200'
              }`}
              onClick={(e) => handleAnchorClick(e, 'contact')}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative flex justify-center items-center w-8 h-8"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span 
              className={`absolute w-6 h-px transition-all duration-300 ${
                isScrolled || isMenuOpen ? 'bg-gray-600' : 'bg-white'
              } ${isMenuOpen ? 'rotate-45' : '-translate-y-1'}`}
            />
            <span 
              className={`absolute w-6 h-px transition-all duration-300 ${
                isScrolled || isMenuOpen ? 'bg-gray-600' : 'bg-white'
              } ${isMenuOpen ? '-rotate-45' : 'translate-y-1'}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 flex flex-col items-center justify-center h-full">
            <a 
              href="/#portfolio" 
              className="block text-2xl text-gray-600 hover:text-black transition-colors cursor-pointer"
              style={{ fontFamily: 'Didot, serif' }}
              onClick={(e) => {
                handleAnchorClick(e, 'portfolio');
                setIsMenuOpen(false);
              }}
            >
              Galerie
            </a>
            <a 
              href="/about" 
              className="block text-2xl text-gray-600 hover:text-black transition-colors cursor-pointer"
              style={{ fontFamily: 'Didot, serif' }}
            >
              À propos
            </a>
            <a 
              href="/#contact" 
              className="block text-2xl text-gray-600 hover:text-black transition-colors cursor-pointer"
              style={{ fontFamily: 'Didot, serif' }}
              onClick={(e) => {
                handleAnchorClick(e, 'contact');
                setIsMenuOpen(false);
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
