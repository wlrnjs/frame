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
        bg: '#FAFAFA',
        bgSub: '#F2F0EB',
        main: '#333333',
        sub: '#777777',
        point: '#3A506B',
        action: '#FFD166'
      },
    },
  },
  plugins: [],
}