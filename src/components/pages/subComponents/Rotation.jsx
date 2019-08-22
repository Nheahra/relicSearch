
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