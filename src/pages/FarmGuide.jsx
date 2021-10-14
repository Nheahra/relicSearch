import React, { useCallback, useMemo, useState } from 'react'
import Items from 'warframe-items'
import {
  Box,
  Grid,
  List,
  Typography,
} from '@mui/material'
import {
  map as _map,
} from 'lodash'

import FarmMenu from './components/FarmMenu'
import { getNodeData, getSystemNames } from '../utils'

function FarmGuide() {
  const [selectedNode, setSelectedNode] = useState()

  const selectNode = useCallback((name) => setSelectedNode(name))

  const items = new Items({ category: ['Relics'] })
  const nodes = new Items({ category: ['Node']})
  // const misc = new Items({ category: ['Misc']})
  const height = window.height

  const systemNames = getSystemNames(nodes)
  const nodeNames = _map(nodes, 'name')
  const relics = useMemo(() => getNodeData(items, nodeNames));
  console.log({ relics })

  return (
    <Box sx={{ display: 'flex' }}>
      <Grid item xs={2}>
        <List
          sx={{
            bgcolor: 'background.paper',
          }}
          component="nav"
        >
          {_map(systemNames, sysname => (
            <FarmMenu
              key={sysname}
              nodes={nodes}
              selectNode={selectNode}
              selectedNode={selectedNode}
              sysname={sysname}
            />
          ))}
        </List>
      </Grid>
      <Grid
        container
        item
        xs={10}
        spacing={2}
        sx={{
          boxShadow: '-10px 0px 10px #b5b5b5',
          'z-index': 15,
          height: height,
          margin: 0,
        }}
      >
        {selectedNode && (
          <Grid item xs={12}>
            <Typography variant="h3">{selectedNode}</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default FarmGuide
