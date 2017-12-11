import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsConsultationExamination extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {date_2_11_e:'', hour_2_11_e:'', place_2_11_e:'', query_exam_2_11_e:''};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/consultationexamination",
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
    if (data.date_2_11_e != null) {
      this.setState({date_2_11_e: data.date_2_11_e});
    }
    if (data.hour_2_11_e != null) {
      this.setState({hour_2_11_e: data.hour_2_11_e});
    }
    if (data.place_2_11_e != null) {
      this.setState({place_2_11_e: data.place_2_11_e});
    }
    if (data.query_exam_2_11_e != null) {
      this.setState({query_exam_2_11_e: data.query_exam_2_11_e});
    }
  }

 render () {
  return (
        <div className="container" >
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table"></i> Agenda Consultas e Exames
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Hora</th>
                      <th>Local</th>
                      <th>Consulta/exame</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.date_2_11_e}</td>
                      <td>{this.state.hour_2_11_e}</td>
                      <td>{this.state.place_2_11_e}</td>
                      <td>{this.state.query_exam_2_11_e}</td>
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

export default DetailsConsultationExamination