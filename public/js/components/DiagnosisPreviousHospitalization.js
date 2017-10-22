import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class DiagnosisPreviousHospitalization extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', avc_2_2:'' , anemia_2_2:'', asthma_2_2:'', diabetes_2_2:'', artery_2_2:'', pulmonary_2_2:'', epilepsy_2_2:'', hypertension_2_2:'', insufficiency_2_2:'', ulcer_2_2:'', depression_2_2:'', urinary_2_2:'', faecal_2_2:'', insanity_2_2:'', other_2_2:''};
    this.sendForm = this.sendForm.bind(this);
    this.setAvc22 = this.setAvc22.bind(this);
    this.setAnemia22 = this.setAnemia22.bind(this);
    this.setAsthma22 = this.setAsthma22.bind(this);
    this.setDiabetes22 = this.setDiabetes22.bind(this);
    this.setArtery22 = this.setArtery22.bind(this);
    this.setPulmonary22 = this.setPulmonary22.bind(this);
    this.setEpilepsy22 = this.setEpilepsy22.bind(this);
    this.setHypertension22 = this.setHypertension22.bind(this);
    this.setInsufficiency22 = this.setInsufficiency22.bind(this);
    this.setUlcer22 = this.setUlcer22.bind(this);
    this.setDepression22 = this.setDepression22.bind(this);
    this.setUrinary22 = this.setUrinary22.bind(this);
    this.setFaecal22 = this.setFaecal22.bind(this);
    this.setInsanity22 = this.setInsanity22.bind(this);
    this.setOther22 = this.setOther22.bind(this);

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
                  <h2> CONDIÇÕES CRÔNICAS SENSÍVEIS À ATENÇÃO BÁSICA </h2>
                  <br/><br/>
                  <label>Acidente vascular cerebral(AVC) ou derrame</label><br/>
                  <input type="text"  value={this.state.avc_2_2} onChange={this.setAvc22} maxLength="5" className="answers-55" id="2.2-avc" name="answers[2.2[avc]]"  />
                  <br/><br/>
                  <label>Anemia</label><br/>
                  <input type="text"  value={this.state.anemia_2_2} onChange={this.setAnemia22} maxLength="5" className="answers-56" id="2.2-anemia" name="answers[2.2[anemia]]"  />
                  <br/><br/>
                  <label>Asma</label><br/>
                  <input type="text"  value={this.state.asthma_2_2} onChange={this.setAsthma22} maxLength="5" className="answers-57" id="2.2-asthma" name="answers[2.2[asthma]]"  />
                  <br/><br/>
                  <label>Diabetes mellitus</label><br/>
                  <input type="text"  value={this.state.diabetes_2_2} onChange={this.setDiabetes22} maxLength="5" className="answers-58" id="2.2-diabetes" name="answers[2.2[diabetes]]"  />
                  <br/><br/>
                  <label>Doença arterial coronariana</label><br/>
                  <input type="text"  value={this.state.artery_2_2} onChange={this.setArtery22} maxLength="5" className="answers-59" id="2.2-artery  " name="answers[2.2[artery ]]"  />
                  <br/><br/>
                  <label>Doença pulmonar obstrutiva crônica (DPOC</label><br/>
                  <input type="text"  value={this.state.pulmonary_2_2} onChange={this.setPulmonary22} maxLength="5" className="answers-60" id="2.2-pulmonary" name="answers[2.2[pulmonary]]"  />
                  <br/><br/>
                  <label>Epilepsia</label><br/>
                  <input type="text"  value={this.state.epilepsy_2_2} onChange={this.setEpilepsy22} maxLength="5" className="answers-61" id="2.2-epilepsy" name="answers[2.2[epilepsy]]"  />
                  <br/><br/>
                  <label>Hipertensão arterial</label><br/>
                  <input type="text"  value={this.state.hypertension_2_2} onChange={this.setHypertension22} maxLength="5" className="answers-62" id="2.2-hypertension" name="answers[2.2[hypertension]]"  />
                  <br/><br/>
                  <label>Insuficiência cardíaca</label><br/>
                  <input type="text"  value={this.state.insufficiency_2_2} onChange={this.setInsufficiency22} maxLength="5" className="answers-63" id="2.2-insufficiency" name="answers[2.2[insufficiency]]"  />
                  <br/><br/>
                  <label>Úlcera péptica</label><br/>
                  <input type="text"  value={this.state.ulcer_2_2} onChange={this.setUlcer22} maxLength="5" className="answers-64" id="2.2-Ulcer" name="answers[2.2[Ulcer]]"  />
                  <br/><br/>

                  <h2> CONDIÇÕES FREQUENTES </h2>
                  <label>Depressão</label><br/>
                  <input type="text"  value={this.state.depression_2_2} onChange={this.setDepression22} maxLength="5" className="answers-65" id="2.2-depression" name="answers[2.2[depression]]"  />
                  <br/><br/>
                  <label>Incontinência urinária</label><br/>
                  <input type="text" value={this.state.urinary_2_2} onChange={this.setUrinary22} maxLength="5" className="answers-66" id="2.2-urinary" name="answers[2.2[urinary]]"  />
                  <br/><br/>
                  <label>Incontinência fecal</label><br/>
                  <input type="text"  value={this.state.faecal_2_2} onChange={this.setFaecal22} maxLength="5" className="answers-67" id="2.2-faecal" name="answers[2.2[faecal]]"  />
                  <br/><br/>
                  <label>Insuficiência cognitiva(demência)</label><br/>
                  <input type="text"  value={this.state.insanity_2_2} onChange={this.setInsanity22} maxLength="5" className="answers-68" id="2.2-insanity" name="answers[2.2[insanity]]"  />
                  <br/><br/>
                  <label>InsufiOutras condições(diagnósticos)</label><br/>
                  <input type="text"  value={this.state.other_2_2} onChange={this.setOther22} maxLength="5" className="answers-69" id="2.2-other" name="answers[2.2[other]]"  />
                  <br/><br/>
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

  setAvc22(evt) {
    this.setState({avc_2_2: evt.target.value});  
  }
  
  setAnemia22(evt) {
    this.setState({anemia_2_2: evt.target.value});  
  }

  setAsthma22(evt) {
    this.setState({asthma_2_2: evt.target.value});  
  }

  setDiabetes22(evt) {
    this.setState({diabetes_2_2: evt.target.value});  
  }

  setArtery22(evt) {
    this.setState({artery_2_2: evt.target.value});  
  }

  setPulmonary22(evt) {
    this.setState({pulmonary_2_2: evt.target.value});  
  }

  setEpilepsy22(evt) {
    this.setState({epilepsy_2_2: evt.target.value});  
  }

  setHypertension22(evt) {
    this.setState({hypertension_2_2: evt.target.value});  
  }

  setInsufficiency22(evt) {
    this.setState({insufficiency_2_2: evt.target.value});  
  }

  setUlcer22(evt) {
    this.setState({ulcer_2_2: evt.target.value});  
  }

  setDepression22(evt) {
    this.setState({depression_2_2: evt.target.value});  
  }

  setUrinary22(evt) {
    this.setState({urinary_2_2: evt.target.value});  
  }

  setFaecal22(evt) {
    this.setState({faecal_2_2: evt.target.value});  
  }

  setInsanity22(evt) {
    this.setState({insanity_2_2: evt.target.value});  
  }

  setOther22(evt) {
    this.setState({other_2_2: evt.target.value});  
  }

}

export default DiagnosisPreviousHospitalization