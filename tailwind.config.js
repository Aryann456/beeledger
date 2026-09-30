/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      colors: {
        darkBg: '#090A0F',
        darkCard: '#11131F',
        darkBorder: '#1E2338',
        honeyGlow: '#FFB800',
        neonAmber: '#FF7A00',
        mintPulse: '#00F5A0',
      },
      boxShadow: {
        'glow-amber': '0 0 25px -5px rgba(255, 184, 0, 0.3)',
        'glow-mint': '0 0 25px -5px rgba(0, 245, 160, 0.3)',
      }
    },
  },
  plugins: [],
}