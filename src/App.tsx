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

// --- Assets ---
import heroVideo from "./assets/hero-video.mp4";
import studioImg from "./assets/studio.jpg";
import insta1 from "./assets/IMG_5367.jpg";
import insta2 from "./assets/IMG_5593.jpg";
import insta3 from "./assets/IMG_7647.jpg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans text-gray-900 selection:bg-pink-100 selection:text-pink-600">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300">
              <Sparkles size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Unha de Gata
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Serviços", "Diferenciais", "Galeria", "Contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-gray-600 hover:text-pink-500 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open("https://wa.me/5519999999999", "_blank")}
              className="bg-pink-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-pink-200 hover:bg-pink-600 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
            >
              Agendar Agora
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {["Serviços", "Diferenciais", "Galeria", "Contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl font-bold text-gray-900 text-left"
              >
                {item}
              </button>
            ))}
            <button className="w-full bg-pink-500 text-white py-4 rounded-2xl text-lg font-bold shadow-xl shadow-pink-100">
              Agendar pelo WhatsApp
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-bold mb-6">
                <Star size={16} fill="currentColor" />
                <span>Referência em Campinas</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                Realce sua <br />
                <span className="text-pink-500 italic font-serif">Beleza Natural</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Um espaço dedicado ao cuidado das suas mãos e pés, com técnicas exclusivas e o carinho que você merece.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.open("https://wa.me/5519999999999", "_blank")}
                  className="bg-gray-900 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Agendar Horário
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('galeria')}
                  className="bg-white text-gray-900 px-8 py-4 rounded-2xl text-lg font-bold shadow-sm border border-gray-100 hover:bg-gray-50 transition-all duration-300"
                >
                  Ver Galeria
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-black">
                <video 
                  src={heroVideo} 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
              </div>
              {/* Floating Cards */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[200px]">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#ec4899" className="text-pink-500" />)}
                </div>
                <p className="text-sm font-bold text-gray-900 mb-1">+500 Clientes Felizes</p>
                <p className="text-xs text-gray-500">Atendimento personalizado e materiais esterilizados.</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-50/50 -z-10 rounded-l-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pink-200/20 blur-3xl rounded-full" />
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Tudo o que você precisa para se sentir maravilhosa, do clássico ao moderno.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Manicure & Pedicure", desc: "Cuidado completo com cuticulagem e esmaltação perfeita.", price: "A partir de R$ 45" },
              { title: "Alongamento em Gel", desc: "Unhas resistentes e naturais com acabamento impecável.", price: "A partir de R$ 150" },
              { title: "Nail Art", desc: "Designs exclusivos e personalizados para o seu estilo.", price: "Consulte valores" }
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#faf9f6] hover:bg-pink-50 transition-colors duration-500 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Sparkles className="text-pink-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <p className="text-pink-600 font-bold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Photo Section */}
      <section id="diferenciais" className="py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
              <img 
                src={studioImg} 
                alt="Nosso Studio" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">Um ambiente pensado <br /> <span className="text-pink-500">para o seu relaxamento</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Biossegurança", desc: "Materiais 100% descartáveis ou esterilizados em autoclave." },
                  { title: "Produtos Premium", desc: "As melhores marcas nacionais e importadas do mercado." },
                  { title: "Conforto", desc: "Poltronas ergonômicas e ambiente climatizado." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-pink-500" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Galeria de Inspiração</h2>
              <p className="text-gray-500">Confira alguns dos nossos trabalhos mais recentes.</p>
            </div>
            <button 
              onClick={() => window.open("https://instagram.com/unhadegata", "_blank")}
              className="flex items-center gap-2 text-pink-500 font-bold hover:gap-3 transition-all"
            >
              Ver mais no Instagram <Instagram size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[insta1, insta2, insta3].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-lg"
              >
                <img src={img} alt={`Trabalho ${i+1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-gray-900 text-white rounded-t-[60px] lg:rounded-t-[100px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-12">Onde nos <br /> <span className="text-pink-500">encontrar</span></h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-pink-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Endereço</h4>
                    <p className="text-gray-400 leading-relaxed">
                      R. Paulo Afonso Proença Passarinho, 119<br />
                      Jardim Chapadão, Campinas - SP<br />
                      CEP: 13070-165
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="text-pink-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Horário de Funcionamento</h4>
                    <p className="text-gray-400">
                      Terça a Sexta: 09h às 19h<br />
                      Sábado: 09h às 17h
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-pink-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Contato</h4>
                    <p className="text-gray-400">
                      WhatsApp: (19) 99999-9999<br />
                      Instagram: @unhadegata
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden grayscale invert opacity-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.727828469375!2d-47.0854446!3d-22.8865556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c6f7f7f7f7f7%3A0x7f7f7f7f7f7f7f7f!2sR.%20Paulo%20Afonso%20Proen%C3%A7a%20Passarinho%2C%20119%20-%20Jardim%20Chapad%C3%A3o%2C%20Campinas%20-%20SP%2C%2013070-165!5e0!3m2!1spt-BR!2sbr!4v1712520000000!5m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© 2024 Unha de Gata Studio. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Instagram className="text-gray-500 hover:text-pink-500 cursor-pointer transition-colors" />
              <MessageCircle className="text-gray-500 hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open("https://wa.me/5519999999999", "_blank")}
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-200 flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </motion.button>
    </div>
  );
}
