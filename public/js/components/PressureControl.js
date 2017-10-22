import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class BloodPressureControls extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', data_2_11:'', bloodpressure_2_11:''};
    this.sendForm = this.sendForm.bind(this);
    this.setData211 = this.setData211.bind(this);
    this.setBloodPressure211 = this.setBloodPressure211.bind(this);
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
    evt.preventDefault();

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
                  <input type="date" value={this.state.data_2_11} onChange={this.setData211} className="answers-129" id="2.11a-data" name="answers[2.11a[data]]"  />
                  <br/><br/>
                  <label>Pressão arterial</label><br/>
                  <input type="text"  value={this.state.bloodpressure_2_11} onChange={this.setBloodPressure211} className="answers-130" id="2.11a-bloodpressure" name="answers[2.11a[bloodpressure]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label=" Controle da Pressão Arterial">
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

  setData211(evt) {
    this.setState({data_2_11: evt.target.value});  
  }

  setBloodPressure211(evt) {
    this.setState({bloodpressure_2_11: evt.target.value});  
  }
}

export default BloodPressureControls