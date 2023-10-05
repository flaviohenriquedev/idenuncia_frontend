import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background_img' : 'url("/bg-hero2.png")',
        'background_aboutus' : 'url("/bg-about-us.jpg")',
        'background-header-contact' : 'url("/header-contact.png")'
      },
      colors: {
        'primary_gray': '#B8AFA6',
        'primary_yellow': '#FFCC00',
        'primary_blue': '#3B71C7'
      }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}
export default config
