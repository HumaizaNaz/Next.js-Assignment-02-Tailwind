import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: '#ff9a8b', // Example peach color
        neonGreen: '#39ff14', // Example neon green color
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite', // Slow spin animation
      },
    },
  },
  plugins: [],
} satisfies Config;

