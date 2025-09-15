/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'json-bg': '#0d1117',
        'json-text': '#10b981',
        'json-key': '#3b82f6',
        'json-value': '#fbbf24',
      },
      fontFamily: {
        'mono': ['Courier New', 'Monaco', 'Lucida Console', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}