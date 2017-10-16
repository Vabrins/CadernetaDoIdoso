import React from 'react';

class Results extends React.Component {
  constructor (props) {
    super(props)    
    this.state = {}
  }

  render () {
    return (
      <div>
          <div className="card mb-3">
          <div className="card-header">
            <i className="fa fa-area-chart"></i> Controle de peso</div>
          <div className="card-body">
            {/*<canvas id="myAreaChart" width="100%" height="30"></canvas>*/}
          </div>
          <div className="card-footer small text-muted">Atualizado ontem às 11:59</div>
        </div>
      </div>
    )
  }
}

  export default Results;