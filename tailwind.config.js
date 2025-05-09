/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22c55e',     // green
        secondary: '#f97316',   // pastel orange
        background: '#f9fafb',  // light background
        accent: '#2563eb',      // blue accent if needed
      },
    },
  },
  plugins: [],
};
