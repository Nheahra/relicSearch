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
  // const [filterText, setFilterText] = useState('')
  // const setFilter = useCallback((e) => setFilterText(e.target.value))
  const render = {
    farmGuide: <FarmGuide />,
    inventory: <Inventory />,
    searchRelic: <SearchRelic />,
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sx={{
        'z-index': 100,
        boxShadow: '0 10px 13px #b5b5b5',
        background: 'white',
        }}
      >
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
      </Grid>
      <Grid item xs={12}>
        {render[view]}
      </Grid>
    </Grid>
  )
}

export default App
