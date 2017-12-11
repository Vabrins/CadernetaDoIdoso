import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsGlucoseControl extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {fasting_2_11_b:'', casual_2_11_b:'', mg_dl_2_11_b:''};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/glucosecontrol",
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
    if (data.fasting_2_11_b != null) {
      this.setState({fasting_2_11_b: data.fasting_2_11_b});
    }
    if (data.casual_2_11_b != null) {
      this.setState({casual_2_11_b: data.casual_2_11_b});
    }
    if (data.mg_dl_2_11_b != null) {
      this.setState({mg_dl_2_11_b: data.mg_dl_2_11_b});
    }
  }

 render () {
  return (
        <div className="container" >
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table"></i> Controle de Glicemia
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Jejum</th>
                      <th>Casual</th>
                      <th>mg/dL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.name_of_the_medicinal_supplement_or_vitamin_2_1}</td>
                      <td>{this.state.dose_and_frequency_2_1}</td>
                      <td>{this.state.start_date_or_time_of_use_2_1}</td>
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

export default DetailsGlucoseControl