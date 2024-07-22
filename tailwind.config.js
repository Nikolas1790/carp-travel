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

        'about-sm': "url('/img/about/mob-About.jpg')",
        'about-sm-2x': "url('/img/about/mob-About@2x.jpg')",
        'about-md': "url('/img/about/tablet-About.jpg')",
        'about-md-2x': "url('/img/about/tablet-About@2x.jpg')",
        'about-xl': "url('/img/about/desc-About.jpg')",
        'about-xl-2x': "url('/img/about/desc-About@2x.jpg')",

        'career-sm': "url('/img/career/mob-Career.jpg')",
        'career-sm-2x': "url('/img/career/mob-Career@2x.jpg')",
        'career-md': "url('/img/career/tablet-Career.jpg')",
        'career-md-2x': "url('/img/career/mob-Career@2x.jpg')",
        'career-xl': "url('/img/career/desc-Career.jpg')",
        'career-xl-2x': "url('/img/career/desc-Career@2x.jpg')",

        'gallery-sm': "url('/img/gallery/mob-Gallery.jpg')",
        'gallery-sm-2x': "url('/img/gallery/mob-Gallery@2x.jpg')",
        'gallery-md': "url('/img/gallery/tablet-Gallery.jpg')",
        'gallery-md-2x': "url('/img/gallery/tablet-Gallery@2x.jpg')",
        'gallery-xl': "url('/img/gallery/desc-Gallery.jpg')",
        'gallery-xl-2x': "url('/img/gallery/desc-Gallery@2x.jpg')",

        'contacts-sm': "url('/img/contacts/mob-Contacts.jpg')",
        'contacts-sm-2x': "url('/img/contacts/mob-Contacts@2x.jpg')",
        'contacts-md': "url('/img/contacts/tablet-Contacts.jpg')",
        'contacts-md-2x': "url('/img/contacts/tablet-Contacts@2x.jpg')",
        'contacts-xl': "url('/img/contacts/desc-Contacts.jpg')",
        'contacts-xl-2x': "url('/img/contacts/desc-Contacts@2x.jpg')",
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


