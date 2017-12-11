import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

const initialState = {
  weight_2_5:'', height_2_5:'', imc_weight_height_2_5:'', calf_perimeter_pp_left_2_5:'', you_have_exp_loss_uni_weight_min_body_last_year_2_5:''
};

class AnthropometricData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = initialState;
    this.sendForm = this.sendForm.bind(this);
    this.setWeight25 = this.setWeight25.bind(this);
    this.setHeight25 = this.setHeight25.bind(this);
    this.setImc25 = this.setImc25.bind(this);
    this.setPp25 = this.setPp25.bind(this);
    this.setWeightLoss25 = this.setWeightLoss25.bind(this);
    this.calcImc = this.calcImc.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/anthropometricdata",
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
      url: "/api/v1/anthropometricdata",
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
                  <label>IMC</label><br/>
                  <input type="text" disabled="disabled" value={this.state.imc_weight_height_2_5} onChange={this.setImc25} maxLength="5" className="answers-75" id="2.5-imc" name="answers[2.5[imc]]"  />
                  <br/><br/>
                  <label>Perímetro da panturrilha (PP) esquerda</label><br/>
                  <input type="text"  value={this.state.calf_perimeter_pp_left_2_5} onChange={this.setPp25} maxLength="5" className="answers-76" id="2.5-pp" name="answers[2.5[pp]]"  />
                  <br/><br/>
                  <label>Você apresentou perda de peso não intencional* de, no mínimo, 4,5 kg ou de 5% do seu peso corporal no último ano? </label><br/>
                  <input type="radio" checked={this.state.you_have_exp_loss_uni_weight_min_body_last_year_2_5 === "1"} onChange={this.setWeightLoss25} className="answers-77" id="2.5-weightloss-1" name="answers[2.5[weightloss]]" value="1"  />Sim
                  <input type="radio" checked={this.state.you_have_exp_loss_uni_weight_min_body_last_year_2_5 === "0"} onChange={this.setWeightLoss25} className="answers-77" id="2.5-weightloss-0" name="answers[2.5[weightloss]]" value="0"  />Não
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Dados Antropométricos">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/reactionorallergy" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={this.sendForm}><i className="fa fa-floppy-o" aria-hidden="true"></i></a>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/vulnerableelderly"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>

    )
  }

  setWeight25(evt) {
    this.setState({weight_2_5: evt.target.value});  
    this.calcImc();
  }

  setHeight25(evt) {
    this.setState({height_2_5: evt.target.value});  
    this.calcImc();
  }

  setImc25(evt) {
    this.setState({imc_weight_height_2_5: evt.target.value});  
  }

  setPp25(evt) {
    this.setState({calf_perimeter_pp_left_2_5: evt.target.value});  
  }

  setWeightLoss25(evt) {
    this.setState({you_have_exp_loss_uni_weight_min_body_last_year_2_5: evt.target.value});  
  }

  calcImc() {
    const weight = this.state.weight_2_5;
    const height = this.state.height_2_5; 
    const w = weight.toString().length;
    const h = height.toString().length;
    
    if ( weight !="" && height !="" && w >= 2 && h >= 3) {
      let result = weight/(height * height);
      this.setState({imc_weight_height_2_5: result});
    } else {
      this.setState({imc_weight_height_2_5: '0'});  
    }

  }

}

export default AnthropometricData