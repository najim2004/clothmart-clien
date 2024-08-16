/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "700px",
        sm: "350px",
      },
    },
  },
  plugins: [require("daisyui")],
};
