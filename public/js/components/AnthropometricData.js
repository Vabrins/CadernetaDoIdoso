import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class AnthropometricData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', weight_2_5:'', height_2_5:'', imc_2_5:'', pp_2_5:'', weightloss_2_5:''};
    this.sendForm = this.sendForm.bind(this);
    this.setWeight25 = this.setWeight25.bind(this);
    this.setHeight25 = this.setHeight25.bind(this);
    this.setImc25 = this.setImc25.bind(this);
    this.setPp25 = this.setPp25.bind(this);
    this.setWeightLoss25 = this.setWeightLoss25.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/anthropometricdata",
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
      url: "http://127.0.0.1:8000/api/v1/anthropometricdata",
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
            <form id="anthropometricdata" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <label>Peso</label><br/>
                  <input type="text"  value={this.state.weight_2_5} onChange={this.setWeight25} maxLength="5" className="answers-73" id="2.5-weight" name="answers[2.5[weight]]"  />
                  <br/><br/>
                  <label>Altura</label><br/>
                  <input type="text"  value={this.state.height_2_5} onChange={this.setHeight25} maxLength="5" className="answers-74" id="2.5-height" name="answers[2.5[height]]"  />
                  <br/><br/>
                  <label>IMC = peso/altura2</label><br/>
                  <input type="text"  value={this.state.imc_2_5} onChange={this.setImc25} maxLength="5" className="answers-75" id="2.5-imc" name="answers[2.5[imc]]"  />
                  <br/><br/>
                  <label>Perímetro da panturrilha (PP) esquerda</label><br/>
                  <input type="text"  value={this.state.pp_2_5} onChange={this.setPp25} maxLength="5" className="answers-76" id="2.5-pp" name="answers[2.5[pp]]"  />
                  <br/><br/>
                  <label>Você apresentou perda de peso não intencional* de, no mínimo, 4,5 kg ou de 5% do seu peso corporal no último ano? </label><br/>
                  <input type="radio" value={this.state.weightloss_2_5} onChange={this.setWeightLoss25} className="answers-77" id="2.5-weightloss-1" name="answers[2.5[weightloss]]" value="1"  />Sim
                  <input type="radio" value={this.state.weightloss_2_5} onChange={this.setWeightLoss25} className="answers-77" id="2.5-weightloss-0" name="answers[2.5[weightloss]]" value="0"  />Não
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Dados Antropométricos">
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

  setWeight25(evt) {
    this.setState({weight_2_5: evt.target.value});  
  }

  setHeight25(evt) {
    this.setState({height_2_5: evt.target.value});  
  }

  setImc25(evt) {
    this.setState({imc_2_5: evt.target.value});  
  }

  setPp25(evt) {
    this.setState({pp_2_5: evt.target.value});  
  }

  setWeightLoss25(evt) {
    this.setState({weightloss_2_5: evt.target.value});  
  }

}

export default AnthropometricData