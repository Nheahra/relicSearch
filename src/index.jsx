import '@babel/polyfill'
import AppComponent from './components/App/AppComponent'
import React from 'react'
import ReactDOM from 'react-dom'

const mount = document.getElementById('app')

ReactDOM.render(<AppComponent />, mount)
module.hot.accept()
