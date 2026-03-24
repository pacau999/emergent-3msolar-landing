import React from 'react';
import { Check } from 'lucide-react';
import { howItWorks } from '../data/mock';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Processo Simples
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Do primeiro contato até a economia na sua conta de luz, tudo é simples e transparente
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {howItWorks.map((step, index) => (
            <div
              key={step.id}
              className="flex gap-6 group"
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-3xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-orange-300 to-transparent"></div>
                  )}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative Check */}
                <div className="mt-4 inline-flex items-center space-x-2 text-orange-600">
                  <Check className="w-5 h-5" />
                  <span className="text-sm font-medium">Rápido e Eficiente</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image with Overlay */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div className="relative h-96 md:h-auto">
              <img
                src="https://images.pexels.com/photos/4254164/pexels-photo-4254164.jpeg"
                alt="Professional Installation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 flex flex-col justify-center">
              <div className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-6 w-fit">
                Profissionalismo Garantido
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Equipe Técnica Especializada
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Nossos profissionais são certificados e treinados com as melhores práticas de instalação, garantindo segurança e máxima eficiência do seu sistema.
              </p>

              <div className="space-y-4">
                {[
                  'Engenheiros especializados',
                  'Instalação com segurança certificada',
                  'Equipamentos de alta qualidade',
                  'Garantia estendida'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
