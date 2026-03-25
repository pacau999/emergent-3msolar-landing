import React from 'react';
import { Sun, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_solar-marketplace-11/artifacts/7edfjfri_Logo3MSolar.png" 
                alt="Três Marias Solar" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Soluções completas em energia solar fotovoltaica para residências e empresas.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={companyInfo.social.facebook}
                className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.instagram}
                className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.linkedin}
                className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', id: 'hero' },
                { label: 'Benefícios', id: 'benefits' },
                { label: 'Como Funciona', id: 'how-it-works' },
                { label: 'Portfólio', id: 'portfolio' },
                { label: 'Depoimentos', id: 'testimonials' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contato', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                  <a 
                    href={companyInfo.contact.phoneUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">E-mail</p>
                  <a 
                    href={`mailto:${companyInfo.contact.email}`}
                    className="text-gray-300 hover:text-orange-500 transition-colors break-all"
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Localização</p>
                  <a
                    href={companyInfo.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {companyInfo.contact.address}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {companyInfo.name}. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              CNPJ: {companyInfo.cnpj}
            </p>
          </div>
        </div>

        {/* Energy Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
            <Sun className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-400">
              Energia limpa e renovável para um futuro sustentável
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
