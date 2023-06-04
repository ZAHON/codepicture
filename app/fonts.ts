import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

// Main font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

const cascadia_code = localFont({
  src: '../fonts/cascadia-code.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-cascadia-code',
});

const fira_code = localFont({
  src: '../fonts/fira-code.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-fira-code',
});

const jetbrains_mono = localFont({
  src: '../fonts/jetbrains-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-jetbrains-mono',
});

const overpass_mono = localFont({
  src: '../fonts/overpass-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-overpass-mono',
});

const source_code_pro = localFont({
  src: '../fonts/source-code-pro.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-source-code-pro',
});

const space_mono = localFont({
  src: '../fonts/space-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-space-mono',
});

export const fontsVariable = [
  inter.variable,
  cascadia_code.variable,
  fira_code.variable,
  jetbrains_mono.variable,
  overpass_mono.variable,
  source_code_pro.variable,
  space_mono.variable,
].join(' ');
