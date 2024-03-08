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
        // "3.5xl": "1.9rem",
        "4xl": "10rem",
      },
      zIndex: {
        header: "150",
        sidebar: "200",
      },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
    },

    function ({ addVariant }) {
      addVariant("child2", "& > *:nth-child(2)");
    },

    function ({ addVariant }) {
      addVariant("child3", "& > *:nth-child(3)");
    },
  ],
};
