"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      title: "Your Gateway to European Education",
      subtitle: "Empowering African and Asian students to study in Germany, Poland, and the Netherlands",
      cta: "Start Your Journey",
    },
    fr: {
      title: "Votre Porte d'Entrée vers l'Éducation Européenne",
      subtitle: "Permettre aux étudiants africains et asiatiques d'étudier en Allemagne, en Pologne et aux Pays-Bas",
      cta: "Commencez Votre Voyage",
    },
    sw: {
      title: "Lango Lako la Elimu ya Ulaya",
      subtitle: "Kuwezesha wanafunzi wa Afrika na Asia kusoma Ujerumani, Poland, na Uholanzi",
      cta: "Anza Safari Yako",
    },
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center text-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        alt="Students studying"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{content[language].title}</h1>
        <p className="text-xl mb-8">{content[language].subtitle}</p>
        <Button size="lg" className="bg-primary text-primary-foreground">
          {content[language].cta} <ArrowRight className="ml-2" />
        </Button>
        <div className="mt-8 flex justify-center space-x-4">
          <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded ${language === 'en' ? 'bg-white text-black' : 'bg-transparent border border-white'}`}>EN</button>
          <button onClick={() => setLanguage('fr')} className={`px-3 py-1 rounded ${language === 'fr' ? 'bg-white text-black' : 'bg-transparent border border-white'}`}>FR</button>
          <button onClick={() => setLanguage('sw')} className={`px-3 py-1 rounded ${language === 'sw' ? 'bg-white text-black' : 'bg-transparent border border-white'}`}>SW</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;