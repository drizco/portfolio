import { describe, it, expect } from 'vitest'
import { createChar, filledRow, getCharsFromText, createRow } from './ascii'
import { ASCII_GRID_WIDTH, NBSP } from './constants'

describe('createChar', () => {
  it('converts spaces to non-breaking spaces', () => {
    expect(createChar({ char: ' ' }).char).toBe(NBSP)
  })

  it('passes non-space chars through unchanged', () => {
    expect(createChar({ char: 'A' }).char).toBe('A')
  })

  it('forwards className when provided', () => {
    expect(createChar({ char: 'x', className: 'grid' }).className).toBe('grid')
  })

  it('leaves className undefined when not provided', () => {
    expect(createChar({ char: 'x' }).className).toBeUndefined()
  })
})

describe('filledRow', () => {
  it('returns exactly grid width number of chars', () => {
    expect(filledRow().length).toBe(ASCII_GRID_WIDTH)
  })

  it('sets className to "grid" on every char', () => {
    expect(filledRow('─').every((c) => c.className === 'grid')).toBe(true)
  })

  it('uses the provided char', () => {
    expect(filledRow('─').every((c) => c.char === '─')).toBe(true)
  })

  it('defaults to empty string char', () => {
    expect(filledRow().every((c) => c.char === '')).toBe(true)
  })
})

describe('getCharsFromText', () => {
  it('splits text into individual chars', () => {
    const result = getCharsFromText({ text: 'hi' })
    expect(result.length).toBe(2)
    expect(result[0].char).toBe('h')
    expect(result[1].char).toBe('i')
  })

  it('applies className to every char', () => {
    const result = getCharsFromText({ text: 'ab', className: 'text' })
    expect(result.every((c) => c.className === 'text')).toBe(true)
  })

  it('replaces spaces with non-breaking spaces', () => {
    const result = getCharsFromText({ text: 'a b' })
    expect(result[1].char).toBe(NBSP)
  })
})

describe('createRow', () => {
  it('always returns exactly the grid width number of chars', () => {
    expect(createRow({ text: 'hello' }).length).toBe(ASCII_GRID_WIDTH)
    expect(createRow({ text: 'hello', right: true }).length).toBe(ASCII_GRID_WIDTH)
    expect(createRow({ text: 'a very long piece of text here' }).length).toBe(
      ASCII_GRID_WIDTH
    )
  })

  it('text chars have className "text"', () => {
    const row = createRow({ text: 'hi' })
    const textChars = row.filter((c) => c.className === 'text')
    expect(textChars.map((c) => c.char)).toEqual(['h', 'i'])
  })

  it('padding chars have className "grid"', () => {
    const row = createRow({ text: 'hi' })
    expect(row.filter((c) => c.className === 'grid').length).toBeGreaterThan(0)
    expect(
      row.every(
        (c) =>
          c.className === 'text' || c.className === 'grid' || c.className === undefined
      )
    ).toBe(true)
  })

  it('left-aligned: text appears after the leading 5 padding chars', () => {
    const row = createRow({ text: 'AB' })
    // 5 grid chars, then a space, then the text
    expect(row.slice(0, 5).every((c) => c.className === 'grid')).toBe(true)
    const textChars = row.filter((c) => c.className === 'text')
    const firstTextIndex = row.findIndex((c) => c.className === 'text')
    expect(firstTextIndex).toBe(6) // 5 grid + 1 space
    expect(textChars[0].char).toBe('A')
  })

  it('right-aligned: text appears near the end (last 5 are grid)', () => {
    const row = createRow({ text: 'AB', right: true })
    expect(row.slice(-5).every((c) => c.className === 'grid')).toBe(true)
    const lastTextIndex = row.map((c) => c.className).lastIndexOf('text')
    expect(lastTextIndex).toBe(ASCII_GRID_WIDTH - 7) // 5 grid + 1 space from the right
  })
})
