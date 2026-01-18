/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sarina: ["Sarina", "cursive"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)", // text-primary
          light: "var(--primary-light)", // text-primary-light
          dark: "var(--primary-dark)",
        },
        accent: "var(--accent)",
        metallic: "var(--accent-metallic)",
      },
    },
  },
  plugins: [
    require("tailwindcss-textglow"),
    require("@tailwindcss/typography"),
  ],
};
