import React from 'react';
import $ from 'jquery';
import TextField from 'material-ui/TextField';
import {lightBlack, red700} from 'material-ui/styles/colors';
import errorHandler from './errorHandler';
import { Link } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';
import Validation from './Validation';

  const styles = {
    block: {
      maxWidth: 250,
    },
    radioButton: {
      marginBottom: 16,
    },
    errorStyle: {
      color: red700,
    },
    underlineStyle: {
      borderColor: lightBlack,
    },
    floatingLabelFocusStyle: {
      color: lightBlack,
    },
  };

class PersonalData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      name_1:'',
      nick_name_1:'',
      card_number_cns_1:'',
      photo_1:'',
      document_cpf_1:'',
      document_rg_1:'',
      mothers_name_1:'',
      date_of_birth_1:'',
      sexuality_1:'',
      city_of_birth_1:'',
      nationality_1:'',
      country_of_birth_1:'',
      can_you_read_and_write_1:'',
      scholarity_1:'',
      breed_color_1:'',
      breed_color_aux_1:'',
      do_you_have_a_religion_1:'',
      country_of_birth_1:'',
      do_you_have_a_religion_aux_1:'',
      occupation_primary_profession_1:'',
      marital_status_1:'',
      marital_status_aux_1: '',
      basic_heath_unit_that_attends_1:'',
      do_you_have_any_major_allergies_1:'',
      do_you_have_any_disabilities_1:'',
      do_you_have_any_disabilities_aux_1:'',
      whatdeficiency_1:'',
      blood_type_1:'',
      rh_factor_1:''
    };

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
    this.setMaritalStatus1 = this.setMaritalStatus1.bind(this);
    this.setMaritalStatusAux1 = this.setMaritalStatusAux1.bind(this);
    this.setOccupationPrimaryProfession1 = this.setOccupationPrimaryProfession1.bind(this);
    this.setBasicHeathUnitThatAttends1 = this.setBasicHeathUnitThatAttends1.bind(this);
    this.setDoYouHaveAnyMajorAllergies1 = this.setDoYouHaveAnyMajorAllergies1.bind(this);
    this.setDoYouHaveAnyDisabilities1 = this.setDoYouHaveAnyDisabilities1.bind(this);
    this.setDoYouHaveAnyDisabilitiesAux1 = this.setDoYouHaveAnyDisabilitiesAux1.bind(this);
    this.setWhatDeficiency1 = this.setWhatDeficiency1.bind(this);
    this.setBloodType1 = this.setBloodType1.bind(this);
    this.setRhFactor1 = this.setRhFactor1.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/personaldata",
      dataType: "json",
      method: "GET",
      success:function(response){        
        if (response[0].id) {
          this.buildData(response[0]);
        }
      }.bind(this)
    });
  }

  buildData(data) {
    this.setState({name_1: data.name_1});  
    this.setState({nick_name_1: data.nick_name_1});
    this.setState({card_number_cns_1: data.card_number_cns_1});
    this.setState({document_rg_1: data.document_rg_1});
    this.setState({mothers_name_1: data.mothers_name_1});
    this.setState({do_you_have_a_religion_aux_1: data.do_you_have_a_religion_aux_1});
    this.setState({document_cpf_1: data.document_cpf_1});
    this.setState({city_of_birth_1: data.city_of_birth_1});
    this.setState({country_of_birth_1: data.country_of_birth_1});
    this.setState({breed_color_aux_1: data.breed_color_aux_1});
    this.setState({sexuality_1: data.sexuality_1});
    this.setState({nationality_1: data.nationality_1});
    this.setState({can_you_read_and_write_1: data.can_you_read_and_write_1});
    this.setState({scholarity_1: data.scholarity_1});
    this.setState({breed_color_1: data.breed_color_1});
    this.setState({do_you_have_a_religion_1: data.do_you_have_a_religion_1});
    this.setState({date_of_birth_1: data.date_of_birth_1});
    this.setState({photo_1: data.photo_1});
    this.setState({marital_status_1: data.marital_status_1});
    this.setState({marital_status_aux_1: data.marital_status_aux_1});  
    this.setState({occupation_primary_profession_1: data.occupation_primary_profession_1});  
    this.setState({basic_heath_unit_that_attends_1: data.basic_heath_unit_that_attends_1});  
    this.setState({do_you_have_any_major_allergies_1: data.do_you_have_any_major_allergies_1});  
    this.setState({do_you_have_any_disabilities_1: data.do_you_have_any_disabilities_1});   
    this.setState({do_you_have_any_disabilities_aux_1: data.do_you_have_any_disabilities_aux_1});   
    this.setState({whatdeficiency_1: data.whatdeficiency_1});
    this.setState({blood_type_1: data.blood_type_1});
    this.setState({rh_factor_1: data.rh_factor_1});
  }

  sendForm(evt) {
    $.ajax({
      url: "/api/v1/personaldata",
      contentType: 'application/json',
      dataType: 'json',
      method: "POST",
      data: JSON.stringify({ data: this.state }),
      success: function(response){
        alert("sucesso");
        console.log(response);
      },
      error: function(response){
        console.log(response);
        if(response.status === 400) {
          new errorHandler().getErrors(response.responseJSON);
        }
        if(response.status === 500) {
          new errorHandler().getErrors(response.responseJSON);
        }
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
                    <TextField hintText="Nome" floatingLabelText="Nome" value={this.state.name_1} onChange={this.setName1} className="answers-1" id="1-name" name="answers[1[name]]" maxLength="50" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/>
                    <TextField hintText="Apelido/Nome Social" floatingLabelText="Apelido/Nome Social" value={this.state.nick_name_1} onChange={this.setNickName1} className="answers-2" id="1-nickname" name="answers[1[nickname]]" maxLength="50" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/>
                    <TextField hintText="Nº do cartão SUS " floatingLabelText="Nº do cartão SUS " value={this.state.card_number_cns_1} onChange={this.setCardNumberCns1} className="answers-3" id="1-cardnumber" name="answers[1[cardnumber]]" maxLength="11" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/><br/>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlFile1">Foto</label>
                      <input type="file" value={this.state.photo_1} onChange={this.setPhoto1} className="form-control-file 1-photo" name="answers[1[photo]]" id="exampleFormControlFile1" maxLength="255"/>
                    </div>
                    <TextField hintText="Documento de identidade" floatingLabelText="Documento de identidade" type="text" value={this.state.document_rg_1} onChange={this.setDocumentRg1} className="answers-5" id="1-document" name="answers[1[Document2]]" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} maxLength="9"/>
                    <br/>
                    <TextField hintText="CPF" floatingLabelText="CPF" type="text" value={this.state.document_cpf_1} onChange={this.setDocumentCpf1} className="answers-5" id="1-document1" name="answers[1[Document1]]" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} maxLength="11"/>
                    <br/>
                    <TextField hintText="Nome completo da mãe" floatingLabelText="Nome completo da mãe" value={this.state.mothers_name_1} onChange={this.setMothersName1} className="answers-6" id="1-monthersname" name="answers[1[monthersname]]" maxLength="50" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/><br/>
                    <label>Data de nascimento</label><br/>
                    <input type="date" value={this.state.date_of_birth_1} onChange={this.setDateOfBirth1} placeholder="Data de nascimento" className="answers-7" id="1-dateofbirth" name="answers[1[dateofbirth]]"/>
                    <br/><br/>
                    <label>Sexo</label><br/>
                    <input type="radio" checked={this.state.sexuality_1 === 'F'} onChange={this.setSexuality} className="answers-8" id="1-sexuality-f" name="answers[1[sexuality]]" value="F" /> Feminino
                    <input type="radio" checked={this.state.sexuality_1 === 'M'} onChange={this.setSexuality} className="answers-8" id="1-sexuality-m" name="answers[1[sexuality]]" value="M" />Masculino
                    <br/>
                    <TextField hintText="Município de nascimento/UF" floatingLabelText="Município de nascimento/UF" value={this.state.city_of_birth_1} onChange={this.setCityOfBirth1} className="answers-9" id="1-cityofbirth" name="answers[1[cityofbirth]]" maxLength="2" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/><br/>
                    <label>Nacionalidade</label><br/>
                    <input type="radio" checked={this.state.nationality_1 === 'brasileira'} onChange={this.setNationality1} className="answers-10" id="1-nationality" name="answers[1[nationality]]" value="brasileira" /> Brasileira
                    <input type="radio" checked={this.state.nationality_1 === 'naturalizado'} onChange={this.setNationality1} className="answers-10" id="1-nationality" name="answers[1[nationality]]" value="naturalizado"/>Naturalizado
                    <input type="radio" checked={this.state.nationality_1 === 'estrageira'} onChange={this.setNationality1} className="answers-10" id="1-nationality" name="answers[1[nationality]]" value="estrageira" />Estrageira
                    <br/>
                    <TextField hintText="País de nascimento" floatingLabelText="País de nascimento" value={this.state.country_of_birth_1} onChange={this.setCountryOfBirth1} className="answers-10" id="1-birthparents" name="answers[1[birthparents]]" maxLength="30" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/>
                    <label>Sabe ler e escrever? </label><br/>
                    <input type="radio" checked={this.state.can_you_read_and_write_1 === '1'} onChange={this.setCanYouReadAndWrite1} className="answers-11" id="1-readwrite-y" name="answers[1[readwrite]]" value="1" /> Sim
                    <input type="radio" checked={this.state.can_you_read_and_write_1 === '0'} onChange={this.setCanYouReadAndWrite1} className="answers-11" id="1-readwrite-n" name="answers[1[readwrite]]" value="0" /> Não
                    <br/><br/>
                  </fieldset>
                </div>
                <div className="col">
                  <fieldset>
                    <br/>
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
                    <TextField hintText="Qual etnia?" floatingLabelText="Qual etnia?" value={this.state.breed_color_aux_1} onChange={this.setBreedColorAux1} className="answers-13" id="1-breedcolor-what" name="answers[1[breedcolor_aux]]" maxLength="30" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/><br/>
                    <label>Tem religião?</label><br/>
                    <input type="radio" checked={this.state.do_you_have_a_religion_1 === 'y'} onChange={this.setDoYouHaveaReligion1} className="answers-14" id="1-religion-y" name="answers[1[religion]]" value="y" />Sim
                    <input type="radio" checked={this.state.do_you_have_a_religion_1 === 'n'} onChange={this.setDoYouHaveaReligion1} className="answers-14" id="1-religion-n" name="answers[1[religion]]" value="n" />Não
                    <br/>
                    <TextField hintText="Qual?" floatingLabelText="Qual?" value={this.state.do_you_have_a_religion_aux_1} onChange={this.setDoYouHaveaReligionAux1} className="answers-14" id="1-religion-w" name="answers[1[religion]]" maxLength="20" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/>
                    <TextField hintText="Ocupação/Profissional" floatingLabelText="Ocupação/Profissional"  value={this.state.occupation_primary_profession_1} onChange={this.setOccupationPrimaryProfession1} className="answers-16" id="1-primaryprofession" name="answers[1[primaryprofession]]" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/>
                    <label>Situação conjugal</label><br/>
                    <input type="radio" checked={this.state.marital_status_1 === "notmarried"} onChange={this.setMaritalStatus1} className="answers-17" id="1-maritalstatus-s" name="answers[1[maritalstatus]]" value="notmarried" /> Solteiro(a)
                    <input type="radio" checked={this.state.marital_status_1 === "married"} onChange={this.setMaritalStatus1} className="answers-17" id="1-maritalstatus-m" name="answers[1[maritalstatus]]" value="married" /> Casado(a)/convivio com parceiro(a)
                    <input type="radio" checked={this.state.marital_status_1 === "divorced"} onChange={this.setMaritalStatus1} className="answers-17" id="1-maritalstatus-d" name="answers[1[maritalstatus]]" value="divorced" /> Divorciado(a)/separado(a)
                    <input type="radio" checked={this.state.marital_status_1 === "widower"} onChange={this.setMaritalStatus1} className="answers-17" id="1-maritalstatus-w" name="answers[1[maritalstatus]]" value="widower" /> Viúvo(a)
                    <input type="radio" checked={this.state.marital_status_1 === "Other"} onChange={this.setMaritalStatus1} className="answers-17" id="1-maritalstatus-o" name="answers[1[maritalstatus]]" value="Other" /> Outra
                    <TextField hintText="Desde quando? Ano." floatingLabelText="Desde quando? Ano."  value={this.state.marital_status_aux_1} onChange={this.setMaritalStatusAux1} className="answers-17" id="1-maritalstatus-sw" name="answers[1[maritalstatus]]" maxLength="5" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/>
                    <TextField hintText="Unidade básica de saúde que frequenta" floatingLabelText="Unidade básica de saúde que frequenta"  value={this.state.basic_heath_unit_that_attends_1} onChange={this.setBasicHeathUnitThatAttends1} className="answers-18" id="1-Basic unit" name="answers[1[Basicunit]]" maxLength="30" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/>
                    <TextField hintText="Especificar" floatingLabelText="Tem alguma alergia de maior gravidade?"  value={this.state.do_you_have_any_major_allergies_1} onChange={this.setDoYouHaveAnyMajorAllergies1} className="answers-19" id="1-Major allergy" name="answers[1[maritalstatus]]" maxLength="50" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/><br/>
                    <label>Tem alguma deficiência? </label><br/>
                    <input type="radio" checked={this.state.do_you_have_any_disabilities_1 === "1"} onChange={this.setDoYouHaveAnyDisabilities1} className="answers-20" id="1-deficiency-y" name="answers[1[deficiency]]" value="1" /> Sim
                    <input type="radio" checked={this.state.do_you_have_any_disabilities_1 === "0"} onChange={this.setDoYouHaveAnyDisabilities1} className="answers-20" id="1-deficiency-n" name="answers[1[deficiency]]" value="0" /> Não
                    <br/><br/>
                    <label>Qual? </label><br/>
                    <input type="radio"  checked={this.state.do_you_have_any_disabilities_aux_1 === "auditory"} onChange={this.setDoYouHaveAnyDisabilitiesAux1} className="answers-21" id="1-whatdeficiency-a" name="answers[1[whatdeficiency]]" value="auditory" />Auditiva
                    <input type="radio"  checked={this.state.do_you_have_any_disabilities_aux_1 === "visual"} onChange={this.setDoYouHaveAnyDisabilitiesAux1} className="answers-21" id="1-whatdeficiency-v" name="answers[1[whatdeficiency]]" value="visual" />Visual
                    <input type="radio"  checked={this.state.do_you_have_any_disabilities_aux_1 === "intellectual_cognitive"} onChange={this.setDoYouHaveAnyDisabilitiesAux1} className="answers-21" id="1-whatdeficiency-i" name="answers[1[whatdeficiency]]" value="intellectual_cognitive" />Intelectual/Cognitiva
                    <input type="radio"  checked={this.state.do_you_have_any_disabilities_aux_1 === "physical"} onChange={this.setDoYouHaveAnyDisabilitiesAux1} className="answers-21" id="1-whatdeficiency-p" name="answers[1[whatdeficiency]]" value="physical" />Física
                    <input type="radio"  checked={this.state.do_you_have_any_disabilities_aux_1 === "other"} onChange={this.setDoYouHaveAnyDisabilitiesAux1} className="answers-21" id="1-whatdeficiency-o" name="answers[1[whatdeficiency]]" value="other" />Outra
                    <br/>
                    <TextField hintText="Especificar" floatingLabelText="Especificar" type="text"  value={this.state.whatdeficiency_1} onChange={this.setWhatDeficiency1} className="answers-21" id="1-specify" name="answers[1[whatdeficiency]]" maxLength="30" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/>
                    <TextField hintText="Grupo sanguíneo" floatingLabelText="Grupo sanguíneo"  value={this.state.blood_type_1} onChange={this.setBloodType1} className="answers-22" id="1-bloodtype" name="answers[1[bloodtype]]" maxLength="30" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                    <br/>
                    <TextField hintText="Fator RH" floatingLabelText="Fator RH"  value={this.state.rh_factor_1} onChange={this.setRhFactor1} className="answers-23" id="1-rhfactor" name="answers[1[rhfactor]]" maxLength="50" underlineFocusStyle={styles.underlineStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Dados Pessoais">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" onClick={this.sendForm} onClick={this.sendForm}><i className="fa fa-floppy-o" aria-hidden="true"> Salvar alterações</i></a>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/personsreferences" ><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
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
    if (Validation.isNumber(evt.target.value) === true) {
      this.setState({card_number_cns_1: evt.target.value});  
    }
  }

  setDocumentRg1(evt) {
    if (Validation.isNumber(evt.target.value) === true) {
      this.setState({document_rg_1: evt.target.value});
    }
  }

  setMothersName1(evt) {
    this.setState({mothers_name_1: evt.target.value});  
  }

  setDoYouHaveaReligionAux1(evt) {
    this.setState({do_you_have_a_religion_aux_1: evt.target.value});  
  }

  setDocumentCpf1(evt) {
    if (Validation.isNumber(evt.target.value) === true) {
      this.setState({document_cpf_1: evt.target.value});
    }
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

  setMaritalStatus1(evt) {
    this.setState({marital_status_1: evt.target.value});
  }

  setMaritalStatusAux1(evt) {
    this.setState({marital_status_aux_1: evt.target.value});    
  }

  setOccupationPrimaryProfession1(evt) {
    this.setState({occupation_primary_profession_1: evt.target.value});    
  }

  setBasicHeathUnitThatAttends1(evt) {
    this.setState({basic_heath_unit_that_attends_1: evt.target.value});    
  }

  setDoYouHaveAnyMajorAllergies1(evt) {
    this.setState({do_you_have_any_major_allergies_1: evt.target.value});    
  }

  setDoYouHaveAnyDisabilities1(evt) {
    this.setState({do_you_have_any_disabilities_1: evt.target.value});    
  }

  setDoYouHaveAnyDisabilitiesAux1(evt) {
    this.setState({do_you_have_any_disabilities_aux_1: evt.target.value});    
  }

  setWhatDeficiency1(evt) {
    this.setState({whatdeficiency_1: evt.target.value});    
  }

  setBloodType1(evt) {
    this.setState({blood_type_1: evt.target.value});    
  }

  setRhFactor1(evt) {
    this.setState({rh_factor_1: evt.target.value});    
  }

}

export default PersonalData