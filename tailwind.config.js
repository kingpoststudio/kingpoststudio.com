module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: () => ({
        yosemite: 'url(/images/yosemite-tunnel-view.png)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
