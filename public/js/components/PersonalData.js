import React from 'react';
import $ from 'jquery';
// import InputMask from 'react-input-mask';
// import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
// import TextField from 'material-ui/TextField';
// import {lightBlack, red700} from 'material-ui/styles/colors';
import errorHandler from './errorHandler';
import { Link } from 'react-router-dom';

  // const styles = {
  //   block: {
  //     maxWidth: 250,
  //   },
  //   radioButton: {
  //     marginBottom: 16,
  //   },
  //   errorStyle: {
  //     color: red700,
  //   },
  //   underlineStyle: {
  //     borderColor: lightBlack,
  //   },
  //   floatingLabelFocusStyle: {
  //     color: lightBlack,
  //   },
  // };

class PersonalData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      personal_data : [],
      id_historys:'1',
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
      url: "http://127.0.0.1:8000/api/v1/personaldata",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {
    // evt.preventDefault();
    console.log('You have selected:', this.state.name_1);

    // $.ajax({
    //   url: "http://127.0.0.1:8000/api/v1/personaldata",
    //   contentType: 'application/json',
    //   dataType: 'json',
    //   method: "POST",
    //   data: JSON.stringify({ test: this.state }),
    //   success: function(response){
    //     console.log(response);
    //     console.log("enviado com sucesso");
    //   },
    //   error: function(response){
    //     console.log(response);
    //     if(response.status === 400) {
    //       new errorHandler().getErrors(response.responseJSON);
    //     }
    //     if(response.status === 500) {
    //       new errorHandler().getErrors(response.responseJSON);
    //     }
    //   }.bind(this)
    // });
  }

 render () {
  return (
          <div className="container" >
            <nav aria-label="Dados Pessoais">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></a>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="/personsreferences" onClick={this.sendForm} ><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
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