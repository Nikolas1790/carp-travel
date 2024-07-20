/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,ts,jsx,tsx,mdx}' ],
  theme: {
    extend: {
      screens: {
        'sm': '480px', 
        'md': '768px', 
        'xl': '1280px',
      },
      maxWidth: {
        'container-sm': '480px',     
        'container-md': '768px',     
        'container-xl': '1280px',     
      }
    },
  },
  plugins: [],
}

