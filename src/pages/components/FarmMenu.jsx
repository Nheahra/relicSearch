import { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Collapse,
  Divider,
  ListItemButton,
  List,
  ListItemText,
} from '@mui/material'
import {
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material'
import {
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

  const displayNodes = useMemo(() =>  _map(nodes, ({ name }) => (
      <List component="div" disablePadding>
        <ListItemButton
          onClick={() => selectNode(name)}
          selected={name === selectedNode}
          sx={{ pl: 4 }}
        >
          <ListItemText primary={name}/>
        </ListItemButton>
      </List>
    )),
    [nodes, selectNode, selectedNode]
  )

  return (
    <>
      <ListItemButton onClick={handleMenuClick}>
        <ListItemText primary={sysname} />
        {menuOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider />
      <Collapse in={menuOpen} timeout="auto">
        {displayNodes}
      </Collapse>
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
