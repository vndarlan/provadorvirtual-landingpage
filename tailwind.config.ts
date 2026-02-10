import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nova paleta - Clean fashion (estilo Renner)
        primary: '#6366F1',
        primaryDark: '#4F46E5',
        primaryLight: '#818CF8',
        accent: '#E31B23', // vermelho só na logo
        background: '#FFFFFF',
        backgroundAlt: '#F5F5F5',
        surface: '#FFFFFF',
        textDark: '#1A1A1A',
        textLight: '#FFFFFF',
        textMuted: '#6B7280',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-white': '0 0 30px rgba(255, 255, 255, 0.4)',
        'glow-white-lg': '0 0 60px rgba(255, 255, 255, 0.5)',
        'glow-primary': '0 0 30px rgba(99, 102, 241, 0.3)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
