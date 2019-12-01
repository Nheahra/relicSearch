/* eslint-disable wyze/max-file-length */
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
  getSearchedRelics,
} from '../utils'
import {
  map,
} from 'lodash'
import React from 'react'
import Relic from './subComponents/Relic'
// import axios from 'axios'

const Items = require('warframe-items')

const SearchRelic = () => {
  //     search: 'Relics',
  //     keyword: '',
  //     quality: 'Intact',
  //     relicData: [],
  //     qualityData: { id: 4, level: 'Intact', bronze: '25.33', silver: '11.00', gold: '2.00' },
  //     missionData: [],

  const [ categoryRadio, setCategoryRadio ] = React.useState('relics')
  const [ keyword, setKeyword ] = React.useState('')
  const [ qualityRadio, setQualityRadio ] = React.useState('intact')

  const relics = new Items({ category: [ 'Relics' ] })
    .filter(({ name }) => name.toLowerCase().indexOf(qualityRadio.toLowerCase()) > -1)

  const prime = new Items({ category: [ 'Primary', 'Secondary', 'Melee', 'Archwing', 'Warframes', 'Sentinels' ] })
    .filter(({ name }) => name.toLowerCase().indexOf('prime') > -1)
  console.log({ prime })

  // const handleSubmit = event => {
  //   const url = categoryRadio === 'Relics' || categoryRadio === 'Parts'
  //     ? 'findRelics'
  //     : 'missionLocation'
  //   event.preventDefault()
  //   axios.get(`https://services.warframerelicsearch.com/${url}`, {
  //     params: {
  //       search: categoryRadio,
  //       userInput: keyword,
  //     },
  //   })
  //     .then(response => {
  //       setResponseData(response.data)
  //       console.log(response.data)
  //     })
  //     .catch(error => {
  //       console.info(error)
  //     })
  // }

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
