/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Black: "#000000", // ✅ Correct way to define a custom color
      },
    },
  },
  plugins: [],
};



