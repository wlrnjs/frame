/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out',
      },
      colors: {
        white: {
          DEFAULT: "#ffffff",
          80: "rgba(255, 255, 255, 0.8)",
          60: "rgba(255, 255, 255, 0.6)",
        },
        black: "#000000",
        gray: {
          920: "#1F1F1F",
          850: "#2A2A2A",
          870: "#4B4B4B",
          350: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
}