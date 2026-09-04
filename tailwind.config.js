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
      boxShadow: {
        card: "0 1px 2px rgba(10, 27, 61, 0.04), 0 8px 24px -12px rgba(10, 27, 61, 0.10)",
        "card-hover": "0 1px 2px rgba(10, 27, 61, 0.05), 0 16px 32px -12px rgba(10, 27, 61, 0.16)",
        soft: "0 20px 60px -20px rgba(10, 27, 61, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(47, 95, 224, 0.35)" },
          "100%": { boxShadow: "0 0 0 14px rgba(47, 95, 224, 0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
