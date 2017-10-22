import React from 'react';

const divStyle = {
  margin: '40px',
  border: '5px solid'
};

class CadernetaMenuGuide extends React.Component {
  constructor (props) {
    super(props);    
    this.state = {
      istoggle: false,
      num: 0
    }
    this.setVisibility = this.setVisibility.bind(this);
  }

  setVisibility() {
    const count = this.state.num;
    this.setState({num: count+1});

    if ((this.state.num & 1) == 0) {
      this.setState({istoggle: true}); 
    } else {
      this.setState({istoggle: false});
    }
  }

  render () {
    return (
          <div>
            <ul id="step" className="nav nav-tabs" style={{display: this.state.istoggle ? 'flex' : 'none'}}>
              <li className="nav-item">
                <a className="nav-link active">Dados Pessoais</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Av. da pessoa idosa</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Medicamentos, fitoterápicos, suplementos e vitaminas em uso</a>
                  <a className="dropdown-item" href="#">Diagnósticos e internações prévios</a>
                  <a className="dropdown-item" href="#">Cirurgias realizadas</a>
                  <a className="dropdown-item" href="#">Reações adversas ou alergias a medicamentos</a>
                  <a className="dropdown-item" href="#">Dados antropométrico</a>
                  <a className="dropdown-item" href="#">Protocolo de identificação do idoso vulnerável</a>
                  <a className="dropdown-item" href="#">Informações complementares</a>
                  <a className="dropdown-item" href="#">Avaliação ambienta</a>
                  <a className="dropdown-item" href="#">Quedas</a>
                  <a className="dropdown-item" href="#">Identificação de dor crônica</a>
                  <a className="dropdown-item" href="#">Hábitos de vida</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link">Controle de PA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Controle de glicemia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Calendário de vacinação</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Av. de saúde bucal</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Agenda de consultas e exames</a>
                  <a className="dropdown-item" href="#">Atualizações da caderneta</a>
                </div>
              </li>
            </ul>
            {/*<button onClick={this.setVisibility}>+</button>*/}
          </div>

    )
  }
}

export default CadernetaMenuGuide