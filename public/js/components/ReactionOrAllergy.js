import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class PersonalData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', medication_2_4:'', data_2_4:'', allergies_2_4:''};
    this.sendForm = this.sendForm.bind(this);
    this.setMedication24 = this.setMedication24.bind(this);
    this.setData24 = this.setData24.bind(this);
    this.setAllergies24 = this.setAllergies24.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/reactionorallergy",
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
      url: "http://127.0.0.1:8000/api/v1/reactionorallergy",
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
            <form id="reactionorallergy" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <label>Medicamento</label><br/>
                  <input type="text" value={this.state.medication_2_4} onChange={this.setMedication24} maxLength="5" className="answers-73" id="2.4-medication" name="answers[2.4[medication]]"  />
                  <br/><br/>
                  <label>Data</label><br/>
                  <input type="date" value={this.state.data_2_4} onChange={this.setData24} className="answers-74" id="2.4-data" name="answers[2.4[data]]"  />
                  <br/><br/>
                  <label>Reações adversas ou alergias</label><br/>
                  <input type="text"  value={this.state.allergies_2_4} onChange={this.setAllergies24} maxLength="5" className="answers-75" id="2.4-allergies" name="answers[2.4[allergies]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Reações ou Alergias">
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

  setMedication24(evt) {
    this.setState({medication_2_4: evt.target.value});  
  }

  setData24(evt) {
    this.setState({data_2_4: evt.target.value});  
  }

  setAllergies24(evt) {
    this.setState({allergies_2_4: evt.target.value});  
  }
}

export default PersonsReferences