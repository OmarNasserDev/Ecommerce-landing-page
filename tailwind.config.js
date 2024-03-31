/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card1': "url('./src/assets/card1.png')",
        'card2': "url('./src/assets/meatbg.png')",
        'card3': "url('./src/assets/fruitcard.png')",
        'card4': "url('./src/assets/card4.png')",

      }
    },
  },
  plugins: [
    require("tailwindcss-scoped-groups")({
      groups: ["one", "two", "three"],
    }),
  ],
}

