import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/concepts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tasks: {
          "bg-progress": "#F4D464",
          "icon-progress": "#e9a23b",
          "bg-completed": "#A0ECB0",
          "icon-completed": "#31d556",
          "bg-wont-do": "#F6D4D2",
          "icon-wont-do": "#de514b",
          "bg-default": "#E2E8EE",
          "bg-add": "#F5E8D4"
        },
        color: {
          "soft": "#767D87",
        }
      }
    },
  },
  plugins: [],
};
export default config;
