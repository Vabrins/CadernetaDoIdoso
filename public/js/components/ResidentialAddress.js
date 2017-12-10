import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Validation from './Validation';

class ResidentialAddress extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {street_avenue_square_1_a:'', number_1_a:'', complement_1_a:'', district_1_a:'', reference_point_1_a:'', zip_code_1_a:'', county_1_a:'', state_1_a:'', telephone_1_a:'', cell_phone_1_a:'', email_1_a:'' };
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
      url: "/api/v1/residentialaddress",
      dataType: "json",
      method: "GET",
      success:function(response){
        if (response != "") {
          this.buildData(response[0]);
        }
      }.bind(this)
    });
  }

  buildData(data) {    
    if (data.street_avenue_square_1_a != null) {
      this.setState({street_avenue_square_1_a: data.street_avenue_square_1_a});
    }
    if (data.number_1_a != null) {
      this.setState({number_1_a: data.number_1_a});
    }
    if (data.complement_1_a != null) {
      this.setState({complement_1_a: data.complement_1_a});
    }
    if (data.district_1_a != null) {
      this.setState({district_1_a: data.district_1_a});
    }
    if (data.reference_point_1_a != null) {
      this.setState({reference_point_1_a: data.reference_point_1_a});
    }
    if (data.zip_code_1_a != null) {
      this.setState({zip_code_1_a: data.zip_code_1_a});
    }
    if (data.county_1_a != null) {
      this.setState({county_1_a: data.county_1_a});
    }
    if (data.state_1_a != null) {
      this.setState({state_1_a: data.state_1_a});
    }
    if (data.telephone_1_a != null) {
      this.setState({telephone_1_a: data.telephone_1_a});
    }
    if (data.cell_phone_1_a != null) {
      this.setState({cell_phone_1_a: data.cell_phone_1_a});
    }
    if (data.email_1_a != null) {
      this.setState({email_1_a: data.email_1_a});
    }
  }

  sendForm(evt) {
    $.ajax({
      url: "/api/v1/residentialaddress",
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
                  <input type="text" value={this.state.number_1_a} onChange={this.setNumber1a} className="answers-25" id="1.a-number" name="answers[1.a[number]]" maxLength="6" />
                  <br/><br/>
                  <label>Complemento</label><br/>
                  <input type="text" value={this.state.complement_1_a} onChange={this.setComplement1a} placeholder="complemento" className="answers-26" id="1.a-complement" name="answers[1.a[complement]]" maxLength="20" />
                  <br/><br/>
                  <label>Bairro</label><br/>
                  <input type="text" value={this.state.district_1_a} onChange={this.setDistrict1a} placeholder="bairro" className="answers-26" id="1.a-distric" name="answers[1.a[distric]]" maxLength="50" />
                  <br/><br/>
                  <label>Ponto de referência</label><br/>
                  <input type="text" value={this.state.reference_point_1_a} onChange={this.setReferencePoint1a} placeholder="Ponto de referência" className="answers-26" id="1.a-referencepoint" name="answers[1.a[referencepoint]]" maxLength="50" />
                  <br/><br/>
                  <label>Cep</label><br/>
                  <input type="text" value={this.state.zip_code_1_a} onChange={this.setZipCode1a} placeholder="Cep" className="answers-27" id="1.a-zipcode" name="answers[1.a[zipcode]]" maxLength="8" />
                  <br/><br/>
                  <label>Município</label><br/>
                  <input type="text" value={this.state.county_1_a} onChange={this.setCounty1a} placeholder="Município" className="answers-28" id="1.a-country" name="answers[1.a[country]]" maxLength="2" />
                  <br/><br/>
                  <label>Estado</label><br/>
                  <input type="text" value={this.state.state_1_a} onChange={this.setState1a} placeholder="Estado" className="answers-29" id="1.a-state" name="answers[1.a[state]]" maxLength="50" />
                  <br/><br/>
                  <label>Telefone</label><br/>
                  <input type="telephone" value={this.state.telephone_1_a} onChange={this.setTelePhone1a} className="answers-29" id="1.a-telephone" name="answers[1.a[telephone]]" maxLength="11" />
                  <br/><br/>
                  <label>Celular</label><br/>
                  <input type="telephone" value={this.state.cell_phone_1_a} onChange={this.setCellPhone1a} className="answers-30" id="1.a-cellphone" name="answers[1.a[cellphone]]" maxLength="11" />
                  <br/><br/>
                  <label>Email</label><br/>
                  <input type="email" value={this.state.email_1_a} onChange={this.setEmail1a} className="answers-31" id="1.a-email" name="answers[1.a[email]]" maxLength="50" />
                  <br/><br/>  
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Endereço residencial">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/personsreferences" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={this.sendForm} onClick={this.sendForm}><i className="fa fa-floppy-o" aria-hidden="true"> Salvar alterações</i></a>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/socialfamilyinformations"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
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
    if (Validation.isNumber(evt.target.value) === true) {
      this.setState({number_1_a: evt.target.value});
    }
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
    if (Validation.isNumber(evt.target.value) === true) {
      this.setState({zip_code_1_a: evt.target.value});
    }
  }

  setCounty1a(evt) {
    this.setState({county_1_a: evt.target.value});
  }

  setState1a(evt) {
    this.setState({state_1_a: evt.target.value});
  }

  setTelePhone1a(evt) {
    if (Validation.isNumber(evt.target.value) === true) {
      this.setState({telephone_1_a: evt.target.value});
    }
  }  

  setCellPhone1a(evt) {
    if (Validation.isNumber(evt.target.value) === true) {
      this.setState({cell_phone_1_a: evt.target.value});
    }
  }

  setEmail1a(evt) {
    this.setState({email_1_a: evt.target.value});
  }

}

export default ResidentialAddress