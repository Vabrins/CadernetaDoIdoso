import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsAnthropometricData extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {weight_2_5:'', height_2_5:'', imc_weight_height_2_5:'', calf_perimeter_pp_left_2_5:'', you_have_exp_loss_uni_weight_min_body_last_year_2_5:'', created_at:'', list : []};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/anthropometricdata",
      dataType: "json",
      method: "GET",
      success:function(response){
        if (response != "") {
          this.buildData(response[0]);
        }
      }.bind(this)
    });

    $.ajax({
      url: "/api/v1/anthropometricdata/getTrashed",
      dataType: "json",
      method: "GET",
      success:function(response){
        if (response != "") {
          this.setState({list:response});
        }
      }.bind(this)
    });
  }

  buildData(data) {
    if (data.weight_2_5 != null) {
      this.setState({weight_2_5: data.weight_2_5});
    }
    if (data.height_2_5 != null) {
      this.setState({height_2_5: data.height_2_5});
    }
    if (data.imc_weight_height_2_5 != null) {
      this.setState({imc_weight_height_2_5: data.imc_weight_height_2_5});
    }
    if (data.calf_perimeter_pp_left_2_5 != null) {
      this.setState({calf_perimeter_pp_left_2_5: data.calf_perimeter_pp_left_2_5});
    }
    if (data.you_have_exp_loss_uni_weight_min_body_last_year_2_5 != null) {
      this.setState({you_have_exp_loss_uni_weight_min_body_last_year_2_5: data.you_have_exp_loss_uni_weight_min_body_last_year_2_5});
    }
    if (data.created_at != null) {
      this.setState({created_at: data.created_at});
    }    
  }

 render () {
  return (
        <div className="container" >
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table"></i> Dados antropométrico
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Peso</th>
                      <th>Altura</th>
                      <th>IMC</th>
                      <th>Perímetro da panturrilha (PP) esquerda</th>
                      <th>Você apresentou perda de peso não intencional de, no mínimo, 4,5 kg ou de 5% do seu peso corporal no último ano? </th>
                      <th>Avaliado em</th>
                      <th>Profissional</th>                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map(function(data){
                        return (
                          <tr key={data.id}>
                            <td>{data.weight_2_5}</td>
                            <td>{data.height_2_5}</td>
                            <td>{data.imc_weight_height_2_5}</td>
                            <td>{data.calf_perimeter_pp_left_2_5}</td>
                            <td>{data.you_have_exp_loss_uni_weight_min_body_last_year_2_5}</td>
                            <td>{data.created_at}</td>
                            <td>{data.history.user.name}</td>
                          </tr>
                        )
                      })
                    }                  
                    <tr>
                      <td>{this.state.weight_2_5}</td>
                      <td>{this.state.height_2_5}</td>
                      <td>{this.state.imc_weight_height_2_5}</td>
                      <td>{this.state.calf_perimeter_pp_left_2_5}</td>
                      <td>{this.state.you_have_exp_loss_uni_weight_min_body_last_year_2_5}</td>
                      <td>{this.state.created_at}</td>                      
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

export default DetailsAnthropometricData