import React, { useCallback, useState } from 'react'
import Items from 'warframe-items'
import {
  TextField,
  Typography,
} from '@mui/material'
import {
  filter as _filter,
  map as _map,
  uniq as _uniq,
} from 'lodash'

function FarmGuide() {
  const items = new Items({ category: ['Relics'] })
  const nodes = new Items({ category: ['Node']})
  const misc = new Items({ category: ['Misc']})

  const [filterText, setFilterText] = useState('')
  const setFilter = useCallback((e) => setFilterText(e.target.value))

  console.log({ filteredRelics, nodes, misc })

  const filteredRelics = _filter(items, item => item.drops)
  const systemNames = _uniq(_map(nodes.sort((a, b) => a.systemIndex > b.systemIndex), 'systemName'))

  function displayNodes(systemName) {
    const systemNodes = _filter(nodes, ({ systemName }))

    return _map(systemNodes, ({ name }) => (
      <Typography variant="body1">{name}</Typography>
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
          <Typography variant="h6">{sysname}</Typography>
          {displayNodes(sysname)}
        </>
      ))}
    </>
  )
}

export default FarmGuide
