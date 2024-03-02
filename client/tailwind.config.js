/** @type {import('tailwindcss').Config} */
export default {
  content: ["*", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tab: "768px",
        laptop: "1024px",
        desk: "1536px",
      },
      fontSize: {
        "4xl": "10rem",
      },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },
  ],
};
