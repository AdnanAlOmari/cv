'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type ThemeKey = 'dark' | 'light'

interface ThemeDef {
  name: string
  colors: Record<string, string>
}

const themes: Record<ThemeKey, ThemeDef> = {
  dark: {
    name: 'Dark',
    colors: {
      '--bg-main':      '#000000',
      '--bg-card':      '#0a0a0a',
      '--bg-hover':     '#111111',
      '--bg-secondary': '#161616',
      '--border':       'rgba(255,255,255,0.1)',
      '--text-main':    '#ffffff',
      '--text-muted':   '#a1a1aa',
      '--accent':       '#f97316',
      '--accent-dim':   'rgba(249,115,22,0.12)',
      '--tx3':          '#52525b',
      '--green':        '#22c55e',
      '--purple':       '#a78bfa',
    },
  },
  light: {
    name: 'Light',
    colors: {
      '--bg-main':      '#f4f4f5',
      '--bg-card':      '#ffffff',
      '--bg-hover':     '#e4e4e7',
      '--bg-secondary': '#fafafa',
      '--border':       '#d4d4d8',
      '--text-main':    '#09090b',
      '--text-muted':   '#71717a',
      '--accent':       '#f97316',
      '--accent-dim':   'rgba(249,115,22,0.10)',
      '--tx3':          '#a1a1aa',
      '--green':        '#16a34a',
      '--purple':       '#7c3aed',
    },
  },
}

interface ThemeCtx {
  currentTheme: ThemeKey
  setCurrentTheme: (t: ThemeKey) => void
}

const ThemeContext = createContext<ThemeCtx>({
  currentTheme: 'dark',
  setCurrentTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('app_theme') as ThemeKey | null
    if (saved && themes[saved]) setCurrentTheme(saved)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    Object.entries(themes[currentTheme].colors).forEach(([k, v]) =>
      root.style.setProperty(k, v)
    )
    localStorage.setItem('app_theme', currentTheme)
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
