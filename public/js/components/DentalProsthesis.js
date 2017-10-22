import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class PersonalData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', superior_2_11d:'', bottom_2_11d:'', denture_2_11d:'', mobilebridge_2_11d:'', notprosthesis_2_11d:'', yesprosthesis_2_11d:'', useadapted_2_11d:'', usesunadapted_2_11d:''};
    this.sendForm = this.sendForm.bind(this);
    this.setSuperior211d = this.setSuperior211d.bind(this);
    this.setBottom211d = this.setBottom211d.bind(this);
    this.setDenture211d = this.setDenture211d.bind(this);
    this.setMobilebridge211d = this.setMobilebridge211d.bind(this);
    this.setNotProsthesis211d = this.setNotProsthesis211d.bind(this);
    this.setYesProsthesis211d = this.setYesProsthesis211d.bind(this);
    this.setUseAdapted211d = this.setUseAdapted211d.bind(this);
    this.setUsesundapted211d = this.setUsesundapted211d.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/dentalprosthesis",
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
      url: "http://127.0.0.1:8000/api/v1/dentalprosthesis",
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
                  <input type="radio" value={this.state.superior_2_11d} onChange={this.setSuperior211d} className="answers-155" id="2.11d.a-superior-y" name="answers[2.11d.a[superior]]" value="y"  />Sim
                  <input type="radio" value={this.state.superior_2_11d} onChange={this.setSuperior211d} className="answers-155" id="2.11d.a-superior-n" name="answers[2.11d.a[superior]]" value="n"  />Não
                  <br/><br/>
                  <label>Inferior</label><br/>
                  <input type="radio" value={this.state.bottom_2_11d} onChange={this.setBottom211d} className="answers-156" id="2.11d.a-bottom-y" name="answers[2.11d.a[bottom]]" value="y"  />Sim
                  <input type="radio" value={this.state.bottom_2_11d} onChange={this.setBottom211d} className="answers-156" id="2.11d.a-bottom-n" name="answers[2.11d.a[bottom]]" value="n"  />Não
                  <br/><br/>
                  <label>Prótese total (dentadura)</label><br/>
                  <input type="radio" value={this.state.denture_2_11d} onChange={this.setDenture211d} className="answers-157" id="2.11d.a-denture-y" name="answers[2.11d.a[denture]]" value="y"  />Sim
                  <input type="radio" value={this.state.denture_2_11d} onChange={this.setDenture211d} className="answers-157" id="2.11d.a-denture-n" name="answers[2.11d.a[denture]]" value="n"  />Não
                  <br/><br/>
                  <label>Prótese parcial (ponte móvel)</label><br/>
                  <input type="radio" value={this.state.mobilebridge_2_11d} onChange={this.setName211c} className="answers-158" id="2.11d.a-mobilebridge-y" name="answers[2.11d.a[mobilebridge]]" value="y"  />Sim
                  <input type="radio" value={this.state.mobilebridge_2_11d} onChange={this.setName211c} className="answers-158" id="2.11d.a-mobilebridge-n" name="answers[2.11d.a[mobilebridge]]" value="n"  />Não
                  <br/><br/>
                  <label>Não utiliza e não necessita da prótese</label><br/>
                  <input type="radio" value={this.state.notprosthesis_2_11d} onChange={this.setName211c} className="answers-159" id="2.11d.a-notprosthesis-y" name="answers[2.11d.a[notprosthesis]]" value="y"  />Sim
                  <input type="radio" value={this.state.notprosthesis_2_11d} onChange={this.setName211c} className="answers-159" id="2.11d.a-notprosthesis-n" name="answers[2.11d.a[notprosthesis]]" value="n"  />Não
                  <br/><br/>
                  <label>Não utiliza, mas necessita da prótese</label><br/>
                  <input type="radio" value={this.state.yesprosthesis_2_11d} onChange={this.setYesProsthesis211d} className="answers-160" id="2.11d.a-yesprosthesis-y" name="answers[2.11d.a[yesprosthesis]]" value="y"  />Sim
                  <input type="radio" value={this.state.yesprosthesis_2_11d} onChange={this.setYesProsthesis211d} className="answers-160" id="2.11d.a-yesprosthesis-n" name="answers[2.11d.a[yesprosthesis]]" value="n"  />Não
                  <br/><br/>
                  <label>Utiliza (adaptada/sem necessidade de troca)</label><br/>
                  <input type="radio" value={this.state.useadapted_2_11d} onChange={this.setUseAdapted211d} className="answers-170" id="2.11d.a-useadapted-y" name="answers[2.11d.a[useadapted]]" value="y"  />Sim
                  <input type="radio" value={this.state.useadapted_2_11d} onChange={this.setUseAdapted211d} className="answers-170" id="2.11d.a-useadapted-n" name="answers[2.11d.a[useadapted]]" value="n"  />Não
                  <br/><br/>
                  <label>Utiliza (não adaptada/necessita de troca)</label><br/>
                  <input type="radio" value={this.state.usesunadapted_2_11d} onChange={this.setUsesundapted211d} className="answers-171" id="2.11d.a-usesunadapted-y" name="answers[2.11d.a[usesunadapted]]" value="y"  />Sim
                  <input type="radio" value={this.state.usesunadapted_2_11d} onChange={this.setUsesundapted211d} className="answers-171" id="2.11d.a-usesunadapted-n" name="answers[2.11d.a[usesunadapted]]" value="n"  />Não
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Prótese Dentária">
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

  setSuperior211d(evt) {
    this.setState({superior_2_11d: evt.target.value});  
  }

  setBottom211d(evt) {
    this.setState({bottom_2_11d: evt.target.value});  
  }

  setDenture211d(evt) {
    this.setState({denture_2_11d: evt.target.value});  
  }

  setMobilebridge211d(evt) {
    this.setState({mobilebridge_2_11d: evt.target.value});  
  }

  setNotProsthesis211d(evt) {
    this.setState({notprosthesis_2_11d: evt.target.value});  
  }

   setYesProsthesis211d(evt) {
    this.setState({yesprosthesis_2_11d: evt.target.value});  
  }

   setUseAdapted211d(evt) {
    this.setState({useadapted_2_11d: evt.target.value});  
  }

   setUsesundapted211d(evt) {
    this.setState({usesunadapted_2_11d: evt.target.value});  
  }

}

export default PersonsReferences