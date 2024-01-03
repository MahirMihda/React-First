/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1280px',
        'navbarWidth': '1320px'
      },
      fontFamily: {
        'styleFrank': 'Frank Ruhl Libre',
        'stylePoppins': 'Poppins',
      },
      colors: {
        'colorHeader': '#FAE3B6',
        'colorButtonHover': '#FDBB57',
        'colorFooter': '#CFA485',
        'colorNavbar': '#FAE3B688',
      },
      fontSize: {
        'fontHeading': '74px',
        'fontText': '24px',
        'fontLogo': '48px',
      }
    },
  },
  plugins: [],
}

