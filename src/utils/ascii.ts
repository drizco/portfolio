const width = 100
const defaultChar = ''

export type AsciiChar = { char: string; grid: boolean }

export const filledRow = (char: string = defaultChar): AsciiChar[] =>
  Array(width).fill({ char, grid: true })

export const createRow = ({
  text,
  char = defaultChar,
  right = false,
}: {
  text: string
  char?: string
  right?: boolean
}): AsciiChar[] => {
  const g = (c: string): AsciiChar => ({ char: c, grid: true })
  const t = (c: string): AsciiChar => ({ char: c, grid: false })

  const chars: AsciiChar[] = Array(7).fill(g(char))
  const textChars: AsciiChar[] = [
    t('\u00A0'),
    ...text.replace(/ /g, '\u00A0').split('').map(t),
    t('\u00A0'),
  ]

  if (right) {
    chars.unshift(...textChars)
  } else {
    chars.push(...textChars)
  }

  const padding: AsciiChar[] = Array(Math.max(0, width - chars.length)).fill(g(char))
  const strArray = right ? [...padding, ...chars] : [...chars, ...padding]
  return right ? strArray.reverse() : strArray
}
