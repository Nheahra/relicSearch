import { Route, Switch } from 'react-router'
// import { connect } from 'react-redux'
import FarmGuide from '../pages/FarmGuide'
import Inventory from '../pages/Inventory'
import Loading from './Loading'
import NavigationBar from '../pages/NavigationBar'
import React from 'react'
import SearchRelic from '../pages/SearchRelic'

const AppContainer = () => (
  <div>
    <NavigationBar />
    <Switch>
      <Route component={FarmGuide} path="/farming-guide" />
      <Route component={SearchRelic} path="/search-relics" />
      <Route component={Inventory} path="/inventory" />
    </Switch>
    <Loading />
  </div>

)

export default AppContainer

// const mapStateToProps = state => ({
//   hasReadAccess: getHasReadAccess(state),
// })

// const withConnect = connect( mapStateToProps )

// export default withLocationHandler(withConnect(AppContainer))
