import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class IdentificationChronicPainB extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', date_2_10_b:'', place_of_pain_2_10_b:'', intensity_2_10_b:''};
    this.sendForm = this.sendForm.bind(this);
    this.setDate210b = this.setDate210b.bind(this);
    this.setPlaceOfPain210b = this.setPlaceOfPain210b.bind(this);
    this.setIntensity210b = this.setIntensity210b.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/identificationchronicpainb",
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
      url: "http://127.0.0.1:8000/api/v1/identificationchronicpainb",
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
            <form id="identificationchronicpainb" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2>IDENTIFICAÇÃO DE DOR CRÔNICA </h2>
                  <label>Data</label><br/>
                  <input type="date" value={this.state.data_2_10_b} onChange={this.setData210b} className="answers-108" id="2.10_b-data" name="answers[2.10_b[data]]"  /><br/>
                  <br/><br/>
                  <label>Local da dor</label><br/>
                  <input type="text"  value={this.state.place_of_pain_2_10_b} onChange={this.setPlaceOfPain210b} className="answers-109a" id="2.10_b-placeofpain" name="answers[2.10_b[placeofpain]]"  />
                  <label>Intensidade da dor</label><br/>
                  <input type="number"  value={this.state.intensity_2_10_b} onChange={this.setIntensity210b} className="answers-109" id="2.10_b-intensity" name="answers[2.10_b[intensity]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label=" Indentificação de dor crônica">
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

  setData210b(evt) {
    this.setState({data_2_10_b: evt.target.value});  
  }

  setPlaceOfPain210b(evt) {
    this.setState({place_of_pain_2_10_b: evt.target.value});  
  }

  setIntensity210b(evt) {
    this.setState({intensity_2_10_b: evt.target.value});  
  }
}

export default IdentificationChronicPainB