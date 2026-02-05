'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { 
  ArrowRight, 
  TrendingUp, 
  RotateCcw, 
  Sparkles, 
  Code2, 
  Zap, 
  BarChart3,
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
  Package
} from 'lucide-react'

// ============================================
// ANIMATED TEXT COMPONENT (Fade + Scale on Scroll)
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
// PARALLAX SECTION
// ============================================
function ParallaxSection({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  
  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============================================
// SCALE ON SCROLL TEXT
// ============================================
function ScaleText({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])
  
  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============================================
// HEADER
// ============================================
function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-6 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">look.me</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#solucao" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Solução</a>
              <a href="#beneficios" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Benefícios</a>
              <a href="#demo" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Demo</a>
              <a href="#integracoes" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Integrações</a>
            </nav>
            
            <a 
              href="#contato" 
              className="group flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-white/90 transition-all"
            >
              Agendar Demo
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

// ============================================
// HERO SECTION - FULLSCREEN
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
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-black to-black" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/30 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]" 
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
      
      <motion.div style={{ y, opacity, scale }} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          <span className="text-sm text-white/70">Provador Virtual com Inteligência Artificial</span>
        </motion.div>
        
        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">look</span>
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">.me</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/50 mb-4 font-light"
        >
          O provador oficial do seu e-commerce.
        </motion.p>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/30 mb-12 max-w-2xl mx-auto"
        >
          Deixe seu cliente experimentar antes de comprar.<br/>
          Aumente conversão. Reduza devolução.
        </motion.p>
        
        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contato"
            className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full text-white font-semibold text-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-violet-500/25"
          >
            <span className="relative z-10">Agendar Demo</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a 
            href="#demo"
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all"
          >
            <Play className="w-5 h-5" />
            Ver demonstração
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ============================================
// INTRO TEXT SECTION (Large text that scales)
// ============================================
function IntroText() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5], [0, 1, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.7, 0.8], [0, 1, 1, 0])
  const scale1 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5], [0.8, 1, 1, 1.1])
  const scale2 = useTransform(scrollYProgress, [0.3, 0.5, 0.7, 0.8], [0.8, 1, 1, 1.1])
  
  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/20 to-black" />
        
        <motion.div style={{ opacity: opacity1, scale: scale1 }} className="absolute text-center px-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl">
            Seu cliente quer experimentar
          </h2>
          <p className="text-2xl md:text-4xl text-white/40 mt-4">— mas não pode.</p>
        </motion.div>
        
        <motion.div style={{ opacity: opacity2, scale: scale2 }} className="absolute text-center px-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-5xl">
            <span className="text-white">Com o </span>
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">look.me</span>
            <span className="text-white">, ele pode.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// STATS SECTION
// ============================================
function Stats() {
  const stats = [
    { value: '70%', label: 'abandonam o carrinho', sublabel: 'por dúvida sobre o caimento', color: 'from-red-500 to-orange-500' },
    { value: '30%', label: 'das compras devolvidas', sublabel: 'não ficou como esperado', color: 'from-orange-500 to-yellow-500' },
    { value: '2.5x', label: 'mais conversão', sublabel: 'com provador virtual', color: 'from-green-500 to-emerald-500' },
  ]
  
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedText className="text-center mb-20">
          <p className="text-violet-400 font-medium mb-4 tracking-widest uppercase text-sm">Os números</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Por que provador virtual?
          </h2>
        </AnimatedText>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <AnimatedText key={index} delay={index * 0.1}>
              <div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:-translate-y-2">
                <div className={`text-6xl md:text-7xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                  {stat.value}
                </div>
                <p className="text-xl text-white font-medium mb-2">{stat.label}</p>
                <p className="text-white/40">{stat.sublabel}</p>
                
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity blur-xl`} />
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// DEMO SECTION
// ============================================
function Demo() {
  return (
    <section id="demo" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[200px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedText className="text-center mb-20">
          <p className="text-violet-400 font-medium mb-4 tracking-widest uppercase text-sm">Como funciona</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Simples assim
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto">
            3 passos para seu cliente experimentar qualquer peça
          </p>
        </AnimatedText>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              icon: Camera, 
              step: '01', 
              title: 'Upload da foto', 
              desc: 'Cliente faz upload de uma foto sua de corpo inteiro' 
            },
            { 
              icon: Wand2, 
              step: '02', 
              title: 'IA processa', 
              desc: 'Nossa IA veste a roupa na pessoa em segundos' 
            },
            { 
              icon: ShoppingCart, 
              step: '03', 
              title: 'Compra com confiança', 
              desc: 'Visualiza o resultado e compra sem dúvidas' 
            },
          ].map((item, index) => (
            <AnimatedText key={index} delay={index * 0.15}>
              <div className="relative group">
                {/* Connection line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-[2px] bg-gradient-to-r from-violet-500/50 to-transparent" />
                )}
                
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-all group-hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-violet-400" />
                    </div>
                    <span className="text-5xl font-bold text-white/10">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/40">{item.desc}</p>
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
        
        {/* Visual Demo */}
        <AnimatedText>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-2">
            <div className="rounded-2xl overflow-hidden bg-black/50">
              {/* Browser bar */}
              <div className="flex items-center gap-3 px-6 py-4 bg-white/5 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="max-w-md mx-auto bg-white/5 rounded-lg px-4 py-2 text-sm text-white/40 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    sualoja.com.br/produto/vestido-elegante
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Product side */}
                  <div className="space-y-6">
                    <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                      <Shirt className="w-32 h-32 text-white/10 group-hover:scale-110 transition-transform" />
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-medium">
                        Novo
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">Vestido Elegante Noite</h3>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                        <span className="text-white/40 text-sm ml-2">(128 avaliações)</span>
                      </div>
                      <p className="text-3xl font-bold text-white">R$ 299,90</p>
                    </div>
                  </div>
                  
                  {/* Try-on widget */}
                  <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Provador Virtual</p>
                          <p className="text-white/40 text-sm">Powered by look.me</p>
                        </div>
                      </div>
                      
                      <div className="aspect-square rounded-xl bg-black/30 border-2 border-dashed border-white/10 hover:border-violet-500/50 transition-colors flex flex-col items-center justify-center gap-4 cursor-pointer group">
                        <div className="w-20 h-20 rounded-2xl bg-violet-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Upload className="w-10 h-10 text-violet-400" />
                        </div>
                        <div className="text-center">
                          <p className="text-white font-medium">Faça upload da sua foto</p>
                          <p className="text-white/40 text-sm">ou arraste e solte aqui</p>
                        </div>
                      </div>
                      
                      <button className="w-full mt-4 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-500/25 transition-all">
                        <Sparkles className="w-5 h-5" />
                        Experimentar Agora
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white/30 text-sm justify-center">
                      <Shield className="w-4 h-4" />
                      Suas fotos são processadas com segurança e privacidade
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedText>
      </div>
    </section>
  )
}

// ============================================
// BENEFITS SECTION
// ============================================
function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumente Conversão',
      value: '+40%',
      desc: 'Clientes que experimentam virtualmente convertem muito mais',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: RotateCcw,
      title: 'Reduza Devoluções',
      value: '-30%',
      desc: 'Expectativa alinhada = menos trocas e devoluções',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Engaje Clientes',
      value: '5x',
      desc: 'Mais tempo no site, mais interação, mais vendas',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Star,
      title: 'Experiência Premium',
      value: '★★★★★',
      desc: 'Tecnologia que encanta e diferencia seu e-commerce',
      color: 'from-yellow-500 to-orange-500'
    },
  ]
  
  return (
    <section id="beneficios" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedText className="text-center mb-20">
          <p className="text-violet-400 font-medium mb-4 tracking-widest uppercase text-sm">Benefícios</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Por que escolher o look.me?
          </h2>
        </AnimatedText>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedText key={index} delay={index * 0.1}>
              <div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all overflow-hidden">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                      <span className={`text-xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                        {benefit.value}
                      </span>
                    </div>
                    <p className="text-white/40">{benefit.desc}</p>
                  </div>
                </div>
                
                {/* Hover glow */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity`} />
              </div>
            </AnimatedText>
          ))}
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
    { name: 'Shopify', icon: Store },
    { name: 'WooCommerce', icon: Package },
    { name: 'VTEX', icon: Box },
    { name: 'Nuvemshop', icon: Globe },
    { name: 'Magento', icon: Layers },
    { name: 'API Custom', icon: Code2 },
  ]
  
  return (
    <section id="integracoes" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/5 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedText className="text-center mb-20">
          <p className="text-violet-400 font-medium mb-4 tracking-widest uppercase text-sm">Integrações</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Funciona com seu e-commerce
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto">
            Integração em menos de 10 minutos. Documentação completa. Suporte dedicado.
          </p>
        </AnimatedText>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {integrations.map((integration, index) => (
            <AnimatedText key={index} delay={index * 0.05}>
              <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-all text-center hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:border-violet-500/30 transition-colors">
                  <integration.icon className="w-7 h-7 text-white/60 group-hover:text-violet-400 transition-colors" />
                </div>
                <p className="text-white font-medium">{integration.name}</p>
              </div>
            </AnimatedText>
          ))}
        </div>
        
        {/* Code snippet */}
        <AnimatedText>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/50">
              <div className="flex items-center gap-3 px-6 py-4 bg-white/5 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-white/40 text-sm font-mono">integração.html</span>
                <div className="flex-1" />
                <Cpu className="w-4 h-4 text-violet-400" />
              </div>
              <pre className="p-6 overflow-x-auto">
                <code className="text-sm leading-relaxed">
                  <span className="text-violet-400">{'<script'}</span>{' '}
                  <span className="text-blue-400">src</span>
                  <span className="text-white">=</span>
                  <span className="text-green-400">"https://cdn.lookme.ai/widget.js"</span>
                  <span className="text-violet-400">{'>'}</span>
                  <span className="text-violet-400">{'</script>'}</span>{'\n\n'}
                  <span className="text-violet-400">{'<script>'}</span>{'\n'}
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
                  <span className="text-violet-400">{'</script>'}</span>
                </code>
              </pre>
            </div>
            <p className="text-center text-white/30 text-sm mt-4">
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
    <section id="contato" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/20 to-black" />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[200px]" 
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedText>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            Pronto para transformar<br/>seu e-commerce?
          </h2>
          <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e veja o look.me funcionando na sua loja.
          </p>
          
          <a 
            href="mailto:contato@lookme.ai"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-white/90 transition-all hover:scale-105"
          >
            Agendar Demo Gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex items-center justify-center gap-6 mt-8 text-white/30 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Sem compromisso
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Setup em minutos
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
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
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <Eye className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-white">look.me</span>
          </div>
          
          <p className="text-white/30 text-sm">
            © 2026 look.me • O provador oficial do seu e-commerce
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-white transition-colors text-sm">Privacidade</a>
            <a href="#" className="text-white/30 hover:text-white transition-colors text-sm">Termos</a>
            <a href="mailto:contato@lookme.ai" className="text-white/30 hover:text-white transition-colors text-sm">Contato</a>
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
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <IntroText />
      <Stats />
      <Demo />
      <Benefits />
      <Integrations />
      <FinalCTA />
      <Footer />
    </main>
  )
}
