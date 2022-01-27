module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003592',
          50: '#D5E6FB',
          100: '#367FFF',
          200: '#0D65FF',
          300: '#0053E4',
          400: '#0044BB',
          500: '#003592',
          600: '#00215A',
          700: '#000C22',
        },
        info: '#2F80ED',
        secondary: {
          DEFAULT: '#F53838',
          50: '#FEE7E7',
          100: '#FDD3D3',
          200: '#FBADAD',
          300: '#F98686',
          400: '#F75F5F',
          500: '#F53838',
          600: '#E90C0C',
          700: '#B40909',
          800: '#7E0606',
          900: '#490404',
        },
        primaryText: {
          DEFAULT: '#092C4C',
        },
        cream: {
          DEFAULT: '#FFCE49',
          50: '#FFFFFF',
          100: '#FFFAEC',
          200: '#FFEFC3',
          300: '#FFE49B',
          400: '#FFD972',
          500: '#FFCE49',
          600: '#FFBF11',
          700: '#D89E00',
          800: '#A07500',
          900: '#684C00',
        },
        secondaryText: {
          DEFAULT: '#27153E',
        },
        success: {
          DEFAULT: '#2FBB56',
        },
        secondaryGrey: {
          DEFAULT: '#E0E0E0',
          3: '#E0E0E0',
          4: '#BDBDBD',
          5: '#828282',
          6: '#EAF2FD',
          7: '#4F4F4F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
}
