import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsPressureControl extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {date_2_11_a:'', pa_2_11_a:'', created_at:'', list : []};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/pressurecontrol",
      dataType: "json",
      method: "GET",
      success:function(response){
        if (response != "") {
          this.buildData(response[0]);
        }
      }.bind(this)
    });

    $.ajax({
      url: "/api/v1/pressurecontrol/getTrashed",
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
    if (data.date_2_11_a != null) {
      this.setState({date_2_11_a: data.date_2_11_a});
    }
    if (data.pa_2_11_a != null) {
      this.setState({pa_2_11_a: data.pa_2_11_a});
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
              <i className="fa fa-table"></i> Controle de pressão arterial
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Pressão arterial</th>
                      <th>Avaliado em</th>
                      <th>Profissional</th>                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map(function(data){
                        return (
                          <tr key={data.id}>
                            <td>{data.date_2_11_a}</td>
                            <td>{data.pa_2_11_a}</td>
                            <td>{data.created_at}</td>
                            <td>{data.history.user.name}</td>
                          </tr>
                        )
                      })
                    }                  
                    <tr>
                      <td>{this.state.date_2_11_a}</td>
                      <td>{this.state.pa_2_11_a}</td>
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

export default DetailsPressureControl