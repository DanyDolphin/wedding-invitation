import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
    fontFamily: {
      body1: ['var(--font-body1)'],
      body2: ['var(--font-body2)'],
      head1: ['var(--font-head1)'],
      head2: ['var(--font-head2)'],
      head3: ['var(--font-head3)'],
      handwritting: ['var(--font-handwritting)'],
    },
  },
  plugins: [],
} satisfies Config
