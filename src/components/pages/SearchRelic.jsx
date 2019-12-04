import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core'
import {
  find,
  map,
} from 'lodash'
import { getSearchedRelics } from '../utils'
import React from 'react'
import Relic from './subComponents/Relic'

const Items = require('warframe-items')

const SearchRelic = () => {
  const [ categoryRadio, setCategoryRadio ] = React.useState('relics')
  const [ keyword, setKeyword ] = React.useState('')
  const [ qualityRadio, setQualityRadio ] = React.useState('intact')

  const prime = new Items({ category: [ 'Primary', 'Secondary', 'Melee', 'Archwing', 'Warframes', 'Sentinels' ] })
    .filter(({ name }) => name.toLowerCase().indexOf('prime') > -1)

  console.log({ prime })

  const relics = new Items({ category: [ 'Relics' ] })
    .map(({ name }) => ({
      name,
      details: map(prime, item => item.components.forEach(({ drops }) => find(drops, ({ location }) => location === name))),
    }))
    .filter(({ name }) => name.toLowerCase().indexOf(qualityRadio.toLowerCase()) > -1)

  console.log({ relics })

  const renderOption = () => {
    switch ( categoryRadio ) {
      case 'relics':
        return (
          map(getSearchedRelics({ relics, keyword }), (relic, index) => (
            <Grid item key={index} xs={3} >
              <Relic
                relic={relic}
              />
            </Grid>
          ))
        )
      default:
        return (<Typography variant="h5">No Data</Typography>)
    }
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Search By:</FormLabel>
          <TextField
            label="Keyword"
            margin="normal"
            onChange={({ target: { value } }) => setKeyword(value)}
            value={keyword}
          />
          <RadioGroup
            aria-label="position"
            name="position"
            onChange={(_, value) => setCategoryRadio(value)}
            row
            value={categoryRadio}
          >
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Relics"
              labelPlacement="end"
              value="relics"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Locations"
              labelPlacement="end"
              value="locations"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Parts"
              labelPlacement="end"
              value="parts"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Missions"
              labelPlacement="end"
              value="missions"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      {categoryRadio === 'relics' && (
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Quality:</FormLabel>
            <RadioGroup
              aria-label="position"
              name="position"
              onChange={(_, value) => setQualityRadio(value)}
              row
              value={qualityRadio}
            >
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Intact"
                labelPlacement="end"
                value="intact"
              />
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Exceptional"
                labelPlacement="end"
                value="exceptional"
              />
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Flawless"
                labelPlacement="end"
                value="flawless"
              />
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Radiant"
                labelPlacement="end"
                value="radiant"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      )}
      <Grid
        container
        item
        spacing={4}
        xs={12}
      >
        {renderOption()}
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom variant="caption">Made by a fan.</Typography>
      </Grid>
    </Grid>
  )
}

export default SearchRelic
