import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DentalProsthesis extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      id_historys:'1', 
      id_elderlies:'1', 
      superior_2_11_d_a:'', 
      inferior_2_11_d_a:'', 
      total_prosthesis_2_11_d_a:'', 
      partial_prosthesis_2_11_d_a:'', 
      does_not_use_and_does_not_require_prosthesis_2_11_d_a:'',
      does_not_use_but_needs_prosthesis_2_11_d_a:'', 
      uses_adapted_without_exchange_2_11_d_a:'', 
      uses_not_adapted_needs_exchange_2_11_d_a:''
    };

    this.sendForm = this.sendForm.bind(this);
    this.setSuperior211da = this.setSuperior211da.bind(this);
    this.setInferior211da = this.setInferior211da.bind(this);
    this.setTotalProsthesis211da = this.setTotalProsthesis211da.bind(this);
    this.setPartialProsthesis211da = this.setPartialProsthesis211da.bind(this);
    this.setDoesNotUseAndDoesNotRequireProsthesis211da = this.setDoesNotUseAndDoesNotRequireProsthesis211da.bind(this);
    this.setDoesNotUseButNeedsProsthesis211da = this.setDoesNotUseButNeedsProsthesis211da.bind(this);
    this.setUsesAdaptedWithoutExchange211da = this.setUsesAdaptedWithoutExchange211da.bind(this);
    this.setusesNotAdaptedNeedsExchange211da = this.setusesNotAdaptedNeedsExchange211da.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/dentalprosthesis",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {
    $.ajax({
      url: "/api/v1/dentalprosthesis",
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
            <form id="dentalprosthesis" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2> PRÓTESE DENTÁRIA</h2>
                  <h2> PRÓTESE TOTAL (DENTADURA) </h2>
                  <label>Superior</label><br/>
                  <input type="radio" checked={this.state.superior_2_11_d_a === '1'} onChange={this.setSuperior211da} className="answers-155" id="2.11_d_a-superior-y" name="answers[2.11_d_a[superior]]" value="1"  />Sim
                  <input type="radio" checked={this.state.superior_2_11_d_a === '0'} onChange={this.setSuperior211da} className="answers-155" id="2.11_d_a-superior-n" name="answers[2.11_d_a[superior]]" value="0"  />Não
                  <br/><br/>
                  <label>Inferior</label><br/>
                  <input type="radio" checked={this.state.inferior_2_11_d_a === '1'} onChange={this.setInferior211da} className="answers-156" id="2.11_d_a-inferior-y" name="answers[2.11_d_a[inferior]]" value="1"  />Sim
                  <input type="radio" checked={this.state.inferior_2_11_d_a === '0'} onChange={this.setInferior211da} className="answers-156" id="2.11_d_a-inferior-n" name="answers[2.11_d_a[inferior]]" value="0"  />Não
                  <br/><br/>
                  <label>Prótese total (dentadura)</label><br/>
                  <input type="radio" checked={this.state.total_prosthesis_2_11_d_a === '1'} onChange={this.setTotalProsthesis211da} className="answers-157" id="2.11_d_a-total_prosthesis-y" name="answers[2.11_d_a[total_prosthesis]]" value="1"  />Sim
                  <input type="radio" checked={this.state.total_prosthesis_2_11_d_a === '0'} onChange={this.setTotalProsthesis211da} className="answers-157" id="2.11_d_a-total_prosthesis-n" name="answers[2.11_d_a[total_prosthesis]]" value="0"  />Não
                  <br/><br/>
                  <label>Prótese parcial (ponte móvel)</label><br/>
                  <input type="radio" checked={this.state.partial_prosthesis_2_11_d_a === '1'} onChange={this.setPartialProsthesis211da} className="answers-158" id="2.11_d_a-partial_prosthesis-y" name="answers[2.11_d_a[partial_prosthesis]]" value="1"  />Sim
                  <input type="radio" checked={this.state.partial_prosthesis_2_11_d_a === '0'} onChange={this.setPartialProsthesis211da} className="answers-158" id="2.11_d_a-partial_prosthesis-n" name="answers[2.11_d_a[partial_prosthesis]]" value="0"  />Não
                  <br/><br/>
                  <label>Não utiliza e não necessita da prótese</label><br/>
                  <input type="radio" checked={this.state.does_not_use_and_does_not_require_prosthesis_2_11_d_a === '1'} onChange={this.setDoesNotUseAndDoesNotRequireProsthesis211da} className="answers-159" id="2.11_d_a-does_not_use_and_does_not_require_prosthesis-y" name="answers[2.11_d_a[does_not_use_and_does_not_require_prosthesis]]" value="1"  />Sim
                  <input type="radio" checked={this.state.does_not_use_and_does_not_require_prosthesis_2_11_d_a === '0'} onChange={this.setDoesNotUseAndDoesNotRequireProsthesis211da} className="answers-159" id="2.11_d_a-does_not_use_and_does_not_require_prosthesis-n" name="answers[2.11_d_a[does_not_use_and_does_not_require_prosthesis]]" value="0"  />Não
                  <br/><br/>
                  <label>Não utiliza, mas necessita da prótese</label><br/>
                  <input type="radio" checked={this.state.does_not_use_but_needs_prosthesis_2_11_d_a === '1'} onChange={this.setDoesNotUseButNeedsProsthesis211da} className="answers-160" id="2.11_d_a-does_not_use_but_needs_prosthesis-y" name="answers[2.11_d_a[does_not_use_but_needs_prosthesis]]" value="1"  />Sim
                  <input type="radio" checked={this.state.does_not_use_but_needs_prosthesis_2_11_d_a === '0'} onChange={this.setDoesNotUseButNeedsProsthesis211da} className="answers-160" id="2.11_d_a-does_not_use_but_needs_prosthesis-n" name="answers[2.11_d_a[does_not_use_but_needs_prosthesis]]" value="0"  />Não
                  <br/><br/>
                  <label>Utiliza (adaptada/sem necessidade de troca)</label><br/>
                  <input type="radio" checked={this.state.uses_adapted_without_exchange_2_11_d_a === '1'} onChange={this.setUsesAdaptedWithoutExchange211da} className="answers-170" id="2.11_d_a-uses_adapted_without_exchange-y" name="answers[2.11_d_a[uses_adapted_without_exchange]]" value="1"  />Sim
                  <input type="radio" checked={this.state.uses_adapted_without_exchange_2_11_d_a === '0'} onChange={this.setUsesAdaptedWithoutExchange211da} className="answers-170" id="2.11_d_a-uses_adapted_without_exchange-n" name="answers[2.11_d_a[uses_adapted_without_exchange]]" value="0"  />Não
                  <br/><br/>
                  <label>Utiliza (não adaptada/necessita de troca)</label><br/>
                  <input type="radio" checked={this.state.uses_not_adapted_needs_exchange_2_11_d_a === '1'} onChange={this.setusesNotAdaptedNeedsExchange211da} className="answers-171" id="2.11_d_a-uses_not_adapted_needs_exchange-y" name="answers[2.11_d_a[uses_not_adapted_needs_exchange]]" value="1"  />Sim
                  <input type="radio" checked={this.state.uses_not_adapted_needs_exchange_2_11_d_a === '0'} onChange={this.setusesNotAdaptedNeedsExchange211da} className="answers-171" id="2.11_d_a-uses_not_adapted_needs_exchange-n" name="answers[2.11_d_a[uses_not_adapted_needs_exchange]]" value="0"  />Não
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Prótese Dentária">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/oralhealthassessment" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" onClick={this.sendForm} to="/consultationexamination"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>

    )
  }

  setSuperior211da(evt) {
    this.setState({superior_2_11_d_a: evt.target.value});  
  }

  setInferior211da(evt) {
    this.setState({inferior_2_11_d_a: evt.target.value});  
  }

  setTotalProsthesis211da(evt) {
    this.setState({total_prosthesis_2_11_d_a: evt.target.value});  
  }

  setPartialProsthesis211da(evt) {
    this.setState({partial_prosthesis_2_11_d_a: evt.target.value});  
  }

  setDoesNotUseAndDoesNotRequireProsthesis211da(evt) {
    this.setState({does_not_use_and_does_not_require_prosthesis_2_11_d_a: evt.target.value});  
  }

   setDoesNotUseButNeedsProsthesis211da(evt) {
    this.setState({does_not_use_but_needs_prosthesis_2_11_d_a: evt.target.value});  
  }

   setUsesAdaptedWithoutExchange211da(evt) {
    this.setState({uses_adapted_without_exchange_2_11_d_a: evt.target.value});  
  }

   setusesNotAdaptedNeedsExchange211da(evt) {
    this.setState({uses_not_adapted_needs_exchange_2_11_d_a: evt.target.value});  
  }

}

export default DentalProsthesis