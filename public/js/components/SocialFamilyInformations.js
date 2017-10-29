import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class SocialFamilyInformation extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', do_you_live_alone_1_b:'', do_you_live_with_relatives_1_b:'', do_you_live_with_your_spouse_or_partne_1_b:'', in_case_of_need_you_have_some_to_acc_the_health_fac_query_1_b:'', in_the_last_30_days_you_have_met_friends_1_b:'', you_live_long_term_inst_eld_ilpi_shelter_or_nursing_home_1_b:'', county_1_b:'', have_you_easy_access_pharmacy_services_bakery_supermarket_1_b:'', have_you_easy_access_to_transportation_1_b:'', do_you_currently_work_1_b:'', do_you_receive_retirement_or_pension_1_b:'', you_receive_benefit_of_benefit_continued_bpc_1_b:'', do_you_receive_benefits_from_the_exchange_1_b:''};
    this.sendForm = this.sendForm.bind(this);
    this.setLivingAlone1b = this.setLivingAlone1b.bind(this);
    this.setLiveFamily1b = this.setLiveFamily1b.bind(this);
    this.setLifePartner1b = this.setLifePartner1b.bind(this);
    this.setRestHome1b = this.setRestHome1b.bind(this);
    this.setWalk1b = this.setWalk1b.bind(this);
    this.setMonitoring1b = this.setMonitoring1b.bind(this);
    this.setCounty1b = this.setCounty1b.bind(this);
    this.setAccess1b = this.setAccess1b.bind(this);
    this.seTransport1b = this.seTransport1b.bind(this);
    this.setWork1b = this.setWork1b.bind(this);
    this.setRetirement1b = this.setRetirement1b.bind(this);
    this.setBenefit1b = this.setBenefit1b.bind(this);
    this.setBolsaFamilia1b = this.setBolsaFamilia1b.bind(this);

  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/socialfamilyinformation",
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
      url: "http://127.0.0.1:8000/api/v1/socialfamilyinformation",
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
            <form id="socialfamilyinformation" method="post">
              <div className="row">
                <div className="col">
                <fieldset>
                <label>Você mora sozinho(a)?</label><br/>
                <input type="radio" checked={this.state.do_you_live_alone_1_b === "1"} onChange={this.setLivingAlone1b} className="answers-32" id="1.b-livingalone-y" name="answers[1.b[livingalone]]" value="1" />Sim
                <input type="radio" checked={this.state.do_you_live_alone_1_b === "0"} onChange={this.setLivingAlone1b} className="answers-32" id="1.b-livingalone-n" name="answers[1.b[livingalone]]" value="0" />Não
                <br/><br/>
                <label>Você mora com familiares?</label><br/>
                <input type="radio" checked={this.state.do_you_live_with_relatives_1_b === "1"} onChange={this.setLiveFamily1b} className="answers-33" id="1.b-livefamily-y" name="answers[1.b[livefamily]]" value="1" />Sim
                <input type="radio" checked={this.state.do_you_live_with_relatives_1_b === "0"} onChange={this.setLiveFamily1b} className="answers-33" id="1.b-livefamily-n" name="answers[1.b[livefamily]]" value="0" />Não
                <br/><br/>
                <label>Você mora com seu(sua) cônjuge ou companheiro(a)?</label><br/>
                <input type="radio" checked={this.state.do_you_live_with_your_spouse_or_partne_1_b === "1"} onChange={this.setLifePartner1b} className="answers-34" id="1.b-lifepartner-y" name="answers[1.b[lifepartner]]" value="1" />Sim
                <input type="radio" checked={this.state.do_you_live_with_your_spouse_or_partne_1_b === "0"} onChange={this.setLifePartner1b} className="answers-34" id="1.b-lifepartner-n" name="answers[1.b[lifepartner]]" value="0" />Não
                <br/><br/>
                <label>Você reside em instituição de longa permanência para idosos (ILPI), abrigo ou casa de repouso?</label><br/>
                <input type="radio" checked={this.state.in_case_of_need_you_have_some_to_acc_the_health_fac_query_1_b === "1"} onChange={this.setRestHome1b} className="answers-35" id="1.b-resthome-y" name="answers[1.b[resthome]]" value="1" />Sim
                <input type="radio" checked={this.state.in_case_of_need_you_have_some_to_acc_the_health_fac_query_1_b === "0"} onChange={this.setRestHome1b} className="answers-35" id="1.b-resthome-n" name="answers[1.b[resthome]]" value="0" />Não
                <br/><br/>
                <label>Nos últimos 30 dias, você se encontrou com amigos ou familiares para conversar ou fazer alguma atividade, como ir ao cinema ou à igreja, passear ou caminhar junto?</label><br/>
                <input type="radio" checked={this.state.in_the_last_30_days_you_have_met_friends_1_b === "1"} onChange={this.setWalk1b} className="answers-36" id="1.b-walk-y" name="answers[1.b[walk]]" value="1" />Sim
                <input type="radio" checked={this.state.in_the_last_30_days_you_have_met_friends_1_b === "0"} onChange={this.setWalk1b} className="answers-36" id="1.b-walk-n" name="answers[1.b[walk]]" value="0" />Não
                <br/><br/>
                <label>Em caso de necessidade, você conta com alguém para acompanhá-lo(a) à unidade de saúde ou a uma consulta?</label><br/>
                <input type="radio" checked={this.state.you_live_long_term_inst_eld_ilpi_shelter_or_nursing_home_1_b === "1"} onChange={this.setMonitoring1b} className="answers-37" id="1.b-Monitoring-y" name="answers[1.b[Monitoring]]" value="1" />Sim
                <input type="radio" checked={this.state.you_live_long_term_inst_eld_ilpi_shelter_or_nursing_home_1_b === "0"} onChange={this.setMonitoring1b} className="answers-37" id="1.b-Monitoring-n" name="answers[1.b[Monitoring]]" value="0" />Não
                <br/><br/>
                <label>Em caso de necessidade, você conta com alguém para acompanhá-lo(a) à unidade de saúde ou a uma consulta?</label><br/>
                <input type="radio" checked={this.state.county_1_b === "1"} onChange={this.setCounty1b} className="answers-37a" id="1.b-County-y" name="answers[1.b[County]]" value="1" />Sim
                <input type="radio" checked={this.state.county_1_b === "0"} onChange={this.setCounty1b} className="answers-37a" id="1.b-County-n" name="answers[1.b[County]]" value="0" />Não
                <br/><br/>    
                <label>Você tem fácil acesso aos serviços de farmácia, padaria ou supermercado?</label><br/>
                <input type="radio" checked={this.state.have_you_easy_access_pharmacy_services_bakery_supermarket_1_b === "1"} onChange={this.setAccess1b} className="answers-38" id="1.b-access-y" name="answers[1.b[access]]" value="1" />Sim
                <input type="radio" checked={this.state.have_you_easy_access_pharmacy_services_bakery_supermarket_1_b === "0"} onChange={this.setAccess1b} className="answers-38" id="1.b-access-n" name="answers[1.b[access]]" value="0" />Não
                <br/><br/>
                <label>Você tem fácil acesso a transporte? </label><br/>
                <input type="radio" checked={this.state.have_you_easy_access_to_transportation_1_b === "1"} onChange={this.seTransport1b} className="answers-39" id="1.b-transport-y" name="answers[1.b[transport]]" value="1" />Sim
                <input type="radio" checked={this.state.have_you_easy_access_to_transportation_1_b === "0"} onChange={this.seTransport1b} className="answers-39" id="1.b-transport-n" name="answers[1.b[transport]]" value="0" />Não
                <br/><br/>
                <label>Você trabalha atualmente? </label><br/>
                <input type="radio" checked={this.state.do_you_currently_work_1_b === "1"} onChange={this.setWork1b} className="answers-40" id="1.b-work-y" name="answers[1.b[work]]" value="1" />Sim
                <input type="radio" checked={this.state.do_you_currently_work_1_b === "0"} onChange={this.setWork1b} className="answers-40" id="1.b-work-n" name="answers[1.b[work]]" value="0" />Não
                <br/><br/>
                <label>Você recebe aposentadoria ou pensão? </label><br/>
                <input type="radio" checked={this.state.do_you_receive_retirement_or_pension_1_b === "1"} onChange={this.setRetirement1b} className="answers-41" id="1.b-retirement-y" name="answers[1.b[retirement]]" value="1" />Sim
                <input type="radio" checked={this.state.do_you_receive_retirement_or_pension_1_b === "0"} onChange={this.setRetirement1b} className="answers-41" id="1.b-retirement-n" name="answers[1.b[retirement]]" value="0" />Não
                <br/><br/>
                <label>Você recebe benefício de prestação continuada (BPC)?</label><br/>
                <input type="radio" checked={this.state.you_receive_benefit_of_benefit_continued_bpc_1_b === "1"} onChange={this.setBenefit1b} className="answers-42" id="1.b-benefit-y" name="answers[1.b[benefit]]" value="1" />Sim
                <input type="radio" checked={this.state.you_receive_benefit_of_benefit_continued_bpc_1_b === "0"} onChange={this.setBenefit1b} className="answers-42" id="1.b-benefit-n" name="answers[1.b[benefit]]" value="0" />Não
                <br/><br/>
                <label>Você recebe benefícios do Bolsa-Família?</label><br/>
                <input type="radio" checked={this.state.do_you_receive_benefits_from_the_exchange_1_b === "1"} onChange={this.setBolsaFamilia1b} className="answers-43" id="1.b-Bolsa-Familia-y" name="answers[1.b[BolsaFamilia]]" value="1" />Sim
                <input type="radio" checked={this.state.do_you_receive_benefits_from_the_exchange_1_b === "0"} onChange={this.setBolsaFamilia1b} className="answers-43" id="1.b-Bolsa-Familia-n" name="answers[1.b[BolsaFamilia]]" value="0" />Não
                <br/><br/>    


                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Informações sociais">
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

  setLivingAlone1b(evt) {
    this.setState({do_you_live_alone_1_b: evt.target.value});  
  }

  setLiveFamily1b(evt) {
    this.setState({do_you_live_with_relatives_1_b: evt.target.value});  
  }

  setLifePartner1b(evt) {
    this.setState({do_you_live_with_your_spouse_or_partne_1_b: evt.target.value});  
  }

  setRestHome1b(evt) {
    this.setState({in_case_of_need_you_have_some_to_acc_the_health_fac_query_1_b: evt.target.value});  
  }

  setWalk1b(evt) {
    this.setState({in_the_last_30_days_you_have_met_friends_1_b: evt.target.value});  
  }

  setMonitoring1b(evt) {
    this.setState({you_live_long_term_inst_eld_ilpi_shelter_or_nursing_home_1_b: evt.target.value});  
  }
  
  setCounty1b(evt) {
    this.setState({county_1_b: evt.target.value}); 
  }

  setAccess1b(evt) {
    this.setState({have_you_easy_access_pharmacy_services_bakery_supermarket_1_b: evt.target.value}); 
  }

  setTelePhone1a(evt) {
    this.setState({have_you_easy_access_to_transportation_1_b: evt.target.value}); 
  }

  setCellPhone1a(evt) {
    this.setState({do_you_currently_work_1_b: evt.target.value}); 
  }

  setRetirement1b(evt) {
    this.setState({do_you_receive_retirement_or_pension_1_b: evt.target.value}); 
  }

  setBenefit1b(evt) {
    this.setState({you_receive_benefit_of_benefit_continued_bpc_1_b: evt.target.value}); 
  }

  setBolsaFamilia1b(evt) {
    this.setState({do_you_receive_benefits_from_the_exchange_1_b: evt.target.value});
  }

  seTransport1b(evt) {
    this.setState({have_you_easy_access_to_transportation_1_b: evt.target.value});
  }

  setWork1b(evt) {
    this.setState({do_you_currently_work_1_b: evt.target.value});
  }

}

export default SocialFamilyInformation