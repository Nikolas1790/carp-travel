/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,ts,jsx,tsx,mdx}' ],
  theme: {
    extend: {
      screens: {
        'sm': '320px', 
        'md': '768px', 
        'xl': '1280px',
      },
      maxWidth: {
        'container-sm': '100%',       // 100% ширина для мобильных устройств
        'container-md': '768px',      // фиксированная ширина для планшетов
        'container-xl': '1280px',     // фиксированная ширина для десктопов
      }
    },
  },
  plugins: [],
}

