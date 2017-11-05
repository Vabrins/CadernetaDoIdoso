import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';
import $ from 'jquery';
import Listings from './Listings';
import Results from './Results';
import About from './About';
import Home from './Home';
import CadernetaMenuGuide from './CadernetaMenuGuide';
import Details from './Details';
import Validation from './Validation';

import PersonalData from './PersonalData';
import PersonsReferences from './PersonsReferences';
import ResidentialAddress from './ResidentialAddress';
import SocialFamilyInformations from './SocialFamilyInformations';
import MedicinesHerbalRemedies from './MedicinesHerbalRemedies';
import DiagnosisPreviousHospitalization from './DiagnosisPreviousHospitalization';
import SurgeriesPerformed from './SurgeriesPerformed';
import ReactionOrAllergy from './ReactionOrAllergy';
import AnthropometricData from './AnthropometricData';
import VulnerableElderly from './VulnerableElderly';
import Disabilities from './Disabilities';
import ComplementaryInformation from './ComplementaryInformation';
import EnvironmentalAssessment from './EnvironmentalAssessment';
import Falls from './Falls';
import IdentificationChronicPain from './IdentificationChronicPain';
import IdentificationChronicPainB from './IdentificationChronicPainB';
import LivingHabits from './LivingHabits';
import PressureControl from './PressureControl';
import GlucoseControl from './GlucoseControl';
import VaccinationCalendar from './VaccinationCalendar';
import OralHealthAssessment from './OralHealthAssessment';
import DentalProsthesis from './DentalProsthesis';
import ConsultationExamination from './ConsultationExamination';


class App extends React.Component {
  constructor (props) {
    super(props)    
    this.state = {cpf:''};
    this.setCpf = this.setCpf.bind(this);
    this.setElderlyCpf = this.setElderlyCpf.bind(this);
  }

  componentWillMount () {
    this.loadAdminJs();
  }

  loadAdminJs () {
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }

  setElderlyCpf () {
    $.ajax({
      url: "/api/v1/elderly/",
      contentType: 'application/json',
      dataType: 'json',
      method: "GET",
      data: JSON.stringify({ cpf: this.state.cpf }),
      success: function(response){
        console.log(response);
        console.log("enviado com sucesso");
      },
      error: function(response){
        console.log("erro");
        console.log(response);
      }.bind(this)
    });
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
                      <Link exact="true" to="/personsreferences">Pessoas de referência</Link>
                    </li>
                    <li>
                      <Link exact="true" to="/residentialaddress">Endereço</Link>
                    </li>
                    <li>
                      <Link exact="true" to="/socialfamilyinformations">Informações Sociais e Familiares</Link>
                    </li>
                    <li>
                      <a className="nav-link-collapse collapsed" data-toggle="collapse" href="#item-elderly_evaluete">Avaliação da pessoa idosa</a>
                      <ul className="sidenav-third-level collapse" id="item-elderly_evaluete">
                        <li>
                          <Link exact="true" to="/medicinesherbalremedies">2.1 Medicamentos, fitoterápicos, suplementos e vitaminas em uso</Link>
                        </li>
                        <li>
                          <Link exact="true" to="/diagnosisprevioushospitalization">2.2 Diagnósticos e internações prévios</Link>
                        </li>
                        <li>
                          <Link exact="true" to="/surgeriesperformed">2.3 Cirurgias realizadas</Link>
                        </li>
                        <li>
                          <Link exact="true" to="/reactionorallergy">2.4 Reações adversas ou alergias a medicamentos</Link>
                        </li>
                        <li>
                          <Link exact="true" to="/anthropometricdata">2.5 Dados antropométrico</Link>
                        </li>
                        <li>
                          <Link exact="true" to="/vulnerableelderly">2.6 Protocolo de identificação do idoso vulnerável (VES-13)</Link>
                        </li>
                        <li>
                          <Link exact="true" to="/disabilities">Incapacidades</Link>
                        </li>
                        <li>
                          <Link exact="true" to="/complementaryinformation">2.7 Informações complementares </Link>
                        </li>
                        <li>
                          <Link exact="true" to="/environmentalassessment">2.8 Avaliação ambienta</Link>
                        </li>
                        <li>
                          <Link exact="true" to="/falls">2.9 Quedas</Link>
                        </li>
                        <li>
                          <Link exact="true" to="/identificationchronicpain">2.10 Identificação de dor crônica</Link>
                        </li>
                        <li>
                          <Link exact="true" to="/identificationchronicpainb">2.10 Itensidade da dor</Link>
                        </li>
                        <li>
                          <Link exact="true" to="/livinghabits">2.11 Hábitos de vida</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link exact="true" to="/pressurecontrol">Controle de pressão arterial</Link>
                    </li>
                    <li>
                      <Link exact="true" to="/glucosecontrol">Controle de glicemia</Link>
                    </li>
                    <li>
                      <Link exact="true" to="/vaccinationcalendar">Calendário de vacinação</Link>
                    </li>
                    <li>
                      <a className="nav-link-collapse collapsed" data-toggle="collapse" href="#item-schedule">Saúde bucal</a>
                      <ul className="sidenav-third-level collapse" id="item-schedule">
                        <li>
                          <Link exact="true" to="/oralhealthassessment">Avaliação</Link>
                        </li>
                        <li>
                          <Link exact="true" to="/dentalprosthesis">Próteses</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link exact="true" to="/consultationexamination">Agenda Consultas e Exames</Link>
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
                      <input className="form-control" value={this.state.cpf} onChange={this.setCpf} type="text" placeholder="CPF do idoso" maxLength="11" />
                      <span className="input-group-btn">
                      <button className="btn btn-primary" type="button" onClick={this.setElderlyCpf}>
                      <i className="fa fa-refresh"></i>
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

          {/*App Routes*/}
            <Route path="/index" component={Home} />
            <Route path="/listings" component={Listings} />
            <Route path="/results" component={Results} />
            <Route path="/about" component={About} />
            <Route path="/details" component={Details} />

          {/*Evaluation Forms Routes*/}
            <Route path="/personaldata" component={PersonalData} />
            <Route path="/personsreferences" component={PersonsReferences} />
            <Route path="/residentialaddress" component={ResidentialAddress} />
            <Route path="/socialfamilyinformations" component={SocialFamilyInformations} />
            <Route path="/medicinesherbalremedies" component={MedicinesHerbalRemedies} />
            <Route path="/diagnosisprevioushospitalization" component={DiagnosisPreviousHospitalization} />
            <Route path="/surgeriesperformed" component={SurgeriesPerformed} />
            <Route path="/reactionorallergy" component={ReactionOrAllergy} />
            <Route path="/anthropometricdata" component={AnthropometricData} />
            <Route path="/vulnerableelderly" component={VulnerableElderly} />
            <Route path="/disabilities" component={Disabilities} />
            <Route path="/complementaryinformation" component={ComplementaryInformation} />
            <Route path="/environmentalassessment" component={EnvironmentalAssessment} />
            <Route path="/falls" component={Falls} />
            <Route path="/identificationchronicpain" component={IdentificationChronicPain} />
            <Route path="/identificationchronicpainb" component={IdentificationChronicPainB} />
            <Route path="/livinghabits" component={LivingHabits} />
            <Route path="/pressurecontrol" component={PressureControl} />
            <Route path="/glucosecontrol" component={GlucoseControl} />
            <Route path="/vaccinationcalendar" component={VaccinationCalendar} />
            <Route path="/oralhealthassessment" component={OralHealthAssessment} />
            <Route path="/dentalprosthesis" component={DentalProsthesis} />
            <Route path="/consultationexamination" component={ConsultationExamination} />
        </div>
      </Router>
    )
  }

  setCpf(evt) {
    if (Validation.isNumber(evt.target.value) === true) {
      this.setState({cpf: evt.target.value});
    }
  }
}

  export default App;
