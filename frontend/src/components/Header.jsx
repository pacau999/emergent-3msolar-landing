import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { Button } from '../components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Benefícios', id: 'benefits' },
    { label: 'Como Funciona', id: 'how-it-works' },
    { label: 'Depoimentos', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-tight">
                Três Marias Solar
              </h1>
              <p className="text-xs text-gray-600">Energia Solar</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Solicitar Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-orange-600 hover:bg-orange-700 text-white w-full mt-2"
          >
            Solicitar Orçamento
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
