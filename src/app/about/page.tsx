"use client";

import Header from '../../components/Header';
import { ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* About Section */}
      <section className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-thin mb-6 tracking-wider text-gray-900" style={{ fontFamily: 'Didot, serif' }}>
                À PROPOS
              </h1>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image Section */}
              <div className="relative">
                <div className="aspect-[3/4] bg-gray-100 overflow-hidden shadow-2xl">
                  <img 
                    src="/pics/_DSC3985.jpg" 
                    alt="Alicia - Portrait artistique" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="space-y-8">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg sm:text-xl font-light">
                    Passionnée par la mode et la photographie, je collabore avec des créateurs et photographes 
                    pour donner vie à leurs projets. J'aime explorer différentes esthétiques et créer des images 
                    qui transmettent des émotions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Spécialités */}
            <div>
              <h3 className="text-lg font-thin text-gray-900 mb-4 tracking-wider" style={{ fontFamily: 'Didot, serif' }}>Spécialités</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>Mode</li>
                <li>Beauté</li>
                <li>Lifestyle</li>
              </ul>
            </div>

            {/* Mensurations */}
            <div>
              <h3 className="text-lg font-thin text-gray-900 mb-4 tracking-wider" style={{ fontFamily: 'Didot, serif' }}>Mensurations</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>Hauteur: 162 cm</li>
                <li>Poids: 47 kg</li>
                <li>Tour de poitrine: 80 cm (bonnet A)</li>
                <li>Tour de taille: 66 cm</li>
                <li>Tour de hanche: 82 cm</li>
              </ul>
            </div>

            {/* Agence */}
            <div>
              <h3 className="text-lg font-thin text-gray-900 mb-4 tracking-wider" style={{ fontFamily: 'Didot, serif' }}>Agence</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li className="font-medium">
                  <a 
                    href="https://www.hourra.net/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gray-900 transition-colors duration-200"
                  >
                    HOURRA MODELS
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                </li>
                <li>04 78 89 01 04</li>
                <li>lyon@hourra.net</li>
                <li>53 avenue maréchal Foch</li>
                <li>Lyon</li>
              </ul>
            </div>

            {/* Localisation */}
            <div>
              <h3 className="text-lg font-thin text-gray-900 mb-4 tracking-wider" style={{ fontFamily: 'Didot, serif' }}>Localisation</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>Lyon, France</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-black text-xs" style={{ fontFamily: 'Didot, serif' }}>
            Copyright © Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
