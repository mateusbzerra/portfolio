/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        cyan: "#2ECBFD",
        "dark-blue": "#02031C",
      },
      backgroundImage: {
        shape: "url('/shape.svg')",
        "shape-full": "url('/shape-full.svg')",
      },
      backgroundPosition: {
        "left-center": "left 30vw top 30vh",
      },
    },
  },
  plugins: [],
};
