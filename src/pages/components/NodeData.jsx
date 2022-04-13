import PropTypes from 'prop-types'
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import {
  map as _map,
} from 'lodash'

const formatChance = chance => Math.round(chance * 10000) / 100

function NodeData({ data }) {
  return _map(data, (rotations, relic) => (
    <Grid item key={relic}>
      <Paper sx={{ padding: 2 }}>
        <Typography align="center">{relic}</Typography>
        <Table>
          <TableBody>
          {_map(rotations, ({ chance, rarity, rotation }, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{`${formatChance(chance)}%`}</TableCell>
              <TableCell>{rarity}</TableCell>
              <TableCell>{rotation}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  ))
}

NodeData.propTypes = {
  data: PropTypes.shape({}),
}

NodeData.defaultProps = {
  data: {},
}

export default NodeData
