import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsDentalProsthesis extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      superior_2_11_d_a:'', 
      inferior_2_11_d_a:'', 
      total_prosthesis_2_11_d_a:'', 
      partial_prosthesis_2_11_d_a:'', 
      does_not_use_and_does_not_require_prosthesis_2_11_d_a:'',
      does_not_use_but_needs_prosthesis_2_11_d_a:'', 
      uses_adapted_without_exchange_2_11_d_a:'', 
      uses_not_adapted_needs_exchange_2_11_d_a:''
    };
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/dentalprosthesis",
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
    if (data.superior_2_11_d_a != null) {
      this.setState({superior_2_11_d_a: data.superior_2_11_d_a});
    }
    if (data.inferior_2_11_d_a != null) {
      this.setState({inferior_2_11_d_a: data.inferior_2_11_d_a});
    }
    if (data.total_prosthesis_2_11_d_a != null) {
      this.setState({total_prosthesis_2_11_d_a: data.total_prosthesis_2_11_d_a});
    }
    if (data.partial_prosthesis_2_11_d_a != null) {
      this.setState({partial_prosthesis_2_11_d_a: data.partial_prosthesis_2_11_d_a});
    }
    if (data.does_not_use_and_does_not_require_prosthesis_2_11_d_a != null) {
      this.setState({does_not_use_and_does_not_require_prosthesis_2_11_d_a: data.does_not_use_and_does_not_require_prosthesis_2_11_d_a});
    }
    if (data.does_not_use_but_needs_prosthesis_2_11_d_a != null) {
      this.setState({does_not_use_but_needs_prosthesis_2_11_d_a: data.does_not_use_but_needs_prosthesis_2_11_d_a});
    }
    if (data.uses_adapted_without_exchange_2_11_d_a != null) {
      this.setState({uses_adapted_without_exchange_2_11_d_a: data.uses_adapted_without_exchange_2_11_d_a});
    }
    if (data.uses_not_adapted_needs_exchange_2_11_d_a != null) {
      this.setState({uses_not_adapted_needs_exchange_2_11_d_a: data.uses_not_adapted_needs_exchange_2_11_d_a});
    }
  }

 render () {
  return (
        <div className="container" >
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table"></i> Saúde bucal - Próteses
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Superior</th>
                      <th>Inferior</th>
                      <th>Prótese total (dentadura)</th>
                      <th>Prótese parcial (ponte móvel)</th>
                      <th>Não utiliza e não necessita da prótese</th>
                      <th>Não utiliza, mas necessita da prótese</th>
                      <th>Utiliza (adaptada/sem necessidade de troca)</th>
                      <th>Utiliza (não adaptada/necessita de troca)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.superior_2_11_d_a}</td>
                      <td>{this.state.inferior_2_11_d_a}</td>
                      <td>{this.state.total_prosthesis_2_11_d_a}</td>
                      <td>{this.state.partial_prosthesis_2_11_d_a}</td>
                      <td>{this.state.does_not_use_and_does_not_require_prosthesis_2_11_d_a}</td>
                      <td>{this.state.does_not_use_but_needs_prosthesis_2_11_d_a}</td>
                      <td>{this.state.uses_adapted_without_exchange_2_11_d_a}</td>
                      <td>{this.state.uses_not_adapted_needs_exchange_2_11_d_a}</td>
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

export default DetailsDentalProsthesis