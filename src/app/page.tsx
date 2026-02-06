'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  TrendingUp, 
  RotateCcw, 
  Sparkles, 
  Code2, 
  Upload,
  Shirt,
  ShoppingCart,
  Eye,
  CheckCircle2,
  ArrowUpRight,
  Play,
  ChevronDown,
  Star,
  Users,
  Store,
  Globe,
  Shield,
  Cpu,
  Layers,
  Box,
  Camera,
  Wand2,
  Package,
  Menu,
  X,
  Zap,
  Lock,
  Headphones,
  Target,
  BarChart3,
  Clock,
  Plus
} from 'lucide-react'

// ============================================
// SECTION LABEL COMPONENT (estilo Veesual)
// ============================================
function SectionLabel({ children, light = false }: { children: string, light?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-4 ${light ? 'text-white/80' : 'text-primary'}`}>
      <Plus className="w-4 h-4" />
      <span className="text-sm font-semibold tracking-widest uppercase">
        {children}
      </span>
    </div>
  )
}

// ============================================
// ANIMATED TEXT COMPONENT
// ============================================
function AnimatedText({ 
  children, 
  className = '',
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============================================
// ANIMATED COUNTER
// ============================================
function AnimatedCounter({ value, suffix = '' }: { value: number, suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    }
  }, [isInView, value])
  
  return <span ref={ref}>{count}{suffix}</span>
}

// ============================================
// HEADER
// ============================================
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navLinks = [
    { href: '#solucoes', label: 'Soluções' },
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#integracoes', label: 'Integrações' },
    { href: '#contato', label: 'Contato' },
  ]
  
  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className={`w-full px-4 md:px-8 lg:px-12 py-4 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-black/5' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
            <a href="/" className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
                scrolled ? 'bg-primary shadow-primary/25' : 'bg-white shadow-white/25'
              }`}>
                <Eye className={`w-5 h-5 ${scrolled ? 'text-white' : 'text-primary'}`} />
              </div>
              <span className={`text-xl md:text-2xl font-bold ${scrolled ? 'text-textDark' : 'text-white'}`}>
                look.me
              </span>
            </a>
            
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className={`transition-colors text-sm font-medium ${
                    scrolled 
                      ? 'text-textDark/60 hover:text-primary' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center gap-3">
              <a 
                href="#contato" 
                className={`hidden sm:flex group items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  scrolled
                    ? 'bg-primary text-white hover:bg-primaryDark'
                    : 'bg-white text-primary hover:bg-white/90'
                }`}
              >
                Solicitar Demo
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg border ${
                  scrolled 
                    ? 'bg-white border-black/10 text-textDark' 
                    : 'bg-white/10 border-white/20 text-white'
                }`}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden"
          >
            <div className="rounded-2xl bg-white shadow-soft-lg border border-black/5 p-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map(link => (
                  <a 
                    key={link.href}
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-textDark/80 hover:text-primary transition-colors text-lg font-medium py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a 
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold mt-2 hover:bg-primaryDark transition-colors"
                >
                  Solicitar Demonstração
                  <ArrowRight className="w-4 h-4" />
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ============================================
// HERO SECTION
// ============================================
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  
  return (
    <section ref={ref} className="relative min-h-screen flex items-start pt-32 md:pt-40 justify-center overflow-hidden bg-primary">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primaryDark/20 via-transparent to-primaryDark/30" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[150px]" 
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
      
      <motion.div style={{ y, opacity, scale }} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="text-sm text-white/90">Provador Virtual com Inteligência Artificial</span>
        </motion.div>
        
        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-white leading-tight"
        >
          A experiência de IA visual que<br/>
          <span className="text-white/80">seu e-commerce precisa</span>
        </motion.h1>
        
        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-white font-medium mb-4"
        >
          O provador oficial do seu e-commerce.
        </motion.p>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-white/60 mb-12 max-w-2xl mx-auto"
        >
          A experiência da loja física no digital.<br/>
          Ofereça a segurança do provador físico com a escalabilidade do e-commerce.
        </motion.p>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a 
            href="#contato"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full text-primary font-semibold text-lg overflow-hidden transition-all hover:shadow-glow-white hover:scale-105"
          >
            Solicite uma demonstração
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
      
      {/* Video/Models showcase at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 h-[35vh] md:h-[40vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/50 to-transparent z-10 pointer-events-none" />
        
        {/* Placeholder for video/models */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-gray-100 to-gray-200 flex items-end justify-center pb-8">
          <div className="flex gap-4 md:gap-8 items-end">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className={`bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-full ${
                  i === 3 ? 'w-20 md:w-28 h-48 md:h-64' : 
                  i === 2 || i === 4 ? 'w-16 md:w-24 h-44 md:h-56' : 
                  'w-14 md:w-20 h-40 md:h-48'
                }`}
              >
                <div className="w-8 md:w-12 h-8 md:h-12 bg-gray-300 rounded-full mx-auto -mt-4 md:-mt-6" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-[37vh] md:bottom-[42vh] left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/70"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ============================================
// VIDEO SECTION (COMECE AQUI)
// ============================================
function VideoSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <AnimatedText>
          <SectionLabel>Comece Aqui</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold text-textDark mb-6">
            2 minutos para entender<br/>como tudo funciona
          </h2>
          <p className="text-lg text-textMuted mb-12">
            O que fazemos, por que importa — e como isso muda o jogo.
          </p>
          
          {/* Video placeholder */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-backgroundAlt border border-black/5 shadow-soft-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
              </button>
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-textMuted text-sm">
              Adicione seu vídeo explicativo
            </p>
          </div>
        </AnimatedText>
      </div>
    </section>
  )
}

// ============================================
// O QUE FAZEMOS SECTION
// ============================================
function WhatWeDo() {
  const items = [
    {
      icon: Sparkles,
      title: 'Transforme Catálogos em Experiências',
      desc: 'O look.me transforma a jornada de compra com experiências visuais interativas. Permita que seus clientes experimentem virtualmente antes de comprar.'
    },
    {
      icon: TrendingUp,
      title: 'Aumente Confiança e Conversão',
      desc: 'Resolvemos os maiores desafios do e-commerce: menos devoluções, mais conversão, tickets maiores. Visualização personalizada gera confiança.'
    },
    {
      icon: Globe,
      title: 'Escale com Tecnologia de Ponta',
      desc: 'Nossa tecnologia suporta catálogos grandes, públicos diversos e opera em qualquer plataforma. Integração em minutos, resultados em segundos.'
    },
  ]
  
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedText className="text-center mb-16 md:mb-20">
          <SectionLabel light>O Que Fazemos</SectionLabel>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            E-commerce de moda, reinventado.
          </h2>
        </AnimatedText>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <AnimatedText key={index} delay={index * 0.1}>
              <div className="p-6 md:p-8 rounded-3xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SOLUÇÕES SECTION
// ============================================
function Solutions() {
  const solutions = [
    {
      icon: Eye,
      title: 'Provador Virtual',
      desc: 'Cliente faz upload da foto e vê como ficaria com a roupa. Experiência imersiva que aumenta confiança na compra.',
    },
    {
      icon: Users,
      title: 'Modelos Diversos',
      desc: 'Mostre seus produtos em modelos variados. Inclusividade que conecta com todos os públicos.',
    },
    {
      icon: Code2,
      title: 'Integração Simples',
      desc: '6 linhas de código. Funciona em Shopify, WooCommerce, VTEX, Nuvemshop ou qualquer plataforma.',
    },
  ]
  
  return (
    <section id="solucoes" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedText className="text-center mb-16 md:mb-20">
          <SectionLabel>Soluções</SectionLabel>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-textDark">
            Impulsionando marcas a entregar<br/>jornadas visuais incríveis
          </h2>
        </AnimatedText>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <AnimatedText key={index} delay={index * 0.1}>
              <div className="group p-6 md:p-8 rounded-3xl bg-backgroundAlt border border-black/5 hover:border-primary/20 hover:shadow-soft-lg transition-all h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow-red transition-all">
                  <solution.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-textDark mb-4">{solution.title}</h3>
                <p className="text-textMuted leading-relaxed">{solution.desc}</p>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// IMPACTO & ROI SECTION
// ============================================
function ImpactROI() {
  const stats = [
    { value: 134, suffix: '%', label: 'Páginas visualizadas por sessão', icon: BarChart3 },
    { value: 11, suffix: '%', label: 'Valor médio do pedido', icon: ShoppingCart },
    { value: 93, suffix: '%', label: 'Aumento da taxa de conversão', icon: TrendingUp },
  ]
  
  return (
    <section className="py-24 md:py-32 bg-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedText className="text-center mb-16 md:mb-20">
          <SectionLabel>Impacto e Retorno Sobre o Investimento</SectionLabel>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-textDark mb-6">
            Sucesso comprovado para líderes de mercado.
          </h2>
          <p className="text-lg text-textMuted max-w-3xl mx-auto">
            O look.me oferece resultados mensuráveis que diferenciam as marcas de moda.
          </p>
        </AnimatedText>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedText key={index} delay={index * 0.15} className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-5xl md:text-7xl font-bold text-textDark">
                  +<AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-lg text-textMuted">{stat.label}</p>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// COMO FUNCIONA SECTION
// ============================================
function HowItWorks() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95)
    setSliderPosition(percentage)
  }
  
  const steps = [
    { icon: Camera, step: '01', title: 'Upload da foto', desc: 'Cliente faz upload de uma foto de corpo inteiro' },
    { icon: Wand2, step: '02', title: 'IA processa', desc: 'Nossa IA veste a roupa na pessoa em segundos' },
    { icon: ShoppingCart, step: '03', title: 'Compra com confiança', desc: 'Visualiza o resultado e compra sem dúvidas' },
  ]
  
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedText className="text-center mb-16 md:mb-20">
          <SectionLabel light>Como Funciona</SectionLabel>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Simples assim
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            3 passos para seu cliente experimentar qualquer peça
          </p>
        </AnimatedText>
        
        {/* Before/After */}
        <AnimatedText className="mb-16 md:mb-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div 
                ref={containerRef}
                className="relative aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-white/30 shadow-glow-white"
                onMouseMove={(e) => handleMove(e.clientX)}
                onTouchMove={(e) => handleMove(e.touches[0].clientX)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gray-400/30 border-2 border-dashed border-gray-400 flex items-center justify-center">
                      <Users className="w-14 h-14 text-gray-500" />
                    </div>
                    <p className="text-gray-600 font-medium">Foto Original</p>
                  </div>
                </div>
                
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary to-primaryDark flex items-center justify-center"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <div className="text-center">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center relative">
                      <Users className="w-14 h-14 text-white" />
                      <Shirt className="w-8 h-8 text-white/80 absolute bottom-1 right-1" />
                    </div>
                    <p className="text-white font-medium">Com a Roupa</p>
                  </div>
                </div>
                
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-glow-white"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <div className="flex gap-0.5">
                      <ChevronDown className="w-4 h-4 text-primary rotate-90" />
                      <ChevronDown className="w-4 h-4 text-primary -rotate-90" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-white/50 text-sm mt-4">← Arraste para comparar →</p>
            </div>
            
            <div className="order-1 md:order-2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Resultado em segundos
              </h3>
              <p className="text-white/70 text-lg mb-6">
                Nossa IA processa a foto do cliente e veste a roupa escolhida de forma realista, 
                respeitando corpo, pose e iluminação.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm">
                  <Zap className="w-4 h-4 inline mr-2" />
                  Processamento em 3s
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm">
                  <Target className="w-4 h-4 inline mr-2" />
                  Alta fidelidade
                </span>
              </div>
            </div>
          </div>
        </AnimatedText>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <AnimatedText key={index} delay={index * 0.15}>
              <div className="relative group">
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-white/30 to-transparent" />
                )}
                <div className="p-6 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-white/30 text-sm font-bold">{item.step}</span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// O QUE NOS TORNA ÚNICOS
// ============================================
function WhatMakesUsUnique() {
  const items = [
    {
      icon: Target,
      title: 'Tecnologia antes exclusiva de grandes marcas',
      desc: 'Provadores virtuais com IA eram acessíveis apenas para gigantes do varejo. Agora, qualquer loja pode oferecer essa experiência aos seus clientes.',
    },
    {
      icon: Layers,
      title: 'Precisão de Caimento e Tamanho',
      desc: 'Nosso motor de geração de imagens usa dados precisos de tamanho para cada peça, garantindo visuais que correspondem perfeitamente às dimensões reais dos seus produtos.',
    },
    {
      icon: Sparkles,
      title: 'Qualidade de Imagem Incomparável',
      desc: 'Utilizando processos avançados de geração, entregamos visuais com iluminação excepcional, caimento e representação de materiais realistas.',
    },
  ]
  
  return (
    <section className="py-24 md:py-32 bg-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedText>
            <SectionLabel>O Que Nos Torna Únicos</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-textDark mb-8">
              Estabelecendo novos padrões em IA para a moda
            </h2>
            <a 
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primaryDark transition-colors"
            >
              Solicite uma demonstração
              <ArrowRight className="w-4 h-4" />
            </a>
          </AnimatedText>
          
          <div className="space-y-6">
            {items.map((item, index) => (
              <AnimatedText key={index} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-white border border-black/5 hover:shadow-soft transition-all">
                  <h3 className="text-xl font-bold text-textDark mb-3 flex items-start gap-3">
                    <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    {item.title}
                  </h3>
                  <p className="text-textMuted leading-relaxed pl-9">{item.desc}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// INTEGRATIONS
// ============================================
function Integrations() {
  const integrations = [
    { name: 'Shopify', icon: Store, color: 'text-green-600' },
    { name: 'Nuvemshop', icon: Globe, color: 'text-violet-600' },
    { name: 'VTEX', icon: Box, color: 'text-pink-600' },
    { name: 'Código Próprio', icon: Code2, color: 'text-gray-600' },
  ]
  
  return (
    <section id="integracoes" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedText className="text-center mb-16 md:mb-20">
          <SectionLabel>Integrações</SectionLabel>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-textDark mb-6">
            Funciona com seu e-commerce
          </h2>
          <p className="text-lg text-textMuted max-w-2xl mx-auto">
            Integração em menos de 10 minutos. Documentação completa. Suporte dedicado.
          </p>
        </AnimatedText>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
          {integrations.map((integration, index) => (
            <AnimatedText key={index} delay={index * 0.05}>
              <div className="group p-6 rounded-2xl bg-backgroundAlt border border-black/5 hover:border-primary/20 transition-all text-center hover:-translate-y-1 hover:shadow-soft">
                <div className="w-14 h-14 rounded-xl bg-white border border-black/5 flex items-center justify-center mx-auto mb-3 group-hover:border-primary/20 transition-all">
                  <integration.icon className={`w-7 h-7 ${integration.color}`} />
                </div>
                <p className="text-textDark font-semibold">{integration.name}</p>
              </div>
            </AnimatedText>
          ))}
        </div>
        
        {/* Code snippet */}
        <AnimatedText>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-black/10 bg-textDark shadow-soft-lg">
              <div className="flex items-center gap-3 px-6 py-4 bg-black/20 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-white/60 text-sm font-mono">integração.html</span>
              </div>
              <pre className="p-6 overflow-x-auto">
                <code className="text-sm leading-relaxed">
                  <span className="text-primary">{'<script'}</span>{' '}
                  <span className="text-blue-400">src</span>
                  <span className="text-white">=</span>
                  <span className="text-green-400">"https://cdn.lookme.ai/widget.js"</span>
                  <span className="text-primary">{'>'}</span>
                  <span className="text-primary">{'</script>'}</span>{'\n\n'}
                  <span className="text-primary">{'<script>'}</span>{'\n'}
                  {'  '}<span className="text-blue-400">LookMe</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-400">init</span>
                  <span className="text-white">{'({'}</span>{'\n'}
                  {'    '}<span className="text-blue-400">apiKey</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">'sua_api_key'</span>
                  <span className="text-white">,</span>{'\n'}
                  {'    '}<span className="text-blue-400">storeId</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">'sua_loja'</span>{'\n'}
                  {'  '}<span className="text-white">{'});'}</span>{'\n'}
                  <span className="text-primary">{'</script>'}</span>
                </code>
              </pre>
            </div>
            <p className="text-center text-textMuted text-sm mt-4">
              Apenas 6 linhas de código para integrar
            </p>
          </div>
        </AnimatedText>
      </div>
    </section>
  )
}

// ============================================
// FINAL CTA
// ============================================
function FinalCTA() {
  return (
    <section id="contato" className="py-24 md:py-32 relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-[200px]" 
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <AnimatedText>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Potencialize sua marca com o look.me
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e veja como podemos transformar seu e-commerce.
          </p>
          
          <a 
            href="mailto:contato@lookme.ai"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:shadow-glow-white transition-all hover:scale-105"
          >
            Solicitar Demonstração
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              Sem compromisso
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              Setup em minutos
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              Suporte em português
            </div>
          </div>
        </AnimatedText>
      </div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="py-12 bg-textDark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Eye className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">look.me</span>
          </div>
          
          <p className="text-white/50 text-sm">
            © 2026 look.me • A experiência de IA visual para e-commerce
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Privacidade</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Termos</a>
            <a href="mailto:contato@lookme.ai" className="text-white/50 hover:text-white transition-colors text-sm">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <HowItWorks />
      <VideoSection />
      <WhatWeDo />
      <Solutions />
      <ImpactROI />
      <WhatMakesUsUnique />
      <Integrations />
      <FinalCTA />
      <Footer />
    </main>
  )
}
