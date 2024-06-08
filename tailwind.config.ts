import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: '#c026d3',
          secondary: '#fb7185',
          accent: '#0076f4',
          neutral: '#111309',
          'base-100': '#fff',
          info: '#00b6ff',
          success: '#34d399',
          warning: '#f59e0b',
          error: '#dc2626',
          body: {
            'background-color': '#e3e6e6',
          },
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
