import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsFalls extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {date_of_fall_month_2_9:'', date_of_fall_year_2_9:'', the_fall_caused_some_fracture_2_9:'', the_fall_caused_some_fracture_extra_2_9:'', you_stopped_perform_some_activity_for_fear_to_fall_again_2_9:'', place_2_9:'', created_at:'', list : []};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/falls",
      dataType: "json",
      method: "GET",
      success:function(response){
        if (response != "") {
          this.buildData(response[0]);
        }
      }.bind(this)
    });

    $.ajax({
      url: "/api/v1/falls/getTrashed",
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
    if (data.date_of_fall_month_2_9 != null) {
      this.setState({date_of_fall_month_2_9: data.date_of_fall_month_2_9});
    }
    if (data.date_of_fall_year_2_9 != null) {
      this.setState({date_of_fall_year_2_9: data.date_of_fall_year_2_9});
    }
    if (data.the_fall_caused_some_fracture_2_9 != null) {
      this.setState({the_fall_caused_some_fracture_2_9: (data.the_fall_caused_some_fracture_2_9 == "1") ? 'SIM' : 'NÃO'});
    }
    if (data.the_fall_caused_some_fracture_extra_2_9 != null) {
      this.setState({the_fall_caused_some_fracture_extra_2_9: data.the_fall_caused_some_fracture_extra_2_9});
    }
    if (data.you_stopped_perform_some_activity_for_fear_to_fall_again_2_9 != null) {
      this.setState({you_stopped_perform_some_activity_for_fear_to_fall_again_2_9: (data.you_stopped_perform_some_activity_for_fear_to_fall_again_2_9 == "1") ? 'SIM' : 'NÃO'});
    }
    if (data.place_2_9 != null) {
      this.setState({place_2_9: data.place_2_9});
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
              <i className="fa fa-table"></i> Quedas
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Mês</th>
                      <th>Ano</th>
                      <th>Qual foi o local da queda?</th>
                      <th>A queda causou alguma fratura?</th>
                      <th>Qual?</th>
                      <th>Você parou de realizar alguma atividade por medo de cair novamente?</th>
                      <th>Avaliado em</th>
                      <th>Profissional</th>                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map(function(data){
                        return (
                          <tr key={data.id}>
                            <td>{data.date_of_fall_month_2_9}</td>
                            <td>{data.date_of_fall_year_2_9}</td>
                            <td>{data.place_2_9}</td>                          
                            <td>{(data.the_fall_caused_some_fracture_2_9 == "1") ? 'SIM' : 'NÃO'}</td>
                            <td>{data.the_fall_caused_some_fracture_extra_2_9}</td>
                            <td>{(data.you_stopped_perform_some_activity_for_fear_to_fall_again_2_9 == "1") ? 'SIM' : 'NÃO'}</td>
                            <td>{data.created_at}</td>
                            <td>{data.history.user.name}</td>
                          </tr>
                        )
                      })
                    }                  
                    <tr>
                      <td>{this.state.date_of_fall_month_2_9}</td>
                      <td>{this.state.date_of_fall_year_2_9}</td>
                      <td>{this.state.place_2_9}</td>
                      <td>{this.state.the_fall_caused_some_fracture_2_9}</td>
                      <td>{this.state.the_fall_caused_some_fracture_extra_2_9}</td>
                      <td>{this.state.you_stopped_perform_some_activity_for_fear_to_fall_again_2_9}</td>
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

export default DetailsFalls