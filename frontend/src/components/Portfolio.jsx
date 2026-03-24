import React, { useState } from 'react';
import { Zap, Building2, Home, Sprout, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { projects } from '../data/mock';

const categoryIcons = {
  Residencial: Home,
  Industrial: Building2,
  Comercial: Building2,
  Rural: Sprout
};

const Portfolio = () => {
  const [filter, setFilter] = useState('Todos');
  
  const categories = ['Todos', 'Residencial', 'Comercial', 'Industrial', 'Rural'];
  
  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nossos Projetos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfólio de Instalações
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformamos com energia solar
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-orange-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category] || Building2;
            return (
              <Card
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <CategoryIcon className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-semibold text-gray-900">
                      {project.category}
                    </span>
                  </div>

                  {/* Savings Badge */}
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-2 rounded-lg font-bold">
                    {project.savings} economia
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Power Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-orange-600" />
                      <span className="text-lg font-bold text-gray-900">
                        {project.power}
                      </span>
                    </div>
                    <button className="text-orange-600 hover:text-orange-700 font-medium flex items-center space-x-1 group">
                      <span>Ver detalhes</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seu projeto pode ser o próximo!
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de clientes satisfeitos que já investem em energia solar
          </p>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Solicitar Orçamento Gratuito
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
