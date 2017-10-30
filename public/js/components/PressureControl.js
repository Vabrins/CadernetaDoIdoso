import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class PressureControls extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {id_historys:'1', id_elderlies:'1', date_2_11_a:'', pa_2_11_a:''};
    this.sendForm = this.sendForm.bind(this);
    this.setDate211a = this.setDate211a.bind(this);
    this.setPa211a = this.setPa211a.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/pressurecontrol",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {

    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/pressurecontrol",
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
            <form id="pressurecontrol" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <label>Data</label><br/>
                  <input type="date" value={this.state.date_2_11_a} onChange={this.setDate211a} className="answers-129" id="2.11_a-date" name="answers[2.11_a[date]]"  />
                  <br/><br/>
                  <label>Pressão arterial</label><br/>
                  <input type="text"  value={this.state.pa_2_11_a} onChange={this.setPa211a} className="answers-130" id="2.11_a-pa" name="answers[2.11_a[pa]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label=" Controle da Pressão Arterial">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/livinghabits" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" onClick={this.sendForm} to="/glucosecontrol"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>

    )
  }

  setDate211a(evt) {
    this.setState({date_2_11_a: evt.target.value});  
  }

  setPa211a(evt) {
    this.setState({pa_2_11_a: evt.target.value});  
  }
}

export default PressureControls