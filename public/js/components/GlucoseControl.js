import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class GlucoseControls extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', fasting_2_11b:'', casual_2_11b:'', mgdl_2_11b:''};
    this.sendForm = this.sendForm.bind(this);
    this.setFasting211b = this.setFasting211b.bind(this);
    this.setCasual211b = this.setCasual211b.bind(this);
    this.setMgdl211b = this.setMgdl211b.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/glucosecontrol",
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
      url: "http://127.0.0.1:8000/api/v1/glucosecontrol",
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
            <form id="glucosecontrol" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2> CONTROLE DE GLICEMIA </h2>
                  <label>Jejum</label><br/>
                  <input type="radio" value={this.state.fasting_2_11b} onChange={this.setFasting211b} className="answers-131" id="2.11b-fasting-y" name="answers[2.11b[fasting]]" value="1"  />Sim
                  <input type="radio" value={this.state.fasting_2_11b} onChange={this.setFasting211b} className="answers-131" id="2.11b-fasting-n" name="answers[2.11b[fasting]]" value="0"  />Não
                  <br/><br/>
                  <label>Casual</label><br/>
                  <input type="radio" value={this.state.casual_2_11b} onChange={this.setCasual211b} className="answers-132" id="2.11b-casual-y" name="answers[2.11b[casual]]" value="1"  />Sim
                  <input type="radio" value={this.state.casual_2_11b} onChange={this.setCasual211b} className="answers-132" id="2.11b-casual-n" name="answers[2.11b[casual]]" value="0"  />Não
                  <br/><br/>
                  <label>mg/dL</label><br/>
                  <input type="text"  value={this.state.mgdl_2_11b} onChange={this.setMgdl211b} className="answers-133" id="2.11b-mgdl" name="answers[2.11b[mgdl]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label=" Controle da Pressão Arterial">
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

  setFasting211b(evt) {
    this.setState({fasting_2_11b: evt.target.value});  
  }

  setCasual211b(evt) {
    this.setState({casual_2_11b: evt.target.value});  
  }

  setMgdl211b(evt) {
    this.setState({mgdl_2_11b: evt.target.value});  
  }
}

export default GlucoseControls