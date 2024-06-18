import type { Config } from "tailwindcss";

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
      screens: {
        xsm: { max: "500px" },
      },
    },
  },
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#151616",
          secondary: "#fb7185",
          accent: "#EDE9E6",
          neutral: "#111309",
          "base-100": "#FAFDFD",
          info: "#00b6ff",
          success: "#34d399",
          warning: "#f59e0b",
          error: "#dc2626",
          body: {
            "background-color": "#F6F6F6",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
