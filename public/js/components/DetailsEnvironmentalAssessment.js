import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsEnvironmentalAssessment extends React.Component {
  
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
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/environmentalassessment",
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
    if (data.unimpeded_walking_areas_2_8 != null) {
      this.setState({unimpeded_walking_areas_2_8: data.unimpeded_walking_areas_2_8});
    }
    if (data.presence_of_support_bars_2_8 != null) {
      this.setState({presence_of_support_bars_2_8: data.presence_of_support_bars_2_8});
    }
    if (data.uniform_floors_and_carpets_well_fixed_2_8 != null) {
      this.setState({uniform_floors_and_carpets_well_fixed_2_8: data.uniform_floors_and_carpets_well_fixed_2_8});
    }
    if (data.enough_lighting_brighten_inside_each_room_including_steps_2_8 != null) {
      this.setState({enough_lighting_brighten_inside_each_room_including_steps_2_8: data.enough_lighting_brighten_inside_each_room_including_steps_2_8});
    }
    if (data.switches_accessible_at_the_entrance_two_rooms_2_8 != null) {
      this.setState({switches_accessible_at_the_entrance_two_rooms_2_8: data.switches_accessible_at_the_entrance_two_rooms_2_8});
    }
    if (data.shower_area_with_non_slip_2_8 != null) {
      this.setState({shower_area_with_non_slip_2_8: data.shower_area_with_non_slip_2_8});
    }
    if (data.box_with_easy_opening_or_presence_of_firm_curtain_2_8 != null) {
      this.setState({box_with_easy_opening_or_presence_of_firm_curtain_2_8: data.box_with_easy_opening_or_presence_of_firm_curtain_2_8});
    }
    if (data.low_cabinets_no_need_for_use_of_stairs_2_8 != null) {
      this.setState({low_cabinets_no_need_for_use_of_stairs_2_8: data.low_cabinets_no_need_for_use_of_stairs_2_8});
    }
    if (data.non_slip_floor_2_8 != null) {
      this.setState({non_slip_floor_2_8: data.non_slip_floor_2_8});
    }
    if (data.double_sided_and_firm_handrail_2_8 != null) {
      this.setState({double_sided_and_firm_handrail_2_8: data.double_sided_and_firm_handrail_2_8});
    }
  }

 render () {
  return (
        <div className="container" >
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table"></i> Avaliação ambiental
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Áreas de locomoção desimpedidas </th>
                      <th>Presença de barras de apoio  </th>
                      <th>Pisos uniformes e tapetes bem fixos  </th>
                      <th>Presença de iluminação suficiente para clarear todo o interior de cada cômodo, incluindo degraus</th>
                      <th>Interruptores acessíveis na entrada dos cômodos  </th>
                      <th>Área do chuveiro com antiderrapante  </th>
                      <th>Box com abertura fácil ou presença de cortina bem firme </th>
                      <th>Armários baixos, sem necessidade do uso de escada  </th>
                      <th>Piso antiderrapante  </th>
                      <th>Corrimão dos dois lados e firme </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.unimpeded_walking_areas_2_8}</td>
                      <td>{this.state.presence_of_support_bars_2_8}</td>
                      <td>{this.state.uniform_floors_and_carpets_well_fixed_2_8}</td>
                      <td>{this.state.enough_lighting_brighten_inside_each_room_including_steps_2_8}</td>
                      <td>{this.state.switches_accessible_at_the_entrance_two_rooms_2_8}</td>
                      <td>{this.state.shower_area_with_non_slip_2_8}</td>
                      <td>{this.state.box_with_easy_opening_or_presence_of_firm_curtain_2_8}</td>
                      <td>{this.state.low_cabinets_no_need_for_use_of_stairs_2_8}</td>
                      <td>{this.state.non_slip_floor_2_8}</td>
                      <td>{this.state.double_sided_and_firm_handrail_2_8}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <nav aria-label="">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/listings" tabIndex="-1">Retornar</Link>
                </li>

              </ul>
            </nav>
        </div>
    )
  }
}

export default DetailsEnvironmentalAssessment