/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}" ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  extend: {
    backgroundImage: {
      'hero-pattern': "url('./src/assets/images/bg.png')",
      'footer-texture': "url('./src/assets/images/footer.png')",
    }
  },
  plugins: [ require( "daisyui" ) ],
};
