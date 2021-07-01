import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input, textarea, img, video, object, button {
    box-sizing: border-box;
    border: unset;
    background: unset;
    outline: unset;
    font-size: 14px;
    font-weight: normal;
  }
`

export const variable = {
  'theme-color': '#fc3e5a',
  'theme-color-o': '#f9f3f3',
  'theme-gray': '#8590a6',
  'color-white': '#ffffff',
  'color-black': '#2d2f33',
  'color-red': '#fc4d50',
  'color-gray-bg': '#f4f4f4',
  'color-gray': '#4a4a4a',
  'theme-shadow': '0 1px 3px rgb(18 18 18 / 20%)',
  'theme-radius': '3px',
}
