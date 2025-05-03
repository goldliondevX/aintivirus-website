/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        dotgothic: ['var(--font-dot-gothic)'],
        poppins: ['var(--font-poppins)'],
        dmsans: ['var(--font-dm-sans)'],
      },
      colors: {
        primary: '#35CEEE',
      },
      fontSize: {
        '4.5xl': '2.5rem',
      },
      backgroundColor: {
        primary: '#35CEEE',
        secondary: '#000034',
        tertiary: '#00001F',
        purple: '#282864',
      },
    },
  },
  plugins: [],
};
