import React, { useCallback, useState } from 'react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core'
import Items from 'warframe-items'
import { filter as _filter } from 'lodash'

function SearchRelic() {
  const [filter, setFilter] = useState('all')

  const changeFilter = useCallback(({ target }) => setFilter(target.value), [setFilter])
 
  const items = new Items({ category: [
    'Archwing',
    'Melee',
    'Primary',
    'Secondary',
    'Sentinels',
    'Warframes',
  ] })
  const primeItems = _filter(items, item => item.name.indexOf('Prime') > -1)
  const filteredPrimes = filter !== 'all'
    ? _filter(primeItems, ({ category: filter }))
    : primeItems
  console.log({ filteredPrimes })

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Filter By Type</FormLabel>
        <RadioGroup aria-label="primeFilter" name="primeFilter" value={filter} onChange={changeFilter}>
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="Archwing" control={<Radio />} label="Archwing" />
          <FormControlLabel value="Melee" control={<Radio />} label="Melee" />
          <FormControlLabel value="Primary" control={<Radio />} label="Primary" />
          <FormControlLabel value="Secondary" control={<Radio />} label="Secondary" />
          <FormControlLabel value="Sentinels" control={<Radio />} label="Sentinels" />
          <FormControlLabel value="Warframes" control={<Radio />} label="Warframes" />
        </RadioGroup>
      </FormControl>
    </>
  )
}
 
export default SearchRelic
