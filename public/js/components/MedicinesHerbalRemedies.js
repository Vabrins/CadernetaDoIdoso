import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class PersonalData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', supplement_2_1:'', dose_2_1:'', startdate_2_1:'', medicines_2_1:'', doctor_2_1:'', suspension_2_1:''};
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
      url: "http://127.0.0.1:8000/api/v1/medicinesherbalremedies",
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
      url: "http://127.0.0.1:8000/api/v1/medicinesherbalremedies",
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
                  <input type="text" value={this.state.supplement_2_1} onChange={this.setSupplement21} className="answers-51" id="2.1-supplement" name="answers[2.1[supplement]]"  />
                  <br/><br/>
                  <label>Dose e frequência</label><br/>
                  <input type="text" value={this.state.dose_2_1} onChange={this.setDose21} className="answers-52" id="2.1-dose" name="answers[2.1[dose]]"  />
                  <br/><br/>
                  <label>Data de início ou tempo de uso</label><br/>
                  <input type="text" value={this.state.startdate_2_1} onChange={this.setStartdate21} className="answers-53" id="2.1-startdate" name="answers[2.1[startdate]]"  />
                  <br/><br/>
                  <label>Uso concomitante de 5 ou mais medicamentos? </label><br/>
                  <input type="radio" value={this.state.medicines_2_1} onChange={this.setMedicines21} className="answers-54" id="2.1-medicines-y" name="answers[2.1[medicines]]" value="1"  />Sim
                  <input type="radio" value={this.state.medicines_2_1} onChange={this.setMedicines21} className="answers-54" id="2.1-medicines-n" name="answers[2.1[medicines]]" value="0"  />Não
                  <br/><br/>
                  <label>Foi prescrito por algum profissional de saúde? Qual?</label><br/>
                  <input type="text" value={this.state.doctor_2_1} onChange={this.setDoctor21} className="answers-54a" id="2.1-doctor" name="answers[2.1[doctor]]"  />
                  <br/><br/>
                  <label>Suspensão:</label><br/>
                  <input type="date" value={this.state.suspension_2_1} onChange={this.setSuspension21} className="answers-55a" id="2.1-suspension" name="answers[2.1[suspension]]"  />
                  <input type="text" value={this.state.suspension_2_1} onChange={this.setSuspension21} className="answers-55a" id="2.1-suspension" name="answers[2.1[suspension]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Avaliação da pessoa idosa">
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

  setSupplement21(evt) {
    this.setState({supplement_2_1: evt.target.value});  
  }

  setDose21(evt) {
    this.setState({dose_2_1: evt.target.value});  
  }

  setStartdate21(evt) {
    this.setState({startdate_2_1: evt.target.value});  
  }

  setMedicines21(evt) {
    this.setState({medicines_2_1: evt.target.value});  
  }

  setDoctor21(evt) {
    this.setState({suspension_2_1: evt.target.value});  
  }

  setSuspension21(evt) {
    this.setState({doctor_2_1: evt.target.value});  
  }
}

export default PersonsReferences