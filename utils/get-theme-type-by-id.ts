import type { ThemeId } from '@/data';
import { themes } from '@/data';

export function getThemeTypeById(themeId: ThemeId) {
  const themeData = themes.find(({ id }) => id === themeId);

  return themeData?.type;
}
