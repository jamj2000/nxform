/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },
      animation: {
        'hide': 'fadeOff 3s linear forwards',
      },
      keyframes: {
        fadeOff: {
           '100%': { visibility: 'hidden' },
        }
      }
    },
  },
  plugins: [ require('daisyui') ],
};
