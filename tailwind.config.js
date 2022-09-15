/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0083CA",

          "secondary": "#F28E13",

          "accent": "#F47920",

          "neutral": "#333333",

          "base-100": "#FFFFFF",

          "info": "#474747",

          "success": "#3B5E8C",

          "warning": "#356EDC",

          "error": "#356EDC",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}