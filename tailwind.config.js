/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Gilory-Bold': ['Gilroy-Bold', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        footer_bg: "url('/Background.png')",
      },
    },
    container: {
      center: true,
      padding: '1em',
    },
  },
  plugins: [],
};
