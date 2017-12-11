import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsDisabilities extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {stopped_shopping_2_6_a:'', stop_tracking_your_money_2_6_a:'', stopped_walking_in_the_house_2_6_a:'', stopped_doing_light_household_chores_2_6_a:'', stop_taking_showers_alone_2_6_a:''};
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
  }

  buildData(data) {
    if (data.stopped_shopping_2_6_a != null) {
      this.setState({stopped_shopping_2_6_a: data.stopped_shopping_2_6_a});
    }
    if (data.stop_tracking_your_money_2_6_a != null) {
      this.setState({stop_tracking_your_money_2_6_a: data.stop_tracking_your_money_2_6_a});
    }
    if (data.stopped_walking_in_the_house_2_6_a != null) {
      this.setState({stopped_walking_in_the_house_2_6_a: data.stopped_walking_in_the_house_2_6_a});
    }
    if (data.stopped_doing_light_household_chores_2_6_a != null) {
      this.setState({stopped_doing_light_household_chores_2_6_a: data.stopped_doing_light_household_chores_2_6_a});
    }
    if (data.stop_taking_showers_alone_2_6_a != null) {
      this.setState({stop_taking_showers_alone_2_6_a: data.stop_taking_showers_alone_2_6_a});
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.stopped_shopping_2_6_a}</td>
                      <td>{this.state.stop_tracking_your_money_2_6_a}</td>
                      <td>{this.state.stopped_walking_in_the_house_2_6_a}</td>
                      <td>{this.state.stopped_doing_light_household_chores_2_6_a}</td>
                      <td>{this.state.stop_taking_showers_alone_2_6_a}</td>
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