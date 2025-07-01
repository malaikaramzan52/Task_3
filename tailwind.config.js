module.exports = {
  content: [
    "./index.html",           // ✅ Aapki HTML file ka path
    "./src/**/*.{js,ts,jsx,tsx}" // ✅ Optional, agar aap JS/React use kar rahe hain
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide') // ✅ Plugin added here
  ],
}