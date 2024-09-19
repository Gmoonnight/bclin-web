import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        /**
         * At present, we only adapt to tablets and computer screens.
         */
        // [768px, 1024px)
        'md': '768px',
        // >= 1024px
        'lg': '1024px',
      },
      backgroundImage: {
        'home-default': "url('/images/home/bg-home-default.jpg')",
        'home-md': "url('/images/home/bg-home-md.jpg')",
        'home-lg': "url('/images/home/bg-home-lg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
