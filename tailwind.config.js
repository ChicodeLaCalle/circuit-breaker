/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // DARK UNDERGROUND - Purple Dominant
        cb: {
          // Deep Void
          black: '#000000',
          void: '#030303',
          abyss: '#080808',
          dark: '#0c0c0c',
          
          // Purple Scale - BRIGHTER for visibility
          purple: '#9333ea',
          'purple-light': '#a855f7',
          'purple-bright': '#c084fc',
          'purple-dark': '#581c87',
          'purple-deep': '#3b0764',
          'purple-glow': 'rgba(147, 51, 234, 0.5)',
          
          // Accent Colors
          violet: '#8b5cf6',
          'violet-light': '#a78bfa',
          indigo: '#6366f1',
          magenta: '#d946ef',
          
          // Dark Grays
          gray: '#0f0f0f',
          concrete: '#1a1a1a',
          steel: '#262626',
          light: '#333333',
          
          // Text
          white: '#e0e0e0',
          'off-white': '#a0a0a0',
          muted: '#525252',
          dim: '#404040',
        }
      },
      fontFamily: {
        display: ['var(--font-space)', 'Impact', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'Courier New', 'monospace'],
      },
      animation: {
        'pulse-purple': 'pulsePurple 3s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'morph': 'morph 15s ease-in-out infinite',
        'tentacle': 'tentacle 12s ease-in-out infinite',
        'circuit': 'circuit 20s linear infinite',
        'biomech': 'biomech 10s ease-in-out infinite',
        'sigil-rotate': 'sigilRotate 60s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'flow': 'flow 15s ease-in-out infinite',
      },
      keyframes: {
        pulsePurple: {
          '0%, 100%': { 
            boxShadow: '0 0 30px rgba(147, 51, 234, 0.4), 0 0 60px rgba(147, 51, 234, 0.2)',
            opacity: '0.9'
          },
          '50%': { 
            boxShadow: '0 0 60px rgba(147, 51, 234, 0.8), 0 0 100px rgba(147, 51, 234, 0.4)',
            opacity: '1'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%' },
          '75%': { borderRadius: '60% 40% 60% 30% / 70% 30% 50% 60%' },
        },
        tentacle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.4' },
          '50%': { transform: 'scale(1.1) rotate(5deg)', opacity: '0.7' },
        },
        circuit: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        biomech: {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)' },
          '25%': { transform: 'scale(1.05) translate(10px, -10px)' },
          '50%': { transform: 'scale(1) translate(0, 0)' },
          '75%': { transform: 'scale(1.05) translate(-10px, 10px)' },
        },
        sigilRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.6))',
            opacity: '0.7'
          },
          '50%': { 
            filter: 'drop-shadow(0 0 50px rgba(147, 51, 234, 0.9))',
            opacity: '1'
          },
        },
        flow: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(135deg, #3b0764 0%, #9333ea 50%, #7c3aed 100%)',
        'gradient-dark': 'linear-gradient(180deg, #080808 0%, #000000 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
