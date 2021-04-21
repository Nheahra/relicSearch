import React, { Fragment, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import FarmGuide from './pages/FarmGuide'
import Inventory from './pages/Inventory'
import SearchRelic from './pages/SearchRelic'
import {
  Grid,
  Tab,
  Tabs,
} from '@material-ui/core'

function App() {
  const [view, setView] = useState('farmGuide')

  const render = {
    farmGuide: <FarmGuide />,
    inventory: <Inventory />,
    searchRelic: <SearchRelic />,
  }

  return (
    <Fragment>
      <Tabs
        indicatorColor="primary"
        onChange={(_, value) => setView(value)}
        textColor="primary"
        value={view}
      >
        <Tab label="Farming Guide" value="farmGuide" />
        <Tab label="Relic Search" value="searchRelic" />
        <Tab label="Inventory" value="inventory" />
      </Tabs>
      {render[view]}
    </Fragment>
  )
}

export default hot(App)
