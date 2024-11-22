/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      // padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'serif'],
      },
      colors: {
        desaturatedDarkCyan: 'hsl(180, 29%, 50%)',
        lightCyanBg: 'hsl(180, 52%, 96%)',
        lightCyanFt: 'hsl(180, 31%, 95%)',
        darkGrayishCyan: 'hsl(180, 8%, 52%)',
        varyDarkGrayishCyan: 'hsl(180, 14%, 20%)',
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
