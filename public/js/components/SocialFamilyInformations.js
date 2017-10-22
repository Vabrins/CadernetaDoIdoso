import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class PersonalData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', livingalone_1_b:'', livefamily_1_b:'', lifepartner_1_b:'', resthome_1_b:'', walk_1_b:'', monitoring_1_b:'', county_1_b:'', access_1_b:'', transport_1_b:'', work_1_b:'', retirement_1_b:'', benefit_1_b:'', bolsafamilia_1_b:''};
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
                <input type="radio" value={this.state.livingalone_1_b} onChange={this.setLivingAlone1b} className="answers-32" id="1.b-livingalone-y" name="answers[1.b[livingalone]]" value="1" />Sim
                <input type="radio" value={this.state.livingalone _1_b} onChange={this.setLivingAlone1b} className="answers-32" id="1.b-livingalone-n" name="answers[1.b[livingalone]]" value="0" />Não
                <br/><br/>
                <label>Você mora com familiares?</label><br/>
                <input type="radio" value={this.state.livefamily_1_b} onChange={this.setLiveFamily1b} className="answers-33" id="1.b-livefamily-y" name="answers[1.b[livefamily]]" value="1" />Sim
                <input type="radio" value={this.state.livefamily_1_b} onChange={this.setLiveFamily1b} className="answers-33" id="1.b-livefamily-n" name="answers[1.b[livefamily]]" value="0" />Não
                <br/><br/>
                <label>Você mora com seu(sua) cônjuge ou companheiro(a)?</label><br/>
                <input type="radio" value={this.state.lifepartner_1_b} onChange={this.setLifePartner1b} className="answers-34" id="1.b-lifepartner-y" name="answers[1.b[lifepartner]]" value="1" />Sim
                <input type="radio" value={this.state.lifepartner_1_b} onChange={this.setLifePartner1b} className="answers-34" id="1.b-lifepartner-n" name="answers[1.b[lifepartner]]" value="0" />Não
                <br/><br/>
                <label>Você reside em instituição de longa permanência para idosos (ILPI), abrigo ou casa de repouso?</label><br/>
                <input type="radio" value={this.state.resthome_1_b} onChange={this.setRestHome1b} className="answers-35" id="1.b-resthome-y" name="answers[1.b[resthome]]" value="1" />Sim
                <input type="radio" value={this.state.resthome_1_b} onChange={this.setRestHome1b} className="answers-35" id="1.b-resthome-n" name="answers[1.b[resthome]]" value="0" />Não
                <br/><br/>
                <label>Nos últimos 30 dias, você se encontrou com amigos ou familiares para conversar ou fazer alguma atividade, como ir ao cinema ou à igreja, passear ou caminhar junto?</label><br/>
                <input type="radio" value={this.state.walk_1_b} onChange={this.setWalk1b} className="answers-36" id="1.b-walk-y" name="answers[1.b[walk]]" value="1" />Sim
                <input type="radio" value={this.state.walk_1_b} onChange={this.setWalk1b} className="answers-36" id="1.b-walk-n" name="answers[1.b[walk]]" value="0" />Não
                <br/><br/>
                <label>Em caso de necessidade, você conta com alguém para acompanhá-lo(a) à unidade de saúde ou a uma consulta?</label><br/>
                <input type="radio" value={this.state.monitoring_1_b} onChange={this.setMonitoring1b} className="answers-37" id="1.b-Monitoring-y" name="answers[1.b[Monitoring]]" value="1" />Sim
                <input type="radio" value={this.state.monitoring_1_b} onChange={this.setMonitoring1b} className="answers-37" id="1.b-Monitoring-n" name="answers[1.b[Monitoring]]" value="0" />Não
                <br/><br/>
                <label>Em caso de necessidade, você conta com alguém para acompanhá-lo(a) à unidade de saúde ou a uma consulta?</label><br/>
                <input type="radio" value={this.state.county_1_b} onChange={this.setCounty1b} className="answers-37a" id="1.b-County-y" name="answers[1.b[County]]" value="1" />Sim
                <input type="radio" value={this.state.county_1_b} onChange={this.setCounty1b} className="answers-37a" id="1.b-County-n" name="answers[1.b[County]]" value="0" />Não
                <br/><br/>    
                <label>Você tem fácil acesso aos serviços de farmácia, padaria ou supermercado?</label><br/>
                <input type="radio" value={this.state.access_1_b} onChange={this.setAccess1b} className="answers-38" id="1.b-access-y" name="answers[1.b[access]]" value="1" />Sim
                <input type="radio" value={this.state.access_1_b} onChange={this.setAccess1b} className="answers-38" id="1.b-access-n" name="answers[1.b[access]]" value="0" />Não
                <br/><br/1
                <label>Você tem fácil acesso a transporte? </label><br/>
                <input type="radio" value={this.state.transport_1_b} onChange={this.seTransport1b} className="answers-39" id="1.b-transport-y" name="answers[1.b[transport]]" value="1" />Sim
                <input type="radio" value={this.state.transport_1_b} onChange={this.seTransport1b} className="answers-39" id="1.b-transport-n" name="answers[1.b[transport]]" value="0" />Não
                <br/><br/>
                <label>Você trabalha atualmente? </label><br/>
                <input type="radio" value={this.state.work_1_b} onChange={this.setWork1b} className="answers-40" id="1.b-work-y" name="answers[1.b[work]]" value="1" />Sim
                <input type="radio" value={this.state.work_1_b} onChange={this.setWork1b} className="answers-40" id="1.b-work-n" name="answers[1.b[work]]" value="0" />Não
                <br/><br/>
                <label>Você recebe aposentadoria ou pensão? </label><br/>
                <input type="radio" value={this.state.retirement_1_b} onChange={this.setRetirement1b} className="answers-41" id="1.b-retirement-y" name="answers[1.b[retirement]]" value="1" />Sim
                <input type="radio" value={this.state.retirement_1_b} onChange={this.setRetirement1b} className="answers-41" id="1.b-retirement-n" name="answers[1.b[retirement]]" value="0" />Não
                <br/><br/>
                <label>Você recebe benefício de prestação continuada (BPC)?</label><br/>
                <input type="radio" value={this.state.benefit_1_b} onChange={this.setBenefit1b} className="answers-42" id="1.b-benefit-y" name="answers[1.b[benefit]]" value="1" />Sim
                <input type="radio" value={this.state.benefit_1_b} onChange={this.setBenefit1b} className="answers-42" id="1.b-benefit-n" name="answers[1.b[benefit]]" value="0" />Não
                <br/><br/>
                <label>Você recebe benefícios do Bolsa-Família?</label><br/>
                <input type="radio" value={this.state.bolsafamilia_1_b} onChange={this.setBolsaFamilia1b} className="answers-43" id="1.b-Bolsa-Familia-y" name="answers[1.b[BolsaFamilia]]" value="1" />Sim
                <input type="radio" value={this.state.bolsafamilia_1_b} onChange={this.setBolsaFamilia1b} className="answers-43" id="1.b-Bolsa-Familia-n" name="answers[1.b[BolsaFamilia]]" value="0" />Não
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
    this.setState({livingalone_1_b: evt.target.value});  
  }

  setLiveFamily1b(evt) {
    this.setState({livefamily_1_b: evt.target.value});  
  }

  setLifePartner1b(evt) {
    this.setState({lifepartner_1_b: evt.target.value});  
  }

  setRestHome1b(evt) {
    this.setState({resthome_1_b: evt.target.value});  
  }

  setWalk1b(evt) {
    this.setState({walk_1_b: evt.target.value});  
  }

  setMonitoring1b(evt) {
    this.setState({monitoring_1_b: evt.target.value});  
  }

  setMonitoring1b(evt) {
    this.setState({county_1_b: evt.target.value});  
  }

  
  setCounty1b(evt) {
    this.setState({county_1_b: evt.target.value}); 
  }

  setAccess1b(evt) {
    this.setState({access_1_b: evt.target.value}); 
  }

  setTelePhone1a(evt) {
    this.setState({transport_1_b: evt.target.value}); 
  }

  setCellPhone1a(evt) {
    this.setState({work_1_b: evt.target.value}); 
  }

  setRetirement1b(evt) {
    this.setState({retirement_1_b: evt.target.value}); 
  }

  setBenefit1b(evt) {
    this.setState({benefit_1_b: evt.target.value}); 
  }

  setBolsaFamilia1b(evt) {
    this.setState({bolsafamilia_1_b: evt.target.value}); 
  }

}

export default PersonsReferences