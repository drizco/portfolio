// Space Mono at 1.1rem (15.4px): char advance ≈ 9.24px + letter-spacing 0.25cap ≈ 2.5px
// → ~11.74px per char. Max container width: 760px − 2×28px padding = 704px → ~60 chars/row.
// 70 provides a comfortable overflow buffer without excessive hidden chars.
export const ASCII_GRID_WIDTH = 70

export const MIN_PADDING = 5

export const NBSP = '\u00A0'
