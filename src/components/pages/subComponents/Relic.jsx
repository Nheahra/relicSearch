import React from 'react'

const Relic = ({ relic }) => {
  const vaulted = relic.isAvailable ? 'vaulted' : 'notVaulted'

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

export default Relic
