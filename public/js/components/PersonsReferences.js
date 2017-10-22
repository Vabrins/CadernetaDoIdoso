import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class PersonsReferences extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', name_1_1:'', date_of_birth_1_1:'', link_1_1:'', address_1_1:'', telephone_1_1:'', cell_phone_1_1:'', does_this_person_live_with_you_1_1:'', date_of_this_information_1_1:''};
    this.sendForm = this.sendForm.bind(this);
    this.setName11 = this.setName11.bind(this);
    this.setDateOfBirth11 = this.setDateOfBirth11.bind(this);
    this.setLink11 = this.setLink11.bind(this);
    this.setAddress11 = this.setAddress11.bind(this);
    this.setTelephone11 = this.setTelephone11.bind(this);
    this.setLivesPeople11 = this.setLivesPeople11.bind(this);
    this.setData11 = this.setData11.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/personsreferences",
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
      url: "http://127.0.0.1:8000/api/v1/personsreferences",
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
            <form id="personsreferences" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                    <label>Nome</label><br/>
                    <input type="text" value={this.state.name_1_1} onChange={this.setName11} placeholder="Nome" className="answers-44" id="1.1-name" name="answers[1.1[name]]" maxLength="50" />
                    <br/><br/>
                    <label>Data de nascimento</label><br/>
                    <input type="date" value={this.state.date_of_birth_1_1} onChange={this.setDateOfBirth11} placeholder="Data de nascimento" className="answers-45" id="1.1-dateofbirth" name="answers[1.1[dateofbirt]]" />
                    <br/><br/>
                    <label>Vínculo</label><br/>
                    <input type="text" value={this.state.link_1_1} onChange={this.setLink11} placeholder="Vínculo " className="answers-46" id="1.1-Link" name="answers[1.1[link]]" maxLength="50" />
                    <br/><br/>
                    <label>Endereço</label><br/>
                    <input type="text" value={this.state.address_1_1} onChange={this.setAddress11} placeholder="Endereço" className="answers-47" id="1.1-address" name="answers[1.1[address]]" maxLength="50" />
                    <br/><br/>
                    <label>Telefone</label><br/>
                    <input type="telephone" value={this.state.telephone_1_1} onChange={this.setTelephone11} placeholder="Telefone" className="answers-48" id="1.1-telephone" name="answers[1.1[telephone]]" maxLength="12" />
                    <br/><br/>
                    <label>Essa pessoa mora com você? </label><br/>
                    <input type="radio" checked={this.state.livespeople_1_1 === 'y'} onChange={this.setLivesPeople11} className="answers-49" id="1.1-livespeople-n" name="answers[1.1[livespeople]]" value="n" /> Sim
                    <input type="radio" checked={this.state.livespeople_1_1 === 'n'} onChange={this.setLivesPeople11} className="answers-49" id="1.1-livespeople-y" name="answers[1.1[livespeople]]" value="y" />Não
                    <br/><br/>
                    <label>Data dessa informação</label><br/>
                    <input type="date" value={this.state.data_1_1} onChange={this.setData11}  placeholder="Data dessa informação" className="answers-50" id="1.1-data" name="answers[1[cityofbirth]]" />
                    <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Pessoas de Referencia">
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

  setName11(evt) {
    this.setState({name_1_1: evt.target.value});  
  }

  setDateOfBirth11(evt) {
    this.setState({date_of_birth_1_1: evt.target.value});  
  }

  setLink11(evt) {
    this.setState({link_1_1: evt.target.value});  
  }

  setAddress11(evt) {
    this.setState({address_1_1: evt.target.value});  
  }

  setTelephone11(evt) {
    this.setState({telephone_1_1: evt.target.value});  
  }

  setLivesPeople11(evt) {
    this.setState({livespeople_1_1: evt.target.value});  
  }

  setData11(evt) {
    this.setState({data_1_1: evt.target.value}); 
  }

}

export default PersonsReferences