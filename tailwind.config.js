/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #3b82f6, #9333ea)", // equivalent to from-blue-500 to-purple-600
        "custom-gradient-2": "linear-gradient(to left, #3b82f6, #f43f5e)",
      },
      colors: {
        navbarColor: "#ffffff",
        btnColor: "#3364F7",
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
        right: "10px 0px 10px -5px rgba(0, 0, 0, 0.3)",
      },
    },
  },

  variants: {
    extend: {
      backgroundImage: ["responsive"],
    },
  },

  plugins: [],
};
