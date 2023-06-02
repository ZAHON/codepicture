export const isMac =
  typeof window !== 'undefined' &&
  'navigator' in window &&
  'userAgent' in window.navigator &&
  /(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i.test(window.navigator.userAgent);
