// tailwind.config.js
import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}", // Next.js pages and components
      "./pages/**/*.{js,ts,jsx,tsx}", // Next.js pages and components
      "./components/**/*.{js,ts,jsx,tsx}", // Your components folder
      "./src/**/*.{js,ts,jsx,tsx}", // If you use a src folder
      "./index.html", // If you have an index.html file
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
}

export default config;