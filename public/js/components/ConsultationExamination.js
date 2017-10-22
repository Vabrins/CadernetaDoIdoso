import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class PersonalData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', data_2_11e:'', hour_2_11e:'', local_2_11e:'', exam_2_11e:'', professionalname_2_11e:''};
    this.sendForm = this.sendForm.bind(this);
    this.setData211e = this.setData211e.bind(this);
    this.setHour211e = this.setHour211e.bind(this);
    this.setLocal211e = this.setLocal211e.bind(this);
    this.setExam211e = this.setExam211e.bind(this);
    this.setProfessionalName211e = this.setProfessionalName211e.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/consultationexamination",
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
      url: "http://127.0.0.1:8000/api/v1/consultationexamination",
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
            <form id="consultationexamination" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2> 2.11E AGENDA DE CONSULTAS E EXAMES </h2>
                  <label>Data</label><br/>
                  <input type="date" value={this.state.data_2_11e} onChange={this.setData211e} className="answers-172" id="2.11e-data" name="answers[2.11e[data]]"  />
                  <br/><br/>
                  <label>Hora</label><br/>
                  <input type="text"  value={this.state.hour_2_11e} onChange={this.setHour211e} maxLength="5" className="answers-173" id="2.11e-hour" name="answers[2.11e[hour]]"  />
                  <br/><br/>
                  <label>Local</label><br/>
                  <input type="text"  value={this.state.local_2_11e} onChange={this.setLocal211e} maxLength="5" className="answers-174" id="2.11e-local" name="answers[2.11e[local]]"  />
                  <br/><br/>
                  <label>Consulta/exame</label><br/>
                  <input type="text"  value={this.state.exam_2_11e} onChange={this.setExam211e} maxLength="5" className="answers-175" id="2.11e-exam" name="answers[2.11e[exam]]"  />
                  <br/><br/>
                  <label>Nome do profissional</label><br/>
                  <input type="text"  value={this.state.professionalname_2_11e} onChange={this.setProfessionalName211e} maxLength="5" className="answers-176" id="2.11e-professionalname" name="answers[2.11e[professionalname]]"  />
                  <br/><br/> 
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Agenda de consultas e exames">
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

  setData211e(evt) {
    this.setState({data_2_11e: evt.target.value});  
  }

  setHour211e(evt) {
    this.setState({hour_2_11e: evt.target.value});  
  }

  setLocal211e(evt) {
    this.setState({local_2_11e: evt.target.value});  
  }

  setExam211e(evt) {
    this.setState({exam_2_11e: evt.target.value});  
  }

  setProfessionalName211e(evt) {
    this.setState({professionalname_2_11e: evt.target.value});  
  }

}

export default PersonsReferences