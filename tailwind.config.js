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
        // CYBERSIGILISM - Occult Purple Palette
        cb: {
          // Void
          black: '#000000',
          void: '#020202',
          abyss: '#050505',
          dark: '#080808',
          
          // Purple Scale
          purple: '#9333ea',
          'purple-light': '#a855f7',
          'purple-bright': '#c084fc',
          'purple-dark': '#581c87',
          'purple-deep': '#3b0764',
          'purple-glow': 'rgba(147, 51, 234, 0.5)',
          
          // Accent
          violet: '#8b5cf6',
          magenta: '#d946ef',
          indigo: '#6366f1',
          
          // Grays
          gray: '#0a0a0a',
          concrete: '#111111',
          steel: '#1a1a1a',
          light: '#262626',
          
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
        'pulse-sigil': 'pulseSigil 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 60s linear infinite',
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
        pulseSigil: {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.6))',
            opacity: '0.8'
          },
          '50%': { 
            filter: 'drop-shadow(0 0 40px rgba(147, 51, 234, 0.9))',
            opacity: '1'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(135deg, #3b0764 0%, #9333ea 50%, #7c3aed 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
