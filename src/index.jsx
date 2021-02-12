import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import FarmGuide from './pages/FarmGuide'
import React from 'react'
import ReactDOM from 'react-dom'

function init() {
  const application = (
    <Router basename="/warframe-search-app">
      <Route component={App} path="/" />
      <Route component={FarmGuide} path="/farm-guide" />
      <Route component={SearchRelic} path="/search-relics" />
      <Route component={Inventory} path="/inventory" />
    </Router>
  )

  ReactDOM.render(application, document.getElementById('app'))
}

init()
