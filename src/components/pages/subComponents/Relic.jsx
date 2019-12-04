import {
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core'
import { relicStyles } from '../../../styles'
import { withStyles } from '@material-ui/styles'
import React from 'react'
import map from 'lodash/map'

const Relic = ({
  classes,
  relic: {
    details,
    isAvailable,
    name,
  },
}) => (
  <Card className={isAvailable ? 'vaulted' : 'notVaulted'}>
    <CardHeader title={name} />
    <CardContent>
      <Table>
        <TableBody>
          {map(details, data => (
            <TableRow>
              <TableCell>
                <img alt="item" className={classes.images} src={`https://cdn.warframestat.us/img/${data.imageName}`} />
              </TableCell>
              <TableCell>
                {data.item}
              </TableCell>
              <TableCell>
                {Math.round(data.chance * 10000) / 100}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
)

export default withStyles(relicStyles)(Relic)
