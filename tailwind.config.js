/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#469597',
        secondary: '#5BA199',
        bgLight: '#E5E3E4',
        bgGrey: '#BBC6C8',
        accent: '#DDBEAA',
      },
    },
  },
  plugins: [],
}
