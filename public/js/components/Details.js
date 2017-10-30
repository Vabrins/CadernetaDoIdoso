import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Details extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {data: ''};
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/details",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
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
                      <td>Sim</td>
                      <td>Sim</td>
                      <td>00,347</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer small text-muted">Atualizado ontem às 11:59</div>
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

export default Details