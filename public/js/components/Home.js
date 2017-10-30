import React from 'react';
import { Link } from 'react-router-dom';

const Pdetail = {
  fontSize: "0.9rem",
  textAlign: "right"
};

class Home extends React.Component {
  constructor (props) {
    super(props)    
    this.state = {}
  }

  render () {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Olá, Bem vindo!</h1>
        <p className="lead">
          A  Caderneta  de  Saúde  da  Pessoa  Idosa  integra  um  
          conjunto de iniciativas que tem por objetivo qualificar 
          a atenção ofertada às pessoas idosas no Sistema Único 
          de Saúde, sendo um instrumento proposto para auxiliar 
          no bom manejo da saúde da pessoa idosa.
        </p>
        <p style={Pdetail}>Coordenação de Saúde da Pessoa Idosa <br/> DAPES/SAS/MS</p>
        <hr className="my-4" />
        <h5 style={{marginBottom: "1.5rem"}}>O que fazer?</h5>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" exact="true" to="/personaldata" style={{marginRight: "10px"}} role="button">Novo registro de saúde</Link>
          <Link className="btn btn-primary btn-lg" exact="true" to="/listings" style={{marginRight: "10px"}} role="button">Ver históricos</Link>
          <Link className="btn btn-primary btn-lg" exact="true" to="/results" style={{marginRight: "10px"}} role="button">Ver resultados</Link>
        </p>
      </div>
    )
  }
}

  export default Home;