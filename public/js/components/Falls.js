import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Validation from './Validation';

const initialState = {
  date_of_fall_month_2_9:'', date_of_fall_year_2_9:'', the_fall_caused_some_fracture_2_9:'', the_fall_caused_some_fracture_extra_2_9:'', you_stopped_perform_some_activity_for_fear_to_fall_again_2_9:'', place_2_9:''
};

class Falls extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = initialState;
    this.sendForm = this.sendForm.bind(this);
    this.setDateOfFallMonth29 = this.setDateOfFallMonth29.bind(this);
    this.setDateOfFallYear29 = this.setDateOfFallYear29.bind(this);
    this.setTheFallCausedSomeFracture29 = this.setTheFallCausedSomeFracture29.bind(this);
    this.setYouStoppedPerformSomeActivityForFearToFallAgain_2_9 = this.setYouStoppedPerformSomeActivityForFearToFallAgain_2_9.bind(this);
    this.setPlace_2_9 = this.setPlace_2_9.bind(this);
    this.setTheFallCausedSomeFractureExtra29 = this.setTheFallCausedSomeFractureExtra29.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/falls",
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
      url: "/api/v1/falls",
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
            <form id="falls" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2>QUEDAS </h2>
                  <label>Data da queda</label><br/>
                  <label>Mês</label><br/>
                  <input type="text" value={this.state.date_of_fall_month_2_9} onChange={this.setDateOfFallMonth29} maxLength="12" className="answers-99" id="2.9-date_of_fall_month" name="answers[2.9[date_of_fall_month]]"  />
                  <br/>
                  <label>Ano</label><br/>
                  <input type="text" value={this.state.date_of_fall_year_2_9} onChange={this.setDateOfFallYear29} maxLength="12" className="answers-99" id="2.9-date_of_fall_month" name="answers[2.9[date_of_fall_month]]"  />
                  <br/><br/>
                  <label>Qual foi o local da queda?</label><br/>
                  <input type="radio" checked={this.state.place_2_9 === 'Dentro de casa'} onChange={this.setPlace_2_9} className="answers-100" id="2.9-date_of_fall_year-y" name="answers[2.9[date_of_fall_year]]" value="Dentro de casa"  />Dentro de casa
                  <input type="radio" checked={this.state.place_2_9 === 'Fora de casa'} onChange={this.setPlace_2_9} className="answers-100" id="2.9-date_of_fall_year-n" name="answers[2.9[date_of_fall_year]]" value="Fora de casa"  />Fora de casa
                  <br/><br/>
                  <label>A queda causou alguma fratura?</label><br/>
                  <input type="radio" checked={this.state.the_fall_caused_some_fracture_2_9 === '1'} onChange={this.setTheFallCausedSomeFracture29} className="answers-101" id="2.9a-the_fall_caused_some_fracture-y" name="answers[2.9[the_fall_caused_some_fracture]]" value="1"  />Sim
                  <input type="radio" checked={this.state.the_fall_caused_some_fracture_2_9 === '0'} onChange={this.setTheFallCausedSomeFracture29} className="answers-101" id="2.9a-the_fall_caused_some_fracture-n" name="answers[2.9[the_fall_caused_some_fracture]]" value="0"  />Não
                  <br/><br/><label>Qual?</label><br/>                  
                  <input type="text" value={this.state.the_fall_caused_some_fracture_extra_2_9} onChange={this.setTheFallCausedSomeFractureExtra29} maxLength="12" className="answers-99" id="" name="answers[2.9[date_of_fall_month]]"  />
                  <br/><br/>
                  <label>Você parou de realizar alguma atividade por medo de cair novamente?</label><br/>
                  <input type="radio" checked={this.state.you_stopped_perform_some_activity_for_fear_to_fall_again_2_9 === '1'} onChange={this.setYouStoppedPerformSomeActivityForFearToFallAgain_2_9} className="answers-102" id="2.9-the_fall_caused_some_fracture_extra-y" name="answers[2.9[the_fall_caused_some_fracture_extra]]" value="1"  />Sim
                  <input type="radio" checked={this.state.you_stopped_perform_some_activity_for_fear_to_fall_again_2_9 === '0'} onChange={this.setYouStoppedPerformSomeActivityForFearToFallAgain_2_9} className="answers-103" id="2.9-the_fall_caused_some_fracture_extra-n" name="answers[2.9[the_fall_caused_some_fracture_extra]]" value="0"  />Não
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Quedas">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/environmentalassessment" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={this.sendForm}><i className="fa fa-floppy-o" aria-hidden="true"></i></a>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/identificationchronicpain"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>

    )
  }

  setDateOfFallMonth29(evt) {
    this.setState({date_of_fall_month_2_9: evt.target.value});
  }

  setDateOfFallYear29(evt) {
    if (Validation.isNumber(evt.target.value) === true) {
      this.setState({date_of_fall_year_2_9: evt.target.value});
    }
  }

  setTheFallCausedSomeFracture29(evt) {
    this.setState({the_fall_caused_some_fracture_2_9: evt.target.value});  
  }

  setYouStoppedPerformSomeActivityForFearToFallAgain_2_9(evt) {
    this.setState({you_stopped_perform_some_activity_for_fear_to_fall_again_2_9: evt.target.value});  
  }

  setTheFallCausedSomeFractureExtra29(evt) {
    this.setState({the_fall_caused_some_fracture_extra_2_9: evt.target.value});  
  }

  setPlace_2_9(evt) {
    this.setState({place_2_9: evt.target.value});  
  }

}

export default Falls