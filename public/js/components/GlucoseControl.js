import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

const initialState = {
  fasting_2_11_b:'', casual_2_11_b:'', mg_dl_2_11_b:''
};

class GlucoseControls extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = initialState;
    this.sendForm = this.sendForm.bind(this);
    this.setFasting211b = this.setFasting211b.bind(this);
    this.setCasual211b = this.setCasual211b.bind(this);
    this.setMgdl211b = this.setMgdl211b.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/glucosecontrol",
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
      url: "/api/v1/glucosecontrol",
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
            <form id="glucosecontrol" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2> CONTROLE DE GLICEMIA </h2>
                  <label>Jejum</label><br/>
                  <input type="radio" checked={this.state.fasting_2_11_b === '1'} onChange={this.setFasting211b} className="answers-131" id="2.11b-fasting-y" name="answers[2.11b[fasting]]" value="1"  />Sim
                  <input type="radio" checked={this.state.fasting_2_11_b === '0'} onChange={this.setFasting211b} className="answers-131" id="2.11b-fasting-n" name="answers[2.11b[fasting]]" value="0"  />Não
                  <br/><br/>
                  <label>Casual</label><br/>
                  <input type="radio" checked={this.state.casual_2_11_b === '1'} onChange={this.setCasual211b} className="answers-132" id="2.11b-casual-y" name="answers[2.11b[casual]]" value="1"  />Sim
                  <input type="radio" checked={this.state.casual_2_11_b === '0'} onChange={this.setCasual211b} className="answers-132" id="2.11b-casual-n" name="answers[2.11b[casual]]" value="0"  />Não
                  <br/><br/>
                  <label>mg/dL</label><br/>
                  <input type="text"  value={this.state.mg_dl_2_11_b} onChange={this.setMgdl211b} className="answers-133" id="2.11b-mgdl" name="answers[2.11b[mgdl]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label=" Controle da Pressão Arterial">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/pressurecontrol" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={this.sendForm}><i className="fa fa-floppy-o" aria-hidden="true"></i></a>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/vaccinationcalendar"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>

    )
  }

  setFasting211b(evt) {
    this.setState({fasting_2_11_b: evt.target.value});  
  }

  setCasual211b(evt) {
    this.setState({casual_2_11_b: evt.target.value});  
  }

  setMgdl211b(evt) {
    this.setState({mg_dl_2_11_b: evt.target.value});  
  }
}

export default GlucoseControls