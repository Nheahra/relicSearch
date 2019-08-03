import '@babel/polyfill'
import 'raf/polyfill'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import AppContainer from './containers/AppContainer'
import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './redux/reducers'
import thunk from 'redux-thunk'


const composeEnhancers = composeWithDevTools({ name: 'Bootbook Local' })
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)

const App = (
  <Provider store={store}>
    <Router basename="/warframe-search-app">
      <Route component={AppContainer} />
    </Router>
  </Provider>
)
const mount = document.getElementById('app')

ReactDOM.render(App, mount)
