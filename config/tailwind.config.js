// TailwindCSS configuration placeholder 
module.exports = {
    darkMode: 'class', // Enable dark mode with a class
    content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#00CFFF',
          secondary: '#FF88DC',
          background: '#0D0D0D',
          text: '#FFFFFF',
          mutedText: '#D1D5DB',
        },
        fontFamily: {
          sans: ['Poppins', 'Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };