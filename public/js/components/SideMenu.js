import React from 'react';
import CadernetaMenuGuide from './CadernetaMenuGuide';

class SideMenu extends React.Component {
  constructor (props) {
    super(props);    
    this.state = {}
  }

  render () {
    return (
        <div>
        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Formulário">
              <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti" data-parent="#exampleAccordion">
                <i className="fa fa-fw fa-stethoscope"></i>
                <span className="nav-link-text">Formulário</span>
              </a>
              <ul className="sidenav-second-level collapse" id="collapseMulti">
                <li>
                  <a href="#">Dados Pessoais</a>
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
              <a className="nav-link" href="#">
                <i className="fa fa-fw fa-list-alt"></i>
                <span className="nav-link-text">Listagens</span>
              </a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Resultados">
              <a className="nav-link" href="#">
                <i className="fa fa-fw fa-area-chart"></i>
                <span className="nav-link-text">Resultados</span>
              </a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Sobre">
              <a className="nav-link" href="#">
                <i className="fa fa-fw fa-question-circle-o"></i>
                <span className="nav-link-text">Sobre</span>
              </a>
            </li>
        </ul>
        <ul className="navbar-nav sidenav-toggler">
            <li className="nav-item">
              <a className="nav-link text-center" onClick={CadernetaMenuGuide.setVisibility} id="sidenavToggler">
                <i className="fa fa-fw fa-angle-left"></i>
              </a>
            </li>
        </ul>
        </div>

    )
  }
}

export default SideMenu