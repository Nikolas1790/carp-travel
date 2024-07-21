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
      },
      backgroundImage: {
        'hero-sm': "url('/img/home/mob-Home.jpg')",
        'hero-sm-2x': "url('/img/home/mob-Home@2x.jpg')",
        'hero-md': "url('/img/home/planset-Home.jpg')",
        'hero-md-2x': "url('/img/home/planset-Home@2x.jpg')",
        'hero-xl': "url('/img/home/desc-Home.jpg')",
        'hero-xl-2x': "url('/img/home/desc-Home@2x.jpg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['retina'],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('retina', '@media (-webkit-min-device-pixel-ratio: 2), (min--moz-device-pixel-ratio: 2), (-o-min-device-pixel-ratio: 2/1), (min-resolution: 192dpi)');
    },
  ],
}


