'use client';
import { useState, useEffect } from 'react';
import { IconSunHigh, IconMoon } from '@tabler/icons-react';
import { useTheme } from '@/hooks';
import { SegmentedControl, SegmentedControlItem } from '@/components';

export function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, changeTheme } = useTheme();

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  if (!mounted || !theme) {
    return null;
  }

  return (
    <SegmentedControl
      value={theme}
      onValueChange={(value) => changeTheme(value as typeof theme)}
      className="w-32"
    >
      <SegmentedControlItem value="light" aria-label="Set light theme">
        <IconSunHigh size="1rem" aria-hidden="true" focusable="false" />
      </SegmentedControlItem>
      <SegmentedControlItem value="dark" aria-label="Set dark theme">
        <IconMoon size="1rem" aria-hidden="true" focusable="false" />
      </SegmentedControlItem>
    </SegmentedControl>
  );
}
