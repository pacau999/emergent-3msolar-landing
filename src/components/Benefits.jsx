import React from 'react';
import { Wallet, Leaf, TrendingUp, DollarSign, Settings, Zap } from 'lucide-react';
import { Card } from '../components/ui/card';
import { benefits } from '../data/mock';

const iconMap = {
  Wallet: Wallet,
  Leaf: Leaf,
  TrendingUp: TrendingUp,
  DollarSign: DollarSign,
  Settings: Settings,
  Zap: Zap
};

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Vantagens
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por que escolher Energia Solar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Invista no futuro com energia limpa, econômica e sustentável
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <Card
                key={benefit.id}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <IconComponent className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all duration-300"></div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Image Section */}
        <div className="mt-20 relative rounded-3xl overflow-hidden h-96 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            alt="Solar Installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent flex items-end">
            <div className="p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Soluções sob medida para residências e empresas
              </h3>
              <p className="text-xl text-gray-200 max-w-2xl">
                Desenvolvemos projetos personalizados que atendem às necessidades específicas de cada cliente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
