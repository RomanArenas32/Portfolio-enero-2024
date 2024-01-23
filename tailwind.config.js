/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "639px" },
      // => @media (max-width: 639px) { ... }

      md: { min: "767px" },
      // => @media (max-width: 767px) { ... }

      lg: { min: "1023px" },
      // => @media (max-width: 1023px) { ... }

      xl: { min: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "2xl": { min: "2000px" },
      // => @media (max-width: 1535px) { ... }
    },
  },
  plugins: [],
};
