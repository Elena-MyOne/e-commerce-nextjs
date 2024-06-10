import type { Config } from "tailwindcss";
import { custom } from "zod";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["integralcf", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#a21caf",
          secondary: "#fb7185",
          accent: "#0076f4",
          neutral: "#111309",
          "base-100": "#fff",
          info: "#00b6ff",
          success: "#34d399",
          warning: "#f59e0b",
          error: "#dc2626",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
