import React from 'react'
import Items from 'warframe-items'
import { Select } from '@material-ui/core/Select'

function FarmGuide() {
  const items = new Items()
  console.log({ items })
//   render() {
//     if ( this.state.primeOptions.length < 1 ) {
//       // waiting for this.componentDidMount();
//       return (
//         <p>Loading...</p>
//       )
//     }
//     const primeOptionsList = this.state.primeOptions.map(prime =>
//       <option key={prime.id} value={`${prime.name} Prime`} />
//     )
//     const parts = []
//     const rarity = [ 'gold', 'silver1', 'silver2', 'bronze1', 'bronze2', 'bronze3' ]

//     this.state.data.map(relic => {
//       let i = 0
//       while ( i <= 5 ) {
//         if ( relic.relic[rarity[i]].indexOf(this.state.searchTerm) >= 0 ) {
//           if ( !parts.includes(relic.relic[rarity[i]]) ) {
//             parts.push(relic.relic[rarity[i]])
//           }
//         }
//         i++
//       }
//     })

//     console.log(`parts: ${parts}`)
//     let part
//     if ( this.state.data.length > 0 ) {
//       part = parts.map(part =>
//         (<Part
//           data={this.state.data}
//           key={part}
//           part={part}
//           rarity={rarity}
//         />)
//       )
//     } else if ( this.state.searchTerm != '' ) {
//       part = (<div>
//         <h2 className="blueprint">{this.props.part}</h2>
//         <p className="partsVaulted">VAULTED</p>
//       </div>)
//     }
//     const {
//       validationError
//     } = this.state

//     return (
//       <div>
//         <div id="head">
//           <form onSubmit={this.handleSubmit}>
//             <p>Prime Set:</p>
//             <input autoComplete="off" list="primeOptions" name="keyword" onChange={this.handleChange} />
//             <Select options={primeOptionsList} />
//             {validationError &&
//               <p id="error">{validationError}</p>
//             }
//             <input id="btn" type="submit" value="Search" />
//           </form>
//         </div>
//         <div>
//           <h1 className="primeName">{this.state.searchTerm}</h1>
//           {part}
//         </div>
//       </div>
//     )
//   }
// }

// class Part extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     // use props.part to filter data
//     const dataArray = []
//     const rarity = this.props.rarity
//     const part = this.props.part
//     this.props.data.map(data => {
//       let i = 0
//       while ( i <= 5 ) {
//         if ( data.relic[rarity[i]].indexOf(part) >= 0 ) {
//           dataArray.push(data.missionLocation)
//         }
//         i++
//       }
//     })

//     const planets = []
//     dataArray.map(planet => {
//       if ( !planets.includes(planet.planet) ) {
//         planets.push(planet.planet)
//       }
//     })

//     const planet = planets.map(mapPlanet =>
//       (<Planet
//         data={dataArray}
//         key={mapPlanet}
//         planet={mapPlanet}
//       />)
//     )

//     return (
//       <div>
//         <h2 className="blueprint">{this.props.part}</h2>
//         {planet}
//       </div>
//     )
//   }
// }

// class Planet extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     const locationArray = []
//     const locationData = []
//     this.props.data.map(mission => {
//       if ( mission.planet == this.props.planet ) {
//         locationData.push(mission)
//         if ( !locationArray.includes(mission.locationName) ) {
//           locationArray.push(mission.locationName)
//         }
//       }
//     })

//     const locations = locationArray.map(location =>
//       (<Location
//         data={locationData}
//         key={location}
//         node={location}
//       />)
//     )

//     return (
//       <div>
//         <h3>{this.props.planet}</h3>
//         <div className="planetGrid">
//           {locations}
//         </div>
//       </div>
//     )
//   }
// }

// class Location extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     let mission = ''
//     const rotationData = []
//     const rotationArray = [ 'Rotation A', 'Rotation B', 'Rotation C', '' ]
//     this.props.data.map(info => {
//       if ( info.locationName == this.props.node ) {
//         rotationData.push(info)
//         if ( mission == '' ) {
//           mission = info.mission
//         }
//       }
//     })

//     const rotations = rotationArray.map(rotation =>
//       (<Rotation
//         data={rotationData}
//         key={rotation}
//         rotation={rotation}
//       />)
//     )

//     return (
//       <div className="nodeMission">
//         <h4>{this.props.node} | {mission}</h4>
//         <table className="rotationTable">
//           {rotations}
//         </table>
//       </div>
//     )
//   }
// }

// class Rotation extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const relicsArray = []
//     this.props.data.map(relicData => {
//       if ( relicData.rotation == this.props.rotation ) {
//         relicsArray.push(relicData)
//       }
//     })

//     const relics = relicsArray.map(dataRow =>
//       (<tr>
//         <td>    {dataRow.relicName}</td>
//         <td>{dataRow.dropChance}</td>
//       </tr>)
//     )
//     if ( relicsArray.length > 0 ) {
//       return (
//         <tbody>
//           <tr>
//             <th>{this.props.rotation}</th>
//           </tr>
//           {relics}
//         </tbody>
//       )
//     }

//     return (
//       <tbody />
//     )
//   }
}

export default FarmGuide
