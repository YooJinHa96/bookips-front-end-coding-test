/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#12141f",
        white: "#ffffff",
        gray: {
          900: "#1C1F2E",
          800: "#292E40",
          700: "#3B4054",
          600: "#4F556B",
          500: "#6A708A",
          400: "#8990AB",
          300: "#A9AFC7",
          200: "#CED2E0",
          100: "#E1E4ED",
          50: "#F0F1F5",
          0: "#F7F8FA",
        },
        indigo: {
          900: "#1E1C38",
          800: "#2C265E",
          700: "#403391",
          600: "#513CBA",
          500: "#6950E5",
          400: "#8378FA",
          300: "#A09BFA",
          200: "#C7C6F7",
          100: "#E1E1FA",
          50: "#F0F0FA",
          0: "#F5F5FC",
        },
        blue: {
          900: "#141D33",
          800: "#1A2C57",
          700: "#1A3C80",
          600: "#2453B2",
          500: "#326EE5",
          400: "#578FFF",
          300: "#82AAFA",
          200: "#B9CFFA",
          100: "#D5E0F7",
          50: "#EBEEFA",
          0: "#F0F4FC",
        },
        mint: {
          900: "#0C211E",
          800: "#0E332D",
          700: "#12473D",
          600: "#186150",
          500: "#29876E",
          400: "#3EA381",
          300: "#57C29E", //LOGO COLOR
          200: "#A3D9C7",
          100: "#CEEDE3",
          50: "#E9F7F2",
          0: "#F0F7F5",
        },
        yellow: {
          900: "#2E2612",
          800: "#473919",
          700: "#806526",
          600: "#B88E2E",
          500: "#E5AB22",
          400: "#F2C14E",
          300: "#FAD378",
          200: "#FAE0A2",
          100: "#FAE9C3",
          50: "#FAF2E1",
          0: "#FCF7EB",
        },
        red: {
          900: "#2E1612",
          800: "#4D211A",
          700: "#74291C",
          600: "#A83725",
          500: "#D14D38",
          400: "#F26A55",
          300: "#FF9180",
          200: "#F7DBD5",
          100: "#F7DBD7",
          50: "#F7EAE9",
          0: "#FAF1F0",
        },
        lime: {
          400: "#A8DB90",
        },
        text: {
          title: "#1C1F2E", // gray_900
          primary: "#3B4054", // gray_700
          secondary: "#6A708A", // gray_500
          tertiary: "#A9AFC7", // gray_300
        },
        primary: {
          main: "#6950E5", // indigo_500
          dark: "#513CBA", // indigo_600
        },
        secondary: {
          main: "#578FFF", // blue_400
          dark: "#326EE5", // blue_500
        },
        status: {
          data: "#3EA381", // mint_400
          error: "#F26A55", // red_400
          success: "#A8DB90", // lime_400
        },
      },
      boxShadow: {
        menu: "0px 2px 8px rgba(0, 0, 0, 0.08), 0px 1px 4px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    function ({ addUtilities }) {
      addUtilities({
        ".reset-btn": {
          all: "unset", // or 하나하나 지정해도 됨
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        },
      });
    },
  ],
};
