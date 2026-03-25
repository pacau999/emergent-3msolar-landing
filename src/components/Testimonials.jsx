import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from '../components/ui/card';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Satisfação comprovada de quem já investe em energia solar
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-orange-600" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Confiança que gera resultados
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Mais de 200 clientes satisfeitos já economizam com energia solar através da Três Marias Solar
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
              <p className="text-gray-400">Satisfação</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">3+ MW</div>
              <p className="text-gray-400">Instalados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">200+</div>
              <p className="text-gray-400">Clientes</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">5+</div>
              <p className="text-gray-400">Anos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
