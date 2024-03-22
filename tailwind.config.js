/** @type {import('tailwindcss').Config} */
import {
  fluidExtractor,
  fluidCorePlugins,
  defaultThemeScreensInRems,
  defaultThemeFontSizeInRems,
} from "fluid-tailwind";
module.exports = {
  content: ["./dist**/*.{html,js}"],
  extract: fluidExtractor(),
  theme: {
    extend: {
      fontSize: defaultThemeFontSizeInRems,
      screens: defaultThemeScreensInRems,
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      backgroundImage: {
        headerBanner: "url(../dist/img/banner-img.png)",
        project1: "url(../dist/img/projects1.png)",
        project2: "url(../dist/img/projects2.png)",
        project3: "url(../dist/img/projects3.png)",
        logo__main: "url(../dist/img/logo (2).png)",
       
      },
      colors:{
      
        dark: "212020",
        light: "#ffffff",
        primary: "#008542",
        accent: "#28941e",
        Berde: "#006341",
        elBerde: "#d4e9e2",
        FirstLayer: "#d5d0ea",
        SecondLayer: "#f2f0eb",
        ThirdLayer: "#cee8c9",
        FourthLayer: "#f5cac4",
        FifthLayer: "#dbe6f2",
        SixthLayer: "#e99264",
        SeventhLayer: "#006241",
        Redish: "#e34636",
        secondary: "#e34636",
        fcaGreen: "#28941e",
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [fluidCorePlugins],
}