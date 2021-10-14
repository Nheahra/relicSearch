import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

function NodeData({ relicData }) {
  return(
    <Grid item xs={3}>

    </Grid>
  )
}

NodeData.propTypes = {
  relicData: PropTypes.shape({}),
}

export default NodeData
