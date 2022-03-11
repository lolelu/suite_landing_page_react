module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#172339',
      'purple': '#a060ff',
      'pink': '#cb30e3',
      'orange': '#ffa84e',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#49566d',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#faf8f6',
    },

    fontFamily: {
      'sans': ['Epilogue', 'ui-sans-serif', 'system-ui']
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    extend: {
      colors: {
        'beige': '#f3ede7',
      },
      fontFamily: {

      }
    },
  },
  plugins: [],
}
