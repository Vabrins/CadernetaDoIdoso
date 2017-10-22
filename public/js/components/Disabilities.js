import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class PersonalData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', stopshopping_2_6a:'', stopmoney_2_6a:'', stopwalking_2_6a:'', stopdoing_2_6a:'', stopshowers_2_6a:''};
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
    evt.preventDefault();

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
                  <input type="radio" value={this.state.stopshopping_2_6a} onChange={this.setStopShopping26a} id="2.6a-stopshopping-y" name="answers[2.6a[stopshopping]]" value="1"  />Sim
                  <input type="radio" value={this.state.stopshopping_2_6a} onChange={this.setStopShopping26a} id="2.6a-stopshopping-n" name="answers[2.6a[stopshopping]]" value="0"  />Não
                  <br/><br/>
                  <label>Por causa de sua saúde ou condição física, você deixou de controlar seu dinheiro, seus gastos ou de pagar suas contas? </label><br/>
                  <input type="radio" value={this.state.stopmoney_2_6a} onChange={this.setStopMoney26a} id="2.6a-stopmoney-y" name="answers[2.6a[stopmoney]]" value="1"  />Sim
                  <input type="radio" value={this.state.stopmoney_2_6a} onChange={this.setStopMoney26a} id="2.6a-stopmoney-n" name="answers[2.6a[stopmoney]]" value="0"  />Não
                  <br/><br/>
                  <label>Por causa de sua saúde ou condição física, você deixou de caminhar dentro de casa? </label><br/>
                  <input type="radio" value={this.state.stopwalking_2_6a} onChange={this.setStopWalking26a} id="2.6a-stopwalking-y" name="answers[2.6a[stopwalking]]" value="1"  />Sim
                  <input type="radio" value={this.state.stopwalking_2_6a} onChange={this.setStopWalking26a} id="2.6a-stopwalking-n" name="answers[2.6a[stopwalking]]" value="0"  />Não
                  <br/><br/>
                  <h2> HUMOR </h2>
                  <label>Por causa de sua saúde ou condição física, você deixou de realizar tarefas domésticas leves,como lavar louça ou fazer limpeza leve? </label><br/>
                  <input type="radio" value={this.state.stopdoing_2_6a} onChange={this.setStopDoing26a} id="2.6a-stopdoing-y" name="answers[2.6a[stopdoing]]" value="1"  />Sim
                  <input type="radio" value={this.state.stopdoing_2_6a} onChange={this.setStopDoing26a} id="2.6a-stopdoing-n" name="answers[2.6a[stopdoing]]" value="0"  />Não
                  <br/><br/>
                  <label>Por causa de sua saúde ou condição física, você deixou de tomar banho sozinho(a)? </label><br/>
                  <input type="radio" value={this.state.stopshowers_2_6a} onChange={this.setStopShowers26a} id="2.6a-stopshowers-y" name="answers[2.6a[stopshowers]]" value="1"  />Sim
                  <input type="radio" value={this.state.stopshowers_2_6a} onChange={this.setStopShowers26a} id="2.6a-stopshowers-n" name="answers[2.6a[stopshowers]]" value="0"  />Não
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label=" Incapacidades">
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

  setStopShopping26a(evt) {
    this.setState({stopshopping_2_6a: evt.target.value});  
  }

  setStopMoney26a(evt) {
    this.setState({stopmoney_2_6a: evt.target.value});  
  }

  setStopWalking26a(evt) {
    this.setState({stopwalking_2_6a: evt.target.value});  
  }

  setStopDoing26a(evt) {
    this.setState({stopdoing_2_6a: evt.target.value});  
  }

   setStopShowers26a(evt) {
    this.setState({stopshowers_2_6a: evt.target.value});  
  }


}

export default PersonsReferences