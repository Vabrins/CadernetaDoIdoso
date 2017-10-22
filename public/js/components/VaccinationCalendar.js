import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class PersonalData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', name_2_11c:'', data_2_11c:'', lot_2_11c:'', signature_2_11c:'', dose_2_11c:''};
    this.sendForm = this.sendForm.bind(this);
    this.setName211c = this.setName211c.bind(this);
    this.setData211c = this.setData211c.bind(this);
    this.setLot211c = this.setLot211c.bind(this);
    this.setSignature211c = this.setSignature211c.bind(this);
    this.setDose211c = this.setDose211c.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/bloodglucosecontrols",
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
      url: "http://127.0.0.1:8000/api/v1/bloodglucosecontrols",
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
            <form id="bloodglucosecontrols" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2> 2.11c CALENDÁRIO DE VACINAÇÃO </h2>
                  <label>Nome</label><br/>
                  <input type="text"  value={this.state.name_2_11c} onChange={this.setName211c} className="answers-134" id="2.11c-name" name="answers[2.11c[name]]"  />
                  <br/><br/>
                  <label>Data</label><br/>
                  <input type="date" value={this.state.data_2_11c} onChange={this.setData211c} className="answers-135" id="2.11c-data" name="answers[2.11c[data]]"  />
                  <br/><br/>
                  <label>Lote</label><br/>
                  <input type="text"  value={this.state.lot_2_11c} onChange={this.setLot211c} className="answers-136" id="2.11c-lot" name="answers[2.11c[lot]]"  />
                  <br/><br/>
                  <label>Assinatura</label><br/>
                  <input type="text"  value={this.state.signature_2_11c} onChange={this.setSignature211c} className="answers-137" id="2.11c-signature" name="answers[2.11c[signature]]"  />
                  <br/><br/>
                  <label>Dose</label><br/>
                  <input type="text"  value={this.state.dose_2_11c} onChange={this.setDose211c} className="answers-138" id="2.11c-dose" name="answers[2.11c[dose]]"  />
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

  setFasting211b(evt) {
    this.setState({name_2_11c: evt.target.value});  
  }

  setData211c(evt) {
    this.setState({data_2_11c: evt.target.value});  
  }

  setLot211c(evt) {
    this.setState({lot_2_11c: evt.target.value});  
  }

   setSignature211c(evt) {
    this.setState({signature_2_11c: evt.target.value});  
  }

   setDose211c(evt) {
    this.setState({dose_2_11c: evt.target.value});  
  }
}

export default PersonsReferences