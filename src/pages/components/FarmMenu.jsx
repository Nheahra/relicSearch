import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Collapse,
  Divider,
  ListItemButton,
  List,
  ListItemText,
} from '@mui/material'
// import {
//   ExpandLess,
//   ExpandMore,
// } from '@mui/icons-material'
import {
  filter as _filter,
  map as _map,
} from 'lodash'

function FarmMenu({
  nodes,
  selectNode,
  selectedNode,
  sysname,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = useCallback(() => setMenuOpen(!menuOpen), [menuOpen, setMenuOpen])

  const displayNodes = useMemo((systemName) => {
    const systemNodes = _filter(nodes, ({ systemName }))

    return _map(systemNodes, ({ name }) => (
      <Collapse in={menuOpen} timeout="auto" key={name}>
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() => selectNode(name)}
            selected={name === selectedNode}
            sx={{ pl: 4 }}
          >
            <ListItemText primary={name}/>
          </ListItemButton>
        </List>
      </Collapse>
    ))
  })

  return (
    <>
      <ListItemButton onClick={handleMenuClick}>
        <ListItemText primary={sysname} />
        {/* {menuOpen ? <ExpandLess /> : <ExpandMore />} */}
      </ListItemButton>
      <Divider />
      {displayNodes}
    </>
  )
}

FarmMenu.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.shape({})),
  selectNode: PropTypes.func,
  selectedNode: PropTypes.string,
  sysname: PropTypes.string,
}

export default FarmMenu
