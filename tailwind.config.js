/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        panel: 'hsl(var(--color-panel) / <alpha-value>)',
        neutral: {
          1: 'hsl(var(--color-neutral-1) / <alpha-value>)',
          2: 'hsl(var(--color-neutral-2) / <alpha-value>)',
          3: 'hsl(var(--color-neutral-3) / <alpha-value>)',
          4: 'hsl(var(--color-neutral-4) / <alpha-value>)',
          5: 'hsl(var(--color-neutral-5) / <alpha-value>)',
          6: 'hsl(var(--color-neutral-6) / <alpha-value>)',
          7: 'hsl(var(--color-neutral-7) / <alpha-value>)',
          8: 'hsl(var(--color-neutral-8) / <alpha-value>)',
          9: 'hsl(var(--color-neutral-9) / <alpha-value>)',
          10: 'hsl(var(--color-neutral-10) / <alpha-value>)',
          11: 'hsl(var(--color-neutral-11) / <alpha-value>)',
          12: 'hsl(var(--color-neutral-12) / <alpha-value>)',
        },
        primary: {
          1: 'hsl(var(--color-primary-1) / <alpha-value>)',
          2: 'hsl(var(--color-primary-2) / <alpha-value>)',
          3: 'hsl(var(--color-primary-3) / <alpha-value>)',
          4: 'hsl(var(--color-primary-4) / <alpha-value>)',
          5: 'hsl(var(--color-primary-5) / <alpha-value>)',
          6: 'hsl(var(--color-primary-6) / <alpha-value>)',
          7: 'hsl(var(--color-primary-7) / <alpha-value>)',
          8: 'hsl(var(--color-primary-8) / <alpha-value>)',
          9: 'hsl(var(--color-primary-9) / <alpha-value>)',
          10: 'hsl(var(--color-primary-10) / <alpha-value>)',
          11: 'hsl(var(--color-primary-11) / <alpha-value>)',
          12: 'hsl(var(--color-primary-12) / <alpha-value>)',
        },
        success: {
          1: 'hsl(var(--color-success-1) / <alpha-value>)',
          2: 'hsl(var(--color-success-2) / <alpha-value>)',
          3: 'hsl(var(--color-success-3) / <alpha-value>)',
          4: 'hsl(var(--color-success-4) / <alpha-value>)',
          5: 'hsl(var(--color-success-5) / <alpha-value>)',
          6: 'hsl(var(--color-success-6) / <alpha-value>)',
          7: 'hsl(var(--color-success-7) / <alpha-value>)',
          8: 'hsl(var(--color-success-8) / <alpha-value>)',
          9: 'hsl(var(--color-success-9) / <alpha-value>)',
          10: 'hsl(var(--color-success-10) / <alpha-value>)',
          11: 'hsl(var(--color-success-11) / <alpha-value>)',
          12: 'hsl(var(--color-success-12) / <alpha-value>)',
        },
        warning: {
          1: 'hsl(var(--color-warning-1) / <alpha-value>)',
          2: 'hsl(var(--color-warning-2) / <alpha-value>)',
          3: 'hsl(var(--color-warning-3) / <alpha-value>)',
          4: 'hsl(var(--color-warning-4) / <alpha-value>)',
          5: 'hsl(var(--color-warning-5) / <alpha-value>)',
          6: 'hsl(var(--color-warning-6) / <alpha-value>)',
          7: 'hsl(var(--color-warning-7) / <alpha-value>)',
          8: 'hsl(var(--color-warning-8) / <alpha-value>)',
          9: 'hsl(var(--color-warning-9) / <alpha-value>)',
          10: 'hsl(var(--color-warning-10) / <alpha-value>)',
          11: 'hsl(var(--color-warning-11) / <alpha-value>)',
          12: 'hsl(var(--color-warning-12) / <alpha-value>)',
        },
        error: {
          1: 'hsl(var(--color-error-1) / <alpha-value>)',
          2: 'hsl(var(--color-error-2) / <alpha-value>)',
          3: 'hsl(var(--color-error-3) / <alpha-value>)',
          4: 'hsl(var(--color-error-4) / <alpha-value>)',
          5: 'hsl(var(--color-error-5) / <alpha-value>)',
          6: 'hsl(var(--color-error-6) / <alpha-value>)',
          7: 'hsl(var(--color-error-7) / <alpha-value>)',
          8: 'hsl(var(--color-error-8) / <alpha-value>)',
          9: 'hsl(var(--color-error-9) / <alpha-value>)',
          10: 'hsl(var(--color-error-10) / <alpha-value>)',
          11: 'hsl(var(--color-error-11) / <alpha-value>)',
          12: 'hsl(var(--color-error-12) / <alpha-value>)',
        },
      },
      animation: {
        'slide-up-and-fade': 'slide-up-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-and-fade': 'slide-right-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-and-fade': 'slide-down-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-and-fade': 'slide-left-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        'show-notification': 'show-notification 200ms ease-out',
        'hide-notification': 'hide-notification 150ms ease-in forwards',
      },
      keyframes: {
        'slide-up-and-fade': {
          '0%': { opacity: 0, transform: 'translateY(0.125rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-right-and-fade': {
          '0%': { opacity: 0, transform: 'translateX(-0.125rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-down-and-fade': {
          '0%': { opacity: 0, transform: 'translateY(-0.125rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-left-and-fade': {
          '0%': { opacity: 0, transform: 'translateX(0.125rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'show-notification': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'hide-notification': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
