'use client'

import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
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

// Registrar plugins GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ============================================
// SECTION LABEL COMPONENT (estilo Veesual)
// ============================================
function SectionLabel({ children, light = false }: { children: string, light?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-4 ${light ? 'text-primaryLight' : 'text-primary'}`}>
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
  const ref = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!ref.current) return
    
    gsap.fromTo(ref.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom-=100',
          end: 'bottom top+=100',
          toggleActions: 'play none none reverse',
        }
      }
    )
  }, { scope: ref })
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// ============================================
// ANIMATED COUNTER
// ============================================
function AnimatedCounter({ value, suffix = '' }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  
  useGSAP(() => {
    if (!ref.current) return
    
    const obj = { val: 0 }
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => setCount(Math.floor(obj.val)),
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom-=100',
        once: true,
      }
    })
  }, { scope: ref })
  
  return <span ref={ref}>{count}{suffix}</span>
}

// ============================================
// MAGNETIC BUTTON COMPONENT
// ============================================
function MagneticButton({ 
  children, 
  href, 
  className = '' 
}: { 
  children: React.ReactNode
  href: string
  className?: string
}) {
  const btnRef = useRef<HTMLAnchorElement>(null)
  const innerRef = useRef<HTMLSpanElement>(null)
  
  useEffect(() => {
    const btn = btnRef.current
    const inner = innerRef.current
    if (!btn || !inner) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      gsap.to(inner, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
    
    const handleMouseLeave = () => {
      gsap.to(inner, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      })
    }
    
    btn.addEventListener('mousemove', handleMouseMove)
    btn.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove)
      btn.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])
  
  return (
    <a ref={btnRef} href={href} className={className}>
      <span ref={innerRef} className="inline-flex items-center gap-2 md:gap-3">
        {children}
      </span>
    </a>
  )
}

// ============================================
// HEADER
// ============================================
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useGSAP(() => {
    if (!headerRef.current) return
    
    gsap.fromTo(headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    )
  }, { scope: headerRef })
  
  useEffect(() => {
    if (!menuRef.current) return
    
    if (mobileMenuOpen) {
      gsap.fromTo(menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' }
      )
    }
  }, [mobileMenuOpen])
  
  const navLinks = [
    { href: '#solucoes', label: 'Soluções' },
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#integracoes', label: 'Integrações' },
    { href: '#contato', label: 'Contato' },
  ]
  
  return (
    <>
      <header 
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className={`w-full px-4 md:px-8 lg:px-12 py-4 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-black/5' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
            <nav className="hidden md:flex items-center gap-8 flex-1">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className={`transition-colors text-sm font-medium ${
                    scrolled 
                      ? 'text-textDark/60 hover:text-primary' 
                      : 'text-textDark/60 hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            <a href="/" className="flex items-center">
              <img src="/logo-full.png" alt="look.me" className="h-10 md:h-12 w-auto" />
            </a>
            
            <div className="flex items-center gap-3 flex-1 justify-end">
              <a 
                href="#contato" 
                className={`hidden sm:flex group items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  scrolled
                    ? 'bg-gradient-cta text-white'
                    : 'bg-gradient-cta text-white'
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
                    : 'bg-white border-black/10 text-textDark'
                }`}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
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
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-cta text-white rounded-full font-semibold mt-2 transition-colors"
              >
                Solicitar Demonstração
                <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

// ============================================
// HERO SECTION
// ============================================
function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const sloganRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    // Badge animation
    if (badgeRef.current) {
      gsap.fromTo(badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power2.out' }
      )
    }
    
    // Title split text animation (letras com elastic)
    if (titleRef.current) {
      // Build split text manually with known content
      titleRef.current.innerHTML = ''
      
      const line1Text = 'A experiência da loja física'
      const line2Text = 'no digital'
      
      // Line 1
      const line1 = document.createElement('span')
      line1.style.display = 'block'
      line1Text.split('').forEach((char) => {
        const span = document.createElement('span')
        span.textContent = char === ' ' ? '\u00A0' : char
        span.style.display = 'inline-block'
        span.style.opacity = '0'
        span.style.transform = 'translateY(20px)'
        line1.appendChild(span)
      })
      titleRef.current.appendChild(line1)
      
      // Line 2 - "no digital" with highlight
      const line2 = document.createElement('span')
      line2.style.display = 'block'
      
      const highlightWrapper = document.createElement('span')
      highlightWrapper.className = 'relative inline-block'
      
      const highlightBar = document.createElement('span')
      highlightBar.className = 'absolute inset-0 bg-primary/10 -z-10 rounded-lg'
      highlightBar.style.transformOrigin = 'left'
      highlightBar.style.transform = 'scaleX(0)'
      highlightWrapper.appendChild(highlightBar)
      
      const highlightText = document.createElement('span')
      highlightText.className = 'relative gradient-text-primary px-2'
      line2Text.split('').forEach((char) => {
        const span = document.createElement('span')
        span.textContent = char === ' ' ? '\u00A0' : char
        span.style.display = 'inline-block'
        span.style.opacity = '0'
        span.style.transform = 'translateY(20px)'
        highlightText.appendChild(span)
      })
      highlightWrapper.appendChild(highlightText)
      line2.appendChild(highlightWrapper)
      titleRef.current.appendChild(line2)
      
      // Animate all chars
      const allChars = titleRef.current.querySelectorAll('span span[style]')
      gsap.to(allChars, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.02,
        delay: 0.4,
        ease: 'elastic.out(1, 0.5)',
      })
      
      // Animate highlight bar
      gsap.to(highlightBar, {
        scaleX: 1,
        duration: 0.8,
        delay: 0.8,
        ease: 'power2.out',
      })
    }
    
    // Slogan
    if (sloganRef.current) {
      gsap.fromTo(sloganRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1, ease: 'power2.out' }
      )
    }
    
    // CTA with bounce
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          delay: 1.2, 
          ease: 'back.out(1.7)' 
        }
      )
    }
    
    // Video
    if (videoRef.current) {
      gsap.fromTo(videoRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 1.4, ease: 'power2.out' }
      )
    }
    
    // Scroll indicator
    if (scrollIndicatorRef.current) {
      gsap.fromTo(scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 1.8 }
      )
      
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
    
    // Parallax video on scroll
    if (videoRef.current && sectionRef.current) {
      gsap.to(videoRef.current, {
        y: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      })
    }
    
    // Content fade on scroll
    if (contentRef.current && sectionRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        scale: 0.9,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'center top',
          scrub: 1,
        }
      })
    }
  }, { scope: sectionRef })
  
  // Background blobs animation
  useEffect(() => {
    const blob1 = document.getElementById('blob1')
    const blob2 = document.getElementById('blob2')
    
    if (blob1) {
      gsap.to(blob1, {
        scale: 1.2,
        opacity: 0.15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
    
    if (blob2) {
      gsap.to(blob2, {
        scale: 1.2,
        opacity: 0.12,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
  }, [])
  
  return (
    <section ref={sectionRef} className="relative flex flex-col items-center overflow-hidden bg-white pt-32 md:pt-36 pb-0">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-backgroundAlt via-transparent to-backgroundAlt/50" />
        <div 
          id="blob1"
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px]" 
          style={{ opacity: 0.08 }}
        />
        <div 
          id="blob2"
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[150px]" 
          style={{ opacity: 0.05 }}
        />
      </div>
      
      <div ref={contentRef} className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm text-textDark/80">Provador Virtual com Inteligência Artificial</span>
        </div>
        
        {/* Main title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-textDark leading-tight"
        >
          A experiência da loja física<br/>
          <span className="text-primary">no digital</span>
        </h1>
        
        {/* Slogan */}
        <p
          ref={sloganRef}
          className="text-xl md:text-2xl text-textMuted font-medium mb-8"
        >
          O provador oficial do seu e-commerce.
        </p>
        
        {/* CTA */}
        <div ref={ctaRef}>
          <MagneticButton
            href="#contato"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-cta rounded-full text-white font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg"
          >
            Solicite uma demonstração
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </div>
      </div>
      
      {/* Video section */}
      <div
        ref={videoRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 -mt-16"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-2xl shadow-2xl"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-textDark/30">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  )
}

// ============================================
// O QUE FAZEMOS SECTION
// ============================================
function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!cardsRef.current) return
    
    const cards = cardsRef.current.querySelectorAll('.card-item')
    
    gsap.fromTo(cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top bottom-=100',
        }
      }
    )
  }, { scope: sectionRef })
  
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedText className="text-center mb-16 md:mb-20">
          <SectionLabel>O Que Fazemos</SectionLabel>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-textDark">
            E-commerce de moda, reinventado.
          </h2>
        </AnimatedText>
        
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div key={index} className="card-item group p-6 md:p-8 rounded-3xl bg-white border border-black/5 hover:border-primary/20 hover:shadow-soft transition-all h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
                <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-textDark mb-4">{item.title}</h3>
              <p className="text-textMuted leading-relaxed">{item.desc}</p>
            </div>
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
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!cardsRef.current) return
    
    const cards = cardsRef.current.querySelectorAll('.solution-card')
    
    cards.forEach((card) => {
      gsap.fromTo(card,
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          }
        }
      )
    })
  }, { scope: sectionRef })
  
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
    <section ref={sectionRef} id="solucoes" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedText className="text-center mb-16 md:mb-20">
          <SectionLabel>Soluções</SectionLabel>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-textDark">
            Impulsionando marcas a entregar<br/>jornadas visuais incríveis
          </h2>
        </AnimatedText>
        
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card group p-6 md:p-8 rounded-3xl bg-backgroundAlt border border-black/5 hover:border-primary/20 hover:shadow-soft-lg transition-all h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow-red transition-all">
                <solution.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-textDark mb-4">{solution.title}</h3>
              <p className="text-textMuted leading-relaxed">{solution.desc}</p>
            </div>
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
  const sectionRef = useRef<HTMLElement>(null)
  
  const stats = [
    { value: 134, suffix: '%', label: 'Páginas visualizadas por sessão', icon: BarChart3 },
    { value: 11, suffix: '%', label: 'Valor médio do pedido', icon: ShoppingCart },
    { value: 93, suffix: '%', label: 'Aumento da taxa de conversão', icon: TrendingUp },
  ]
  
  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-textDark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedText className="text-center mb-16 md:mb-20">
          <SectionLabel light>Impacto e Retorno Sobre o Investimento</SectionLabel>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Sucesso comprovado para líderes de mercado.
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            O look.me oferece resultados mensuráveis que diferenciam as marcas de moda.
          </p>
        </AnimatedText>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedText key={index} delay={index * 0.15} className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-5xl md:text-7xl font-bold text-white">
                  +<AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-lg text-white/60">{stat.label}</p>
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
  const [activeOutfit, setActiveOutfit] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95)
    setSliderPosition(percentage)
  }
  
  const outfits = [
    { before: '/demo/model-outfit2.png', after: '/demo/model-outfit1.png', label: 'Look 1 - Cardigan Mostarda' },
  ]
  
  const steps = [
    { icon: Shirt, step: '01', title: 'Escolha a peça', desc: 'Cliente seleciona a roupa que quer experimentar' },
    { icon: Camera, step: '02', title: 'Upload da foto', desc: 'Faz upload de uma foto de corpo inteiro' },
    { icon: Wand2, step: '03', title: 'IA veste', desc: 'Nossa IA veste a roupa na pessoa em segundos' },
  ]
  
  return (
    <section ref={sectionRef} id="como-funciona" className="py-24 md:py-32 bg-textDark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedText className="text-center mb-16 md:mb-20">
          <SectionLabel light>Como Funciona</SectionLabel>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Veja o resultado na prática
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Seu cliente escolhe a roupa, envia uma foto e vê como fica — simples assim.
          </p>
        </AnimatedText>
        
        {/* 2. Catálogo + Resultado lado a lado */}
        <AnimatedText className="mb-16 md:mb-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Lado Esquerdo - Catálogo da Loja */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20">
                <div className="flex items-center gap-2 mb-6">
                  <Store className="w-5 h-5 text-white/70" />
                  <span className="text-white/70 text-sm font-medium">Catálogo da Loja</span>
                </div>
                
                {/* Imagem das peças */}
                <div className="relative rounded-2xl overflow-hidden bg-gray-100 mb-6">
                  <img 
                    src="/demo/outfit-pieces.png" 
                    alt="Peças de roupa - Cardigan, calça e botas" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">Outfit Completo</p>
                    <p className="text-white/60 text-sm">Cardigan + Calça + Botas</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm">
                    <Sparkles className="w-4 h-4" />
                    Experimentar
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lado Direito - Resultado com Slider */}
            <div className="order-1 lg:order-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Wand2 className="w-5 h-5 text-white/70" />
                    <span className="text-white/70 text-sm font-medium">Resultado da IA</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">Processado em 3s</span>
                  </div>
                </div>
                
                {/* Slider Antes/Depois */}
                <div 
                  ref={containerRef}
                  className="relative rounded-2xl overflow-hidden bg-gray-100 mb-4 cursor-ew-resize select-none"
                  onMouseMove={(e) => handleMove(e.clientX)}
                  onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                >
                  {/* Imagem ANTES (fundo) */}
                  <img 
                    src={outfits[activeOutfit].before} 
                    alt="Antes - Foto original" 
                    className="w-full h-auto"
                  />
                  
                  {/* Imagem DEPOIS (sobreposta com clip) */}
                  <div 
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <img 
                      src={outfits[activeOutfit].after} 
                      alt="Depois - Com a roupa" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  {/* Labels Antes/Depois */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                    <span className="text-white text-xs font-medium">Antes</span>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                    <span className="text-white text-xs font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      Depois
                    </span>
                  </div>
                  
                  {/* Linha do Slider */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
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
                
                <p className="text-center text-white/50 text-sm mb-4">← Arraste para comparar →</p>
                
                {/* Toggle entre looks */}
                <div className="flex gap-3">
                  {outfits.map((outfit, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveOutfit(index)}
                      className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                        activeOutfit === index
                          ? 'bg-white text-primary'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      {outfit.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Seta conectando */}
          <div className="hidden lg:flex justify-center mt-8">
            <div className="flex items-center gap-4 text-white/50">
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent to-white/30" />
              <ArrowRight className="w-6 h-6 text-white/50" />
              <div className="w-32 h-[2px] bg-gradient-to-l from-transparent to-white/30" />
            </div>
          </div>
        </AnimatedText>
        
        {/* Catálogo + Resultado segue abaixo */}
      </div>
    </section>
  )
}

// ============================================
// O QUE NOS TORNA ÚNICOS
// ============================================
function WhatMakesUsUnique() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!itemsRef.current) return
    
    const items = itemsRef.current.querySelectorAll('.unique-item')
    
    gsap.fromTo(items,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: itemsRef.current,
          start: 'top bottom-=100',
        }
      }
    )
  }, { scope: sectionRef })
  
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedText>
            <SectionLabel>O Que Nos Torna Únicos</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-textDark mb-8">
              Estabelecendo novos padrões em IA para a moda
            </h2>
            <MagneticButton
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-cta text-white rounded-full font-semibold transition-colors"
            >
              Solicite uma demonstração
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </AnimatedText>
          
          <div ref={itemsRef} className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="unique-item p-6 rounded-2xl bg-white border border-black/5 hover:shadow-soft transition-all">
                <h3 className="text-xl font-bold text-textDark mb-3 flex items-start gap-3">
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  {item.title}
                </h3>
                <p className="text-textMuted leading-relaxed pl-9">{item.desc}</p>
              </div>
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
  const sectionRef = useRef<HTMLElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const codeRef = useRef<HTMLPreElement>(null)
  
  useGSAP(() => {
    if (terminalRef.current) {
      gsap.fromTo(terminalRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: terminalRef.current,
            start: 'top bottom-=100',
          }
        }
      )
    }
    
    // Code reveal animation
    if (codeRef.current) {
      const codeLines = codeRef.current.querySelectorAll('.code-line')
      if (codeLines.length) {
        gsap.fromTo(codeLines,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: codeRef.current,
              start: 'top bottom-=100',
              once: true,
            }
          }
        )
      }
    }
    
    // Animate logo cards
    const logoCards = sectionRef.current?.querySelectorAll('.logo-card')
    if (logoCards) {
      gsap.fromTo(logoCards,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.logo-cards-container',
            start: 'top bottom-=100',
          }
        }
      )
    }
    
    // Animate connection lines
    const paths = sectionRef.current?.querySelectorAll('.connection-path')
    if (paths) {
      paths.forEach((path, i) => {
        gsap.fromTo(path,
          { strokeDashoffset: 1000 },
          {
            strokeDashoffset: 0,
            duration: 1,
            delay: 0.3 + i * 0.15,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: '.logo-cards-container',
              start: 'top bottom-=100',
            }
          }
        )
      })
    }
  }, { scope: sectionRef })
  
  const integrations = [
    { name: 'Shopify', logo: '/logos/shopify.png', isIcon: false },
    { name: 'Nuvemshop', logo: '/logos/nuvemshop.png', isIcon: false },
    { name: 'VTEX', logo: '/logos/vtex.png', isIcon: false },
    { name: 'Código Próprio', logo: null, isIcon: true },
  ]
  
  return (
    <section ref={sectionRef} id="integracoes" className="py-24 md:py-32 bg-white">
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
        
        {/* Terminal + Logos orbital layout */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            
            {/* Terminal - Left side */}
            <div 
              ref={terminalRef}
              className="w-full lg:w-1/2 relative z-10"
            >
              <div className="rounded-2xl overflow-hidden border border-black/10 bg-textDark shadow-soft-lg">
                <div className="flex items-center gap-3 px-6 py-4 bg-black/20 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-white/60 text-sm font-mono">integração.html</span>
                </div>
                <pre ref={codeRef} className="p-6 overflow-x-auto">
                  <code className="text-sm leading-relaxed">
                    <div className="code-line">
                      <span className="text-primaryLight">{'<script'}</span>{' '}
                      <span className="text-blue-400">src</span>
                      <span className="text-white">=</span>
                      <span className="text-green-400">"https://cdn.lookme.ai/widget.js"</span>
                      <span className="text-primaryLight">{'>'}</span>
                      <span className="text-primaryLight">{'</script>'}</span>
                    </div>
                    <div className="code-line mt-2">&nbsp;</div>
                    <div className="code-line">
                      <span className="text-primaryLight">{'<script>'}</span>
                    </div>
                    <div className="code-line">
                      {'  '}<span className="text-blue-400">LookMe</span>
                      <span className="text-white">.</span>
                      <span className="text-yellow-400">init</span>
                      <span className="text-white">{'({'}</span>
                    </div>
                    <div className="code-line">
                      {'    '}<span className="text-blue-400">apiKey</span>
                      <span className="text-white">: </span>
                      <span className="text-green-400">{"'sua_api_key'"}</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="code-line">
                      {'    '}<span className="text-blue-400">storeId</span>
                      <span className="text-white">: </span>
                      <span className="text-green-400">{"'sua_loja'"}</span>
                    </div>
                    <div className="code-line">
                      {'  '}<span className="text-white">{'});'}</span>
                    </div>
                    <div className="code-line">
                      <span className="text-primaryLight">{'</script>'}</span>
                    </div>
                  </code>
                </pre>
              </div>
              <p className="text-textMuted text-sm mt-3 text-center">6 linhas de código para integrar</p>
            </div>

            {/* Logos - Arc on the right */}
            <div className="logo-cards-container w-full lg:w-1/2 relative flex items-center justify-center" style={{ minHeight: '480px' }}>
              {/* Connecting curved lines */}
              <svg className="absolute inset-0 w-full h-full hidden lg:block" viewBox="0 0 400 420" fill="none" preserveAspectRatio="none">
                {[
                  'M 40,200 C 140,200 180,30 300,30',
                  'M 40,200 C 160,200 200,150 320,150',
                  'M 40,200 C 160,200 200,270 300,270',
                  'M 40,200 C 140,200 180,350 300,370',
                ].map((d, i) => (
                  <path
                    key={i}
                    className="connection-path"
                    d={d}
                    stroke="#E31B23"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    strokeDashoffset="1000"
                    fill="none"
                    opacity="0.3"
                  />
                ))}
              </svg>
              
              {/* Logo cards - arc positions */}
              {[
                { pos: 'lg:top-[-2%] lg:right-[2%]', delay: 0.2 },
                { pos: 'lg:top-[24%] lg:right-[-2%]', delay: 0.35 },
                { pos: 'lg:top-[50%] lg:right-[2%]', delay: 0.5 },
                { pos: 'lg:top-[76%] lg:right-[2%]', delay: 0.65 },
              ].map((position, index) => {
                const integration = integrations[index]
                if (!integration) return null
                return (
                  <div
                    key={index}
                    className={`logo-card relative lg:absolute ${position.pos} p-4 md:p-5 rounded-2xl bg-backgroundAlt border border-black/5 hover:border-primary/20 transition-all text-center hover:-translate-y-1 hover:shadow-soft`}
                  >
                    <div className="h-12 w-12 md:h-14 md:w-14 flex items-center justify-center mx-auto mb-2">
                      {integration.isIcon ? (
                        <div className="w-12 h-12 rounded-xl bg-white border border-black/10 flex items-center justify-center">
                          <Code2 className="w-6 h-6 text-gray-600" />
                        </div>
                      ) : (
                        <img 
                          src={integration.logo!} 
                          alt={`Logo ${integration.name}`} 
                          className="h-10 md:h-12 w-auto object-contain rounded-lg"
                        />
                      )}
                    </div>
                    <p className="text-textDark font-semibold text-sm whitespace-nowrap">{integration.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FINAL CTA
// ============================================
function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (blobRef.current) {
      gsap.to(blobRef.current, {
        scale: 1.3,
        opacity: 0.2,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
  }, [])
  
  return (
    <section ref={sectionRef} id="contato" className="py-24 md:py-32 relative overflow-hidden bg-textDark">
      <div className="absolute inset-0">
        <div 
          ref={blobRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px]" 
          style={{ opacity: 0.1 }}
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
          
          <MagneticButton
            href="mailto:contato@lookme.ai"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-cta text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-lg"
          >
            Solicitar Demonstração
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          
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
    <footer className="py-12 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo-full.png" alt="look.me" className="h-8 w-auto" />
          </div>
          
          <p className="text-textMuted text-sm">
            © 2026 look.me • A experiência de IA visual para e-commerce
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-textMuted hover:text-primary transition-colors text-sm">Privacidade</a>
            <a href="#" className="text-textMuted hover:text-primary transition-colors text-sm">Termos</a>
            <a href="mailto:contato@lookme.ai" className="text-textMuted hover:text-primary transition-colors text-sm">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// SMOOTH SCROLL WITH LENIS
// ============================================
function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })
    
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    
    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)
    
    return () => {
      lenis.destroy()
      gsap.ticker.remove(raf)
    }
  }, [])
  
  return <>{children}</>
}

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen overflow-x-hidden">
        <Header />
        <Hero />
        <HowItWorks />
        <WhatWeDo />
        <Solutions />
        <ImpactROI />
        <WhatMakesUsUnique />
        <Integrations />
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
