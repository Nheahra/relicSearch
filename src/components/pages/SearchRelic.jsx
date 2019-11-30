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
// import {
//   map as _map,
// } from 'lodash'
import { getSearchedRelics } from '../utils'
import React from 'react'
import axios from 'axios'

const Items = require('warframe-items')

const SearchRelic = () => {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     search: 'Relics',
  //     keyword: '',
  //     quality: 'Intact',
  //     relicData: [],
  //     qualityData: { id: 4, level: 'Intact', bronze: '25.33', silver: '11.00', gold: '2.00' },
  //     missionData: [],
  //   }
  // }
  const [ categoryRadio, setCategoryRadio ] = React.useState('relics')
  const [ keyword, setKeyword ] = React.useState('')
  const [ qualityRadio, setQualityRadio ] = React.useState('intact')
  const [ responseData, setResponseData ] = React.useState([])

  // enter = event => {
  //   if ( event.keyCode === 13 ) {
  //     this.handleSubmit(event)
  //   }
  // }
  // const { search, relicData, qualityData } = this.state
  const items = new Items([ 'Relics' ])
  console.log({ items })
  getSearchedRelics(items, keyword)
  const handleSubmit = event => {
    const url = categoryRadio === 'Relics' || categoryRadio === 'Parts'
      ? 'findRelics'
      : 'missionLocation'
    event.preventDefault()
    axios.get(`https://services.warframerelicsearch.com/${url}`, {
      params: {
        search: categoryRadio,
        userInput: keyword,
      },
    })
      .then(response => {
        setResponseData(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.info(error)
      })
  }

  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Search By:</FormLabel>
          <RadioGroup
            aria-label="position"
            name="position"
            onChange={(_, value) => {
              setCategoryRadio(value)
              handleSubmit()
            }}
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
        <TextField
          label="Keyword"
          margin="normal"
          onChange={(_, value) => setKeyword(value)} // hook this up to use Effect for searching
          value={keyword}
        />
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
      <Grid item xs={12}>
        <div>{responseData}</div>
        {/* {categoryRadio === 'Relics'
          ? _map(relicData, relic => (
            <Relic
              id={relic.id}
              key={relic.id}
              name={relic.name}
              percent={qualityData}
              relic={relic}
            />
          ))
          : (
            <MissionLocation
              data={this.state.missionData}
              key={mapPlanet}
              planet={mapPlanet}
            />
          )
        } */}
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom variant="caption">Made by a fan.</Typography>
      </Grid>
    </Grid>
  )
}

export default SearchRelic
