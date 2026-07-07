/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0F0D',
        ink2: '#111312',
        mint: '#7FFFB0',
        'mint-dim': '#5FCF8C',
        body: '#B7BDB8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        scrollline: {
          '0%, 100%': { transform: 'scaleY(0.3)', opacity: '0.4' },
          '50%': { transform: 'scaleY(1)', opacity: '1' },
        },
      },
      animation: {
        scrollline: 'scrollline 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
