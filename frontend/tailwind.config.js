/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        extend: {
          colors: {
            somng: { gold: '#FFD700', green: '#00A86B', purple: '#6A0DAD', white: '#ffffff' }
          },
        },
      },
    },
  },
  plugins: [],
}

