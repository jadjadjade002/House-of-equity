/**
 * Tailwind CSS configuration for House of Equity project.
 * Enables the `filter` core plugin (required for `drop-shadow`) and
 * adds a custom drop‑shadow scale for the logo.
 */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      dropShadow: {
        // subtle shadow that follows the PNG shape
        md: '0 4px 3px rgba(0,0,0,0.1)',
      },
    },
  },
  corePlugins: {
    // ensure filter utilities are generated
    filter: true,
  },
  plugins: [],
};
