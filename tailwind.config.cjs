/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ### Primary
        "tw-red": "hsl(0, 100%, 74%)",
        "tw-green": "hsl(154, 59%, 51%)",
        // ### Accent
        "tw-blue": "hsl(248, 32%, 49%)",
        // ### Neutral
        "tw-dark-blue": "hsl(249, 10%, 26%)",
        "tw-grayish-blue": "hsl(246, 25%, 77%)",
      },
      backgroundImage: {
        desktop: "url('/images/bg-intro-desktop.png')",
        mobile: "url('/images/bg-intro-mobile.png')",
      },
    },
  },
  plugins: [],
};
