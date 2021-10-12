import React, { useState } from 'react'
import FarmGuide from './pages/FarmGuide'
import Inventory from './pages/Inventory'
import SearchRelic from './pages/SearchRelic'
import {
  Grid,
  Tab,
  Tabs,
} from '@mui/material'

function App() {
  const [view, setView] = useState('farmGuide')

  const render = {
    farmGuide: <FarmGuide />,
    inventory: <Inventory />,
    searchRelic: <SearchRelic />,
  }

  return (
    <>
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
    </>
  )
}

export default App
