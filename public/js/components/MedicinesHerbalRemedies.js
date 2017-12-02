import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class MedicinesHerbalRemedies extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {name_of_the_medicinal_supplement_or_vitamin_2_1:'', dose_and_frequency_2_1:'', start_date_or_time_of_use_2_1:'', concomitant_use_of_five_or_more_medicines_2_1:'', it_was_prescribed_by_some_professional_2_1:'', suspension_information_2_1:''};
    this.sendForm = this.sendForm.bind(this);
    this.setSupplement21 = this.setSupplement21.bind(this);
    this.setDose21 = this.setDose21.bind(this);
    this.setStartdate21 = this.setStartdate21.bind(this);
    this.setMedicines21 = this.setMedicines21.bind(this);
    this.setDoctor21 = this.setDoctor21.bind(this);
    this.setSuspension21 = this.setSuspension21.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/medicinesherbalremedies",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {
    $.ajax({
      url: "/api/v1/medicinesherbalremedies",
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
            <form id="medicinesherbalremedies" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <label>Nome do medicamento, do fitoterápico, do suplemento ou da vitamina e sua concentração</label><br/>
                  <input type="text" value={this.state.name_of_the_medicinal_supplement_or_vitamin_2_1} onChange={this.setSupplement21} className="answers-51" id="2.1-supplement" name="answers[2.1[supplement]]"  />
                  <br/><br/>
                  <label>Dose e frequência</label><br/>
                  <input type="text" value={this.state.dose_and_frequency_2_1} onChange={this.setDose21} className="answers-52" id="2.1-dose" name="answers[2.1[dose]]"  />
                  <br/><br/>
                  <label>Data de início ou tempo de uso</label><br/>
                  <input type="text" value={this.state.start_date_or_time_of_use_2_1} onChange={this.setStartdate21} className="answers-53" id="2.1-startdate" name="answers[2.1[startdate]]"  />
                  <br/><br/>
                  <label>Uso concomitante de 5 ou mais medicamentos? </label><br/>
                  <input type="radio" checked={this.state.concomitant_use_of_five_or_more_medicines_2_1 === "1"} onChange={this.setMedicines21} className="answers-54" id="2.1-medicines-y" name="answers[2.1[medicines]]" value="1"  />Sim
                  <input type="radio" checked={this.state.concomitant_use_of_five_or_more_medicines_2_1 === "0"} onChange={this.setMedicines21} className="answers-54" id="2.1-medicines-n" name="answers[2.1[medicines]]" value="0"  />Não
                  <br/><br/>
                  <label>Foi prescrito por algum profissional de saúde? Qual?</label><br/>
                  <input type="text" value={this.state.it_was_prescribed_by_some_professional_2_1} onChange={this.setDoctor21} className="answers-54a" id="2.1-doctor" name="answers[2.1[doctor]]"  />
                  <br/><br/>
                  <label>Suspensão - Data/Motivo</label><br/>
                  <input type="text" value={this.state.suspension_information_2_1} onChange={this.setSuspension21} className="answers-55a" id="2.1-suspension" name="answers[2.1[suspension]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Avaliação da pessoa idosa">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <Link className="page-link" to="/socialfamilyinformations" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" onClick={this.sendForm} to="/diagnosisprevioushospitalization"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>

    )
  }

  setSupplement21(evt) {
    this.setState({name_of_the_medicinal_supplement_or_vitamin_2_1: evt.target.value});  
  }

  setDose21(evt) {
    this.setState({dose_and_frequency_2_1: evt.target.value});  
  }

  setStartdate21(evt) {
    this.setState({start_date_or_time_of_use_2_1: evt.target.value});  
  }

  setMedicines21(evt) {
    this.setState({concomitant_use_of_five_or_more_medicines_2_1: evt.target.value});  
  }

  setDoctor21(evt) {
    this.setState({it_was_prescribed_by_some_professional_2_1: evt.target.value});  
  }

  setSuspension21(evt) {
    this.setState({suspension_information_2_1: evt.target.value});  
  }
}

export default MedicinesHerbalRemedies