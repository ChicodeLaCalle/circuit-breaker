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
        // Circuit Breaker Industrial Palette
        cb: {
          black: '#0a0a0a',
          dark: '#111111',
          gray: '#1a1a1a',
          concrete: '#2a2a2a',
          light: '#333333',
          red: '#ff0000',
          'red-dark': '#cc0000',
          white: '#ffffff',
          'off-white': '#f0f0f0',
          muted: '#888888',
        }
      },
      fontFamily: {
        display: ['var(--font-tanker)', 'Impact', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'scan': 'scan 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-concrete': 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
        'gradient-red': 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
        'scan-lines': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
