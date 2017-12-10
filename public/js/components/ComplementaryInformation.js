import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class ComplementaryInformation extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      some_family_mem_fri_said_that_are_get_forg_2_7:'',
      forgetfulness_is_getting_worse_in_last_months_2_7:'',
      forgetfulness_is_preventing_of_some_daily_activity_2_7:'', 
      in_the_last_mon_were_dismayed_sad_hop_2_7:'', 
      in_the_last_mon_lost_int_pleas_act_form_pleas_2_7:''
    };

    this.sendForm = this.sendForm.bind(this);
    this.setSomeFamilyMemFriSaidThatAreGetForg27 = this.setSomeFamilyMemFriSaidThatAreGetForg27.bind(this);
    this.setForgetfulnessIsGettingWorseInLastMonths27 = this.setForgetfulnessIsGettingWorseInLastMonths27.bind(this);
    this.setForgetfulnessIsPreventingOfSomeDailyActivity27 = this.setForgetfulnessIsPreventingOfSomeDailyActivity27.bind(this);
    this.setInTheLastMonWereDismayedSadHop27 = this.setInTheLastMonWereDismayedSadHop27.bind(this);
    this.setInTheLastMonLostIntPleasActFormPleas27 = this.setInTheLastMonLostIntPleasActFormPleas27.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/complementaryinformation",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {
    $.ajax({
      url: "/api/v1/complementaryinformation",
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
            <form id="complementaryinformation" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2> COGNIÇÃO </h2>
                  <label>Algum familiar ou amigo(a) falou que você está ficando esquecido(a)?  </label><br/>
                  <input type="radio"  checked={this.state.some_family_mem_fri_said_that_are_get_forg_2_7 === '1'} onChange={this.setSomeFamilyMemFriSaidThatAreGetForg27} className="answers-84" id="2.7-some_family_mem_fri_said_that_are_get_forg-y" name="answers[2.7[some_family_mem_fri_said_that_are_get_forg]]" value="1"  />Sim
                  <input type="radio"  checked={this.state.some_family_mem_fri_said_that_are_get_forg_2_7 === '0'} onChange={this.setSomeFamilyMemFriSaidThatAreGetForg27} className="answers-84" id="2.7-some_family_mem_fri_said_that_are_get_forg-n" name="answers[2.7[some_family_mem_fri_said_that_are_get_forg]]" value="0"  />Não
                  <br/><br/>
                  <label>O esquecimento está piorando nos últimos meses?  </label><br/>
                  <input type="radio"  checked={this.state.forgetfulness_is_getting_worse_in_last_months_2_7 === '1'} onChange={this.setForgetfulnessIsGettingWorseInLastMonths27} className="answers-85" id="2.7-forgetfulness_is_getting_worse_in_last_months-y" name="answers[2.7[forgetfulness_is_getting_worse_in_last_months]]" value="1"  />Sim
                  <input type="radio"  checked={this.state.forgetfulness_is_getting_worse_in_last_months_2_7 === '0'} onChange={this.setForgetfulnessIsGettingWorseInLastMonths27} className="answers-85" id="2.7-forgetfulness_is_getting_worse_in_last_months-n" name="answers[2.7[forgetfulness_is_getting_worse_in_last_months]]" value="0"  />Não
                  <br/><br/>
                  <label>O esquecimento está impedindo a realização de alguma atividade do cotidiano?  </label><br/>
                  <input type="radio"  checked={this.state.forgetfulness_is_preventing_of_some_daily_activity_2_7 === '1'} onChange={this.setForgetfulnessIsPreventingOfSomeDailyActivity27} className="answers-86" id="2.7-forgetfulness_is_preventing_of_some_daily_activity-y" name="answers[2.7[forgetfulness_is_preventing_of_some_daily_activity]]" value="1"  />Sim
                  <input type="radio"  checked={this.state.forgetfulness_is_preventing_of_some_daily_activity_2_7 === '0'} onChange={this.setForgetfulnessIsPreventingOfSomeDailyActivity27} className="answers-86" id="2.7-forgetfulness_is_preventing_of_some_daily_activity-n" name="answers[2.7[forgetfulness_is_preventing_of_some_daily_activity]]" value="0"  />Não
                  <br/><br/>
                  <h2> HUMOR </h2>
                  <label>No último mês, você ficou com desânimo, tristeza ou desesperança? </label><br/>
                  <input type="radio"  checked={this.state.in_the_last_mon_were_dismayed_sad_hop_2_7 === '1'} onChange={this.setInTheLastMonWereDismayedSadHop27} className="answers-87" id="2.7-in_the_last_mon_were_dismayed_sad_hop-y" name="answers[2.7[in_the_last_mon_were_dismayed_sad_hop]]" value="1"  />Sim
                  <input type="radio"  checked={this.state.in_the_last_mon_were_dismayed_sad_hop_2_7 === '0'} onChange={this.setInTheLastMonWereDismayedSadHop27} className="answers-87" id="2.7-in_the_last_mon_were_dismayed_sad_hop-n" name="answers[2.7[in_the_last_mon_were_dismayed_sad_hop]]" value="0"  />Não
                  <br/><br/>
                  <label>No último mês, você perdeu o interesse ou o prazer por atividades anteriormente prazerosas? </label><br/>
                  <input type="radio"  checked={this.state.in_the_last_mon_lost_int_pleas_act_form_pleas_2_7 === '1'} onChange={this.setInTheLastMonLostIntPleasActFormPleas27} className="answers-88" id="2.7-in_the_last_mon_lost_int_pleas_act_form_pleas-y" name="answers[2.7[in_the_last_mon_lost_int_pleas_act_form_pleas]]" value="1"  />Sim
                  <input type="radio"  checked={this.state.in_the_last_mon_lost_int_pleas_act_form_pleas_2_7 === '0'} onChange={this.setInTheLastMonLostIntPleasActFormPleas27} className="answers-88" id="2.7-in_the_last_mon_lost_int_pleas_act_form_pleas-n" name="answers[2.7[in_the_last_mon_lost_int_pleas_act_form_pleas]]" value="0"  />Não
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label=" Informações complementares">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/disabilities" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={this.sendForm}><i className="fa fa-floppy-o" aria-hidden="true"></i></a>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/environmentalassessment"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>

    )
  }

  setSomeFamilyMemFriSaidThatAreGetForg27(evt) {
    this.setState({some_family_mem_fri_said_that_are_get_forg_2_7: evt.target.value});  
  }

  setForgetfulnessIsGettingWorseInLastMonths27(evt) {
    this.setState({forgetfulness_is_getting_worse_in_last_months_2_7: evt.target.value});  
  }

  setForgetfulnessIsPreventingOfSomeDailyActivity27(evt) {
    this.setState({forgetfulness_is_preventing_of_some_daily_activity_2_7: evt.target.value});  
  }

  setInTheLastMonWereDismayedSadHop27(evt) {
    this.setState({in_the_last_mon_were_dismayed_sad_hop_2_7: evt.target.value});  
  }

  setInTheLastMonLostIntPleasActFormPleas27(evt) {
    this.setState({in_the_last_mon_lost_int_pleas_act_form_pleas_2_7: evt.target.value});  
  }

}

export default ComplementaryInformation