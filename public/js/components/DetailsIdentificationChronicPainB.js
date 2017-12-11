import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsIdentificationChronicPainB extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {date_2_10_b:'', place_of_pain_2_10_b:'', intensity_2_10_b:''};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/idenchronicpainsintensity",
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
    if (data.date_2_10_b != null) {
      this.setState({date_2_10_b: data.date_2_10_b});
    }
    if (data.place_of_pain_2_10_b != null) {
      this.setState({place_of_pain_2_10_b: data.place_of_pain_2_10_b});
    }
    if (data.intensity_2_10_b != null) {
      this.setState({intensity_2_10_b: data.intensity_2_10_b});
    }
  }

 render () {
  return (
        <div className="container" >
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table"></i> Itensidade da dor
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Local da dor</th>
                      <th>Intensidade da dor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.date_2_10_b}</td>
                      <td>{this.state.place_of_pain_2_10_b}</td>
                      <td>{this.state.intensity_2_10_b}</td>
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

export default DetailsIdentificationChronicPainB