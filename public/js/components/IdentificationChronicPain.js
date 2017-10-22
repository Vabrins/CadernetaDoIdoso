import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class IdentificationChronicPain extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', upperpain_2_10:'', shockorburning_2_10:'', painwhenwalking_2_10:'', resting_2_10:''};
    this.sendForm = this.sendForm.bind(this);
    this.setUpperPain210 = this.setUpperPain210.bind(this);
    this.setShockorBurning210 = this.setShockorBurning210.bind(this);
    this.setPainwhenWalking210 = this.setPainwhenWalking210.bind(this);
    this.setResting210 = this.setResting210.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/identificationchronicpain",
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
      url: "http://127.0.0.1:8000/api/v1/identificationchronicpain",
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
            <form id="identificationchronicpain" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2> IDENTIFICAÇÃO DE DOR CRÔNICA </h2>
                  <label>Você tem alguma dor com duração igual ou superior a 3 meses? </label><br/>
                  <input type="radio" value={this.state.upperpain_2_10} onChange={this.setUpperPain210} className="answers-104" id="2.10-upperpain-y" name="answers[2.10[upperpain]]" value="1"  />Sim
                  <input type="radio" value={this.state.upperpain_2_10} onChange={this.setUpperPain210} className="answers-104" id="2.10-upperpain-n" name="answers[2.10[upperpain]]" value="0"  />Não
                  <br/><br/>
                  <label>A dor é como um choque ou uma queimação? </label><br/>
                  <input type="radio" value={this.state.shockorburning_2_10} onChange={this.setShockorBurning210} className="answers-105" id="2.10-shockorburning-y" name="answers[2.10[shockorburning]]" value="1"  />Sim
                  <input type="radio" value={this.state.shockorburning_2_10} onChange={this.setShockorBurning210} className="answers-105" id="2.10-shockorburning-n" name="answers[2.10[shockorburning]]" value="0"  />Não
                  <br/><br/>
                  <label>A dor piora ao andar?</label><br/>
                  <input type="radio" value={this.state.painwhenwalking_2_10} onChange={this.setPainwhenWalking210} className="answers-106" id="2.10-painwhenwalking-y" name="answers[2.10[painwhenwalking]]" value="1"  />Sim
                  <input type="radio" value={this.state.painwhenwalking_2_10} onChange={this.setPainwhenWalking210} className="answers-106" id="2.10-painwhenwalking-n" name="answers[2.10[painwhenwalking]]" value="0"  />Não
                  <br/><br/>
                  <label>A dor melhora com o repouso?</label><br/>
                  <input type="radio" value={this.state.resting_2_10} onChange={this.setResting210} className="answers-107" id="2.10-resting-y" name="answers[2.10[resting]]" value="1"  />Sim
                  <input type="radio" value={this.state.resting_2_10} onChange={this.setResting210} className="answers-107" id="2.10-resting-n" name="answers[2.10[resting]]" value="0"  />Não
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

  setUpperPain210(evt) {
    this.setState({upperpain_2_10: evt.target.value});  
  }

  setShockorBurning210(evt) {
    this.setState({shockorburning_2_10: evt.target.value});  
  }

  setPainwhenWalking210(evt) {
    this.setState({painwhenwalking_2_10: evt.target.value});  
  }

  setResting210(evt) {
    this.setState({resting_2_10: evt.target.value});  
  }
}

export default IdentificationChronicPain