import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsReactionOrAllergy extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {medicine_2_4:'', date_2_4:'', adverse_reactions_or_allergies_2_4:'', created_at:'', list : []};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/reactionorallergy",
      dataType: "json",
      method: "GET",
      success:function(response){
        if (response != "") {
          this.buildData(response[0]);
        }
      }.bind(this)
    });

    $.ajax({
      url: "/api/v1/reactionorallergy/getTrashed",
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
    if (data.medicine_2_4 != null) {
      this.setState({medicine_2_4: data.medicine_2_4});
    }
    if (data.date_2_4 != null) {
      this.setState({date_2_4: data.date_2_4});
    }
    if (data.adverse_reactions_or_allergies_2_4 != null) {
      this.setState({adverse_reactions_or_allergies_2_4: data.adverse_reactions_or_allergies_2_4});
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
              <i className="fa fa-table"></i> Reações adversas ou alergias a medicamentos
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Medicamento</th>
                      <th>Data</th>
                      <th>Reações adversas ou alergias</th>
                      <th>Avaliado em</th>
                      <th>Profissional</th>                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map(function(data){
                        return (
                          <tr key={data.id}>
                            <td>{data.medicine_2_4}</td>
                            <td>{data.date_2_4}</td>
                            <td>{data.adverse_reactions_or_allergies_2_4}</td>
                            <td>{data.created_at}</td>
                            <td>{data.history.user.name}</td>
                          </tr>
                        )
                      })
                    }                  
                    <tr>
                      <td>{this.state.medicine_2_4}</td>
                      <td>{this.state.date_2_4}</td>
                      <td>{this.state.adverse_reactions_or_allergies_2_4}</td>
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

export default DetailsReactionOrAllergy