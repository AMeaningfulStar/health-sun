export const ThemeEnum = {
  Light: 'light',
  Dark: 'dark',
} as const
export type ThemeEnum = (typeof ThemeEnum)[keyof typeof ThemeEnum]
