'use client'

import { Button } from '@nextui-org/react';
import { SunDim } from '@phosphor-icons/react';

export function ThemeSwitcher() {
  function handleSwitchTheme() {
    const htmlElement = document.getElementById('html');
    const isDarkMode = htmlElement?.classList.contains('dark');

    if (isDarkMode) {
      htmlElement?.classList.replace('dark', 'light');
      return;
    }

    htmlElement?.classList.replace('light', 'dark');
  }

  return (
    <Button
      className='font-medium'
      onClick={handleSwitchTheme}
    >
      flash bang

      <SunDim size={20} />
    </Button>
  )
}