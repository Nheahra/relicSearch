import {
  AppBar,
  Grid,
  Tab,
  Tabs,
} from '@material-ui/core'
import FarmGuide from '../pages/FarmGuide'
import Inventory from '../pages/Inventory'
import React, { useState } from 'react'
import SearchRelic from '../pages/SearchRelic'

const AppComponent = () => {
  const [ tabName, setTabName ] = useState('searchRelics')
  const displayTab = () => {
    switch ( tabName ) {
      default:
        return <SearchRelic />
      case 'inventory':
        return <Inventory />
      case 'farm':
        return <FarmGuide />
    }
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <img
          alt="Warframe Logo"
          src="wsa/src/images/wsaLogo.png"
        />
      </Grid>
      <Grid item xs={12}>
        <AppBar
          color="default"
          position="static"
        >
          <Tabs
            onChange={(_, value) => setTabName(value)}
            value={tabName}
          >
            <Tab
              label="Search Relics"
              value="searchRelics"
            />
            <Tab
              label="Farming Guide"
              value="farm"
            />
            <Tab
              label="Inventory"
              value="inventory"
            />
          </Tabs>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        {displayTab()}
      </Grid>
    </Grid>
  )
}

export default AppComponent
