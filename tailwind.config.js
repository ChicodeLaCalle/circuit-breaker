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
        // DARKER Underground Industrial Palette
        cb: {
          black: '#000000',
          void: '#050505',
          abyss: '#0a0a0a',
          dark: '#0f0f0f',
          gray: '#141414',
          concrete: '#1a1a1a',
          steel: '#222222',
          light: '#2a2a2a',
          
          // Electric Accents
          red: '#ff0033',
          'red-glow': '#ff003380',
          'red-dark': '#990022',
          
          cyan: '#00ffff',
          'cyan-glow': '#00ffff40',
          
          magenta: '#ff00ff',
          'magenta-glow': '#ff00ff40',
          
          // Text
          white: '#ffffff',
          'off-white': '#e0e0e0',
          muted: '#666666',
          dim: '#444444',
        }
      },
      fontFamily: {
        display: ['var(--font-space)', 'Impact', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'Courier New', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'glitch-fast': 'glitch 0.3s linear infinite',
        'scan': 'scan 8s linear infinite',
        'scan-fast': 'scan 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-electric': 'pulseElectric 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'flicker': 'flicker 3s linear infinite',
        'noise': 'noise 0.5s steps(10) infinite',
        'vhs': 'vhs 4s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-3px, 3px)' },
          '20%': { transform: 'translate(-3px, -3px)' },
          '30%': { transform: 'translate(3px, 3px)' },
          '40%': { transform: 'translate(3px, -3px)' },
          '50%': { transform: 'translate(-3px, 3px)' },
          '60%': { transform: 'translate(-3px, -3px)' },
          '70%': { transform: 'translate(3px, 3px)' },
          '80%': { transform: 'translate(3px, -3px)' },
          '90%': { transform: 'translate(-3px, 3px)' },
        },
        scan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '41%': { opacity: 1 },
          '42%': { opacity: 0.8 },
          '43%': { opacity: 1 },
          '45%': { opacity: 0.5 },
          '46%': { opacity: 1 },
          '47%': { opacity: 0.3 },
          '48%': { opacity: 1 },
        },
        pulseElectric: {
          '0%, 100%': { boxShadow: '0 0 20px #ff003380, 0 0 40px #ff003340' },
          '50%': { boxShadow: '0 0 40px #ff0033, 0 0 80px #ff003380' },
        },
        noise: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(-10%, 5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '40%': { transform: 'translate(-5%, 15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '60%': { transform: 'translate(15%, 0)' },
          '70%': { transform: 'translate(0, 10%)' },
          '80%': { transform: 'translate(-15%, 0)' },
          '90%': { transform: 'translate(10%, 5%)' },
        },
        vhs: {
          '0%, 100%': { 
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)'
          },
          '20%': { 
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(90deg)'
          },
          '40%': { 
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(180deg)'
          },
          '60%': { 
            transform: 'translate(-2px, -2px)',
            filter: 'hue-rotate(270deg)'
          },
          '80%': { 
            transform: 'translate(2px, 2px)',
            filter: 'hue-rotate(360deg)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-concrete': 'linear-gradient(180deg, #0f0f0f 0%, #000000 100%)',
        'gradient-red': 'linear-gradient(135deg, #ff0033 0%, #990022 100%)',
        'gradient-cyber': 'linear-gradient(135deg, #ff0033 0%, #ff00ff 50%, #00ffff 100%)',
        'scan-lines': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,51,0.03) 2px, rgba(255,0,51,0.03) 4px)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
