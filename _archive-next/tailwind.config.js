/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './data/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#061A2F',
        ink: '#10243A',
        gold: '#C9A24D',
        turquoise: '#15B8B0',
        orange: '#EF7D20',
        sand: '#F6F1E8'
      },
      fontFamily: {
        sans: ['Tajawal', 'Cairo', 'Arial', 'sans-serif']
      },
      boxShadow: {
        premium: '0 24px 80px rgba(6, 26, 47, 0.14)'
      }
    }
  },
  plugins: []
};
