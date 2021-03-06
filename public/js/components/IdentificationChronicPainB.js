import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

const initialState = {
  date_2_10_b:'', place_of_pain_2_10_b:'', intensity_2_10_b:''
};

class IdentificationChronicPainB extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = initialState;
    this.sendForm = this.sendForm.bind(this);
    this.setDate210b = this.setDate210b.bind(this);
    this.setPlaceOfPain210b = this.setPlaceOfPain210b.bind(this);
    this.setIntensity210b = this.setIntensity210b.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/idenchronicpainsintensity",
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
      url: "/api/v1/idenchronicpainsintensity",
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
            <form id="identificationchronicpainb" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2>IDENTIFICAÇÃO DE DOR CRÔNICA </h2>
                  <label>Data</label><br/>
                  <input type="date" value={this.state.date_2_10_b} onChange={this.setDate210b} className="answers-108" id="2.10_b-data" name="answers[2.10_b[data]]"  /><br/>
                  <br/><br/>
                  <label>Local da dor</label><br/>
                  <input type="text"  value={this.state.place_of_pain_2_10_b} onChange={this.setPlaceOfPain210b} className="answers-109a" id="2.10_b-placeofpain" name="answers[2.10_b[placeofpain]]"  />
                  <br/><br/>
                  <label>Intensidade da dor</label><br/>
                  <input type="number"  value={this.state.intensity_2_10_b} onChange={this.setIntensity210b} className="answers-109" id="2.10_b-intensity" name="answers[2.10_b[intensity]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label=" Indentificação de dor crônica">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/identificationchronicpain" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={this.sendForm}><i className="fa fa-floppy-o" aria-hidden="true"></i></a>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/livinghabits"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>

    )
  }

  setDate210b(evt) {
    this.setState({date_2_10_b: evt.target.value});  
  }

  setPlaceOfPain210b(evt) {
    this.setState({place_of_pain_2_10_b: evt.target.value});  
  }

  setIntensity210b(evt) {
    this.setState({intensity_2_10_b: evt.target.value});  
  }
}

export default IdentificationChronicPainB