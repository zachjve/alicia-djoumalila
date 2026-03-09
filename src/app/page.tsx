"use client";

import Header from '../components/Header';
import { Mail, Phone, Instagram } from 'lucide-react';

const GALLERY_IMAGES = [
  '/pics/new/CYO_9518.jpg',
  '/pics/new/CYO_9443 2.jpg',
  '/pics/new/CYO_9504.jpg',
  '/pics/new/CYO_9425.jpg',
  '/pics/IMG_1478.jpg',
  '/pics/new/CYO_9509.jpg',
  '/pics/new/CYO_9500.jpg',
  '/pics/IMG_0212.JPG',
  '/pics/new/CYO_9384.jpg',
  '/pics/sharpen-40.jpg',
  '/pics/sharpen-22.jpg',
  '/pics/sharpen-24.jpg',
  '/pics/sharpen-14.jpg',
  '/pics/22-sharpen-7.jpg',
  '/pics/_DSC4039.jpg',
  '/pics/2-sharpen.jpg',
  '/pics/sharpen-11.jpg',
  '/pics/_DSC3406_DxO.jpg',
  '/pics/_DSC4057.jpg',
  '/pics/_DSC4150.jpg',
  '/pics/_DSC3985.jpg',
  '/pics/_DSC3439.jpg',
  '/pics/_DSC3456.jpg',
  '/pics/_DSC3978.jpg',
  '/pics/lightX 3.PNG',
];

function distributeToColumns(arr: string[], cols: number): string[][] {
  const columns: string[][] = Array.from({ length: cols }, () => []);
  arr.forEach((item, i) => {
    columns[i % cols].push(item);
  });
  return columns;
}

function GalleryPhoto({ src, index }: { src: string; index: number }) {
  return (
    <div className="group cursor-pointer overflow-hidden mb-8">
      <img
        src={src}
        alt={`Alicia - Photo ${index + 1}`}
        className="w-full h-auto rounded-sm transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        {/* Background Image - Mobile */}
        <div className="absolute inset-0 md:hidden">
          <img 
            src="/pics/new/CYO_9500.jpg" 
            alt="Alicia - Hero Mobile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Background Image - Web */}
        <div className="absolute inset-0 hidden md:block">
          <img 
            src="/pics/new/CYO_9518.jpg" 
            alt="Alicia - Hero Web" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-thin tracking-wider mb-6" style={{ fontFamily: 'Didot, serif' }}>
            ALICIA
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Mannequin professionnel • Portfolio créatif • Art de la mode
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-20 px-6">
        <div className="w-full">
          <h2 className="text-4xl md:text-6xl font-light text-center mb-16 tracking-wider text-black" style={{ fontFamily: 'Didot, serif' }}>GALERIE</h2>
          
          {/* Mobile - 1 colonne, ordre naturel */}
          <div className="block md:hidden">
            {GALLERY_IMAGES.map((src, i) => (
              <GalleryPhoto key={i} src={src} index={i} />
            ))}
          </div>

          {/* Tablette - 2 colonnes masonry, ordre en ligne: 1,2 | 3,4 | 5,6... */}
          <div className="hidden md:flex lg:hidden gap-8">
            {distributeToColumns(GALLERY_IMAGES, 2).map((col, colIdx) => (
              <div key={colIdx} className="flex-1">
                {col.map((src, rowIdx) => (
                  <GalleryPhoto key={rowIdx} src={src} index={rowIdx * 2 + colIdx} />
                ))}
              </div>
            ))}
          </div>

          {/* Desktop - 3 colonnes masonry, ordre en ligne: 1,2,3 | 4,5,6 | 7,8,9... */}
          <div className="hidden lg:flex gap-8">
            {distributeToColumns(GALLERY_IMAGES, 3).map((col, colIdx) => (
              <div key={colIdx} className="flex-1">
                {col.map((src, rowIdx) => (
                  <GalleryPhoto key={rowIdx} src={src} index={rowIdx * 3 + colIdx} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-12 tracking-wider text-black" style={{ fontFamily: 'Didot, serif' }}>CONTACT</h2>
          <div className="max-w-md mx-auto space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-light mb-6 text-black" style={{ fontFamily: 'Didot, serif' }}>Collaborations</h3>
              <p className="text-black mb-6">
                Ouverte aux projets créatifs et collaborations artistiques.
              </p>
              <div className="space-y-4 text-black">
                <p className="flex items-center justify-center gap-3">
                  <Mail size={18} className="text-black" />
                  <a 
                    href="mailto:djoumalilaa@gmail.com" 
                    className="hover:text-gray-700 transition-colors text-black"
                  >
                    djoumalilaa@gmail.com
                  </a>
                </p>
                <p className="flex items-center justify-center gap-3">
                  <Phone size={18} className="text-black" />
                  <a 
                    href="tel:0781726665" 
                    className="hover:text-gray-700 transition-colors text-black"
                  >
                    07 81 72 66 65
                  </a>
                </p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light mb-6 text-black" style={{ fontFamily: 'Didot, serif' }}>Réseaux</h3>
              <div className="space-y-4 text-black">
                <p className="flex items-center justify-center gap-3">
                  <Instagram size={18} className="text-black" />
                  <a 
                    href="https://instagram.com/_alicia_djm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-700 transition-colors text-black"
                  >
                    @_alicia_djm
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-black text-xs" style={{ fontFamily: 'Didot, serif' }}>
            Copyright © Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
