import { ASCII_GRID_WIDTH, MIN_PADDING, NBSP } from './constants'

const defaultChar = ''

export type AsciiChar = { char: string; className?: string }

export const filledRow = (char: string = defaultChar): AsciiChar[] =>
  Array(ASCII_GRID_WIDTH).fill({ char, className: 'grid' })

const replaceSpace = (char: string): string => (char === ' ' ? NBSP : char)

export const createChar = ({
  char,
  className,
}: {
  char: string
  className?: string
}): AsciiChar => ({
  char: replaceSpace(char),
  className,
})

export const getCharsFromText = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => text.split('').map((char) => createChar({ char, className }))

export const createRow = ({
  text,
  char = defaultChar,
  right = false,
}: {
  text: string
  char?: string
  right?: boolean
}): AsciiChar[] => {
  const space = createChar({ char: ' ' })
  let chars: AsciiChar[] = []
  const minimumPadding = Array(MIN_PADDING).fill(createChar({ char, className: 'grid' }))
  const textChars: AsciiChar[] = [
    space,
    ...getCharsFromText({ text, className: 'text' }),
    space,
  ]
  const padding: AsciiChar[] = Array(Math.max(0, ASCII_GRID_WIDTH - chars.length)).fill(
    createChar({ char, className: 'grid' })
  )

  if (right) {
    chars = [...padding, ...textChars, ...minimumPadding]
  } else {
    chars = [...minimumPadding, ...textChars, ...padding]
  }

  return right ? chars.reverse() : chars
}
