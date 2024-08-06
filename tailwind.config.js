/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'custom-white':"rgba(255,255,255,0.5)",
        'custom-gray':"rgba(66,85,104,1)",
        'custom-black':"rgba(25,39,52,1)",
        'custom-blue':"rgba(0,178,255,1)",
        'custom-text':"rgba(255,255,255,0.75)",
      }
    },
  },
  plugins: [],
};
