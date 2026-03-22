/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom iPad Pro screen (1024px–1279px)
        'ipad': {'min': '1024px', 'max': '1279px'},
      },
      fontFamily: {
        "sergio-trendy": ["sergio-trendy", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        kurdis: ["Kurdis-ExtraWideSemiBold", "sans-serif"],
        // 👇 Add this line to allow `font-display` to use sergio-trendy
        display: ["sergio-trendy", "serif"],
      },
      colors: {
        "main-orange": "#FF9500",
        "pastel-yellow": "#FFDA7F",
        "carbon-Black": "#313131",
        bone: "#DFD4AD",
        "light-purple": "#ECECFD",
        purple: "#D5D1EA",
        "main-red": "#FC5B67",
        "light-green": "#BBE4D7",
        "light-red": "#FCD9DF",
        red: "#FC8B99",
        green: "#80CEB7",
        "light-grey": "#ADADAD",
        romance: "#F4F1E6",
        noma: "#F4F1E6",
        "sweet-Watermelon": "#FC5B67",
        "main-purple": "#8196CC",
        "pantone": "#FFC300",
        "beveled-Glass ": "#80CEB7",
        lynxwhite: "#F7F7F7",
        squantgrey: "#666",
        erieblack: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
