import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsDisabilities extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {stopped_shopping_2_6_a:'', stop_tracking_your_money_2_6_a:'', stopped_walking_in_the_house_2_6_a:'', stopped_doing_light_household_chores_2_6_a:'', stop_taking_showers_alone_2_6_a:'', created_at:'', list : []};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/disabilities",
      dataType: "json",
      method: "GET",
      success:function(response){
        if (response != "") {
          this.buildData(response[0]);
        }
      }.bind(this)
    });

    $.ajax({
      url: "/api/v1/disabilities/getTrashed",
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
    if (data.stopped_shopping_2_6_a != null) {
      this.setState({stopped_shopping_2_6_a: (data.stopped_shopping_2_6_a == "1") ? 'SIM' : 'NÃO'});
    }
    if (data.stop_tracking_your_money_2_6_a != null) {
      this.setState({stop_tracking_your_money_2_6_a: (data.stop_tracking_your_money_2_6_a == "1") ? 'SIM' : 'NÃO'});
    }
    if (data.stopped_walking_in_the_house_2_6_a != null) {
      this.setState({stopped_walking_in_the_house_2_6_a: (data.stopped_walking_in_the_house_2_6_a == "1") ? 'SIM' : 'NÃO'});
    }
    if (data.stopped_doing_light_household_chores_2_6_a != null) {
      this.setState({stopped_doing_light_household_chores_2_6_a: (data.stopped_doing_light_household_chores_2_6_a == "1") ? 'SIM' : 'NÃO'});
    }
    if (data.stop_taking_showers_alone_2_6_a != null) {
      this.setState({stop_taking_showers_alone_2_6_a: (data.stop_taking_showers_alone_2_6_a == "1") ? 'SIM' : 'NÃO'});
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
              <i className="fa fa-table"></i> Incapacidades
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Por causa de sua saúde ou condição física, você deixou de fazer compras? </th>
                      <th>Por causa de sua saúde ou condição física, você deixou de controlar seu dinheiro, seus gastos ou de pagar suas contas?</th>
                      <th>Por causa de sua saúde ou condição física, você deixou de caminhar dentro de casa?</th>
                      <th>Por causa de sua saúde ou condição física, você deixou de realizar tarefas domésticas leves,como lavar louça ou fazer limpeza leve?</th>
                      <th>Por causa de sua saúde ou condição física, você deixou de tomar banho sozinho(a)?</th>
                      <th>Avaliado em</th>
                      <th>Profissional</th>                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map(function(data){
                        return (
                          <tr key={data.id}>
                            <td>{(data.stopped_shopping_2_6_a == "1") ? 'SIM' : 'NÃO'}</td>
                            <td>{(data.stop_tracking_your_money_2_6_a == "1") ? 'SIM' : 'NÃO'}</td>
                            <td>{(data.stopped_walking_in_the_house_2_6_a == "1") ? 'SIM' : 'NÃO'}</td>
                            <td>{(data.stopped_doing_light_household_chores_2_6_a == "1") ? 'SIM' : 'NÃO'}</td>
                            <td>{(data.stop_taking_showers_alone_2_6_a == "1") ? 'SIM' : 'NÃO'}</td>
                            <td>{data.created_at}</td>
                            <td>{data.history.user.name}</td>
                          </tr>
                        )
                      })
                    }                  
                    <tr>
                      <td>{this.state.stopped_shopping_2_6_a}</td>
                      <td>{this.state.stop_tracking_your_money_2_6_a}</td>
                      <td>{this.state.stopped_walking_in_the_house_2_6_a}</td>
                      <td>{this.state.stopped_doing_light_household_chores_2_6_a}</td>
                      <td>{this.state.stop_taking_showers_alone_2_6_a}</td>
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

export default DetailsDisabilities