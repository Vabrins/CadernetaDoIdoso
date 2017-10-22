import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class OralHealthAssessment extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', alcohol_2_11d:'', smoke_2_11d:'', mucosalinjury_2_11d:'', drymouth_2_11d:'', whitetongue_2_11d:'', oralcandidiasis_2_11d:'', halitosis_2_11d:'', bacterialplaque_2_11d:'', residualroots_2_11d:'', gingivitis_2_11d:'', periodontitis_2_11d:'', caries_2_11d:'', dentalloss_2_11d:'', healthunit_2_11d:'', homecare_2_11d:'', dentalspecialties_2_11d:''};
    this.sendForm = this.sendForm.bind(this);
    this.setAlcohol211d = this.setAlcohol211d.bind(this);
    this.setSmoke211d = this.setSmoke211d.bind(this);
    this.setMucosalInjury211d = this.setMucosalInjury211d.bind(this);
    this.setDrymouth211d = this.setDrymouth211d.bind(this);
    this.setWhiteTongue211d = this.setWhiteTongue211d.bind(this);
    this.setOralCandidiasis211d = this.setOralCandidiasis211d.bind(this);
    this.setHalitosis211d = this.setHalitosis211d.bind(this);
    this.setBacterialPlaque211d = this.setBacterialPlaque211d.bind(this);
    this.setResidualRoots211d = this.setResidualRoots211d.bind(this);
    this.setGingivitis211d = this.setGingivitis211d.bind(this);
    this.setPeriodontitis211d = this.setPeriodontitis211d.bind(this);
    this.setCaries211d = this.setCaries211d.bind(this);
    this.setDentalLoss211d = this.setDentalLoss211d.bind(this);
    this.setHealtHunit211d = this.setHealtHunit211d.bind(this);
    this.setHomeCare211d = this.setHomeCare211d.bind(this);
    this.setDentalSpecialTies211d = this.setDentalSpecialTies211d.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/oralhealthassessment",
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
      url: "http://127.0.0.1:8000/api/v1/oralhealthassessment",
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
            <form id="oralhealthassessment" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2>AVALIAÇÃO DE SAÚDE BUCAL </h2>
                  <h2> HÁBITOS </h2>
                  <label>Álcool</label><br/>
                  <input type="radio" value={this.state.alcohol_2_11d} onChange={this.setAlcohol211d} className="answers-139" id="2.11d-Alcohol-y" name="answers[2.11d[Alcohol]]" value="y"  />Sim
                  <input type="radio" value={this.state.alcohol_2_11d} onChange={this.setAlcohol211d} className="answers-139" id="2.11d-Alcohol-n" name="answers[2.11d[Alcohol]]" value="n"  />Não
                  <br/><br/>
                  <label>Fumo</label><br/>
                  <input type="radio" value={this.state.smoke_2_11d} onChange={this.setSmoke211d} className="answers-140" id="2.11d-smoke-y" name="answers[2.11d[smoke]]" value="y"  />Sim
                  <input type="radio" value={this.state.smoke_2_11d} onChange={this.setSmoke211d} className="answers-140" id="2.11d-smoke-n" name="answers[2.11d[smoke]]" value="n"  />Não
                  <br/><br/>
                  <h2> ALTERAÇÕES OU LESÕES DE MUCOSA </h2>
                  <label>Presença de lesão na mucosa bucal </label><br/>
                  <input type="radio" value={this.state.mucosalinjury_2_11d} onChange={this.setMucosalInjury211d} className="answers-141" id="2.11d-mucosalinjury-y" name="answers[2.11d[mucosalinjury]]" value="y"  />Sim
                  <input type="radio" value={this.state.mucosalinjury_2_11d} onChange={this.setMucosalInjury211d} className="answers-141" id="2.11d-mucosalinjury-n" name="answers[2.11d[mucosalinjury]]" value="n"  />Não
                  <br/><br/>
                  <label>Boca seca (xerostomia – falta de saliva)</label><br/>
                  <input type="radio" value={this.state.drymouth_2_11d} onChange={this.setDrymouth211d} className="answers-142" id="2.11d-drymouth-y" name="answers[2.11d[drymouth]]" value="y"  />Sim
                  <input type="radio" value={this.state.drymouth_2_11d} onChange={this.setDrymouth211d} className="answers-142" id="2.11d-drymouth-n" name="answers[2.11d[drymouth]]" value="n"  />Não
                  <br/><br/>
                  <label>Presença de língua saburrosa (língua branca)</label><br/>
                  <input type="radio" value={this.state.whitetongue_2_11d} onChange={this.setWhiteTongue211d} className="answers-143" id="2.11d-whitetongue-y" name="answers[2.11d[whitetongue]]" value="y"  />Sim
                  <input type="radio" value={this.state.whitetongue_2_11d} onChange={this.setWhiteTongue211d} className="answers-143" id="2.11d-whitetongue-n" name="answers[2.11d[whitetongue]]" value="n"  />Não
                  <br/><br/>
                  <label>Presença de candidíase bucal</label><br/>
                  <input type="radio" value={this.state.oralcandidiasis_2_11d} onChange={this.setOralCandidiasis211d} className="answers-144" id="2.11d-oralcandidiasis-y" name="answers[2.11d[oralcandidiasis]]" value="y"  />Sim
                  <input type="radio" value={this.state.oralcandidiasis_2_11d} onChange={this.setOralCandidiasis211d} className="answers-144" id="2.11d-oralcandidiasis-n" name="answers[2.11d[oralcandidiasis]]" value="n"  />Não
                  <br/><br/>
                  <label>Presença de halitose</label><br/>
                  <input type="radio" value={this.state.halitosis_2_11d} onChange={this.setHalitosis211d} className="answers-145" id="2.11d-halitosis-y" name="answers[2.11d[halitosis]]" value="y"  />Sim
                  <input type="radio" value={this.state.halitosis_2_11d} onChange={this.setHalitosis211d} className="answers-145" id="2.11d-halitosis-n" name="answers[2.11d[halitosis]]" value="n"  />Não
                  <br/><br/>
                  <h2> CÁRIE DENTÁRIA E DOENÇA PERIODONTAL </h2>
                  <label>Presença de placa bacteriana (biofilme dental)</label><br/>
                  <input type="radio" value={this.state.bacterialplaque_2_11d} onChange={this.setBacterialPlaque211d} className="answers-146" id="2.11d-bacterialplaque-y" name="answers[2.11d[bacterialplaque]]" value="y"  />Sim
                  <input type="radio" value={this.state.bacterialplaque_2_11d} onChange={this.setBacterialPlaque211d} className="answers-146" id="2.11d-bacterialplaque-n" name="answers[2.11d[bacterialplaque]]" value="n"  />Não
                  <br/><br/>
                  <label>Fatores retentivos de placa (raízes residuais, cálculo)</label><br/>
                  <input type="radio" value={this.state.residualroots_2_11d} onChange={this.setResidualRoots211d} className="answers-147" id="2.11d-residualroots-y" name="answers[2.11d[residualroots]]" value="y"  />Sim
                  <input type="radio" value={this.state.residualroots_2_11d} onChange={this.setResidualRoots211d} className="answers-147" id="2.11d-residualroots-n" name="answers[2.11d[residualroots]]" value="n"  />Não
                  <br/><br/>
                  <label>Presença evidente de gengivite/sangramento gengival</label><br/>
                  <input type="radio" value={this.state.gingivitis_2_11d} onChange={this.setGingivitis211d} className="answers-148" id="2.11d-gingivitis-y" name="answers[2.11d[gingivitis]]" value="y"  />Sim
                  <input type="radio" value={this.state.gingivitis_2_11d} onChange={this.setGingivitis211d} className="answers-148" id="2.11d-gingivitis-n" name="answers[2.11d[gingivitis]]" value="n"  />Não
                  <br/><br/>
                  <label>Presença evidente de periodontite/perda óssea</label><br/>
                  <input type="radio" value={this.state.periodontitis_2_11d} onChange={this.setPeriodontitis211d} className="answers-149" id="2.11d-periodontitis-y" name="answers[2.11d[periodontitis]]" value="y"  />Sim
                  <input type="radio" value={this.state.periodontitis_2_11d} onChange={this.setPeriodontitis211d} className="answers-149" id="2.11d-periodontitis-n" name="answers[2.11d[periodontitis]]" value="n"  />Não
                  <br/><br/>
                  <label>Presença de cárie</label><br/>
                  <input type="radio" value={this.state.caries_2_11d} onChange={this.setCaries211d} className="answers-150" id="2.11d-caries-y" name="answers[2.11d[caries]]" value="y"  />Sim
                  <input type="radio" value={this.state.caries_2_11d} onChange={this.setCaries211d} className="answers-150" id="2.11d-caries-n" name="answers[2.11d[caries]]" value="n"  />Não
                  <br/><br/>
                  <label>Perda dental no último ano</label><br/>
                  <input type="radio" value={this.state.dentalloss_2_11d} onChange={this.setDentalLoss211d} className="answers-151" id="2.11d-dentalloss-y" name="answers[2.11d[dentalloss]]" value="y"  />Sim
                  <input type="radio" value={this.state.dentalloss_2_11d} onChange={this.setDentalLoss211d} className="answers-151" id="2.11d-dentalloss-n" name="answers[2.11d[dentalloss]]" value="n"  />Não
                  <br/><br/>
                  <h2> CONSULTA CLÍNICA(EQUIPE DE SAÚDE BUCAL </h2>
                  <label>Atendimento na unidade de saúde</label><br/>
                  <input type="radio" value={this.state.healthunit_2_11d} onChange={this.setHealtHunit211d} className="answers-152" id="2.11d-healthunit-y" name="answers[2.11d[healthunit]]" value="y"  />Sim
                  <input type="radio" value={this.state.healthunit_2_11d} onChange={this.setHealtHunit211d} className="answers-152" id="2.11d-healthunit-n" name="answers[2.11d[healthunit]]" value="n"  />Não
                  <br/><br/>
                  <label>Atendimento no domicílio</label><br/>
                  <input type="radio" value={this.state.homecare_2_11d} onChange={this.setHomeCare211d} className="answers-153" id="2.11d-homecare-y" name="answers[2.11d[homecare]]" value="y"  />Sim
                  <input type="radio" value={this.state.homecare_2_11d} onChange={this.setHomeCare211d} className="answers-153" id="2.11d-homecare-n" name="answers[2.11d[homecare]]" value="n"  />Não
                  <br/><br/>
                  <label>Encaminhamento para especialidades odontológicas</label><br/>
                  <input type="text"  value={this.state.dentalspecialties_2_11d} onChange={this.setDentalSpecialTies211d} maxLength="2" className="answers-154" id="2.11d-dentalspecialties" name="answers[2.11d[dentalspecialties]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Avaliação de saúde bucal">
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

  setAlcohol211d(evt) {
    this.setState({alcohol_2_11d: evt.target.value});  
  }

  setSmoke211d(evt) {
    this.setState({smoke_2_11d: evt.target.value});  
  }

  setMucosalInjury211d(evt) {
    this.setState({mucosalinjury_2_11d: evt.target.value});  
  }

  setDrymouth211d(evt) {
    this.setState({drymouth_2_11d: evt.target.value});  
  }

  setWhiteTongue211d(evt) {
    this.setState({whitetongue_2_11d: evt.target.value});  
  }

  setOralCandidiasis211d(evt) {
    this.setState({oralcandidiasis_2_11d: evt.target.value});  
  }

  setHalitosis211d(evt) {
    this.setState({halitosis_2_11d: evt.target.value});  
  }

  setBacterialPlaque211d(evt) {
    this.setState({bacterialplaque_2_11d: evt.target.value});  
  }

  setResidualRoots211d(evt) {
    this.setState({residualroots_2_11d: evt.target.value});  
  }

  setGingivitis211d(evt) {
    this.setState({gingivitis_2_11d: evt.target.value});  
  }

  setPeriodontitis211d(evt) {
    this.setState({periodontitis_2_11d: evt.target.value});  
  }

  setCaries211d(evt) {
    this.setState({caries_2_11d: evt.target.value});  
  }

  setDentalLoss211d(evt) {
    this.setState({dentalloss_2_11d: evt.target.value});  
  }

  setHealtHunit211d(evt) {
    this.setState({healthunit_2_11d: evt.target.value});  
  }

  setHomeCare211d(evt) {
    this.setState({homecare_2_11d: evt.target.value});  
  }

  setDentalSpecialTies211d(evt) {
    this.setState({dentalspecialties_2_11d: evt.target.value});  
  }

}

export default OralHealthAssessment