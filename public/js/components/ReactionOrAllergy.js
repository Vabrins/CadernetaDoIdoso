import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

const initialState = {
  medicine_2_4:'', date_2_4:'', adverse_reactions_or_allergies_2_4:''
};

class ReactionOrAllergy extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = initialState;
    this.sendForm = this.sendForm.bind(this);
    this.setMedication24 = this.setMedication24.bind(this);
    this.setData24 = this.setData24.bind(this);
    this.setAllergies24 = this.setAllergies24.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/reactionorallergy",
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
      url: "/api/v1/reactionorallergy",
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
            <form id="reactionorallergy" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <label>Medicamento</label><br/>
                  <input type="text" value={this.state.medicine_2_4} onChange={this.setMedication24} maxLength="30" className="answers-73" id="2.4-medication" name="answers[2.4[medication]]"  />
                  <br/><br/>
                  <label>Data</label><br/>
                  <input type="date" value={this.state.date_2_4} onChange={this.setData24} className="answers-74" id="2.4-data" name="answers[2.4[data]]"  />
                  <br/><br/>
                  <label>Reações adversas ou alergias</label><br/>
                  <input type="text"  value={this.state.adverse_reactions_or_allergies_2_4} onChange={this.setAllergies24} maxLength="255" className="answers-75" id="2.4-allergies" name="answers[2.4[allergies]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Reações ou Alergias">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/surgeriesperformed" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={this.sendForm}><i className="fa fa-floppy-o" aria-hidden="true"></i></a>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/anthropometricdata"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>

    )
  }

  setMedication24(evt) {
    this.setState({medicine_2_4: evt.target.value});  
  }

  setData24(evt) {
    this.setState({date_2_4: evt.target.value});  
  }

  setAllergies24(evt) {
    this.setState({adverse_reactions_or_allergies_2_4: evt.target.value});  
  }
}

export default ReactionOrAllergy