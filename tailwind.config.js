module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
  ],
  darkMode: 'media', // or 'media' or 'class' or false
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
