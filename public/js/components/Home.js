import React from 'react';
import { Link } from 'react-router-dom';

const Pdetail = {
  fontSize: "0.9rem",
  textAlign: "right"
};

const buttonStyle = {
  marginRight: "10px",
  marginBottom: "10px"
}

class Home extends React.Component {
  constructor (props) {
    super(props)    
    this.state = { elderlyLoggedCookie: '', name:'Bem vindo' }
    this.manipulateLayout = this.manipulateLayout.bind(this);
  }

  componentWillMount () {
    this.manipulateLayout();    
    let idElderly = this.getCookie('id_elderly');
    
    $.ajax({
      url: "/api/v1/personaldata",
      dataType: "json",
      method: "GET",
      success:function(response){   
        if (response != "") {
          if (response[0].name_1 != null && idElderly != undefined) {
            this.setState({ name: response[0].name_1 });
          }
        }
      }.bind(this)
    });
  }

  manipulateLayout () {
    let idElderly = this.getCookie('id_elderly');
    if (idElderly == undefined) {
      this.setState({ elderlyLoggedCookie: "inlineBlock" });
    } else {
      this.setState({ elderlyLoggedCookie: "none" });
    }
  }

  getCookie (name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  render () {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Olá, {this.state.name}!</h1>
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
          <Link style={{ display: this.state.elderlyLoggedCookie, marginRight: "10px",  marginBottom: "10px" }} className="btn btn-primary btn-lg" exact="true" to="/personaldata" role="button">Alterar dados pessoais</Link>
          <Link style={{ display: this.state.elderlyLoggedCookie, marginRight: "10px",  marginBottom: "10px" }} className="btn btn-primary btn-lg" exact="true" to="/medicinesherbalremedies" role="button">Novo registro de saúde</Link>
          <Link className="btn btn-primary btn-lg" exact="true" to="/listings" style={buttonStyle} role="button">Ver históricos</Link>
          <Link className="btn btn-primary btn-lg" exact="true" to="/results" style={buttonStyle} role="button">Ver resultados</Link>
        </p>
      </div>
    )
  }
}

  export default Home;