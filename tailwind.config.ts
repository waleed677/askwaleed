import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        background: 'var(--background)'
      },
      fontFamily: {
        koulen: ['var(--font-koulen)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
}
export default config 