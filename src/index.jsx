import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

if (module.hot) {
  module.hot.accept('./App', function() {
    ReactDOM.render(<App />, document.getElementById('app'))
  })
}

ReactDOM.render(<App />, document.getElementById('app'))
