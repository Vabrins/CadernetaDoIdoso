import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class IdentificationChronicPain extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      do_you_have_pain_last_same_more_than_3_mon_2_10:'', 
      the_pain_is_like_a_shock_or_a_burning_2_10:'',
      does_the_pain_get_worse_when_walking_2_10:'',
      does_pain_improve_with_rest_2_10:''
    };

    this.sendForm = this.sendForm.bind(this);
    this.setDoYouHavePainLastSameMoreThan3Mon210 = this.setDoYouHavePainLastSameMoreThan3Mon210.bind(this);
    this.setThePainIsLikeaShockOraBurning210 = this.setThePainIsLikeaShockOraBurning210.bind(this);
    this.setDoesThePainGetWorseWhenWalking210 = this.setDoesThePainGetWorseWhenWalking210.bind(this);
    this.setDoesPainImproveWithRest210 = this.setDoesPainImproveWithRest210.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/identificationchronicpain",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {
    $.ajax({
      url: "/api/v1/identificationchronicpain",
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
                  <input type="radio" checked={this.state.do_you_have_pain_last_same_more_than_3_mon_2_10 === '1'} onChange={this.setDoYouHavePainLastSameMoreThan3Mon210} className="answers-104" id="2.10-do_you_have_pain_last_same_more_than_3_mon-y" name="answers[2.10[do_you_have_pain_last_same_more_than_3_mon]]" value="1"  />Sim
                  <input type="radio" checked={this.state.do_you_have_pain_last_same_more_than_3_mon_2_10 === '0'} onChange={this.setDoYouHavePainLastSameMoreThan3Mon210} className="answers-104" id="2.10-do_you_have_pain_last_same_more_than_3_mon-n" name="answers[2.10[do_you_have_pain_last_same_more_than_3_mon]]" value="0"  />Não
                  <br/><br/>
                  <label>A dor é como um choque ou uma queimação? </label><br/>
                  <input type="radio" checked={this.state.the_pain_is_like_a_shock_or_a_burning_2_10 === '1'} onChange={this.setThePainIsLikeaShockOraBurning210} className="answers-105" id="2.10-the_pain_is_like_a_shock_or_a_burning-y" name="answers[2.10[the_pain_is_like_a_shock_or_a_burning]]" value="1"  />Sim
                  <input type="radio" checked={this.state.the_pain_is_like_a_shock_or_a_burning_2_10 === '0'} onChange={this.setThePainIsLikeaShockOraBurning210} className="answers-105" id="2.10-the_pain_is_like_a_shock_or_a_burning-n" name="answers[2.10[the_pain_is_like_a_shock_or_a_burning]]" value="0"  />Não
                  <br/><br/>
                  <label>A dor piora ao andar?</label><br/>
                  <input type="radio" checked={this.state.does_the_pain_get_worse_when_walking_2_10 === '1'} onChange={this.setDoesThePainGetWorseWhenWalking210} className="answers-106" id="2.10-does_the_pain_get_worse_when_walking-y" name="answers[2.10[does_the_pain_get_worse_when_walking]]" value="1"  />Sim
                  <input type="radio" checked={this.state.does_the_pain_get_worse_when_walking_2_10 === '0'} onChange={this.setDoesThePainGetWorseWhenWalking210} className="answers-106" id="2.10-does_the_pain_get_worse_when_walking-n" name="answers[2.10[does_the_pain_get_worse_when_walking]]" value="0"  />Não
                  <br/><br/>
                  <label>A dor melhora com o repouso?</label><br/>
                  <input type="radio" checked={this.state.does_pain_improve_with_rest_2_10 === '1'} onChange={this.setDoesPainImproveWithRest210} className="answers-107" id="2.10-does_pain_improve_with_rest-y" name="answers[2.10[does_pain_improve_with_rest]]" value="1"  />Sim
                  <input type="radio" checked={this.state.does_pain_improve_with_rest_2_10 === '0'} onChange={this.setDoesPainImproveWithRest210} className="answers-107" id="2.10-does_pain_improve_with_rest-n" name="answers[2.10[does_pain_improve_with_rest]]" value="0"  />Não
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label=" Indentificação de dor crônica">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/falls" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={this.sendForm}><i className="fa fa-floppy-o" aria-hidden="true"></i></a>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/identificationchronicpainb"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>

    )
  }

  setDoYouHavePainLastSameMoreThan3Mon210(evt) {
    this.setState({do_you_have_pain_last_same_more_than_3_mon_2_10: evt.target.value});  
  }

  setThePainIsLikeaShockOraBurning210(evt) {
    this.setState({the_pain_is_like_a_shock_or_a_burning_2_10: evt.target.value});  
  }

  setDoesThePainGetWorseWhenWalking210(evt) {
    this.setState({does_the_pain_get_worse_when_walking_2_10: evt.target.value});  
  }

  setDoesPainImproveWithRest210(evt) {
    this.setState({does_pain_improve_with_rest_2_10: evt.target.value});  
  }
}

export default IdentificationChronicPain