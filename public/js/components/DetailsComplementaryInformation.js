import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsComplementaryInformation extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      some_family_mem_fri_said_that_are_get_forg_2_7:'',
      forgetfulness_is_getting_worse_in_last_months_2_7:'',
      forgetfulness_is_preventing_of_some_daily_activity_2_7:'', 
      in_the_last_mon_were_dismayed_sad_hop_2_7:'', 
      in_the_last_mon_lost_int_pleas_act_form_pleas_2_7:'',
      created_at:'', list : []
    };
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/complementaryinformation",
      dataType: "json",
      method: "GET",
      success:function(response){
        if (response != "") {
          this.buildData(response[0]);
        }
      }.bind(this)
    });

    $.ajax({
      url: "/api/v1/complementaryinformation/getTrashed",
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
    if (data.some_family_mem_fri_said_that_are_get_forg_2_7 != null) {
      this.setState({some_family_mem_fri_said_that_are_get_forg_2_7: data.some_family_mem_fri_said_that_are_get_forg_2_7});
    }
    if (data.forgetfulness_is_getting_worse_in_last_months_2_7 != null) {
      this.setState({forgetfulness_is_getting_worse_in_last_months_2_7: data.forgetfulness_is_getting_worse_in_last_months_2_7});
    }
    if (data.forgetfulness_is_preventing_of_some_daily_activity_2_7 != null) {
      this.setState({forgetfulness_is_preventing_of_some_daily_activity_2_7: data.forgetfulness_is_preventing_of_some_daily_activity_2_7});
    }
    if (data.in_the_last_mon_were_dismayed_sad_hop_2_7 != null) {
      this.setState({in_the_last_mon_were_dismayed_sad_hop_2_7: data.in_the_last_mon_were_dismayed_sad_hop_2_7});
    }
    if (data.in_the_last_mon_lost_int_pleas_act_form_pleas_2_7 != null) {
      this.setState({in_the_last_mon_lost_int_pleas_act_form_pleas_2_7: data.in_the_last_mon_lost_int_pleas_act_form_pleas_2_7});
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
              <i className="fa fa-table"></i> Informações complementares
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Algum familiar ou amigo(a) falou que você está ficando esquecido(a)?  </th>
                      <th>O esquecimento está piorando nos últimos meses?  </th>
                      <th>O esquecimento está impedindo a realização de alguma atividade do cotidiano?  </th>
                      <th>No último mês, você ficou com desânimo, tristeza ou desesperança? </th>
                      <th>No último mês, você perdeu o interesse ou o prazer por atividades anteriormente prazerosas? </th>
                      <th>Avaliado em</th>
                      <th>Profissional</th>                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map(function(data){
                        return (
                          <tr key={data.id}>
                            <td>{data.some_family_mem_fri_said_that_are_get_forg_2_7}</td>
                            <td>{data.forgetfulness_is_getting_worse_in_last_months_2_7}</td>
                            <td>{data.forgetfulness_is_preventing_of_some_daily_activity_2_7}</td>
                            <td>{data.in_the_last_mon_were_dismayed_sad_hop_2_7}</td>
                            <td>{data.in_the_last_mon_lost_int_pleas_act_form_pleas_2_7}</td>
                            <td>{data.created_at}</td>
                            <td>{data.history.user.name}</td>
                          </tr>
                        )
                      })
                    }                  
                    <tr>
                      <td>{this.state.some_family_mem_fri_said_that_are_get_forg_2_7}</td>
                      <td>{this.state.forgetfulness_is_getting_worse_in_last_months_2_7}</td>
                      <td>{this.state.forgetfulness_is_preventing_of_some_daily_activity_2_7}</td>
                      <td>{this.state.in_the_last_mon_were_dismayed_sad_hop_2_7}</td>
                      <td>{this.state.in_the_last_mon_lost_int_pleas_act_form_pleas_2_7}</td>
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

export default DetailsComplementaryInformation