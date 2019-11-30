import {
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core'
import React from 'react'
import map from 'lodash/map'

const Relic = ({
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
                <img alt="item" src={data.img} />
              </TableCell>
              <TableCell>
                {data.item}
              </TableCell>
              <TableCell>
                {data.percent}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
)

export default Relic
