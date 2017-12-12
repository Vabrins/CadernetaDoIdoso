import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsSurgeriesPerformed extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {surgery_2_3:'', year_2_3:'', comments_2_3:'', created_at:'', list : []};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/surgeriesperformed",
      dataType: "json",
      method: "GET",
      success:function(response){
        if (response != "") {
          this.buildData(response[0]);
        }
      }.bind(this)
    });

    $.ajax({
      url: "/api/v1/surgeriesperformed/getTrashed",
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
    if (data.surgery_2_3 != null) {
      this.setState({surgery_2_3: data.surgery_2_3});
    }
    if (data.year_2_3 != null) {
      this.setState({year_2_3: data.year_2_3});
    }
    if (data.comments_2_3 != null) {
      this.setState({comments_2_3: data.comments_2_3});
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
              <i className="fa fa-table"></i> Cirurgias realizadas
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Cirurgia</th>
                      <th>Ano</th>
                      <th>Observações</th>
                      <th>Avaliado em</th>
                      <th>Profissional</th>                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map(function(data){
                        return (
                          <tr key={data.id}>
                            <td>{data.surgery_2_3}</td>
                            <td>{data.year_2_3}</td>
                            <td>{data.comments_2_3}</td>
                            <td>{data.created_at}</td>
                            <td>{data.history.user.name}</td>
                          </tr>
                        )
                      })
                    }                  
                    <tr>
                      <td>{this.state.surgery_2_3}</td>
                      <td>{this.state.year_2_3}</td>
                      <td>{this.state.comments_2_3}</td>
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

export default DetailsSurgeriesPerformed