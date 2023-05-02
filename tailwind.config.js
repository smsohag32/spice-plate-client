/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
    animation:{
          'ltr-linear-infinite': 'normal 100s linear infinite'
        },
  },

  plugins: [require("daisyui")],
}

