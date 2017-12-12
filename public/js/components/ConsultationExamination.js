import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

const initialState = {
  date_2_11_e:'', hour_2_11_e:'', place_2_11_e:'', query_exam_2_11_e:''
};

class ConsultationExamination extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = initialState;
    this.sendForm = this.sendForm.bind(this);
    this.setDate211e = this.setDate211e.bind(this);
    this.setHour211e = this.setHour211e.bind(this);
    this.setPlace211e = this.setPlace211e.bind(this);    
    this.setExam211e = this.setExam211e.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/consultationexamination",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  reset() {
    this.setState(initialState);
  }

  sendForm(evt) {
    let that = this;
    $.ajax({
      url: "/api/v1/consultationexamination",
      contentType: 'application/json',
      dataType: 'json',
      method: "POST",
      data: JSON.stringify({ test: this.state }),
      success: function(response){
        console.log(response);
        that.reset();
        alert("Cadastrado com sucesso!");
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
                  <input type="date" value={this.state.date_2_11_e} onChange={this.setDate211e} className="answers-172" id="2.11e-data" name="answers[2.11e[data]]"  />
                  <br/><br/>
                  <label>Hora</label><br/>
                  <input type="text"  value={this.state.hour_2_11_e} onChange={this.setHour211e} maxLength="5" className="answers-173" id="2.11e-hour" name="answers[2.11e[hour]]"  />
                  <br/><br/>
                  <label>Local</label><br/>
                  <input type="text"  value={this.state.place_2_11_e} onChange={this.setPlace211e} maxLength="5" className="answers-174" id="2.11e-local" name="answers[2.11e[local]]"  />
                  <br/><br/>
                  <label>Consulta/exame</label><br/>
                  <input type="text"  value={this.state.query_exam_2_11_e} onChange={this.setExam211e} maxLength="5" className="answers-175" id="2.11e-exam" name="answers[2.11e[exam]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Agenda de consultas e exames">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/dentalprosthesis" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={this.sendForm} to="/index"><i className="fa fa-floppy-o" aria-hidden="true"></i></a>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/index"><i className="fa fa-home" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>

    )
  }

  setDate211e(evt) {
    this.setState({date_2_11_e: evt.target.value});  
  }

  setHour211e(evt) {
    this.setState({hour_2_11_e: evt.target.value});  
  }

  setPlace211e(evt) {
    this.setState({place_2_11_e: evt.target.value});  
  }

  setExam211e(evt) {
    this.setState({query_exam_2_11_e: evt.target.value});  
  }

}

export default ConsultationExamination