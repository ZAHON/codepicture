import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

// Main font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

const anonymous_pro = localFont({
  src: '../fonts/anonymous-pro.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-anonymous-pro',
});

const cascadia_code = localFont({
  src: '../fonts/cascadia-code.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-cascadia-code',
});

const courier_prime = localFont({
  src: '../fonts/courier-prime.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-courier-prime',
});

const cousine = localFont({
  src: '../fonts/cousine.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-cousine',
});

const droid_sans_mono = localFont({
  src: '../fonts/droid-sans-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-droid-sans-mono',
});

const fantasque_sans_mono = localFont({
  src: '../fonts/fantasque-sans-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-fantasque-sans-mono',
});

const fira_code = localFont({
  src: '../fonts/fira-code.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-fira-code',
});

const fragment_mono = localFont({
  src: '../fonts/fragment-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-fragment-mono',
});

const hack = localFont({
  src: '../fonts/hack.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-hack',
});

const hasklig = localFont({
  src: '../fonts/hasklig.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-hasklig',
});

const ia_writer_mono = localFont({
  src: '../fonts/ia-writer-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-ia-writer-mono',
});

const ibm_plex_mono = localFont({
  src: '../fonts/ibm-plex-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-ibm-plex-mono',
});

const inconsolata = localFont({
  src: '../fonts/inconsolata.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-inconsolata',
});

const intel_one_mono = localFont({
  src: '../fonts/intel-one-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-intel-one-mono',
});

const jetbrains_mono = localFont({
  src: '../fonts/jetbrains-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-jetbrains-mono',
});

const juliamono = localFont({
  src: '../fonts/juliamono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-juliamono',
});

const liberation_mono = localFont({
  src: '../fonts/liberation-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-liberation-mono',
});

const lotion = localFont({
  src: '../fonts/lotion.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-lotion',
});

const menlo = localFont({
  src: '../fonts/menlo.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-menlo',
});

const monoid = localFont({
  src: '../fonts/monoid.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-monoid',
});

const noto_mono = localFont({
  src: '../fonts/noto-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-noto-mono',
});

const overpass_mono = localFont({
  src: '../fonts/overpass-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-overpass-mono',
});

const pt_mono = localFont({
  src: '../fonts/pt-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-pt-mono',
});

const recursive = localFont({
  src: '../fonts/recursive.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-recursive',
});

const roboto_mono = localFont({
  src: '../fonts/roboto-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-roboto-mono',
});

const san_francisco_mono = localFont({
  src: '../fonts/san-francisco-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-san-francisco-mono',
});

const sometype_mono = localFont({
  src: '../fonts/sometype-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-sometype-mono',
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

const sudo = localFont({
  src: '../fonts/sudo.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-sudo',
});

const ubuntu_mono = localFont({
  src: '../fonts/ubuntu-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-ubuntu-mono',
});

const victor_mono = localFont({
  src: '../fonts/victor-mono.woff2',
  display: 'swap',
  preload: false,
  variable: '--font-victor-mono',
});

export const fontsVariable = [
  inter.variable,
  anonymous_pro.variable,
  cascadia_code.variable,
  courier_prime.variable,
  cousine.variable,
  droid_sans_mono.variable,
  fantasque_sans_mono.variable,
  fira_code.variable,
  fragment_mono.variable,
  hack.variable,
  hasklig.variable,
  ia_writer_mono.variable,
  ibm_plex_mono.variable,
  inconsolata.variable,
  intel_one_mono.variable,
  jetbrains_mono.variable,
  juliamono.variable,
  liberation_mono.variable,
  lotion.variable,
  menlo.variable,
  monoid.variable,
  noto_mono.variable,
  overpass_mono.variable,
  pt_mono.variable,
  recursive.variable,
  roboto_mono.variable,
  san_francisco_mono.variable,
  sometype_mono.variable,
  source_code_pro.variable,
  space_mono.variable,
  sudo.variable,
  ubuntu_mono.variable,
  victor_mono.variable,
].join(' ');
