class Relic extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // setting the background relic image
    let relicUrl
    if ( this.props.name.search('Lith') >= 0 ) {
      relicUrl = './images/relics/Lith.png'
    } else if ( this.props.name.search('Meso') >= 0 ) {
      relicUrl = './images/relics/Meso.png'
    } else if ( this.props.name.search('Neo') >= 0 ) {
      relicUrl = './images/relics/Neo.png'
    } else if ( this.props.name.search('Axi') >= 0 ) {
      relicUrl = './images/relics/Axi.png'
    }

    // setting the item images
    const itemImg = {}
    let i = 0
    let item
    for ( item in this.props ) {
      if ( this.props[item] == this.props.name || this.props[item] == this.props.id ) {
        console.log(i)
      } else {
        const itemName = this.props[item].toString()
        if ( itemName.search('Forma') >= 0 ) {
          itemImg[i] = './images/resources/Forma.png'
        // Weapon Parts
        } else if ( itemName.search('Handle') >= 0 || itemName.search('Hilt') >= 0 || itemName.search('Gauntlet') >= 0 ) {
          itemImg[i] = './images/prime/parts/GenericWeaponPrimeHilt.png'
        } else if ( itemName.search('Stock') >= 0 || itemName.search('String') >= 0 ) {
          itemImg[i] = './images/prime/parts/GenericGunPrimeStock.png'
        } else if ( itemName.search('Receiver') >= 0 ) {
          itemImg[i] = './images/prime/parts/GenericGunPrimeReceiver.png'
        } else if ( itemName.search('Blade') >= 0 || itemName.search('Limb') >= 0 || itemName.search('Stars') >= 0 || itemName.search('Head') >= 0 || itemName.search('Disc') >= 0 ) {
          itemImg[i] = './images/prime/parts/GenericWeaponPrimeBlade.png'
        } else if ( itemName.search('Barrel') >= 0 ) {
          itemImg[i] = './images/prime/parts/GenericGunPrimeBarrel.png'
        } else if ( itemName.search('Link') >= 0 || itemName.search('Buckle') >= 0 || itemName.search('Ornament') >= 0 ) {
          itemImg[i] = './images/prime/parts/GenericComponentPrimePlug.png'
        } else if ( itemName.search('Pouch') >= 0 || itemName.search('Band') >= 0 || itemName.search('Grip') >= 0 ) {
          itemImg[i] = './images/prime/parts/GenericComponentPrimeLatch.png'
        } else if ( itemName.search('Guard') >= 0 || itemName.search('Boot') >= 0 ) {
          itemImg[i] = './images/prime/parts/GenericWeaponPrimeGuard.png'
        // Warframe and Sentinel Parts
        } else if ( itemName.search('Neuroptics') >= 0 ) {
          itemImg[i] = './images/prime/parts/PrimeHelmet.png'
        } else if ( itemName.search('Chassis') >= 0 ) {
          itemImg[i] = './images/prime/parts/Chassis.png'
        } else if ( itemName.search('Systems') >= 0 && itemName.search('Odonata') < 0 ) {
          itemImg[i] = './images/prime/parts/PrimeSystems.png'
        } else if ( itemName.search('Carapace') >= 0 ) {
          itemImg[i] = './images/prime/parts/Carapace.png'
        } else if ( itemName.search('Cerebrum') >= 0 ) {
          itemImg[i] = './images/prime/parts/Cerebrum.png'
        } else if ( itemName.search('Harness') >= 0 ) {
          itemImg[i] = './images/prime/parts/GenericArchwingHarness.png'
        } else if ( itemName.search('Wings') >= 0 ) {
          itemImg[i] = './images/prime/parts/GenericArchwingWings.png'
        } else if ( itemName.search('Systems') >= 0 && itemName.search('Odonata') >= 0 ) {
          itemImg[i] = './images/prime/parts/GenericArchwingSystems.png'
        // Weapon Blueprings - primary    
        } else if ( itemName.search('Cernos') >= 0 ) {
          itemImg[i] = './images/prime/weapons/primary/CernosPrime.png'
        } else if ( itemName.search('Latron') >= 0 ) {
          itemImg[i] = './images/prime/weapons/primary/LatronPrime.png'
        } else if ( itemName.search('Boar') >= 0 ) {
          itemImg[i] = './images/prime/weapons/primary/PrimeBoar.png'
        } else if ( itemName.search('Boltor') >= 0 ) {
          itemImg[i] = './images/prime/weapons/primary/PrimeBoltor.png'
        } else if ( itemName.search('Paris') >= 0 ) {
          itemImg[i] = './images/prime/weapons/primary/PrimeBowM.png'
        } else if ( itemName.search('Braton') >= 0 ) {
          itemImg[i] = './images/prime/weapons/primary/PrimeBraton.png'
        } else if ( itemName.search('Burston') >= 0 ) {
          itemImg[i] = './images/prime/weapons/primary/PrimeBurston.png'
        } else if ( itemName.search('Soma') >= 0 ) {
          itemImg[i] = './images/prime/weapons/primary/PrimeSoma.png'
        } else if ( itemName.search('Tigris') >= 0 ) {
          itemImg[i] = './images/prime/weapons/primary/PrimeTigris342.png'
        } else if ( itemName.search('Sybaris') >= 0 ) {
          itemImg[i] = './images/prime/weapons/primary/Sybaris_Prime.png'
        } else if ( itemName.search('Tiberon') >= 0 ) {
          itemImg[i] = './images/prime/weapons/primary/TiberonPrime.png'
        } else if ( itemName.search('Vectis') >= 0 ) {
          itemImg[i] = './images/prime/weapons/primary/VectisPrime.png'
        } else if ( itemName.search('Rubico') >= 0 ) {
          itemImg[i] = './images/prime/weapons/primary/RubicoPrime.png'
        // Weapon Blueprints - melee
        } else if ( itemName.search('Destreza') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/DestrezaPrime.png'
        } else if ( itemName.search('Kamas') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/DualKamasPrime.png'
        } else if ( itemName.search('Kronen') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/KronenPrime.png'
        } else if ( itemName.search('Kogake') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/MirageKogakePrime.png'
        } else if ( itemName.search('Ankyros') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/PrimeAnkyros.png'
        } else if ( itemName.search('Bo') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/PrimeBo.png'
        } else if ( itemName.search('Fang') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/PrimeFang.png'
        } else if ( itemName.search('Fragor') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/PrimeFragor.png'
        } else if ( itemName.search('Galatine') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/PrimeGalatine.png'
        } else if ( itemName.search('Glaive') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/PrimeGlaive.png'
        } else if ( itemName.search('Skyla') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/PrimeNamiSkyla.png'
        } else if ( itemName.search('Nikana') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/PrimeNikana.png'
        } else if ( itemName.search('Orthos') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/PrimePolearm.png'
        } else if ( itemName.search('Scindo') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/PrimeScindo.png'
        } else if ( itemName.search('Reaper') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/ReaperPrime.png'
        } else if ( itemName.search('Silva') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/SilvaAegisPrime.png'
        } else if ( itemName.search('Dakra') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/SwordPrime.png'
        } else if ( itemName.search('Venka') >= 0 ) {
          itemImg[i] = './images/prime/weapons/melee/VenkaPrime.png'
        } else if ( itemName.search('Gram') ) {
          itemImg[i] = './images/prime/weapons/melee/GramPrime.png'
        // Weapon Blueprings - secondary    
        } else if ( itemName.search('Akbolto') >= 0 ) {
          itemImg[i] = './images/prime/weapons/secondary/AkboltoPrime.png'
        } else if ( itemName.search('Aklex') >= 0 ) {
          itemImg[i] = './images/prime/weapons/secondary/Aklex_Prime.png'
        } else if ( itemName.search('Euphona') >= 0 ) {
          itemImg[i] = './images/prime/weapons/secondary/EuphoraPrime.png'
        } else if ( itemName.search('Akstiletto') >= 0 ) {
          itemImg[i] = './images/prime/weapons/secondary/PrimeAkstiletto.png'
        } else if ( itemName.search('Ballistica') >= 0 ) {
          itemImg[i] = './images/prime/weapons/secondary/PrimeBallistica.png'
        } else if ( itemName.search('Akbronco') >= 0 ) {
          itemImg[i] = './images/prime/weapons/secondary/PrimeDualBroncos.png'
        } else if ( itemName.search('Bronco') >= 0 ) {
          itemImg[i] = './images/prime/weapons/secondary/PrimeBronco.png'
        } else if ( itemName.search('Hikou') >= 0 ) {
          itemImg[i] = './images/prime/weapons/secondary/PrimeHikou.png'
        } else if ( itemName.search('Lex') >= 0 ) {
          itemImg[i] = './images/prime/weapons/secondary/PrimeLex.png'
        } else if ( itemName.search('Spira') >= 0 ) {
          itemImg[i] = './images/prime/weapons/secondary/PrimeLiDagger.png'
        } else if ( itemName.search('Vasto') >= 0 ) {
          itemImg[i] = './images/prime/weapons/secondary/PrimeVasto.png'
        } else if ( itemName.search('Pyrana') >= 0 ) {
          itemImg[i] = './images/prime/weapons/secondary/PyranaPrime.png'
        } else if ( itemName.search('Sicarus') >= 0 ) {
          itemImg[i] = './images/prime/weapons/secondary/Sicarus_Prime.png'
        // Sentinel Blueprints
        } else if ( itemName.search('Helios') >= 0 ) {
          itemImg[i] = './images/prime/sentinels/HeliosPrime.png'
        } else if ( itemName.search('Kubrow') >= 0 ) {
          itemImg[i] = './images/prime/sentinels/KubrowCollarPrimeA.png'
        } else if ( itemName.search('Carrier') >= 0 ) {
          itemImg[i] = './images/prime/sentinels/PrimeCarrier.png'
        } else if ( itemName.search('Wyrm') >= 0 ) {
          itemImg[i] = './images/prime/sentinels/WyrmPrime.png'
        // Warframe Blueprints
        } else if ( itemName.search('Odonata') >= 0 ) {
          itemImg[i] = './images/prime/frames/ArchwingSuitPrime.png'
        } else if ( itemName.search('Ash') >= 0 ) {
          itemImg[i] = './images/prime/frames/AshPrime.png'
        } else if ( itemName.search('Banshee') >= 0 ) {
          itemImg[i] = './images/prime/frames/BansheePrime.png'
        } else if ( itemName.search('Rhino') >= 0 ) {
          itemImg[i] = './images/prime/frames/DERhinoPrime.png'
        } else if ( itemName.search('Ember') >= 0 ) {
          itemImg[i] = './images/prime/frames/EmberPrime.png'
        } else if ( itemName.search('Frost') >= 0 ) {
          itemImg[i] = './images/prime/frames/FrostPrimecropped.png'
        } else if ( itemName.search('Hydroid') >= 0 ) {
          itemImg[i] = './images/prime/frames/HydroidPrime.png'
        } else if ( itemName.search('Limbo') >= 0 ) {
          itemImg[i] = './images/prime/frames/LimboPrime.png'
        } else if ( itemName.search('Loki') >= 0 ) {
          itemImg[i] = './images/prime/frames/LokiPrime.png'
        } else if ( itemName.search('Mag') >= 0 ) {
          itemImg[i] = './images/prime/frames/MagPrimecropped.png'
        } else if ( itemName.search('Mirage') >= 0 ) {
          itemImg[i] = './images/prime/frames/MiragePrime.png'
        } else if ( itemName.search('Nekros') >= 0 ) {
          itemImg[i] = './images/prime/frames/NekrosPrime.png'
        } else if ( itemName.search('Nova') >= 0 ) {
          itemImg[i] = './images/prime/frames/NovaPrime.png'
        } else if ( itemName.search('Nyx') >= 0 ) {
          itemImg[i] = './images/prime/frames/NyxPrime.png'
        } else if ( itemName.search('Oberon') >= 0 ) {
          itemImg[i] = './images/prime/frames/OberonPrime2.png'
        } else if ( itemName.search('Saryn') >= 0 ) {
          itemImg[i] = './images/prime/frames/SarynPrime.png'
        } else if ( itemName.search('Trinity') >= 0 ) {
          itemImg[i] = './images/prime/frames/TrinityPrime.png'
        } else if ( itemName.search('Valkyr') >= 0 ) {
          itemImg[i] = './images/prime/frames/ValkyrPrime.png'
        } else if ( itemName.search('Vauban') >= 0 ) {
          itemImg[i] = './images/prime/frames/VaubanPrime.png'
        } else if ( itemName.search('Volt') >= 0 ) {
          itemImg[i] = './images/prime/frames/VoltPrime.png'
        } else if ( itemName.search('Zephyr') >= 0 ) {
          itemImg[i] = './images/prime/frames/ZephyrPrime.png'
        } else if ( itemName.search('Chroma') >= 0 ) {
          itemImg[i] = './images/prime/frames/ChromaPrime.png'
        }
        i++
      }
    }

    let vaulted = 'notVaulted'
    if ( this.props.isAvailable == 0 ) {
      vaulted = 'vaulted'
    }

    return (
      <div className={vaulted}>
        <p>Vaulted</p>
        <div className="relicGrid">
          <img className="relicImg" src={relicUrl} />
          <div className="relicName odd" value={this.props.id}><a href="">{this.props.name}</a></div>

          <div className="pic"><img src={itemImg[0]} /></div>
          <div className="item">{this.props.bronze1}</div>
          <div className="percent">{this.props.percent.bronze}%</div>

          <div className="pic odd"><img src={itemImg[1]} /></div>
          <div className="item odd">{this.props.bronze2}</div>
          <div className="percent odd">{this.props.percent.bronze}%</div>

          <div className="pic"><img src={itemImg[2]} /></div>
          <div className="item">{this.props.bronze3}</div>
          <div className="percent">{this.props.percent.bronze}%</div>

          <div className="pic odd"><img src={itemImg[3]} /></div>
          <div className="item odd">{this.props.silver1}</div>
          <div className="percent odd">{this.props.percent.silver}%</div>

          <div className="pic"><img src={itemImg[4]} /></div>
          <div className="item">{this.props.silver2}</div>
          <div className="percent">{this.props.percent.silver}%</div>

          <div className="pic odd"><img src={itemImg[5]} /></div>
          <div className="item odd">{this.props.gold1}</div>
          <div className="percent odd">{this.props.percent.gold}%</div>
        </div>
      </div>
    )
  }
}

class MissionLocation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const locationArray = []
    const locationData = []
    this.props.data.map(mission => {
      if ( mission.planet == this.props.planet ) {
        locationData.push(mission)
        if ( !locationArray.includes(mission.locationName) ) {
          locationArray.push(mission.locationName)
        }
      }
    })

    const locations = locationArray.map(location =>
      (<Location
        data={locationData}
        key={location}
        node={location}
      />)
    )

    return (
      <div>
        <h1>{this.props.planet}</h1>
        {locations}
      </div>
    )
  }
}

class Location extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let mission = ''
    const rotationData = []
    const rotationArray = [ 'Rotation A', 'Rotation B', 'Rotation C' ]
    this.props.data.map(info => {
      if ( info.locationName == this.props.node ) {
        rotationData.push(info)
        if ( mission == '' ) {
          mission = info.mission
        }
      }
    })

    const rotations = rotationArray.map(rotation =>
      (<Rotation
        data={rotationData}
        key={rotation}
        rotation={rotation}
      />)
    )

    return (
      <div className="nodeMission">
        <h3>{this.props.node} | {mission}</h3>
        <table className="rotationTable">
          {rotations}
        </table>
      </div>
    )
  }
}

class Rotation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const relicsArray = []
    this.props.data.map(relicData => {
      if ( relicData.rotation == this.props.rotation ) {
        relicsArray.push(relicData)
      }
    })

    const relics = relicsArray.map(dataRow =>
      (<tr key={dataRow.relicName}>
        <td>    {dataRow.relicName}</td>
        <td>{dataRow.dropChance}</td>
      </tr>)
    )
    if ( relicsArray.length > 0 ) {
      return (
        <tbody>
          <tr>
            <th>{this.props.rotation}</th>
          </tr>
          {relics}
        </tbody>
      )
    }

    return (
      <tbody />
    )
  }
}

class SearchRelic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: 'Relics',
      keyword: '',
      quality: 'Intact',
      relicData: [],
      qualityData: [{ id: 4, level: 'Intact', bronze: '25.33', silver: '11.00', gold: '2.00' }],
      missionData: [],
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getQuality = this.getQuality.bind(this)
  }


  handleSubmit(event) {
    let url
    let assignState
    let clearState
    if ( this.state.search == 'Relics' || this.state.search == 'Parts' ) {
      url = 'findRelics'
      assignState = 'relicData'
      clearState = 'missionData'
    } else if ( this.state.search == 'Locations' || this.state.search == 'Missions' ) {
      url = 'missionLocation'
      assignState = 'missionData'
      clearState = 'relicData'
    } else {
      console.log('this.state.search is not functioning or async is being a pain.')
    }
    event.preventDefault()
    axios.get(`https://services.warframerelicsearch.com/${url}`, {
      params: {
        search: this.state.search,
        userInput: this.state.keyword,
      },
    })
      .then(function (response) {
        super.setState({
          [assignState]: response.data,
          [clearState]: [],
        })
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    console.log(`Changing ${name} to ${value}`)
    this.setState({
      [name]: value,
    })
    if ( name === 'quality' ) {
      this.getQuality(value)
    }
  }

  enter(event) {
    if ( event.keyCode === 13 ) {
      this.handleSubmit(event)
    }
  }

  getQuality(value) {
    axios.get('https://services.warframerelicsearch.com/getQuality', {
      params: {
        quality: value,
      },
    })
      .then(function (response) {
        super.setState({ qualityData: response.data })
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const relics = this.state.relicData.map(relic =>
      (<Relic
        bronze1={relic.bronze1}
        bronze2={relic.bronze2}
        bronze3={relic.bronze3}
        gold1={relic.gold}
        id={relic.id}
        isAvailable={relic.isAvailable}
        key={relic.name}
        name={relic.name}
        percent={this.state.qualityData[0]}
        silver1={relic.silver1}
        silver2={relic.silver2}
      />)
    )
    // relics = relics.sort(function(a,b){return b.isAvailable - a.isAvailable});

    const planets = []
    this.state.missionData.map(planet => {
      if ( !planets.includes(planet.planet) ) {
        planets.push(planet.planet)
      }
    })
    const missions = planets.map(mapPlanet =>
      (<MissionLocation
        data={this.state.missionData}
        key={mapPlanet}
        planet={mapPlanet}
      />)
    )

    return (
      <div>
        <div id="head">
          <h2>Search By:</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                <input defaultChecked name="search" onChange={this.handleChange} type="radio" value="Relics" />
                                 Relics
              </label>
              <label>
                <input name="search" onChange={this.handleChange} type="radio" value="Locations" />
                                 Locations
              </label>
              <label>
                <input name="search" onChange={this.handleChange} type="radio" value="Parts" />
                                 Parts
              </label>
              <label>
                <input name="search" onChange={this.handleChange} type="radio" value="Missions" />
                                 Missions
              </label>
            </div>
            <p>Keyword:</p>
            <input name="keyword" onChange={this.handleChange} onKeyPress={this.enter} type="text" value={this.state.keyword} />
            <br />
            <input id="btn" type="submit" value="Search" />
          </form>
        </div>
        <form>
          <label>
            <input defaultChecked name="quality" onClick={this.handleChange} type="radio" value="Intact" />
                         Intact
          </label>
          <label>
            <input name="quality" onClick={this.handleChange} type="radio" value="Exceptional" />
                         Exceptional
          </label>
          <label>
            <input name="quality" onClick={this.handleChange} type="radio" value="Flawless" />
                         Flawless
          </label>
          <label>
            <input name="quality" onClick={this.handleChange} type="radio" value="Radiant" />
                         Radiant
          </label>
        </form>
        {relics}
        {missions}
        <footer>Made by a fan.</footer>
      </div>
    )
  }
}

const mainElement = document.querySelector('Main')
ReactDOM.render(<SearchRelic />, mainElement)
