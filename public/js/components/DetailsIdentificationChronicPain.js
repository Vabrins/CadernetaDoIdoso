import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsIdentificationChronicPain extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      do_you_have_pain_last_same_more_than_3_mon_2_10:'', 
      the_pain_is_like_a_shock_or_a_burning_2_10:'',
      does_the_pain_get_worse_when_walking_2_10:'',
      does_pain_improve_with_rest_2_10:'',
      created_at:'', list : []
    };
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/identificationchronicpain",
      dataType: "json",
      method: "GET",
      success:function(response){
        if (response != "") {
          this.buildData(response[0]);
        }
      }.bind(this)
    });

    $.ajax({
      url: "/api/v1/identificationchronicpain/getTrashed",
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
    if (data.do_you_have_pain_last_same_more_than_3_mon_2_10 != null) {
      this.setState({do_you_have_pain_last_same_more_than_3_mon_2_10: (data.do_you_have_pain_last_same_more_than_3_mon_2_10 == "1") ? 'SIM' : 'NÃO'});
    }
    if (data.the_pain_is_like_a_shock_or_a_burning_2_10 != null) {
      this.setState({the_pain_is_like_a_shock_or_a_burning_2_10: (data.the_pain_is_like_a_shock_or_a_burning_2_10 == "1") ? 'SIM' : 'NÃO'});
    }
    if (data.does_the_pain_get_worse_when_walking_2_10 != null) {
      this.setState({does_the_pain_get_worse_when_walking_2_10: (data.does_the_pain_get_worse_when_walking_2_10 == "1") ? 'SIM' : 'NÃO'});
    }
    if (data.does_pain_improve_with_rest_2_10 != null) {
      this.setState({does_pain_improve_with_rest_2_10: (data.does_pain_improve_with_rest_2_10 == "1") ? 'SIM' : 'NÃO'});
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
              <i className="fa fa-table"></i> Identificação de dor crônica
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Você tem alguma dor com duração igual ou superior a 3 meses? </th>
                      <th>A dor é como um choque ou uma queimação? </th>
                      <th>A dor piora ao andar?</th>
                      <th>A dor melhora com o repouso?</th>
                      <th>Avaliado em</th>
                      <th>Profissional</th>                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map(function(data){
                        return (
                          <tr key={data.id}>
                            <td>{(data.do_you_have_pain_last_same_more_than_3_mon_2_10 == "1") ? 'SIM' : 'NÃO'}</td>
                            <td>{(data.the_pain_is_like_a_shock_or_a_burning_2_10 == "1") ? 'SIM' : 'NÃO'}</td>
                            <td>{(data.does_the_pain_get_worse_when_walking_2_10 == "1") ? 'SIM' : 'NÃO'}</td>
                            <td>{(data.does_pain_improve_with_rest_2_10 == "1") ? 'SIM' : 'NÃO'}</td>
                            <td>{data.created_at}</td>
                            <td>{data.history.user.name}</td>
                          </tr>
                        )
                      })
                    }                  
                    <tr>
                      <td>{this.state.do_you_have_pain_last_same_more_than_3_mon_2_10}</td>
                      <td>{this.state.the_pain_is_like_a_shock_or_a_burning_2_10}</td>
                      <td>{this.state.does_the_pain_get_worse_when_walking_2_10}</td>
                      <td>{this.state.does_pain_improve_with_rest_2_10}</td>
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

export default DetailsIdentificationChronicPain