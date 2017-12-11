import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Listings extends React.Component {
  constructor (props) {
    super(props)    
    this.state = {}
  }

  render () {
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">
            <i className="fa fa-table"></i> Hístorico de Atualizações
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Tipo Avaliação</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Tipo Avaliação</th>
                    <th>Ação</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>Medicamentos, fitoterápicos, suplementos e vitaminas em uso</td>
                    <td><Link exact="true" to="/detailsmedicinesherbalremedies" >Visualizar</Link></td>
                    {/*<td><Link exact="true" to="/medicinesherbalremedies" >Visualizar</Link></td>*/}
                  </tr>
                  <tr>
                    <td>Diagnósticos e internações prévios</td>
                    <td><Link exact="true" to="/detailsdiagnosisprevioushospitalization" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Cirurgias realizadas</td>
                    <td><Link exact="true" to="/detailssurgeriesperformed" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Reações adversas ou alergias a medicamentos</td>
                    <td><Link exact="true" to="/detailsreactionorallergy" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Dados antropométrico</td>
                    <td><Link exact="true" to="/detailsanthropometricdata" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Protocolo de identificação do idoso vulnerável (VES-13)</td>
                    <td><Link exact="true" to="/detailsvulnerableelderly" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Incapacidades</td>
                    <td><Link exact="true" to="/detailsdisabilities" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Informações complementares </td>
                    <td><Link exact="true" to="/detailscomplementaryinformation" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Avaliação ambiental</td>
                    <td><Link exact="true" to="/detailsenvironmentalassessment" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Quedas</td>
                    <td><Link exact="true" to="/detailsfalls" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Identificação de dor crônica</td>
                    <td><Link exact="true" to="/detailsidentificationchronicpain" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Itensidade da dor</td>
                    <td><Link exact="true" to="/detailsidentificationchronicpainb" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Hábitos de vida</td>
                    <td><Link exact="true" to="/detailslivinghabits" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Controle de pressão arterial</td>
                    <td><Link exact="true" to="/detailspressurecontrol" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Controle de glicemia</td>
                    <td><Link exact="true" to="/detailsglucosecontrol" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Calendário de vacinação</td>
                    <td><Link exact="true" to="/detailsvaccinationcalendar" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Saúde bucal - Avaliação</td>
                    <td><Link exact="true" to="/detailsoralhealthassessment" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Saúde bucal - Próteses</td>
                    <td><Link exact="true" to="/detailsdentalprosthesis" >Visualizar</Link></td>
                  </tr>
                  <tr>
                    <td>Agenda Consultas e Exames</td>
                    <td><Link exact="true" to="/detailsconsultationexamination" >Visualizar</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*<div className="card-footer small text-muted">Atualizado ontem às 11:59</div>*/}
        </div>
      </div>
    )
  }
}

  export default Listings;