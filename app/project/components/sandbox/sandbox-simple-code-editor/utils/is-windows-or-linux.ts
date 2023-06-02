export const isWindowsOrLinux =
  typeof window !== 'undefined' &&
  'navigator' in window &&
  'userAgent' in window.navigator &&
  (/(Win32)|(Win64)|(Windows)|(WinCE)/i.test(window.navigator.userAgent) ||
    /Linux/i.test(window.navigator.userAgent));
