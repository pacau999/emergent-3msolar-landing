import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import { companyInfo, mockFormSubmit } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await mockFormSubmit(formData);
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Contato
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solicite seu Orçamento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário e receba uma proposta personalizada em até 24 horas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Fale Conosco
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="(31) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telefone</p>
                    <a href={`tel:${companyInfo.contact.phone}`} className="text-orange-100 hover:text-white transition-colors">
                      {companyInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">E-mail</p>
                    <a href={`mailto:${companyInfo.contact.email}`} className="text-orange-100 hover:text-white transition-colors break-all">
                      {companyInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Localização</p>
                    <p className="text-orange-100">{companyInfo.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Horário de Atendimento</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span className="font-semibold text-gray-900">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-semibold text-gray-900">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="font-semibold text-gray-900">Fechado</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-2">Atendimento Pós-Venda</h3>
              <p className="text-gray-300 mb-4">
                Suporte técnico rápido e eficaz para nossos clientes
              </p>
              <div className="inline-flex items-center space-x-2 bg-orange-600 px-4 py-2 rounded-full">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">24/7 Disponível</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
