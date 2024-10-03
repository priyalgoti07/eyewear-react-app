/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Playfair-Display': ["Playfair Display", "sans-serif"],
        'Raleway': ["Raleway", "sans-serif"],
        'Montserrat': ["Montserrat", "sans-serif"],
        'Figtree': ["Figtree", "sans-serif"],
        'CourierPrime':["Courier Prime", "sans-serif"]
      }
    },
  },
  plugins: [],
}

