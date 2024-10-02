/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        c1: "#132a3a", // dark blue
        c2: "#fff", // white
        c3: "#dae5f7", // input bg
        c4: "#ce5355", // red
        c5: "#eff3ff", // btn
        c6: "#dae5f7", // btn bg
        c7: "#adadaf", // btn hover
      },
    },
  },
  plugins: [],
};
