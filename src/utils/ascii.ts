const width = 100
const coolChars = ['»', '≡', '~', '┴', '¤', '/', '·']
const defaultChar = '~'

export const filledRow = (char: string = defaultChar): string[] => Array(width).fill(char)

export const createRow = ({
  text,
  char = defaultChar,
  right = false,
}: {
  text: string
  char?: string
  right?: boolean
}): string[] => {
  const chars = Array(7).fill(char)
  chars[right ? 'unshift' : 'push']('\u00A0', ...text.replace(/ /g, '\u00A0'), '\u00A0')
  const padding = Array(Math.max(0, width - chars.length)).fill(char)
  const strArray = right ? [...padding, ...chars] : [...chars, ...padding]
  return right ? strArray.reverse() : strArray
}

export const getCoolChar = () => coolChars[Math.floor(Math.random() * coolChars.length)]
