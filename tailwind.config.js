/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0f172a',
        'bg-dark-secondary': '#1e293b', 
        'bg-dark-tertiary': '#0f1729',
        'text-primary': '#ffffff',
        'text-secondary': '#94a3b8',
        'tech-blue': '#00d4ff',
        'tech-purple': '#8b5cf6',
        'tech-pink': '#f472b6',
        'tech-green': '#10b981',
        'tech-cyan': '#22d3ee'
      },
      fontFamily: {
        'sans': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'neon-sm': '0 0 5px rgba(0, 212, 255, 0.5)',
        'neon-md': '0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3)',
        'neon-lg': '0 0 15px rgba(0, 212, 255, 0.5), 0 0 30px rgba(0, 212, 255, 0.3), 0 0 45px rgba(0, 212, 255, 0.1)',
        'neon-purple-sm': '0 0 5px rgba(139, 92, 246, 0.5)',
        'neon-purple-md': '0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)',
        'neon-pink-sm': '0 0 5px rgba(244, 114, 182, 0.5)',
        'neon-pink-md': '0 0 10px rgba(244, 114, 182, 0.5), 0 0 20px rgba(244, 114, 182, 0.3)'
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'typing': 'typing 3.5s steps(30, end), blink-caret .5s step-end infinite'
      },
      keyframes: {
        'pulse-glow': {
          '0%': { opacity: '0.6', boxShadow: '0 0 5px rgba(0, 212, 255, 0.5)' },
          '100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.6)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'rgba(0, 212, 255, 0.8)' }
        }
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, rgba(0, 212, 255, 0.8), rgba(139, 92, 246, 0.8))',
        'secondary-gradient': 'linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(244, 114, 182, 0.8))',
        'cyber-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }
    },
  },
  plugins: [],
}
