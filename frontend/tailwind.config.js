/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)", // text-primary
          light: "var(--primary-light)", // text-primary-light
          dark: "var(--primary-dark)",
        },
        accent: "var(--accent)",
      },
    },
  },
  plugins: [
    require('tailwindcss-textglow'),
  ],
};
