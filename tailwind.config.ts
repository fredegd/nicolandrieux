import type { Config } from "tailwindcss";
// const { nextui } = require("@nextui-org/react");
import { nextui } from "@nextui-org/react";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "16": "4rem",
      "32": "8rem",
      "500x": "500%",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["var(--font-ibm-plex-mono)"],
        sans: ["var(--font-ibm-plex-sans)"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quaternary: "var(--color-quaternary)",
        quinary: "var(--color-quinary)",
        senary: "var(--color-senary)",
        septenary: "var(--color-septenary)",
        octonary: "var(--color-octonary)",
        nonary: "var(--color-nonary)",
        denary: "var(--color-denary)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        "light-gray": "var(--color-light-gray)",
        "dark-gray": "var(--color-dark-gray)",
        "light-blue": "var(--color-light-blue)",
        "dark-blue": "var(--color-dark-blue)",
        "light-red": "var(--color-light-red)",
        "dark-red": "var(--color-dark-red)",
        "light-green": "var(--color-light-green)",
        "dark-green": "var(--color-dark-green)",
        "light-yellow": "var(--color-light-yellow)",
        "dark-yellow": "var(--color-dark-yellow)",
        "light-purple": "var(--color-light-purple)",
        "dark-purple": "var(--color-dark-purple)",
        "light-orange": "var(--color-light-orange)",
        "dark-orange": "var(--color-dark-orange)",
        "light-pink": "var(--color-light-pink)",
        "dark-pink": "var(--color-dark-pink)",
        "light-cyan": "var(--color-light-cyan)",
        "dark-cyan": "var(--color-dark-cyan)",
        "light-indigo": "var(--color-light-indigo)",
        "dark-indigo": "var(--color-dark-indigo)",
        "light-teal": "var(--color-light-teal)",
        "dark-teal": "var(--color-dark-teal)",
        "light-lime": "var(--color-light-lime)",
        "dark-lime": "var(--color-dark-lime)",
        "light-gray-100": "var(--color-light-gray-100)",
        "light-gray-200": "var(--color-light-gray-200)",
        "light-gray-300": "var(--color-light-gray-300)",
      },
      fontSize: {
        sm: "0.9rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
