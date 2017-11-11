import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class OralHealthAssessment extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      alcohol_2_11d:'', 
      smoke_2_11d:'', 
      presence_of_lesion_on_the_buccal_mucosa_2_11d:'', 
      dry_mouth_2_11d:'', 
      white_tongue_2_11d:'', 
      presence_of_lesion_on_the_buccal_mucosa_2_11d:'', 
      presence_of_halitosis_2_11d:'', 
      presence_of_bacterial_plaque_2_11d:'', 
      plate_retentive_factors_2_11d:'', 
      obvious_presence_of_gingivitis_2_11d:'', 
      obvious_presence_of_periodontitis_2_11d:'', 
      presence_of_caries_2_11d:'', 
      dental_loss_in_last_year_2_11d:'', 
      attendance_at_the_health_unit_2_11d:'', 
      home_service_2_11d:'', 
      forwarding_for_specialties_dental_2_11d:''
    };

    this.sendForm = this.sendForm.bind(this);
    this.setAlcohol211d = this.setAlcohol211d.bind(this);
    this.setSmoke211d = this.setSmoke211d.bind(this);
    this.setPresenceOfLesionOnTheBuccalMucosa211d = this.setPresenceOfLesionOnTheBuccalMucosa211d.bind(this);
    this.setDrymouth211d = this.setDrymouth211d.bind(this);
    this.setWhiteTongue211d = this.setWhiteTongue211d.bind(this);
    this.setPresenceOfLesionOnTheBuccalMucosa211d = this.setPresenceOfLesionOnTheBuccalMucosa211d.bind(this);
    this.setPresenceOfHalitosis211d = this.setPresenceOfHalitosis211d.bind(this);
    this.setPresenceOfBacterialPlaque211d = this.setPresenceOfBacterialPlaque211d.bind(this);
    this.setPlateRetentiveFactors211d = this.setPlateRetentiveFactors211d.bind(this);
    this.setObviousPresenceOfGingivitis211d = this.setObviousPresenceOfGingivitis211d.bind(this);
    this.setObviousPresenceOfPeriodontitis211d = this.setObviousPresenceOfPeriodontitis211d.bind(this);
    this.setPresenceOfCaries211d = this.setPresenceOfCaries211d.bind(this);
    this.setDentalLossInLastYear211d = this.setDentalLossInLastYear211d.bind(this);
    this.setAttendanceAtTheHealthUnit211d = this.setAttendanceAtTheHealthUnit211d.bind(this);
    this.setHomeService211d = this.setHomeService211d.bind(this);
    this.setForwardingForSpecialtiesDental211d = this.setForwardingForSpecialtiesDental211d.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/oralhealthassessment",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {
    $.ajax({
      url: "/api/v1/oralhealthassessment",
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
                  <input type="radio" checked={this.state.alcohol_2_11d === '1'} onChange={this.setAlcohol211d} className="answers-139" id="2.11d-Alcohol-y" name="answers[2.11d[Alcohol]]" value="1"  />Sim
                  <input type="radio" checked={this.state.alcohol_2_11d === '0'} onChange={this.setAlcohol211d} className="answers-139" id="2.11d-Alcohol-n" name="answers[2.11d[Alcohol]]" value="0"  />Não
                  <br/><br/>
                  <label>Fumo</label><br/>
                  <input type="radio" checked={this.state.smoke_2_11d === '1'} onChange={this.setSmoke211d} className="answers-140" id="2.11d-smoke-y" name="answers[2.11d[smoke]]" value="1"  />Sim
                  <input type="radio" checked={this.state.smoke_2_11d === '0'} onChange={this.setSmoke211d} className="answers-140" id="2.11d-smoke-n" name="answers[2.11d[smoke]]" value="0"  />Não
                  <br/><br/>
                  <h2> ALTERAÇÕES OU LESÕES DE MUCOSA </h2>
                  <label>Presença de lesão na mucosa bucal </label><br/>
                  <input type="radio" checked={this.state.presence_of_lesion_on_the_buccal_mucosa_2_11d === '1'} onChange={this.setPresenceOfLesionOnTheBuccalMucosa211d} className="answers-141" id="2.11d-presence_of_lesion_on_the_buccal_mucosa-y" name="answers[2.11d[presence_of_lesion_on_the_buccal_mucosa]]" value="1"  />Sim
                  <input type="radio" checked={this.state.presence_of_lesion_on_the_buccal_mucosa_2_11d === '0'} onChange={this.setPresenceOfLesionOnTheBuccalMucosa211d} className="answers-141" id="2.11d-presence_of_lesion_on_the_buccal_mucosa-n" name="answers[2.11d[presence_of_lesion_on_the_buccal_mucosa]]" value="0"  />Não
                  <br/><br/>
                  <label>Boca seca (xerostomia – falta de saliva)</label><br/>
                  <input type="radio" checked={this.state.drymouth_2_11d === '1'} onChange={this.setDrymouth211d} className="answers-142" id="2.11d-drymouth-y" name="answers[2.11d[drymouth]]" value="1"  />Sim
                  <input type="radio" checked={this.state.drymouth_2_11d === '0'} onChange={this.setDrymouth211d} className="answers-142" id="2.11d-drymouth-n" name="answers[2.11d[drymouth]]" value="0"  />Não
                  <br/><br/>
                  <label>Presença de língua saburrosa (língua branca)</label><br/>
                  <input type="radio" checked={this.state.whitetongue_2_11d === '1'} onChange={this.setWhiteTongue211d} className="answers-143" id="2.11d-whitetongue-y" name="answers[2.11d[whitetongue]]" value="1" />Sim
                  <input type="radio" checked={this.state.whitetongue_2_11d === '0'} onChange={this.setWhiteTongue211d} className="answers-143" id="2.11d-whitetongue-n" name="answers[2.11d[whitetongue]]" value="0" />Não
                  <br/><br/>
                  <label>Presença de candidíase bucal</label><br/>
                  <input type="radio" checked={this.state.presence_of_lesion_on_the_buccal_mucosa_2_11d === '1'} onChange={this.setPresenceOfLesionOnTheBuccalMucosa211d} className="answers-144" id="2.11d-presence_of_lesion_on_the_buccal_mucosa-y" name="answers[2.11d[presence_of_lesion_on_the_buccal_mucosa]]" value="1"  />Sim
                  <input type="radio" checked={this.state.presence_of_lesion_on_the_buccal_mucosa_2_11d === '0'} onChange={this.setPresenceOfLesionOnTheBuccalMucosa211d} className="answers-144" id="2.11d-presence_of_lesion_on_the_buccal_mucosa-n" name="answers[2.11d[presence_of_lesion_on_the_buccal_mucosa]]" value="0"  />Não
                  <br/><br/>
                  <label>Presença de halitose</label><br/>
                  <input type="radio" checked={this.state.presence_of_halitosis_2_11d === '1'} onChange={this.setPresenceOfHalitosis211d} className="answers-145" id="2.11d-presence_of_halitosis-y" name="answers[2.11d[presence_of_halitosis]]" value="1"  />Sim
                  <input type="radio" checked={this.state.presence_of_halitosis_2_11d === '0'} onChange={this.setPresenceOfHalitosis211d} className="answers-145" id="2.11d-presence_of_halitosis-n" name="answers[2.11d[presence_of_halitosis]]" value="0"  />Não
                  <br/><br/>
                  <h2> CÁRIE DENTÁRIA E DOENÇA PERIODONTAL </h2>
                  <label>Presença de placa bacteriana (biofilme dental)</label><br/>
                  <input type="radio" checked={this.state.presence_of_bacterial_plaque_2_11d === '1'} onChange={this.setPresenceOfBacterialPlaque211d} className="answers-146" id="2.11d-presence_of_bacterial_plaque-y" name="answers[2.11d[presence_of_bacterial_plaque]]" value="1"  />Sim
                  <input type="radio" checked={this.state.presence_of_bacterial_plaque_2_11d === '0'} onChange={this.setPresenceOfBacterialPlaque211d} className="answers-146" id="2.11d-presence_of_bacterial_plaque-n" name="answers[2.11d[presence_of_bacterial_plaque]]" value="0"  />Não
                  <br/><br/>
                  <label>Fatores retentivos de placa (raízes residuais, cálculo)</label><br/>
                  <input type="radio" checked={this.state.plate_retentive_factors_2_11d === '1'} onChange={this.setPlateRetentiveFactors211d} className="answers-147" id="2.11d-plate_retentive_factors-y" name="answers[2.11d[plate_retentive_factors]]" value="1"  />Sim
                  <input type="radio" checked={this.state.plate_retentive_factors_2_11d === '0'} onChange={this.setPlateRetentiveFactors211d} className="answers-147" id="2.11d-plate_retentive_factors-n" name="answers[2.11d[plate_retentive_factors]]" value="0"  />Não
                  <br/><br/>
                  <label>Presença evidente de gengivite/sangramento gengival</label><br/>
                  <input type="radio" checked={this.state.obvious_presence_of_gingivitis_2_11d === '1'} onChange={this.setObviousPresenceOfGingivitis211d} className="answers-148" id="2.11d-obvious_presence_of_gingivitis-y" name="answers[2.11d[obvious_presence_of_gingivitis]]" value="1"  />Sim
                  <input type="radio" checked={this.state.obvious_presence_of_gingivitis_2_11d === '0'} onChange={this.setObviousPresenceOfGingivitis211d} className="answers-148" id="2.11d-obvious_presence_of_gingivitis-n" name="answers[2.11d[obvious_presence_of_gingivitis]]" value="0"  />Não
                  <br/><br/>
                  <label>Presença evidente de periodontite/perda óssea</label><br/>
                  <input type="radio" checked={this.state.obvious_presence_of_periodontitis_2_11d === '1'} onChange={this.setObviousPresenceOfPeriodontitis211d} className="answers-149" id="2.11d-obvious_presence_of_periodontitis-y" name="answers[2.11d[obvious_presence_of_periodontitis]]" value="1"  />Sim
                  <input type="radio" checked={this.state.obvious_presence_of_periodontitis_2_11d === '0'} onChange={this.setObviousPresenceOfPeriodontitis211d} className="answers-149" id="2.11d-obvious_presence_of_periodontitis-n" name="answers[2.11d[obvious_presence_of_periodontitis]]" value="0"  />Não
                  <br/><br/>
                  <label>Presença de cárie</label><br/>
                  <input type="radio" value={this.state.presence_of_caries_2_11d === '1'} onChange={this.setPresenceOfCaries211d} className="answers-150" id="2.11d-presence_of_caries-y" name="answers[2.11d[presence_of_caries]]" value="1"  />Sim
                  <input type="radio" value={this.state.presence_of_caries_2_11d === '0'} onChange={this.setPresenceOfCaries211d} className="answers-150" id="2.11d-presence_of_caries-n" name="answers[2.11d[presence_of_caries]]" value="0"  />Não
                  <br/><br/>
                  <label>Perda dental no último ano</label><br/>
                  <input type="radio" value={this.state.dental_loss_in_last_year_2_11d === '1'} onChange={this.setDentalLossInLastYear211d} className="answers-151" id="2.11d-dental_loss_in_last_year-y" name="answers[2.11d[dental_loss_in_last_year]]" value="1"  />Sim
                  <input type="radio" value={this.state.dental_loss_in_last_year_2_11d === '0'} onChange={this.setDentalLossInLastYear211d} className="answers-151" id="2.11d-dental_loss_in_last_year-n" name="answers[2.11d[dental_loss_in_last_year]]" value="0"  />Não
                  <br/><br/>
                  <h2> CONSULTA CLÍNICA(EQUIPE DE SAÚDE BUCAL </h2>
                  <label>Atendimento na unidade de saúde</label><br/>
                  <input type="radio" value={this.state.attendance_at_the_health_unit_2_11d === '1'} onChange={this.setAttendanceAtTheHealthUnit211d} className="answers-152" id="2.11d-attendance_at_the_health_unit-y" name="answers[2.11d[attendance_at_the_health_unit]]" value="1"  />Sim
                  <input type="radio" value={this.state.attendance_at_the_health_unit_2_11d === '0'} onChange={this.setAttendanceAtTheHealthUnit211d} className="answers-152" id="2.11d-attendance_at_the_health_unit-n" name="answers[2.11d[attendance_at_the_health_unit]]" value="0"  />Não
                  <br/><br/>
                  <label>Atendimento no domicílio</label><br/>
                  <input type="radio" value={this.state.home_service_2_11d === '1'} onChange={this.setHomeService211d} className="answers-153" id="2.11d-home_service-y" name="answers[2.11d[home_service]]" value="1"  />Sim
                  <input type="radio" value={this.state.home_service_2_11d === '0'} onChange={this.setHomeService211d} className="answers-153" id="2.11d-home_service-n" name="answers[2.11d[home_service]]" value="0"  />Não
                  <br/><br/>
                  <label>Encaminhamento para especialidades odontológicas</label><br/>
                  <input type="text"  value={this.state.forwarding_for_specialties_dental_2_11d} onChange={this.setForwardingForSpecialtiesDental211d} maxLength="2" className="answers-154" id="2.11d-forwarding_for_specialties_dental" name="answers[2.11d[forwarding_for_specialties_dental]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Avaliação de saúde bucal">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/vaccinationcalendar" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" onClick={this.sendForm} to="/dentalprosthesis"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
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

  setPresenceOfLesionOnTheBuccalMucosa211d(evt) {
    this.setState({presence_of_lesion_on_the_buccal_mucosa_2_11d: evt.target.value});  
  }

  setDrymouth211d(evt) {
    this.setState({drymouth_2_11d: evt.target.value});  
  }

  setWhiteTongue211d(evt) {
    this.setState({whitetongue_2_11d: evt.target.value});  
  }

  setPresenceOfLesionOnTheBuccalMucosa211d(evt) {
    this.setState({presence_of_lesion_on_the_buccal_mucosa_2_11d: evt.target.value});  
  }

  setPresenceOfHalitosis211d(evt) {
    this.setState({presence_of_halitosis_2_11d: evt.target.value});  
  }

  setPresenceOfBacterialPlaque211d(evt) {
    this.setState({presence_of_bacterial_plaque_2_11d: evt.target.value});  
  }

  setPlateRetentiveFactors211d(evt) {
    this.setState({plate_retentive_factors_2_11d: evt.target.value});  
  }

  setObviousPresenceOfGingivitis211d(evt) {
    this.setState({obvious_presence_of_gingivitis_2_11d: evt.target.value});  
  }

  setObviousPresenceOfPeriodontitis211d(evt) {
    this.setState({obvious_presence_of_periodontitis_2_11d: evt.target.value});  
  }

  setPresenceOfCaries211d(evt) {
    this.setState({presence_of_caries_2_11d: evt.target.value});  
  }

  setDentalLossInLastYear211d(evt) {
    this.setState({dental_loss_in_last_year_2_11d: evt.target.value});  
  }

  setAttendanceAtTheHealthUnit211d(evt) {
    this.setState({attendance_at_the_health_unit_2_11d: evt.target.value});  
  }

  setHomeService211d(evt) {
    this.setState({home_service_2_11d: evt.target.value});  
  }

  setForwardingForSpecialtiesDental211d(evt) {
    this.setState({forwarding_for_specialties_dental_2_11d: evt.target.value});  
  }

}

export default OralHealthAssessment