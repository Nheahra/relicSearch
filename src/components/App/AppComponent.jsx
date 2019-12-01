import {
  AppBar,
  Grid,
  Tab,
  Tabs,
} from '@material-ui/core'
import { appComponentStyles } from '../../styles/index'
import { withStyles } from '@material-ui/styles'
import FarmGuide from '../pages/FarmGuide'
import Inventory from '../pages/Inventory'
import React, { useState } from 'react'
import SearchRelic from '../pages/SearchRelic'
import wsaLogo from '../../images/wsaLogo.png'

const AppComponent = ({ classes }) => {
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
      <Grid
        alignContent="center"
        container
        item
        sm
        xs={12}
      >
        <img
          alt="Warframe Logo"
          className={classes.warframeLogo}
          src={wsaLogo}
        />
      </Grid>
      <Grid item xs={12}>
        <AppBar
          color="default"
          position="static"
        >
          <Tabs
            indicatorColor="primary"
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

export default withStyles(appComponentStyles)(AppComponent)
