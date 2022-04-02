import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

function NodeData({ data }) {
  console.log({ data })
  // if rotation the table under rotation A,B,C
  if (data.rotation) {
    <Grid item xs={3}>
      
    </Grid>
  }
  return (
    <Grid item xs={3}>

    </Grid>
  )
}

NodeData.propTypes = {
  data: PropTypes.shape({}),
}

export default NodeData
