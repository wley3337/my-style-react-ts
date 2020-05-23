import { style } from 'typestyle'

export const grid = style({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateAreas: `'title' 'menu'`,
})

export const titleBlock = style({
  gridArea: 'title',
  width: '100%',
  margin: '.1rem 0rem',
})

export const menuContainer = style({
  gridArea: 'menu',
  overflowY: 'scroll',
  display: 'grid',
  gridGap: '.3rem',
})
