module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: () => ({
        'yosemite-day': 'url(/images/yosemite-day.png)',
        'yosemite-night': 'url(/images/yosemite-night.png)',
      }),
      colors: {
        'dark-gray': '#111111',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
};
