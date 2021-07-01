import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import FastClick from 'fastclick'
import { GlobalStyle } from './assets/global-style'

// FastClick.attach(document.body)

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById('root')
)
