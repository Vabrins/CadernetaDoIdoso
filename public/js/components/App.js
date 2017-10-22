import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';
import Listings from './Listings';
import Results from './Results';
import About from './About';
import Home from './Home';
import PersonalData from './PersonalData';
import CadernetaMenuGuide from './CadernetaMenuGuide';

class App extends React.Component {
  constructor (props) {
    super(props)    
    this.state = {}
  }

  render () {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <Link className="navbar-brand" exact="true" to="/index">Caderneta Digital do Idoso</Link>    
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <div id="sidemenu"></div>
              <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Formulário">
                  <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti" data-parent="#exampleAccordion">
                  <i className="fa fa-fw fa-stethoscope"></i>
                  <span className="nav-link-text"> Formulários</span>
                  </a>
                  <ul className="sidenav-second-level collapse" id="collapseMulti">
                    <li>
                      <Link exact="true" to="/personaldata">Dados Pessoais</Link>
                    </li>
                    <li>
                      <a className="nav-link-collapse collapsed" data-toggle="collapse" href="#item-elderly_evaluete">Avaliação da pessoa idosa</a>
                      <ul className="sidenav-third-level collapse" id="item-elderly_evaluete">
                        <li>
                          <a href="#">2.1 Medicamentos, fitoterápicos, suplementos e vitaminas em uso</a>
                        </li>
                        <li>
                          <a href="#">2.2 Diagnósticos e internações prévios</a>
                        </li>
                        <li>
                          <a href="#">2.3 Cirurgias realizadas</a>
                        </li>
                        <li>
                          <a href="#">2.4 Reações adversas ou alergias a medicamentos</a>
                        </li>
                        <li>
                          <a href="#">2.5 Dados antropométrico</a>
                        </li>
                        <li>
                          <a href="#">2.6 Protocolo de identificação do idoso vulnerável (VES-13)</a>
                        </li>
                        <li>
                          <a href="#">2.7 Informações complementares </a>
                        </li>
                        <li>
                          <a href="#">2.8 Avaliação ambienta</a>
                        </li>
                        <li>
                          <a href="#">2.9 Quedas</a>
                        </li>
                        <li>
                          <a href="#">2.10 Identificação de dor crônica</a>
                        </li>
                        <li>
                          <a href="#">2.11 Hábitos de vida</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Controle de pressão arterial</a>
                    </li>
                    <li>
                      <a href="#">Controle de glicemia</a>
                    </li>
                    <li>
                      <a href="#">Calendário de vacinação</a>
                    </li>
                    <li>
                      <a className="nav-link-collapse collapsed" data-toggle="collapse" href="#item-schedule">Avaliação de saúde bucal</a>
                      <ul className="sidenav-third-level collapse" id="item-schedule">
                        <li>
                          <a href="#">Agenda de consultas e exames</a>
                        </li>
                        <li>
                          <a href="#">Atualizações da caderneta</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Listagens">
                  <Link className="nav-link" exact="true" to="/listings">
                  <i className="fa fa-fw fa-list-alt"></i>
                  <span className="nav-link-text"> Listagens</span>
                  </Link>
                </li>
                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Resultados">
                  <Link className="nav-link" exact="true" to="/results">
                  <i className="fa fa-fw fa-area-chart"></i>
                  <span className="nav-link-text"> Resultados</span>
                  </Link>
                </li>
                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Sobre">
                  <Link className="nav-link" exact="true" to="/about">
                  <i className="fa fa-fw fa-question-circle-o"></i>
                  <span className="nav-link-text"> Sobre</span>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav sidenav-toggler">
                <li className="nav-item">
                  <a className="nav-link text-center" id="sidenavToggler">
                  <i className="fa fa-fw fa-angle-left"></i>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <form className="form-inline my-2 my-lg-0 mr-lg-2">
                    <div className="input-group">
                      <input className="form-control" type="text" placeholder="Procurar por..." />
                      <span className="input-group-btn">
                      <button className="btn btn-primary" type="button">
                      <i className="fa fa-search"></i>
                      </button>
                      </span>
                    </div>
                  </form>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                  <i className="fa fa-fw fa-sign-out"></i>Sair</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div id="menu_guide"></div>
                <div className="progress">
                  {/*<div className="progress-bar" role="progressbar" style={{width: '25%', height: '1px'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>*/}
                </div>
              </div>
            </div>
          </div>
            <Route path="/index" component={Home} />
            <Route path="/listings" component={Listings} />
            <Route path="/results" component={Results} />
            <Route path="/about" component={About} />
            <Route path="/personaldata" component={PersonalData} />
        </div>
      </Router>
    )
  }
}

  export default App;
