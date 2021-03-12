module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: () => ({
        'yosemite-day': 'url(/images/yosemite-day.png)',
        'yosemite-night': 'url(/images/yosemite-night.png)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
