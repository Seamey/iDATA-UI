import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      darkMode: 'class',
      colors: {
        primaryColor: "#0F2C67",
        secondaryColor: "#FD841F",
        blueImage: "#407BFF",
        nearblack:"#1B1919",
        descriptionColor: "#7D7C7C",
        backgroundColor: "#F2F9FF",
        gray: {
          50: "#FFFFFF"
     },
      },
      fontSize: {
        "h42":"42px",
        "h40":"40px",
        "h34":"34px",
        "h28":"28px",
        "h26":"26px",
        "h24":"24px",
        "h22":"22px",
        "h20":"20px",
        "h16":"16px",
        "h18":"18px",
        "h12":"12px",
        "h14":"14px",
      },
      fontWeight:{
        "normal":"300",
        "medium":"500",
        "semibold":"600",
        "bold":"900"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "auth-background": "url('/chiso/images/AUTH_BG.jpg')"
      },
    },
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
};
export default config;
