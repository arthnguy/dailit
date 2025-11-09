/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'han-brush': ['"Kaiti SC"', '"Kaiti TC"', '"DFKai-SB"', '"BiauKai"', '"標楷體"', '"楷体"', '"楷體"', '"Kai"', 'cursive'],
        'han-calligraphy': ['"Xingkai SC"', '"Hannotate SC"', '"Hanzipen SC"', '"Kaiti SC"', '"STKaiti"', '"華康楷書體"', 'cursive'],
        'han-artistic': ['"Yuanti SC"', '"Weibei SC"', '"Baoli SC"', '"Kaiti SC"', 'cursive'],
      },
      letterSpacing: {
        'han': '0.02em',
        'han-calligraphy': '0.03em',
        'han-artistic': '0.01em',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(0.8) translateY(-20px)' },
        },
        slideIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}