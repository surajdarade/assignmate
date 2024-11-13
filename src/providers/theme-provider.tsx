'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, ThemeProviderProps, useTheme as useNextTheme } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export const useTheme = useNextTheme;
