import { motion } from "motion/react";
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Sparkles, 
  Clock, 
  ChevronRight, 
  Star,
  CheckCircle2,
  Menu,
  X,
  Phone
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/5519981922430?text=Olá! Gostaria de agendar um horário."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
  >
    <MessageCircle size={32} fill="currentColor" />
  </motion.a>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-roller text-3xl md:text-4xl text-brand-gold tracking-tight flex flex-col items-center leading-[0.7]"
          >
            <span>Unha</span>
            <span>de gata</span>
          </motion.span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest">
          <a href="#home" className="hover:text-brand-gold transition-colors">Início</a>
          <a href="#servicos" className="hover:text-brand-gold transition-colors">Serviços</a>
          <a href="#galeria" className="hover:text-brand-gold transition-colors">Portfólio</a>
          <a href="#contato" className="hover:text-brand-gold transition-colors">Contato</a>
          <a 
            href="https://www.instagram.com/unha_de_gataalongamento/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-dark hover:text-brand-gold transition-colors"
          >
            <Instagram size={20} />
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Início</a>
          <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Serviços</a>
          <a href="#galeria" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Portfólio</a>
          <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Contato</a>
          <a 
            href="https://www.instagram.com/unha_de_gataalongamento/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)} 
            className="text-lg font-medium flex items-center gap-2 text-brand-gold"
          >
            <Instagram size={20} /> Instagram
          </a>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-pink/30">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-nude/50 -skew-x-12 translate-x-1/4 z-0 hidden lg:block" />
    
    <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1 bg-white rounded-full text-xs font-bold tracking-widest uppercase mb-10 text-brand-gold shadow-sm">
          Especialista em Alongamento
        </span>
        <h1 className="text-7xl lg:text-9xl font-roller leading-[0.8] mb-6 text-brand-gold drop-shadow-sm flex flex-col items-start">
          <div className="flex flex-col items-center">
            <span>Unha</span>
            <span>de gata</span>
          </div>
          <span className="block text-xl lg:text-2xl font-sans tracking-[0.4em] uppercase mt-8 text-brand-gold/80 font-bold">Nail Design</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
          Unhas perfeitas que elevam sua autoestima. Técnica premium, acabamento impecável e nail design exclusivo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/5519981922430" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle size={20} />
            Agendar Agora
          </a>
          <a href="#galeria" className="btn-secondary">
            Ver Trabalhos
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-black">
          <video 
            src="/hero-video.mp4" 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
          <div className="flex items-center gap-4">
            <div className="bg-brand-pink p-3 rounded-full">
              <Sparkles className="text-brand-gold" />
            </div>
            <div>
              <p className="font-bold text-lg">+500 Clientes</p>
              <p className="text-sm text-gray-500">Satisfeitas este ano</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { 
      title: "Alongamento em Gel", 
      desc: "Unhas resistentes com aspecto natural e brilho duradouro.", 
      price: "A partir de R$ 150",
      img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=500&auto=format&fit=crop"
    },
    { 
      title: "Alongamento em Fibra", 
      desc: "A técnica mais moderna para unhas finas e extremamente resistentes.", 
      price: "A partir de R$ 180",
      img: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=500&auto=format&fit=crop"
    },
    { 
      title: "Esmaltação em Gel", 
      desc: "Cor perfeita por até 20 dias sem descascar.", 
      price: "A partir de R$ 80",
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=500&auto=format&fit=crop"
    },
    { 
      title: "Nail Art Personalizada", 
      desc: "Desenhos exclusivos, pedrarias e tendências do Instagram.", 
      price: "Sob consulta",
      img: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=500&auto=format&fit=crop"
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-brand-nude/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6" />
          <p className="text-gray-600 max-w-xl mx-auto">Excelência em cada detalhe para transformar suas mãos em obras de arte.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{service.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-brand-gold font-bold">{service.price}</span>
                  <a href="https://wa.me/5519981922430" className="text-brand-dark font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Agendar <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => (
  <section id="galeria" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-serif mb-4">Nosso Instagram</h2>
          <p className="text-gray-500">Acompanhe nossas transformações diárias em @unha_de_gataalongamento</p>
        </div>
        <a 
          href="https://www.instagram.com/unha_de_gataalongamento/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-brand-dark font-bold border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors"
        >
          <Instagram size={20} />
          Ver Perfil Completo
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          "/IMG_5367.jpg",
          "/IMG_5593.jpg",
          "/IMG_7647.jpg",
          "/IMG_7667.jpg",
          "/IMG_7780.jpg",
          "/IMG_8037.jpg",
          "/IMG_8048.jpg",
          "/IMG_8059.jpg"
        ].map((img, idx) => (
          <motion.a
            key={idx}
            href="https://www.instagram.com/unha_de_gataalongamento/"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer"
            whileHover={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
          >
            <img 
              src={img} 
              alt={`Trabalho Instagram ${idx + 1}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <Instagram className="text-white" size={32} />
                <span className="text-white text-xs font-bold uppercase tracking-widest">Ver no Insta</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    { name: "Mariana Silva", text: "Melhor alongamento que já fiz! A durabilidade é impressionante e o acabamento é super natural.", stars: 5 },
    { name: "Beatriz Costa", text: "Atendimento impecável. O ambiente é lindo e as meninas são super caprichosas. Recomendo muito!", stars: 5 },
    { name: "Juliana Mendes", text: "Minhas unhas duram muito! Faço a manutenção a cada 25 dias e elas continuam perfeitas.", stars: 5 },
  ];

  return (
    <section className="py-24 bg-brand-pink/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-16">O que dizem nossas clientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-10 rounded-3xl shadow-sm relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="#d4af37" className="text-brand-gold" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center font-bold text-brand-gold">
                  {review.name[0]}
                </div>
                <span className="font-bold">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contato" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-serif mb-8">Onde Estamos</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-brand-nude p-4 rounded-2xl">
                <MapPin className="text-brand-gold" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Endereço</h4>
                <p className="text-gray-500">R. Paulo Afonso Proença Passarinho, 119 - Jardim Chapadão, Campinas - SP, 13070-165</p>
                <a href="https://www.google.com/maps/search/?api=1&query=R.+Paulo+Afonso+Proença+Passarinho,+119+-+Jardim+Chapadão,+Campinas+-+SP,+13070-165" target="_blank" rel="noopener noreferrer" className="text-brand-gold font-bold text-sm mt-2 inline-block">Ver no Google Maps</a>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-brand-nude p-4 rounded-2xl">
                <Clock className="text-brand-gold" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Horário de Atendimento</h4>
                <p className="text-gray-500">Segunda a Sexta: 08h às 20h<br />Sábado: 08h às 13h</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-brand-nude p-4 rounded-2xl">
                <Phone className="text-brand-gold" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Contato</h4>
                <p className="text-gray-500">(19) 98192-2430</p>
                <p className="text-gray-500">contato@unhadagata.com.br</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden h-[400px] shadow-2xl border-8 border-white">
          <iframe 
            src="https://maps.google.com/maps?q=R.%20Paulo%20Afonso%20Proença%20Passarinho,%20119%20-%20Jardim%20Chapadão,%20Campinas%20-%20SP,%2013070-165&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-dark text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <div className="mb-8">
        <span className="font-roller text-5xl md:text-6xl text-brand-gold flex flex-col items-center leading-[0.8]">
          <span>Unha</span>
          <span>de gata</span>
        </span>
      </div>
      <p className="text-gray-400 mb-12 max-w-md mx-auto">
        Especialista em Alongamento e Nail Design. Elevando sua autoestima com unhas perfeitas.
      </p>
      
      <div className="flex justify-center gap-6 mb-12">
        <a 
          href="https://www.instagram.com/unha_de_gataalongamento/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all"
        >
          <Instagram size={20} />
        </a>
        <a 
          href="https://wa.me/5519981922430" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all"
        >
          <MessageCircle size={20} />
        </a>
      </div>

      <div className="border-t border-white/10 pt-12 text-sm text-gray-500">
        <p>© 2026 Unha de Gata. Todos os direitos reservados.</p>
        <p className="mt-2">Desenvolvido com ❤️ para mulheres empoderadas.</p>
      </div>
    </div>
  </footer>
);

const FinalCTA = () => (
  <section className="py-24 bg-brand-gold relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
    </div>
    
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Agende seu horário e transforme suas unhas</h2>
      <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
        Não perca tempo! Garanta sua vaga com a melhor especialista da região.
      </p>
      <a href="https://wa.me/5519981922430" className="bg-white text-brand-dark px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-3">
        <MessageCircle size={24} />
        Agendar Agora
      </a>
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-8">Sobre a Unha de Gata</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Nascemos da paixão por transformar o cuidado com as unhas em uma experiência de luxo e bem-estar. Mais do que estética, acreditamos que unhas bem cuidadas são um reflexo da sua personalidade e autoestima.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Nossa fundadora, especialista em técnicas internacionais de nail design, trouxe para a região um conceito premium de atendimento, onde cada detalhe é pensado para o seu conforto e satisfação.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-gold" />
                <span className="font-bold">Materiais Premium</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-gold" />
                <span className="font-bold">Higiene Rigorosa</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-gold" />
                <span className="font-bold">Técnicas Modernas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-gold" />
                <span className="font-bold">Atendimento VIP</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/studio.jpg" 
              alt="Ambiente Unha de Gata Premium" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-pink rounded-full -z-10" />
          </motion.div>
        </div>
      </section>
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
