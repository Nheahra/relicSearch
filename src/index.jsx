import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import FarmGuide from './pages/FarmGuide'
import React from 'react'
import ReactDOM from 'react-dom'

function init() {
  const application = (
    <Router basename="/warframe-search-app">
      <Route path="/" component={App} />
      <Route path="/farm-guide" component={FarmGuide} />
    </Router>
  )

  ReactDOM.render(application, document.getElementById('app'))
}

init()
