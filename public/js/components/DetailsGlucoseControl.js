import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsGlucoseControl extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {fasting_2_11_b:'', casual_2_11_b:'', mg_dl_2_11_b:'', created_at:'', list : []};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/glucosecontrol",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
        if (response != "") {
          this.buildData(response[0]);
        }
      }.bind(this)
    });

    $.ajax({
        url: "/api/v1/glucosecontrol/getTrashed",
        dataType: "json",
        method: "GET",
        success:function(response){
          console.log('history');
          this.setState({list:response});
          console.log( this.state.list );
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
    if (data.created_at != null) {
      this.setState({created_at: data.created_at});
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
                      <th>Avaliado em</th>
                      <th>Profissional</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map(function(data){
                        return (
                          <tr key={data.id}>
                            <td>{data.fasting_2_11_b}</td>
                            <td>{data.casual_2_11_b}</td>
                            <td>{data.mg_dl_2_11_b}</td>
                            <td>{data.created_at}</td>
                            <td>{data.history.user.name}</td>
                          </tr>
                        )
                      })
                    }
                    <tr>
                      <td>{this.state.fasting_2_11_b}</td>
                      <td>{this.state.casual_2_11_b}</td>
                      <td>{this.state.mg_dl_2_11_b}</td>
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

export default DetailsGlucoseControl