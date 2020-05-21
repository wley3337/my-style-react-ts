import { style } from 'typestyle'
import { lightGray, darkGray, darkBlue99 } from '../../globalColorDef.css'

export const grid = style({
  height: '6rem',
  width: '100%',
  background: `linear-gradient(180deg, ${lightGray} 75%, ${darkBlue99} 100%), #FFFFFF`,
  display: 'grid',
  margin: '.2rem 0rem',
  gridGap: '.5rem',
  gridTemplateColumns: '3fr 7fr',
  gridTemplateAreas: "'icon title'",
})

export const img = style({
  gridArea: 'icon',
  alignSelf: 'start',
  objectFit: 'fill',
  maxHeight: '100%',
  maxWidth: '7rem',
  margin: '0 auto',
  padding: '.2rem 0rem',
})

export const title = style({
  color: darkGray,
  placeSelf: 'center end',
  textAlign: 'center',
  width: '100%',
  gridArea: 'title',
})
export const withImg = style({
  gridTemplateColumns: '3fr 7fr',
  gridTemplateAreas: "'icon title'",
})
export const noImg = style({
  gridTemplateColumns: '1fr',
  gridTemplateAreas: "'title'",
  fontSize: '1.5rem',
})
