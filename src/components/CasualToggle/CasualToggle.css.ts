import { style } from 'typestyle';
import {
  darkBlue,
  darkRed,
  lightGray,
  midGray,
} from '../../globalColorDef.css';

export const main = style({});

export const toggleSwitch = style({
  position: 'relative',
  display: 'block',
  verticalAlign: 'top',
  width: '100px',
  height: '30px',
  padding: '3px',
  margin: '0 10px 10px 0',
  background: 'linear-gradient(to bottom, #eeeeee, #FFFFFF 25px)',
  backgroundImage: '-webkit-linear-gradient(top, #eeeeee, #FFFFFF 25px)',
  borderRadius: '18px',
  boxShadow: 'inset 0 -1px white, inset 0 1px 1px rgba(0, 0, 0, 0.05)',
  cursor: 'pointer',
  boxSizing: 'content-box',
});

export const switchInput = style({
  position: 'absolute',
  top: '0',
  left: '0',
  opacity: '0',
  boxSizing: 'content-box',
  $nest: {
    '&:checked': {
      $nest: {
        '&+span': {
          background: darkBlue,
        },
        '&+span::before': {
          opacity: '0',
        },
        '&+span::after': {
          opacity: '1',
        },
        // .switch-input:checked ~ .switch-handle {
        '&~ .handle': {
          left: '74px',
          boxShadow: '-1px 1px 5px rgba(0, 0, 0, 0.2)',
        },
      },
    },
  },
});

//.switch-label
export const switchLabel = style({
  // 	transition: All 0.3s ease;
  transition: 'All 0.3s ease',
  // 	-webkit-transition: All 0.3s ease;
  // 	-moz-transition: All 0.3s ease;
  // 	-o-transition: All 0.3s ease;
  position: 'relative',
  display: 'block',
  height: 'inherit',
  fontSize: '10px',
  // textTransform: "uppercase",

  background: darkRed,
  borderRadius: 'inherit',
  boxShadow:
    'inset 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.15)',
  boxSizing: 'content-box',
  $nest: {
    '&::before': {
      position: 'absolute',
      top: '50%',
      marginTop: '-.5em',
      lineHeight: '1',
      '-webkit-transition': 'inherit',
      '-moz-transition': 'inherit',
      // -o-transition: inherit; missing
      transition: 'inherit',
      boxSizing: 'content-box',
      content: 'attr(data-off)',
      right: '11px',
      color: lightGray,
      textShadow: '0 1px rgba(255, 255, 255, 0.5)',
    },
    '&::after': {
      position: 'absolute',
      top: '50%',
      marginTop: '-.5em',
      lineHeight: '1',
      '-webkit-transition': 'inherit',
      '-moz-transition': 'inherit',
      // -o-transition: inherit; missing
      transition: 'inherit',
      boxSizing: 'content-box',
      content: 'attr(data-on)',
      left: '11px',
      color: lightGray,
      textShadow: '0 1px rgba(0, 0, 0, 0.2)',
      opacity: '0',
    },
  },
});

// .switch-handle {
export const switchHandle = style({
  // 	transition: All 0.3s ease;
  transition: 'All 0.3s ease',
  '-webkit-transition': 'All 0.3s ease',
  '-moz-transition': 'All 0.3s ease',
  // 	-o-transition: All 0.3s ease;
  position: 'absolute',
  top: '4px',
  left: '4px',
  width: '28px',
  height: '28px',
  background: 'linear-gradient(to bottom, #FFFFFF 40%, #f0f0f0)',
  backgroundImage: '-webkit-linear-gradient(top, #FFFFFF 40%, #f0f0f0)',
  borderRadius: '100%',
  boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.2)',
  $nest: {
    '&::before': {
      content: 'attr(data-fill)',
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin: '-6px 0 0 -6px',
      width: '12px',
      height: '12px',
      background: `linear-gradient(to bottom, ${lightGray}, ${darkBlue})`,
      backgroundImage: `-webkit-linear-gradient(top, ${lightGray}, ${midGray})`,
      borderRadius: '6px',
      boxShadow: 'inset 0 1px rgba(0, 0, 0, .2)',
    },
  },
});
