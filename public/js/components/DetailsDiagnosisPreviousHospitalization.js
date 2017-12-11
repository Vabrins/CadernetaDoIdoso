import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsDiagnosisPreviousHospitalization extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {diagnostics_2_2:'' , diagnostics_year_2_2:'', hospitalization_2_2:'', other_conditions_2_2:''};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/diagnosisprevioushospitalization",
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
    if (data.diagnostics_2_2 != null) {
      this.setState({diagnostics_2_2: data.diagnostics_2_2});
    }
    if (data.dose_and_frequency_2_1 != null) {
      this.setState({diagnostics_year_2_2: data.diagnostics_year_2_2});
    }
    if (data.hospitalization_2_2 != null) {
      this.setState({hospitalization_2_2: data.hospitalization_2_2});
    }
    if (data.other_conditions_2_2 != null) {
      this.setState({other_conditions_2_2: data.other_conditions_2_2});
    }
  }

 render () {
  return (
        <div className="container" >
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table"></i> Diagnósticos e internações prévios
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Diagnósticos e internações prévios</th>
                      <th>Ano de diagnóstico</th>
                      <th>Ano de internação</th>
                      <th>Outras condições</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.diagnostics_2_2}</td>
                      <td>{this.state.diagnostics_year_2_2}</td>
                      <td>{this.state.hospitalization_2_2}</td>
                      <td>{this.state.other_conditions_2_2}</td>
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

export default DetailsDiagnosisPreviousHospitalization