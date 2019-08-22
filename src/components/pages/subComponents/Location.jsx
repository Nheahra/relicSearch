import React from 'react';


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