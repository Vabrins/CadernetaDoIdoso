import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class EnvironmentalAssessment extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      unimpeded_walking_areas_2_8:'',
      presence_of_support_bars_2_8:'', 
      uniform_floors_and_carpets_well_fixed_2_8:'', 
      enough_lighting_brighten_inside_each_room_including_steps_2_8:'', 
      switches_accessible_at_the_entrance_two_rooms_2_8:'', 
      shower_area_with_non_slip_2_8:'', 
      box_with_easy_opening_or_presence_of_firm_curtain_2_8:'', 
      low_cabinets_no_need_for_use_of_stairs_2_8:'', 
      non_slip_floor_2_8:'', 
      double_sided_and_firm_handrail_2_8:''
    };


    this.sendForm = this.sendForm.bind(this);
    this.setUnimpededWalkingAreas28 = this.setUnimpededWalkingAreas28.bind(this);
    this.setPresenceOfSupportBars28 = this.setPresenceOfSupportBars28.bind(this);
    this.setUniformFloorsAndCarpetsWellFixed28 = this.setUniformFloorsAndCarpetsWellFixed28.bind(this);
    this.setEnoughLightingBrightenInsideEachRoomIncludingSteps28 = this.setEnoughLightingBrightenInsideEachRoomIncludingSteps28.bind(this);
    this.setSwitchesAccessibleAtTheEntranceTwoRooms28 = this.setSwitchesAccessibleAtTheEntranceTwoRooms28.bind(this);
    this.setShowerAreaWithNonSlip28 = this.setShowerAreaWithNonSlip28.bind(this);
    this.setBoxWithEasyOpeningOrPresenceOfFirmCurtain28 = this.setBoxWithEasyOpeningOrPresenceOfFirmCurtain28.bind(this);
    this.setLowCabinetsNoNeedForUseOfStairs28 = this.setLowCabinetsNoNeedForUseOfStairs28.bind(this);
    this.setSwitchesAccessibleAtTheEntranceTwoRooms28 = this.setSwitchesAccessibleAtTheEntranceTwoRooms28.bind(this);
    this.setNonSlipFloor28 = this.setNonSlipFloor28.bind(this);
    this.setDoubleSidedAndFirmHandrail28 = this.setDoubleSidedAndFirmHandrail28.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/environmentalassessment",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {
    $.ajax({
      url: "/api/v1/environmentalassessment",
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
                    <input type="radio" checked={this.state.unimpeded_walking_areas_2_8 === '1'} onChange={this.setUnimpededWalkingAreas28} className="answers-89" id="2.8-unimpeded_walking_areas-y" name="answers[2.8[unimpeded_walking_areas]]" value="1"  />Sim
                    <input type="radio" checked={this.state.unimpeded_walking_areas_2_8 === '0'} onChange={this.setUnimpededWalkingAreas28} className="answers-89" id="2.8-unimpeded_walking_areas-n" name="answers[2.8[unimpeded_walking_areas]]" value="0"  />Não
                    <br/><br/>
                    <label>Presença de barras de apoio  </label><br/>
                    <input type="radio" checked={this.state.presence_of_support_bars_2_8 === '1'} onChange={this.setPresenceOfSupportBars28} className="answers-90" id="2.8-presence_of_support_bars-y" name="answers[2.8[presence_of_support_bars]]" value="1"  />Sim
                    <input type="radio" checked={this.state.presence_of_support_bars_2_8 === '0'} onChange={this.setPresenceOfSupportBars28} className="answers-90" id="2.8-presence_of_support_bars-n" name="answers[2.8[presence_of_support_bars]]" value="0"  />Não
                    <br/><br/>
                    <label>Pisos uniformes e tapetes bem fixos  </label><br/>
                    <input type="radio" checked={this.state.uniform_floors_and_carpets_well_fixed_2_8 === '1'} onChange={this.setUniformFloorsAndCarpetsWellFixed28} className="answers-91" id="2.8-uniform_floors_and_carpets_well_fixed-y" name="answers[2.8[uniform_floors_and_carpets_well_fixed]]" value="1"  />Sim
                    <input type="radio" checked={this.state.uniform_floors_and_carpets_well_fixed_2_8 === '0'} onChange={this.setUniformFloorsAndCarpetsWellFixed28} className="answers-91" id="2.8-uniform_floors_and_carpets_well_fixed-n" name="answers[2.8[uniform_floors_and_carpets_well_fixed]]" value="0"  />Não
                    <br/><br/>
                    <h2> Iluminação </h2>
                    <label>Presença de iluminação suficiente para clarear todo o interior de cada cômodo, incluindo degraus</label><br/>
                    <input type="radio" checked={this.state.enough_lighting_brighten_inside_each_room_including_steps_2_8 === '1'} onChange={this.setEnoughLightingBrightenInsideEachRoomIncludingSteps28} className="answers-92" id="2.8-enough_lighting_brighten_inside_each_room_including_steps-y" name="answers[2.8[enough_lighting_brighten_inside_each_room_including_steps]]" value="1"  />Sim
                    <input type="radio" checked={this.state.enough_lighting_brighten_inside_each_room_including_steps_2_8 === '0'} onChange={this.setEnoughLightingBrightenInsideEachRoomIncludingSteps28} className="answers-92" id="2.8-enough_lighting_brighten_inside_each_room_including_steps-n" name="answers[2.8[enough_lighting_brighten_inside_each_room_including_steps]]" value="0"  />Não
                    <br/><br/>
                    <label>Interruptores acessíveis na entrada dos cômodos  </label><br/>
                    <input type="radio" checked={this.state.switches_accessible_at_the_entrance_two_rooms_2_8 === '1'} onChange={this.setSwitchesAccessibleAtTheEntranceTwoRooms28} className="answers-93" id="2.8-switches_accessible_at_the_entrance_two_rooms-y" name="answers[2.8[switches_accessible_at_the_entrance_two_rooms]]" value="1"  />Sim
                    <input type="radio" checked={this.state.switches_accessible_at_the_entrance_two_rooms_2_8 === '0'} onChange={this.setSwitchesAccessibleAtTheEntranceTwoRooms28} className="answers-93" id="2.8-switches_accessible_at_the_entrance_two_rooms-n" name="answers[2.8[switches_accessible_at_the_entrance_two_rooms]]" value="0"  />Não
                    <br/><br/>
                    <h2> Banheiro </h2>
                    <label>Área do chuveiro com antiderrapante  </label><br/>
                    <input type="radio" checked={this.state.shower_area_with_non_slip_2_8 === '1'} onChange={this.setShowerAreaWithNonSlip28} className="answers-94" id="2.8-shower_area_with_non-slip-y" name="answers[2.8[shower_area_with_non-slip]]" value="1"  />Sim
                    <input type="radio" checked={this.state.shower_area_with_non_slip_2_8 === '0'} onChange={this.setShowerAreaWithNonSlip28} className="answers-94" id="2.8-shower_area_with_non-slip-n" name="answers[2.8[shower_area_with_non-slip]]" value="0"  />Não
                    <br/><br/>
                    <label>Box com abertura fácil ou presença de cortina bem firme </label><br/>
                    <input type="radio" checked={this.state.box_with_easy_opening_or_presence_of_firm_curtain_2_8 === '1'} onChange={this.setBoxWithEasyOpeningOrPresenceOfFirmCurtain28} className="answers-95" id="2.8-box_with_easy_opening_or_presence_of_firm_curtain-y" name="answers[2.8[box_with_easy_opening_or_presence_of_firm_curtain]]" value="1"  />Sim
                    <input type="radio" checked={this.state.box_with_easy_opening_or_presence_of_firm_curtain_2_8 === '0'} onChange={this.setBoxWithEasyOpeningOrPresenceOfFirmCurtain28} className="answers-95" id="2.8-box_with_easy_opening_or_presence_of_firm_curtain-n" name="answers[2.8[box_with_easy_opening_or_presence_of_firm_curtain]]" value="0"  />Não
                    <br/><br/>
                    <h2> Cozinha e quarto </h2>
                    <label>Armários baixos, sem necessidade do uso de escada  </label><br/>
                    <input type="radio" checked={this.state.low_cabinets_no_need_for_use_of_stairs_2_8 === '1'} onChange={this.setLowCabinetsNoNeedForUseOfStairs28} className="answers-96" id="2.8-low_cabinets_no_need_for_use_of_stairs-y" name="answers[2.8[low_cabinets_no_need_for_use_of_stairs]]" value="1"  />Sim
                    <input type="radio" checked={this.state.low_cabinets_no_need_for_use_of_stairs_2_8 === '0'} onChange={this.setLowCabinetsNoNeedForUseOfStairs28} className="answers-96" id="2.8-low_cabinets_no_need_for_use_of_stairs-n" name="answers[2.8[low_cabinets_no_need_for_use_of_stairs]]" value="0"  />Não
                    <br/><br/>
                    <h2> Escada </h2>
                    <label>Piso antiderrapante  </label><br/>
                    <input type="radio" checked={this.state.non_slip_floor_2_8 === '1'} onChange={this.setNonSlipFloor28} className="answers-97" id="2.8-non_slip_floor-y" name="answers[2.8[non_slip_floor]]" value="1"  />Sim
                    <input type="radio" checked={this.state.non_slip_floor_2_8 === '0'} onChange={this.setNonSlipFloor28} className="answers-97" id="2.8-non_slip_floor-n" name="answers[2.8[non_slip_floor]]" value="0"  />Não
                    <br/><br/>
                    <label>Corrimão dos dois lados e firme </label><br/>
                    <input type="radio" checked={this.state.double_sided_and_firm_handrail_2_8 === '1'} onChange={this.setDoubleSidedAndFirmHandrail28} className="answers-98" id="2.8-double_sided_and_firm_handrail-y" name="answers[2.8[double_sided_and_firm_handrail]]" value="1"  />Sim
                    <input type="radio" checked={this.state.double_sided_and_firm_handrail_2_8 === '0'} onChange={this.setDoubleSidedAndFirmHandrail28} className="answers-98" id="2.8-double_sided_and_firm_handrail-n" name="answers[2.8[double_sided_and_firm_handrail]]" value="0"  />Não
                    <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label=" Informações complementares">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/complementaryinformation" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" onClick={this.sendForm} to="/falls"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>
    )
  }

  setUnimpededWalkingAreas28(evt) {
    this.setState({unimpeded_walking_areas_2_8: evt.target.value});  
  }

  setPresenceOfSupportBars28(evt) {
    this.setState({presence_of_support_bars_2_8: evt.target.value});  
  }

  setUniformFloorsAndCarpetsWellFixed28(evt) {
    this.setState({uniform_floors_and_carpets_well_fixed_2_8: evt.target.value});  
  }

  setEnoughLightingBrightenInsideEachRoomIncludingSteps28(evt) {
    this.setState({enough_lighting_brighten_inside_each_room_including_steps_2_8: evt.target.value});  
  }

  setSwitchesAccessibleAtTheEntranceTwoRooms28(evt) {
    this.setState({switches_accessible_at_the_entrance_two_rooms_2_8: evt.target.value});  
  }

   setShowerAreaWithNonSlip28(evt) {
    this.setState({shower_area_with_non_slip_2_8: evt.target.value});  
  }

   setBoxWithEasyOpeningOrPresenceOfFirmCurtain28(evt) {
    this.setState({box_with_easy_opening_or_presence_of_firm_curtain_2_8: evt.target.value});  
  }

   setLowCabinetsNoNeedForUseOfStairs28(evt) {
    this.setState({low_cabinets_no_need_for_use_of_stairs_2_8: evt.target.value});  
  }

   setNonSlipFloor28(evt) {
    this.setState({non_slip_floor_2_8: evt.target.value});  
  }

   setDoubleSidedAndFirmHandrail28(evt) {
    this.setState({double_sided_and_firm_handrail_2_8: evt.target.value});  
  }

}

export default EnvironmentalAssessment