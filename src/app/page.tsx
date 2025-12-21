"use client";

import Header from '../components/Header';
import { Mail, Phone, Instagram } from 'lucide-react';

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
            src="/pics/_DSC4150.jpg" 
            alt="Alicia - Hero Mobile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Background Image - Web */}
        <div className="absolute inset-0 hidden md:block">
          <img 
            src="/pics/2-sharpen.jpg" 
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
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {/* Gallery photos */}
            {[
              '/pics/_DSC4007.jpg',
              '/pics/13-sharpen-3.jpg',
              '/pics/_DSC3584.jpg',
              '/pics/_DSC4039.jpg',
              '/pics/22-sharpen-7.jpg',
              '/pics/_DSC3406_DxO.jpg',
              '/pics/lightX 2.PNG',
              '/pics/_DSC4057.jpg',
              '/pics/_DSC3439.jpg',
              '/pics/IMG_0036.JPG',
              '/pics/_DSC4119.jpg',
              '/pics/11-sharpen-11.jpg',
              '/pics/_DSC3456.jpg',
              '/pics/lightX.PNG',
              '/pics/_DSC3985.jpg',
              '/pics/15-652A2446.jpg',
              '/pics/_DSC3589_DxO.jpg',
              '/pics/IMG_0212.JPG',
              '/pics/_DSC4085.jpg',
              '/pics/13-sharpen-3 2.jpg',
              '/pics/_DSC3978.jpg',
              '/pics/22-sharpen-7 2.jpg',
              '/pics/_DSC4013.jpg',
              '/pics/lightX 3.PNG',
              '/pics/_DSC4137.jpg',
              '/pics/2-sharpen.jpg',
              '/pics/_DSC4150.jpg',
              '/pics/sharpen-11.jpg',
              '/pics/sharpen-14.jpg',
              '/pics/sharpen-22.jpg',
              '/pics/sharpen-22 2.jpg',
              '/pics/sharpen-24.jpg',
              '/pics/sharpen-35.jpg',
              '/pics/sharpen-40.jpg',
              '/pics/IMG_1478.jpg'
            ].map((imagePath, index) => (
              <div key={index} className="break-inside-avoid mb-8 group cursor-pointer overflow-hidden">
                <img 
                  src={imagePath} 
                  alt={`Alicia - Photo ${index + 1}`}
                  className="w-full h-auto rounded-sm transition-transform duration-700 hover:scale-105"
                />
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
