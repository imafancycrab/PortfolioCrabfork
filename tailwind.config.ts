import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'OxBlue': '#0B132B',
        'SpaceC': '#1C2541',
        'vBlue': '#3A506B',
        'vert': '#5BC0BE'
      },
      colors: {
        funkyBlue: 'rgb(90, 90, 205)',
        funkyRed: 'rgb(205, 90, 90)',
        funkyGreen: 'rgb(90, 205, 90)',
        mainGreen: '#00b4d8'
      },
    },
  },
  plugins: [],
}
export default config
