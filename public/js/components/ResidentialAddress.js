import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class ResidentialAddress extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', street_avenue_square_1_a:'', number_1_a:'', complement_1_a:'', district_1_a:'', reference_point_1_a:'', zip_code_1_a:'', county_1_a:'', state_1_a:'', telephone_1_a:'', cell_phone_1_a:'', email_1_a:'' };
    this.sendForm = this.sendForm.bind(this);
    this.setStreet1a = this.setStreet1a.bind(this);
    this.setNumber1a = this.setNumber1a.bind(this);
    this.setComplement1a = this.setComplement1a.bind(this);
    this.setDistrict1a = this.setDistrict1a.bind(this);
    this.setReferencePoint1a = this.setReferencePoint1a.bind(this);
    this.setZipCode1a = this.setZipCode1a.bind(this);
    this.setCounty1a = this.setCounty1a.bind(this);
    this.setState1a = this.setState1a.bind(this);
    this.setTelePhone1a = this.setTelePhone1a.bind(this);
    this.setCellPhone1a = this.setCellPhone1a.bind(this);
    this.setEmail1a = this.setEmail1a.bind(this);

  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/residentialaddress",
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
      url: "http://127.0.0.1:8000/api/v1/residentialaddress",
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
            <form id="redidentialaddress" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <label>Rua avenida praça</label><br/>
                  <input type="text"  value={this.state.street_avenue_square_1_a} onChange={this.setStreet1a} placeholder="Rua avenida praça" className="answers-24" id="1.a-street" name="answers[1.a[street]]" />
                  <br/><br/>
                  <label>N°</label><br/>
                  <input type="Number" value={this.state.number_1_a} onChange={this.setNumber1a} className="answers-25" id="1.a-number" name="answers[1.a[number]]" />
                  <br/><br/>
                  <label>Complemento</label><br/>
                  <input type="text" value={this.state.complement_1_a} onChange={this.setComplement1a} placeholder="complemento" className="answers-26" id="1.a-complement" name="answers[1.a[complement]]" />
                  <br/><br/>
                  <label>Bairro</label><br/>
                  <input type="text" value={this.state.district_1_a} onChange={this.setDistrict1a} placeholder="bairro" className="answers-26" id="1.a-distric" name="answers[1.a[distric]]" />
                  <br/><br/>
                  <label>Ponto de referência</label><br/>
                  <input type="text" value={this.state.reference_point_1_a} onChange={this.setReferencePoint1a} placeholder="Ponto de referência" className="answers-26" id="1.a-referencepoint" name="answers[1.a[referencepoint]]" />
                  <br/><br/>
                  <label>Cep</label><br/>
                  <input type="text" value={this.state.zip_code_1_a} onChange={this.setZipCode1a} placeholder="Cep" className="answers-27" id="1.a-zipcode" name="answers[1.a[zipcode]]"/>
                  <br/><br/>
                  <label>Município</label><br/>
                  <input type="text" value={this.state.county_1_a} onChange={this.setCounty1a} placeholder="Município" className="answers-28" id="1.a-country" name="answers[1.a[country]]" />
                  <br/><br/>
                  <label>Estado</label><br/>
                  <input type="text" value={this.state.state_1_a} onChange={this.setState1a} placeholder="Estado" className="answers-29" id="1.a-state" name="answers[1.a[state]]" />
                  <br/><br/>
                  <label>Telefone</label><br/>
                  <input type="telephone" value={this.state.telephone_1_a} onChange={this.setTelePhone1a} className="answers-29" id="1.a-telephone" name="answers[1.a[telephone]]" />
                  <br/><br/>
                  <label>Celular</label><br/>
                  <input type="telephone" value={this.state.cell_phone_1_a} onChange={this.setCellPhone1a} className="answers-30" id="1.a-cellphone" name="answers[1.a[cellphone]]" />
                  <br/><br/>
                  <label>Email</label><br/>
                  <input type="email" value={this.state.email_1_a} onChange={this.setEmail1a} className="answers-31" id="1.a-email" name="answers[1.a[email]]" />
                  <br/><br/>  
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Endereço residencial">
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

  setStreet1a(evt) {
    this.setState({street_avenue_square_1_a: evt.target.value});  
  }

  setNumber1a(evt) {
    this.setState({number_1_a: evt.target.value});  
  }

  setComplement1a(evt) {
    this.setState({complement_1_a: evt.target.value});  
  }

  setDistrict1a(evt) {
    this.setState({district_1_a: evt.target.value});  
  }

  setReferencePoint1a(evt) {
    this.setState({reference_point_1_a: evt.target.value});  
  }

  setZipCode1a(evt) {
    this.setState({zip_code_1_a: evt.target.value});  
  }

  setCounty1a(evt) {
    this.setState({county_1_a: evt.target.value}); 
  }

  setState1a(evt) {
    this.setState({state_1_a: evt.target.value}); 
  }

  setTelePhone1a(evt) {
    this.setState({telephone_1_a: evt.target.value}); 
  }  

  setCellPhone1a(evt) {
    this.setState({cell_phone_1_a: evt.target.value}); 
  }

  setEmail1a(evt) {
    this.setState({email_1_a: evt.target.value}); 
  }

}

export default ResidentialAddress