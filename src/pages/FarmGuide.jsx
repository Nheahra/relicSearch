import React, { useCallback, useState } from 'react'
import Items from 'warframe-items'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@material-ui/core'
import {
  filter as _filter,
  find as _find,
  map as _map,
  reduce as _reduce,
  uniq as _uniq,
} from 'lodash'
import { getRelics } from '../utils'

function FarmGuide() {
  const items = new Items({ category: ['Relics'] })
  const nodes = new Items({ category: ['Node']})
  const misc = new Items({ category: ['Misc']})

  const [filterText, setFilterText] = useState('')
  const setFilter = useCallback((e) => setFilterText(e.target.value))

  const filteredRelics = _filter(items, item => item.drops)
  const systemNames = _uniq(_map(nodes.sort((a, b) => a.systemIndex > b.systemIndex), 'systemName'))
  console.log({ filteredRelics, nodes, misc })

  function getNodeRelics(nodeName) {
    const nodeRelics = getRelics(filteredRelics, nodeName)
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Relic</TableCell>
              <TableCell>Mission Type</TableCell>
              <TableCell>Rotation</TableCell>
              <TableCell>DropChance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_map(nodeRelics, relic => (
              <TableRow key={relic.name}>
                <TableCell>{relic.name}</TableCell>
                <TableCell>{relic.mission}</TableCell>
                <TableCell>{relic.rotation}</TableCell>
                <TableCell>{relic.dropChance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  function displayNodes(systemName) {
    const systemNodes = _filter(nodes, ({ systemName }))

    return _map(systemNodes, ({ name }) => (
      <>
        <Typography variant="body1">{name}</Typography>
        {getNodeRelics(name)}
      </>
    ))
  }

  return (
    <>
      <TextField 
        label="Search"
        onChange={setFilter}
        value={filterText}
      />
      {_map(systemNames, sysname => (
        <>
          <Typography key={sysname} variant="h6">{sysname}</Typography>
          {displayNodes(sysname)}
        </>
      ))}
    </>
  )
}

export default FarmGuide
