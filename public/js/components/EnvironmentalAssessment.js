import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class PersonalData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', locomotion_2_8:'', supportbars_2_8:'', carpet_2_8:'', lighting_2_8:'', switches_2_8:'', shower_2_8:'', openingbox_2_8:'', cabinets_2_8:'', nonslipfloor_2_8:'', handrail_2_8:''};
    this.sendForm = this.sendForm.bind(this);
    this.setLocomotion28 = this.setLocomotion28.bind(this);
    this.setSupportBars28 = this.setSupportBars28.bind(this);
    this.setCarpet28 = this.setCarpet28.bind(this);
    this.setLighting28 = this.setLighting28.bind(this);
    this.setSwitches28 = this.setSwitches28.bind(this);
    this.setShower28 = this.setShower28.bind(this);
    this.setOpeningBox28 = this.setOpeningBox28.bind(this);
    this.setCabinets28 = this.setCabinets28.bind(this);
    this.setSwitches28 = this.setSwitches28.bind(this);
    this.setNonslipFloor28 = this.setNonslipFloor28.bind(this);
    this.setHandrail28 = this.setHandrail28.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/environmentalassessment",
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
      url: "http://127.0.0.1:8000/api/v1/environmentalassessment",
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
            <form id="environmentalassessment" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2> Áreas de locomoção </h2>
                  <label>Áreas de locomoção desimpedidas </label><br/>
                  <input type="radio" value={this.state.locomotion_2_8} onChange={this.setLocomotion28} className="answers-89" id="2.8-locomotion-y" name="answers[2.8[locomotion]]" value="y"  />Sim
                  <input type="radio" value={this.state.locomotion_2_8} onChange={this.setLocomotion28} className="answers-89" id="2.8-locomotion-n" name="answers[2.8[locomotion]]" value="n"  />Não
                  <br/><br/>
                  <label>Presença de barras de apoio  </label><br/>
                  <input type="radio" value={this.state.supportbars_2_8} onChange={this.setSupportBars28} className="answers-90" id="2.8-supportbars-y" name="answers[2.8[supportbars]]" value="y"  />Sim
                  <input type="radio" value={this.state.supportbars_2_8} onChange={this.setSupportBars28} className="answers-90" id="2.8-supportbars-n" name="answers[2.8[supportbars]]" value="n"  />Não
                  <br/><br/>
                  <label>Pisos uniformes e tapetes bem fixos  </label><br/>
                  <input type="radio" value={this.state.carpet_2_8} onChange={this.setForgotten27} className="answers-91" id="2.8-carpet-y" name="answers[2.8[carpet]]" value="y"  />Sim
                  <input type="radio" value={this.state.carpet_2_8} onChange={this.setForgotten27} className="answers-91" id="2.8-carpet-n" name="answers[2.8[carpet]]" value="n"  />Não
                  <br/><br/>
                  <h2> Iluminação </h2>
                  <label>Presença de iluminação suficiente para clarear todo o interior de cada cômodo, incluindo degraus</label><br/>
                  <input type="radio" value={this.state.lighting_2_8} onChange={this.setLighting28} className="answers-92" id="2.8-lighting-y" name="answers[2.8[lighting]]" value="y"  />Sim
                  <input type="radio" value={this.state.lighting_2_8} onChange={this.setLighting28} className="answers-92" id="2.8-lighting-n" name="answers[2.8[lighting]]" value="n"  />Não
                  <br/><br/>
                  <label>Interruptores acessíveis na entrada dos cômodos  </label><br/>
                  <input type="radio" value={this.state.switches_2_8} onChange={this.setSwitches28} className="answers-93" id="2.8-Switches-y" name="answers[2.8[Switches]]" value="y"  />Sim
                  <input type="radio" value={this.state.switches_2_8} onChange={this.setSwitches28} className="answers-93" id="2.8-Switches-n" name="answers[2.8[Switches]]" value="n"  />Não
                  <br/><br/>
                  <h2> Banheiro </h2>
                  <label>Área do chuveiro com antiderrapante  </label><br/>
                  <input type="radio" value={this.state.shower_2_8} onChange={this.setShower28} className="answers-94" id="2.8-shower-y" name="answers[2.8[shower]]" value="y"  />Sim
                  <input type="radio" value={this.state.shower_2_8} onChange={this.setShower28} className="answers-94" id="2.8-shower-n" name="answers[2.8[shower]]" value="n"  />Não
                  <br/><br/>
                  <label>Box com abertura fácil ou presença de cortina bem firme </label><br/>
                  <input type="radio" value={this.state.openingbox_2_8} onChange={this.setOpeningBox28} className="answers-95" id="2.8-openingbox-y" name="answers[2.8[openingbox]]" value="y"  />Sim
                  <input type="radio" value={this.state.openingbox_2_8} onChange={this.setOpeningBox28} className="answers-95" id="2.8-openingbox-n" name="answers[2.8[openingbox]]" value="n"  />Não
                  <br/><br/>
                  <h2> Cozinha e quarto </h2>
                  <label>Armários baixos, sem necessidade do uso de escada  </label><br/>
                  <input type="radio" value={this.state.cabinets_2_8} onChange={this.setCabinets28} className="answers-96" id="2.8-cabinets-y" name="answers[2.8[cabinets]]" value="y"  />Sim
                  <input type="radio" value={this.state.cabinets_2_8} onChange={this.setCabinets28} className="answers-96" id="2.8-cabinets-n" name="answers[2.8[cabinets]]" value="n"  />Não
                  <br/><br/>
                  <h2> Escada </h2>
                  <label>Piso antiderrapante  </label><br/>
                  <input type="radio" value={this.state.nonslipfloor_2_8} onChange={this.setNonslipFloor28} className="answers-97" id="2.8-nonslipfloor-y" name="answers[2.8[nonslipfloor]]" value="y"  />Sim
                  <input type="radio" value={this.state.nonslipfloor_2_8} onChange={this.setNonslipFloor28} className="answers-97" id="2.8-nonslipfloor-n" name="answers[2.8[nonslipfloor]]" value="n"  />Não
                  <br/><br/>
                  <label>Corrimão dos dois lados e firme </label><br/>
                  <input type="radio" value={this.state.forgotten_2_7} onChange={this.setHandrail28} className="answers-98" id="2.8-handrail-y" name="answers[2.8[handrail]]" value="y"  />Sim
                  <input type="radio" value={this.state.forgotten_2_7} onChange={this.setHandrail28} className="answers-98" id="2.8-handrail-n" name="answers[2.8[handrail]]" value="n"  />Não
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label=" Informações complementares">
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

  setLocomotion28(evt) {
    this.setState({locomotion_2_8: evt.target.value});  
  }

  setSupportBars28(evt) {
    this.setState({supportbars_2_8: evt.target.value});  
  }

  setCarpet28(evt) {
    this.setState({carpet_2_8: evt.target.value});  
  }

  setLighting28(evt) {
    this.setState({lighting_2_8: evt.target.value});  
  }

  setSwitches28(evt) {
    this.setState({switches_2_8: evt.target.value});  
  }

   setShower28(evt) {
    this.setState({shower_2_8: evt.target.value});  
  }

   setOpeningBox28(evt) {
    this.setState({openingbox_2_8: evt.target.value});  
  }

   setCabinets28(evt) {
    this.setState({cabinets_2_8: evt.target.value});  
  }

   setNonslipFloor28(evt) {
    this.setState({nonslipfloor_2_8: evt.target.value});  
  }

   setHandrail28(evt) {
    this.setState({handrail_2_8: evt.target.value});  
  }

}

export default PersonsReferences