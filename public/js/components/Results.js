import React from 'react';
import ChartWeightControl from './ChartWeightControl';
import ChartGlucoseControl from './ChartGlucoseControl';
import ChartPressureControl from './ChartPressureControl';

class Results extends React.Component {
  constructor (props) {
    super(props)    
    this.state = {
      lastUpdate: ''
    }
  }

  render () {
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">
            <i className="fa fa-area-chart"></i> Controle de peso
          </div>
          <div className="card-body">
            <ChartWeightControl />
          </div>
          {/*<div className="card-footer small text-muted">Atualizado ontem às 11:59</div>*/}
        </div>

        <div className="card mb-3">
          <div className="card-header">
            <i className="fa fa-bar-chart"></i> Glicose
          </div>
          <div className="card-body">
            <ChartGlucoseControl />
          </div>
          {/*<div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>*/}
        </div>

        <div className="card mb-3">
          <div className="card-header">
            <i className="fa fa-area-chart"></i> Controle de pressão
          </div>
          <div className="card-body">
            <ChartPressureControl />
          </div>
          {/*<div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>*/}
        </div>
      </div>
    )
  }

}

  export default Results;