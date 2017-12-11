import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsVulnerableElderly extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {age_2_6:'' ,self_perception_of_health_2_6: '' , bending_crouching_or_kneel_down_2_6:'', lift_or_load_heavy_objects_approximately_five_kg_2_6:'', raise_or_extend_arms_above_level_of_the_shoulder_2_6:'', write_or_manipulate_and_hold_small_objects_2_6:'', walk_400_meters_about_four_blocks_2_6:'', do_domestic_serv_heavy_rubbing_floor_clean_windows_2_6:''};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/vulnerableelderly",
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
    if (data.bending_crouching_or_kneel_down_2_6 != null) {
      this.setState({bending_crouching_or_kneel_down_2_6: data.bending_crouching_or_kneel_down_2_6});
    }
    if (data.lift_or_load_heavy_objects_approximately_five_kg_2_6 != null) {
      this.setState({lift_or_load_heavy_objects_approximately_five_kg_2_6: data.lift_or_load_heavy_objects_approximately_five_kg_2_6});
    }
    if (data.raise_or_extend_arms_above_level_of_the_shoulder_2_6 != null) {
      this.setState({raise_or_extend_arms_above_level_of_the_shoulder_2_6: data.raise_or_extend_arms_above_level_of_the_shoulder_2_6});
    }
    if (data.write_or_manipulate_and_hold_small_objects_2_6 != null) {
      this.setState({write_or_manipulate_and_hold_small_objects_2_6: data.write_or_manipulate_and_hold_small_objects_2_6});
    }
    if (data.walk_400_meters_about_four_blocks_2_6 != null) {
      this.setState({walk_400_meters_about_four_blocks_2_6: data.walk_400_meters_about_four_blocks_2_6});
    }
    if (data.do_domestic_serv_heavy_rubbing_floor_clean_windows_2_6 != null) {
      this.setState({do_domestic_serv_heavy_rubbing_floor_clean_windows_2_6: data.do_domestic_serv_heavy_rubbing_floor_clean_windows_2_6});
    }
    if (data.self_perception_of_health_2_6 != null) {
      this.setState({self_perception_of_health_2_6: data.self_perception_of_health_2_6});
    }
    if (data.age_2_6 != null) {
      this.setState({age_2_6: data.age_2_6});
    }
  }

 render () {
  return (
        <div className="container" >
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table"></i> Protocolo de identificação do idoso vulnerável (VES-13)
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Idade</th>
                      <th>Em geral, comparando-se com outras pessoas da sua idade, você diria que sua saúde é</th>
                      <th>Curvar-se, agachar ou ajoelhar-se</th>
                      <th>Levantar ou carregar objetos com peso aproximado de 5 kg</th>
                      <th>Elevar ou estender os braços acima do nível do ombro </th>
                      <th>Escrever ou manusear e segurar pequenos objetos</th>
                      <th>Andar 400 metros (aproximadamente quatro quarteirões)</th>
                      <th>Fazer serviço doméstico pesado, como esfregar o chão ou limpar janelas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.age_2_6}</td>
                      <td>{this.state.self_perception_of_health_2_6}</td>
                      <td>{this.state.bending_crouching_or_kneel_down_2_6}</td>
                      <td>{this.state.lift_or_load_heavy_objects_approximately_five_kg_2_6}</td>
                      <td>{this.state.raise_or_extend_arms_above_level_of_the_shoulder_2_6}</td>
                      <td>{this.state.write_or_manipulate_and_hold_small_objects_2_6}</td>
                      <td>{this.state.walk_400_meters_about_four_blocks_2_6}</td>
                      <td>{this.state.do_domestic_serv_heavy_rubbing_floor_clean_windows_2_6}</td>
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

export default DetailsVulnerableElderly