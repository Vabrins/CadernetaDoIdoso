import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class DiagnosisPreviousHospitalization extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', diagnostics_2_2:'' , diagnostics_year_2_2:'', hospitalization_2_2:'', other_conditions_2_2:''};
    this.sendForm = this.sendForm.bind(this);
    this.setDiagnostics22 = this.setDiagnostics22.bind(this);
    this.setDiagnosticsYear22 = this.setDiagnosticsYear22.bind(this);
    this.setHospitalization22 = this.setHospitalization22.bind(this);
    this.setOtherConditions22 = this.setOtherConditions22.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/diagnosisprevioushospitalization",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {
    evt.preventDefault();

    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/diagnosisprevioushospitalization",
      contentType: 'application/json',
      dataType: 'json',
      method: "POST",
      data: JSON.stringify({ test: this.state }),
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
          <div className="container" >
            <form id="diagnosisprevioushospitalization" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                    <h2> DIAGNÓSTICOS E INTERNAÇÕES PRÉVIOS </h2>
                    <select onChange={this.setDiagnostics22} defaultValue=""  >
                      <option value="Acidente vascular cerebral(AVC) ou derrame">Acidente vascular cerebral(AVC) ou derrame</option>
                      <option value="Anemia">Anemia</option>
                      <option value="Asma">Asma</option>
                      <option value="Diabetes mellitus">Diabetes mellitus</option>
                      <option value="Doença arterial coronariana">Doença arterial coronariana</option>
                      <option value="Doença pulmonar obstrutiva crônica">Doença pulmonar obstrutiva crônica (DPOC)</option>
                      <option value="Epilepsia">Epilepsia</option>
                      <option value="Hipertensão arterial">Hipertensão arterial</option>
                      <option value="Insuficiência cardíaca">Insuficiência cardíaca</option>
                      <option value="Úlcera péptica">Úlcera péptica</option>
                      <option value="Depressão">Depressão</option>
                      <option value="Incontinência urinária">Incontinência urinária</option>
                      <option value="Incontinência fecal">Incontinência fecal</option>
                      <option value="Insuficiência cognitiva(demência)">Insuficiência cognitiva(demência)</option>
                      <option value="InsufiOutras condições(diagnósticos)">InsufiOutras condições(diagnósticos)</option>
                    </select>
                    <br/><br/>
                    <label>Ano de diagnóstico</label><br/>
                    <input type="text" value={this.state.diagnostics_year_2_2} onChange={this.setDiagnosticsYear22} className="" id="" name="" />
                    <br/><br/>
                    <label>Ano de internação</label><br/>
                    <input type="text" value={this.state.hospitalization_2_2} onChange={this.setHospitalization22} className="" id="" name="" />
                    <br/><br/>
                    <label>Outras condições</label><br/>
                    <input type="text" value={this.state.other_conditions_2_2} onChange={this.setOtherConditions22} className="" id="" name="" />
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Protocolo de indentificação do idoso vulnerável">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></a>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={this.sendForm} href="javascript:;"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </li>
              </ul>
            </nav>
          </div>
    )
  }

  setDiagnostics22(evt) {
    this.setState({diagnostics_2_2: evt.target.value});  
  }
  
  setDiagnosticsYear22(evt) {
    this.setState({diagnostics_year_2_2: evt.target.value});  
  }

  setHospitalization22(evt) {
    this.setState({hospitalization_2_2: evt.target.value});  
  }

  setOtherConditions22(evt) {
    this.setState({other_conditions_2_2: evt.target.value});  
  }
}

export default DiagnosisPreviousHospitalization