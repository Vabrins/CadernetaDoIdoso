import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsMedicinesHerbalRemedies extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {name_of_the_medicinal_supplement_or_vitamin_2_1:'', dose_and_frequency_2_1:'', start_date_or_time_of_use_2_1:'', concomitant_use_of_five_or_more_medicines_2_1:'', it_was_prescribed_by_some_professional_2_1:'', suspension_information_2_1:'', created_at:'', list : []};
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/medicinesherbalremedies",
      dataType: "json",
      method: "GET",
      success:function(response){
        if (response != "") {
          this.buildData(response[0]);
        }
      }.bind(this)
    });

    $.ajax({
      url: "/api/v1/medicinesherbalremedies/getTrashed",
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
    if (data.name_of_the_medicinal_supplement_or_vitamin_2_1 != null) {
      this.setState({name_of_the_medicinal_supplement_or_vitamin_2_1: data.name_of_the_medicinal_supplement_or_vitamin_2_1});
    }
    if (data.dose_and_frequency_2_1 != null) {
      this.setState({dose_and_frequency_2_1: data.dose_and_frequency_2_1});
    }
    if (data.start_date_or_time_of_use_2_1 != null) {
      this.setState({start_date_or_time_of_use_2_1: data.start_date_or_time_of_use_2_1});
    }
    if (data.concomitant_use_of_five_or_more_medicines_2_1 != null) {
      this.setState({concomitant_use_of_five_or_more_medicines_2_1: (data.concomitant_use_of_five_or_more_medicines_2_1 == "1") ? 'SIM' : 'NÃO'});
    }
    if (data.it_was_prescribed_by_some_professional_2_1 != null) {
      this.setState({it_was_prescribed_by_some_professional_2_1: data.it_was_prescribed_by_some_professional_2_1});
    }
    if (data.suspension_information_2_1 != null) {
      this.setState({suspension_information_2_1: data.suspension_information_2_1});
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
              <i className="fa fa-table"></i> Medicamentos, fitoterápicos, suplementos e vitaminas em uso
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Nome do medicamento, do fitoterápico, do suplemento ou da vitamina e sua concentração</th>
                      <th>Dose e frequência</th>
                      <th>Data de início ou tempo de uso</th>
                      <th>Uso concomitante de 5 ou mais medicamentos? </th>
                      <th>Foi prescrito por algum profissional de saúde? Qual?</th>
                      <th>Suspensão - Data/Motivo</th>
                      <th>Avaliado em</th>
                      <th>Profissional</th>                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map(function(data){
                        return (
                          <tr key={data.id}>
                            <td>{data.name_of_the_medicinal_supplement_or_vitamin_2_1}</td>
                            <td>{data.dose_and_frequency_2_1}</td>
                            <td>{data.start_date_or_time_of_use_2_1}</td>
                            <td>{(data.concomitant_use_of_five_or_more_medicines_2_1 == "1") ? 'SIM' : 'NÃO'}</td>
                            <td>{data.it_was_prescribed_by_some_professional_2_1}</td>
                            <td>{data.suspension_information_2_1}</td>
                            <td>{data.created_at}</td>
                            <td>{data.history.user.name}</td>
                          </tr>
                        )
                      })
                    }                  
                    <tr>
                      <td>{this.state.name_of_the_medicinal_supplement_or_vitamin_2_1}</td>
                      <td>{this.state.dose_and_frequency_2_1}</td>
                      <td>{this.state.start_date_or_time_of_use_2_1}</td>
                      <td>{this.state.concomitant_use_of_five_or_more_medicines_2_1}</td>
                      <td>{this.state.it_was_prescribed_by_some_professional_2_1}</td>
                      <td>{this.state.suspension_information_2_1}</td>
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

export default DetailsMedicinesHerbalRemedies