import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Disabilities extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {id_historys:'1', id_elderlies:'1', stopped_shopping_2_6_a:'', stop_tracking_your_money_2_6_a:'', stopped_walking_in_the_house_2_6_a:'', stopped_doing_light_household_chores_2_6_a:'', stop_taking_showers_alone_2_6_a:''};
    this.sendForm = this.sendForm.bind(this);
    this.setStopShopping26a = this.setStopShopping26a.bind(this);
    this.setStopMoney26a = this.setStopMoney26a.bind(this);
    this.setStopWalking26a = this.setStopWalking26a.bind(this);
    this.setStopDoing26a = this.setStopDoing26a.bind(this);
    this.setStopShowers26a = this.setStopShowers26a.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/disabilities",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/disabilities",
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
            <form id="disabilities" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2>INCAPACIDADES </h2>
                  <label>Por causa de sua saúde ou condição física, você deixou de fazer compras?  </label><br/>
                  <input type="radio" checked={this.state.stopped_shopping_2_6_a === "1"} onChange={this.setStopShopping26a} id="2.6a-stopshopping-y" name="answers[2.6a[stopshopping]]" value="1"  />Sim
                  <input type="radio" checked={this.state.stopped_shopping_2_6_a === "0"} onChange={this.setStopShopping26a} id="2.6a-stopshopping-n" name="answers[2.6a[stopshopping]]" value="0"  />Não
                  <br/><br/>
                  <label>Por causa de sua saúde ou condição física, você deixou de controlar seu dinheiro, seus gastos ou de pagar suas contas? </label><br/>
                  <input type="radio" checked={this.state.stop_tracking_your_money_2_6_a === "1"} onChange={this.setStopMoney26a} id="2.6a-stopmoney-y" name="answers[2.6a[stopmoney]]" value="1"  />Sim
                  <input type="radio" checked={this.state.stop_tracking_your_money_2_6_a === "0"} onChange={this.setStopMoney26a} id="2.6a-stopmoney-n" name="answers[2.6a[stopmoney]]" value="0"  />Não
                  <br/><br/>
                  <label>Por causa de sua saúde ou condição física, você deixou de caminhar dentro de casa? </label><br/>
                  <input type="radio" checked={this.state.stopped_walking_in_the_house_2_6_a === "1"} onChange={this.setStopWalking26a} id="2.6a-stopwalking-y" name="answers[2.6a[stopwalking]]" value="1"  />Sim
                  <input type="radio" checked={this.state.stopped_walking_in_the_house_2_6_a === "0"} onChange={this.setStopWalking26a} id="2.6a-stopwalking-n" name="answers[2.6a[stopwalking]]" value="0"  />Não
                  <br/><br/>
                  <h2> HUMOR </h2>
                  <label>Por causa de sua saúde ou condição física, você deixou de realizar tarefas domésticas leves,como lavar louça ou fazer limpeza leve? </label><br/>
                  <input type="radio" checked={this.state.stopped_doing_light_household_chores_2_6_a === "1"} onChange={this.setStopDoing26a} id="2.6a-stopdoing-y" name="answers[2.6a[stopdoing]]" value="1"  />Sim
                  <input type="radio" checked={this.state.stopped_doing_light_household_chores_2_6_a === "0"} onChange={this.setStopDoing26a} id="2.6a-stopdoing-n" name="answers[2.6a[stopdoing]]" value="0"  />Não
                  <br/><br/>
                  <label>Por causa de sua saúde ou condição física, você deixou de tomar banho sozinho(a)? </label><br/>
                  <input type="radio" checked={this.state.stop_taking_showers_alone_2_6_a === "1"} onChange={this.setStopShowers26a} id="2.6a-stopshowers-y" name="answers[2.6a[stopshowers]]" value="1"  />Sim
                  <input type="radio" checked={this.state.stop_taking_showers_alone_2_6_a === "0"} onChange={this.setStopShowers26a} id="2.6a-stopshowers-n" name="answers[2.6a[stopshowers]]" value="0"  />Não
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label=" Incapacidades">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/vulnerableelderly" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" onClick={this.sendForm} to="/complementaryinformation"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>

    )
  }

  setStopShopping26a(evt) {
    this.setState({stopped_shopping_2_6_a: evt.target.value});  
  }

  setStopMoney26a(evt) {
    this.setState({stop_tracking_your_money_2_6_a: evt.target.value});  
  }

  setStopWalking26a(evt) {
    this.setState({stopped_walking_in_the_house_2_6_a: evt.target.value});  
  }

  setStopDoing26a(evt) {
    this.setState({stopped_doing_light_household_chores_2_6_a: evt.target.value});  
  }

   setStopShowers26a(evt) {
    this.setState({stop_taking_showers_alone_2_6_a: evt.target.value});  
  }


}

export default Disabilities