import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class PersonalData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {personal_data : [], id_historys:'1', name_1:'', nick_name_1:'', card_number_cns_1:'', photo_1:'', document_cpf_1:'', document_rg_1:'', mothers_name_1:'', date_of_birth_1:'', sexuality_1:'', city_of_birth_1:'', nationality_1:'', country_of_birth_1:'', can_you_read_and_write_1:'', scholarity_1:'', breed_color_1:'', breed_color_aux_1:'', do_you_have_a_religion_1:'', country_of_birth_1:'', do_you_have_a_religion_aux_1:'', occupation_primary_profession_1:'', marital_status_1:'', basic_heath_unit_that_attends_1:'', do_you_have_any_major_allergies_1:'', do_you_have_any_disabilities_1:'', do_you_have_any_disabilities_aux_1:'', blood_type_1:'1', rh_factor_1:''};
    this.sendForm = this.sendForm.bind(this);
    this.setName1 = this.setName1.bind(this);
    this.setNickName1 = this.setNickName1.bind(this);
    this.setCardNumberCns1 = this.setCardNumberCns1.bind(this);
    this.setDocumentRg1 = this.setDocumentRg1.bind(this);
    this.setMothersName1 = this.setMothersName1.bind(this);
    this.setDoYouHaveaReligionAux1 = this.setDoYouHaveaReligionAux1.bind(this);
    this.setDocumentCpf1 = this.setDocumentCpf1.bind(this);
    this.setCityOfBirth1 = this.setCityOfBirth1.bind(this);
    this.setCountryOfBirth1 = this.setCountryOfBirth1.bind(this);
    this.setBreedColorAux1 = this.setBreedColorAux1.bind(this);
    this.setSexuality = this.setSexuality.bind(this);
    this.setNationality1 = this.setNationality1.bind(this);
    this.setCanYouReadAndWrite1 = this.setCanYouReadAndWrite1.bind(this);
    this.setScholarity1 = this.setScholarity1.bind(this);
    this.setBreedColor1 = this.setBreedColor1.bind(this);
    this.setDoYouHaveaReligion1 = this.setDoYouHaveaReligion1.bind(this);
    this.setDateOfBirth1 = this.setDateOfBirth1.bind(this);
    this.setPhoto1 = this.setPhoto1.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/personaldata",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {
    evt.preventDefault();
    // console.log('You have selected:', this.state.sexuality_1);
    // console.log('You have selected:', this.state.nationality_1);
    // console.log('You have selected:', this.state.can_you_read_and_write_1);
    // console.log('You have selected:', this.state.scholarity_1);
    // console.log('You have selected:', this.state.breed_color_1);
    // console.log('You have selected:', this.state.do_you_have_a_religion_1);
    // console.log('You have selected:', this.state.date_of_birth_1);
    // console.log('You have selected:', this.state.photo_1);

    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/personaldata",
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
            <form id="personaldata" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                    <label>Nome</label><br/>
                    <input type="text" value={this.state.name_1} onChange={this.setName1} placeholder="Nome" className="answers-1" id="1-name" name="answers[1[name]]" maxLength="50" />
                    <br/><br/>
                    <label>Apelido/Nome Social</label><br/>
                    <input type="text" value={this.state.nick_name_1} onChange={this.setNickName1} placeholder="Apelido/Nome Social" className="answers-2" id="1-nickname" name="answers[1[nickname]]" maxLength="50" />
                    <br/><br/>
                    <label>Nº do cartão SUS </label><br/>
                    <input type="text" value={this.state.card_number_cns_1} onChange={this.setCardNumberCns1} placeholder="Nº do cartão SUS " className="answers-3" id="1-cardnumber" name="answers[1[cardnumber]]" maxLength="11" />
                    <br/><br/>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlFile1">Foto</label>
                      <input type="file" value={this.state.photo_1} onChange={this.setPhoto1} className="form-control-file 1-photo" name="answers[1[photo]]" id="exampleFormControlFile1" maxLength="255"/>
                    </div>
                    <br/>
                    <label>Documento de identidade </label><br/>
                    <input type="text" value={this.state.document_rg_1} onChange={this.setDocumentRg1} placeholder="Documento de identidade" className="answers-5" id="1-document" name="answers[1[Document2]]" maxLength="12" />
                    <br/><br/>
                    <label>CPF</label><br/>
                    <input type="text" value={this.state.document_cpf_1} onChange={this.setDocumentCpf1} placeholder="CPF" className="answers-5" id="1-document1" name="answers[1[Document1]]" maxLength="14" />
                  </fieldset>
                </div>
                <div className="col">
                  <fieldset>
                    <label>Nome completo da mãe</label><br/>
                    <input type="text" value={this.state.mothers_name_1} onChange={this.setMothersName1} placeholder="Nome completo da mãe" className="answers-6" id="1-monthersname" name="answers[1[monthersname]]" maxLength="50" />
                    <br/><br/>
                    <label>Data de nascimento</label><br/>
                    <input type="date" value={this.state.date_of_birth_1} onChange={this.setDateOfBirth1} placeholder="Data de nascimento" className="answers-7" id="1-dateofbirth" name="answers[1[dateofbirth]]"/>
                    <br/><br/>
                    <label>Sexo</label><br/>
                    <input type="radio" checked={this.state.sexuality_1 === 'F'} onChange={this.setSexuality} className="answers-8" id="1-sexuality-f" name="answers[1[sexuality]]" value="F" /> Feminino
                    <input type="radio" checked={this.state.sexuality_1 === 'M'} onChange={this.setSexuality} className="answers-8" id="1-sexuality-m" name="answers[1[sexuality]]" value="M" />Masculino
                    <br/><br/>
                    <label>Município de nascimento/UF</label><br/>
                    <input type="text" value={this.state.city_of_birth_1} onChange={this.setCityOfBirth1}  placeholder="Município de nascimento/UF" className="answers-9" id="1-cityofbirth" name="answers[1[cityofbirth]]" maxLength="2" />
                    <br/><br/>
                    <label>Nacionalidade</label><br/>
                    <input type="radio" checked={this.state.nationality_1 === 'brasileira'} onChange={this.setNationality1} className="answers-10" id="1-nationality" name="answers[1[nationality]]" value="brasileira" /> Brasileira
                    <input type="radio" checked={this.state.nationality_1 === 'naturalizado'} onChange={this.setNationality1} className="answers-10" id="1-nationality" name="answers[1[nationality]]" value="naturalizado"/>Naturalizado
                    <input type="radio" checked={this.state.nationality_1 === 'estrageira'} onChange={this.setNationality1} className="answers-10" id="1-nationality" name="answers[1[nationality]]" value="estrageira" />Estrageira
                    <br/><br/>
                    <label>País de nascimento</label><br/>
                    <input type="text" value={this.state.country_of_birth_1} onChange={this.setCountryOfBirth1}  placeholder="País de nascimento" className="answers-10" id="1-birthparents" name="answers[1[birthparents]]" maxLength="30" />
                  </fieldset>
                </div>
                <div className="col">
                  <fieldset>
                    <label>Sabe ler e escrever? </label><br/>
                    <input type="radio" checked={this.state.can_you_read_and_write_1 === 'y'} onChange={this.setCanYouReadAndWrite1} className="answers-11" id="1-readwrite-y" name="answers[1[readwrite]]" value="y" /> Sim
                    <input type="radio" checked={this.state.can_you_read_and_write_1 === 'n'} onChange={this.setCanYouReadAndWrite1} className="answers-11" id="1-readwrite-n" name="answers[1[readwrite]]" value="n" /> Não
                    <br/><br/>
                    <label>Escolaridade</label><br/>
                    <input type="radio" checked={this.state.scholarity_1 === 'nothing'} onChange={this.setScholarity1} className="answers-12" id="1-sholarity-n" name="answers[1[scholarity]]" value="nothing" />nenhuma
                    <input type="radio" checked={this.state.scholarity_1 === 'from1to3years'} onChange={this.setScholarity1} className="answers-12" id="1-sholarity-1/3" name="answers[1[scholarity]]" value="from1to3years" />
                    de 1 a 3 anos
                    <input type="radio" checked={this.state.scholarity_1 === 'from4to7years'} onChange={this.setScholarity1} className="answers-12" id="1-sholarity-4/7" name="answers[1[scholarity]]" value="from4to7years" />
                    de 4 a 7 anos
                    <input type="radio" checked={this.state.scholarity_1 === 'nenhuma'} onChange={this.setScholarity1} className="answers-12" id="1-sholarity-8" name="answers[1[scholarity]]" value="nenhuma" />
                    8 anos ou mais
                    <br/><br/>
                    <label>Raça/cor</label><br/>
                    <input type="radio" checked={this.state.breed_color_1 === 'white'} onChange={this.setBreedColor1} className="answers-13" id="1-breedcolor-white"   name="answers[1[breedcolor]]" value="white" />Branca
                    <input type="radio" checked={this.state.breed_color_1 === 'black'} onChange={this.setBreedColor1} className="answers-13" id="1-breedcolor-black"   name="answers[1[breedcolor]]" value="black" />Preto
                    <input type="radio" checked={this.state.breed_color_1 === 'brown'} onChange={this.setBreedColor1} className="answers-13" id="1-breedcolor-brown"   name="answers[1[breedcolor]]" value="brown" />Parda
                    <input type="radio" checked={this.state.breed_color_1 === 'yellow'} onChange={this.setBreedColor1} className="answers-13" id="1-breedcolor-yellow"  name="answers[1[breedcolor]]" value="yellow" />Amarela
                    <input type="radio" checked={this.state.breed_color_1 === 'undeclared'} onChange={this.setBreedColor1} className="answers-13" id="1-breedcolor-undeclared" name="answers[1[breedcolor]]" value="undeclared" /> Não declarada
                    <br/>
                    <input type="text" value={this.state.breed_color_aux_1} onChange={this.setBreedColorAux1} placeholder="Qual etnia" className="answers-13" id="1-breedcolor-what" name="answers[1[breedcolor_aux]]" maxLength="30" />
                    <br/><br/>
                    <label>Tem religião?</label><br/>
                    <input type="radio" checked={this.state.do_you_have_a_religion_1 === 'y'} onChange={this.setDoYouHaveaReligion1} className="answers-14" id="1-religion-y" name="answers[1[religion]]" value="y" />Sim
                    <input type="radio" checked={this.state.do_you_have_a_religion_1 === 'n'} onChange={this.setDoYouHaveaReligion1} className="answers-14" id="1-religion-n" name="answers[1[religion]]" value="n" />Não
                    <br/>
                    <input type="text" value={this.state.do_you_have_a_religion_aux_1} onChange={this.setDoYouHaveaReligionAux1} placeholder="Qual?" className="answers-14" id="1-religion-w" name="answers[1[religion]]" maxLength="20" />
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Dados Pessoais">
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

  setName1(evt) {
    this.setState({name_1: evt.target.value});  
  }

  setNickName1(evt) {
    this.setState({nick_name_1: evt.target.value});  
  }

  setCardNumberCns1(evt) {
    this.setState({card_number_cns_1: evt.target.value});  
  }

  setDocumentRg1(evt) {
    this.setState({document_rg_1: evt.target.value});  
  }

  setMothersName1(evt) {
    this.setState({mothers_name_1: evt.target.value});  
  }

  setDoYouHaveaReligionAux1(evt) {
    this.setState({do_you_have_a_religion_aux_1: evt.target.value});  
  }

  setDocumentCpf1(evt) {
    this.setState({document_cpf_1: evt.target.value}); 
  }

  setCityOfBirth1(evt) {
    this.setState({city_of_birth_1: evt.target.value});
  }

  setCountryOfBirth1(evt) {
   this.setState({country_of_birth_1: evt.target.value}); 
  }

  setBreedColorAux1(evt) {
   this.setState({breed_color_aux_1: evt.target.value});  
  }

  setSexuality(evt) {
    this.setState({sexuality_1: evt.target.value});
  }

  setNationality1(evt) {
    this.setState({nationality_1: evt.target.value});
  }

  setCanYouReadAndWrite1(evt) {
    this.setState({can_you_read_and_write_1: evt.target.value});
  }

  setScholarity1(evt) {
    this.setState({scholarity_1: evt.target.value});
  }

  setBreedColor1(evt) {
    this.setState({breed_color_1: evt.target.value});
  }

  setDoYouHaveaReligion1(evt) {
    this.setState({do_you_have_a_religion_1: evt.target.value});
  }

  setDateOfBirth1(evt) {
    this.setState({date_of_birth_1: evt.target.value});
  }

  setPhoto1(evt) {
    this.setState({photo_1: evt.target.value});
  }

}

export default PersonalData