import React from 'react';

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

export default MissionLocation;