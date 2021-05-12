module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif']
      },
      container: {
        center: true
      },
      colors: {
        background: {
          light: '#f9fafb',
          dark: '#22272E'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
