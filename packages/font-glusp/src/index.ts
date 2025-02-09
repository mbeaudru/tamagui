import { GenericFont, createFont } from '@tamagui/web'

export const createGluspFont = <A extends GenericFont<keyof typeof size>>(
  font: Partial<A> = {}
): A => {
  return createFont({
    family: 'Glusp',
    size,
    lineHeight: Object.fromEntries(
      Object.entries(font.size || size).map(([k, v]) => [
        k,
        typeof v === 'number' ? v * 1.2 + 6 : v,
      ])
    ) as typeof size,
    weight: {
      4: '400',
    },
    ...(font as any),
  })
}

const size = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  5: 15,
  6: 16,
  7: 18,
  8: 21,
  9: 28,
  10: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124,
} as const
