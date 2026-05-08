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
          
          // Purple Scale
          purple: '#6b21a8',
          'purple-light': '#8b5cf6',
          'purple-dark': '#4c1d95',
          'purple-deep': '#3b0764',
          'purple-glow': 'rgba(107, 33, 168, 0.4)',
          
          // Accent Colors
          violet: '#7c3aed',
          indigo: '#4338ca',
          magenta: '#a855f7',
          
          // Dark Grays
          gray: '#0f0f0f',
          concrete: '#141414',
          steel: '#1a1a1a',
          light: '#222222',
          
          // Text
          white: '#e0e0e0',
          'off-white': '#a0a0a0',
          muted: '#525252',
          dim: '#333333',
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
        'sigil-rotate': 'sigilRotate 30s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        pulsePurple: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(107, 33, 168, 0.3), 0 0 40px rgba(107, 33, 168, 0.1)',
            opacity: '0.8'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(107, 33, 168, 0.6), 0 0 80px rgba(107, 33, 168, 0.3)',
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
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.3' },
          '50%': { transform: 'scale(1.1) rotate(5deg)', opacity: '0.5' },
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
            filter: 'drop-shadow(0 0 20px rgba(107, 33, 168, 0.5))',
            opacity: '0.6'
          },
          '50%': { 
            filter: 'drop-shadow(0 0 40px rgba(107, 33, 168, 0.8))',
            opacity: '0.9'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(135deg, #3b0764 0%, #6b21a8 50%, #4c1d95 100%)',
        'gradient-dark': 'linear-gradient(180deg, #080808 0%, #000000 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
