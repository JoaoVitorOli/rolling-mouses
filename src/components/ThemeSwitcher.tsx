'use client'

import { Button } from '@nextui-org/react';
import { Moon, SunDim } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Skeleton } from "@nextui-org/skeleton";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, []);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  function handleSwitchTheme(e: KeyboardEvent<HTMLButtonElement> | KeyboardEvent) {
    if (e.type === 'keydown' && 'key' in e && e.key !== 'Enter') {
      return;
    }

    if (theme === 'dark') {
      setTheme('light');
      return;
    }

    setTheme('dark')
  }

  if (!mounted) return (
    <Skeleton className="flex rounded-medium w-20 h-10 md:w-[126.02px]" />
  );

  return (
    <Button
      className='font-medium'
      onClick={(e) => handleSwitchTheme(e)}
      onKeyDown={handleSwitchTheme}
    >
      <p className='hidden md:flex'>{theme === 'dark' ? 'flash bang' : 'dark mode'}</p>

      {theme === 'dark' ? <SunDim size={20} /> : <Moon size={20} />}
    </Button>
  )
}