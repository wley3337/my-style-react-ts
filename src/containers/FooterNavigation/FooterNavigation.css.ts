import { style } from 'typestyle'
import { darkBlue } from '../../globalColorDef.css'

export const grid = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  gridTemplateAreas: "'left center right'",
  gridColumnGap: '.2rem',
  alignItems: 'center',
})

export const leftButton = style({
  gridArea: 'left',
  justifySelf: 'start',
})

export const option = style({
  gridArea: 'center',
  display: 'grid',
  justifyContent: 'center',
})

export const rightButton = style({
  gridArea: 'right',
  justifySelf: 'end',
})

export const closetLink = style({
  textDecoration: 'none',
  fontSize: '1.5rem',
  color: darkBlue,
})
