import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Falls extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {id_historys:'1', id_elderlies:'1', date_of_fall_month_2_9:'', date_of_fall_year_2_9:'', the_fall_caused_some_fracture_2_9:'', the_fall_caused_some_fracture_extra_2_9:'', you_stopped_perform_some_activity_for_fear_to_fall_again_2_9:''};
    this.sendForm = this.sendForm.bind(this);
    this.setDateOfFallMonth29 = this.setDateOfFallMonth29.bind(this);
    this.setDateOfFallYear29 = this.setDateOfFallYear29.bind(this);
    this.setTheFallCausedSomeFracture29 = this.setTheFallCausedSomeFracture29.bind(this);
    this.setYouStoppedPerformSomeActivityForFearToFallAgain_2_9 = this.setYouStoppedPerformSomeActivityForFearToFallAgain_2_9.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/falls",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/falls",
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
            <form id="falls" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2>QUEDAS </h2>
                  <label>Data da queda (mês/ano)</label><br/>
                  <input type="text" value={this.state.date_of_fall_month_2_9} onChange={this.setDateOfFallMonth29} maxLength="12" className="answers-99" id="2.9-date_of_fall_month" name="answers[2.9[date_of_fall_month]]"  />
                  <br/><br/>
                  <label>Qual foi o local da queda?</label><br/>
                  <input type="radio" checked={this.state.date_of_fall_year_2_9 === '1'} onChange={this.setDateOfFallYear29} className="answers-100" id="2.9-date_of_fall_year-y" name="answers[2.9[date_of_fall_year]]" value="1"  />Dentro de casa
                  <input type="radio" checked={this.state.date_of_fall_year_2_9 === '0'} onChange={this.setDateOfFallYear29} className="answers-100" id="2.9-date_of_fall_year-n" name="answers[2.9[date_of_fall_year]]" value="0"  />Fora de casa
                  <br/><br/>
                  <label>A queda causou alguma fratura?</label><br/>
                  <input type="radio" checked={this.state.the_fall_caused_some_fracture_2_9 === '1'} onChange={this.setTheFallCausedSomeFracture29} className="answers-101" id="2.9a-the_fall_caused_some_fracture-y" name="answers[2.9[the_fall_caused_some_fracture]]" value="1"  />Sim
                  <input type="radio" checked={this.state.the_fall_caused_some_fracture_2_9 === '0'} onChange={this.setTheFallCausedSomeFracture29} className="answers-101" id="2.9a-the_fall_caused_some_fracture-n" name="answers[2.9[the_fall_caused_some_fracture]]" value="0"  />Não
                  <input type="text"  checked={this.state.the_fall_caused_some_fracture_2_9} onChange={this.setTheFallCausedSomeFracture29} className="answers-101" id="2.9-the_fall_caused_some_fracture" name="answers[2.9[the_fall_caused_some_fracture]]"/>
                  <br/><br/>
                  <label>Você parou de realizar alguma atividade por medo de cair novamente?</label><br/>
                  <input type="radio" checked={this.state.the_fall_caused_some_fracture_extra_2_9 === '1'} onChange={this.setYouStoppedPerformSomeActivityForFearToFallAgain_2_9} className="answers-102" id="2.9-the_fall_caused_some_fracture_extra-y" name="answers[2.9[the_fall_caused_some_fracture_extra]]" value="1"  />Sim
                  <input type="radio" checked={this.state.the_fall_caused_some_fracture_extra_2_9 === '0'} onChange={this.setYouStoppedPerformSomeActivityForFearToFallAgain_2_9} className="answers-103" id="2.9-the_fall_caused_some_fracture_extra-n" name="answers[2.9[the_fall_caused_some_fracture_extra]]" value="0"  />Não
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
                  <Link className="page-link" onClick={this.sendForm} to="/identificationchronicpain"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
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
    this.setState({date_of_fall_year_2_9: evt.target.value});  
  }

  setTheFallCausedSomeFracture29(evt) {
    this.setState({the_fall_caused_some_fracture_2_9: evt.target.value});  
  }

  setYouStoppedPerformSomeActivityForFearToFallAgain_2_9(evt) {
    this.setState({the_fall_caused_some_fracture_extra_2_9: evt.target.value});  
  }

}

export default Falls