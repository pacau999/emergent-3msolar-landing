import React from 'react';
import { ArrowRight, Award, Users, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { companyInfo } from '../data/mock';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d"
          alt="Solar Panels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-orange-900/60"></div>
      </div>

      {/* Animated Circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-8">
            <Award className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">
              Mais de 3 Megawatts Instalados
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {companyInfo.tagline}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
            {companyInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              onClick={scrollToContact}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-orange-600/50 transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento Gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              Como Funciona
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-2">
                <Zap className="w-6 h-6 text-orange-400" />
                <span className="text-3xl font-bold text-white">
                  {companyInfo.stats.installed}
                </span>
              </div>
              <p className="text-gray-300 text-sm">Instalados</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-6 h-6 text-orange-400" />
                <span className="text-3xl font-bold text-white">
                  {companyInfo.stats.clients}
                </span>
              </div>
              <p className="text-gray-300 text-sm">Clientes Satisfeitos</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-2">
                <Award className="w-6 h-6 text-orange-400" />
                <span className="text-3xl font-bold text-white">
                  {companyInfo.stats.experience}
                </span>
              </div>
              <p className="text-gray-300 text-sm">de Experiência</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
