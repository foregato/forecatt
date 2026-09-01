/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A1B3D",      // deep navy — primary
        ink2: "#132A57",     // secondary navy (surfaces)
        accent: "#2F5FE0",   // electric blue — CTAs
        accent2: "#5B7FEA",  // lighter blue — hover/secondary
        paper: "#F6F8FC",    // page background
        surface: "#FFFFFF",  // card background
        line: "#E3E8F2",     // hairline borders
        muted: "#5B6B85",    // secondary text
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
