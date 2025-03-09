import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-gray-50": "#ECECEC",
        "custom-gray-100": "#E6E6E6",
        "custom-gray-500": "#414552",
        "custom-red-500": "#FF0000",
        "custom-green-300": "#15BE53"
      },
    },
  },
  plugins: [],
};
export default config;
