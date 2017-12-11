import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsVaccinationCalendar extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {name_2_11_c:'', date_2_11_c:'', lot_2_11_c:'', signature_2_11_c:'', dose_2_11_c:''};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/vaccinationcalendar",
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
    if (data.name_2_11_c != null) {
      this.setState({name_2_11_c: data.name_2_11_c});
    }
    if (data.date_2_11_c != null) {
      this.setState({date_2_11_c: data.date_2_11_c});
    }
    if (data.lot_2_11_c != null) {
      this.setState({lot_2_11_c: data.lot_2_11_c});
    }
    if (data.signature_2_11_c != null) {
      this.setState({signature_2_11_c: data.signature_2_11_c});
    }
    if (data.dose_2_11_c != null) {
      this.setState({dose_2_11_c: data.dose_2_11_c});
    }
  }

 render () {
  return (
        <div className="container" >
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table"></i> Calendário de vacinação
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Data</th>
                      <th>Lote</th>
                      <th>Assinado/Responsável</th>
                      <th>Dose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.name_2_11_c}</td>
                      <td>{this.state.date_2_11_c}</td>
                      <td>{this.state.lot_2_11_c}</td>
                      <td>{this.state.signature_2_11_c}</td>
                      <td>{this.state.dose_2_11_c}</td>
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

export default DetailsVaccinationCalendar