import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsOralHealthAssessment extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      alcohol_2_11_d:'', 
      smoke_2_11_d:'', 
      presence_of_lesion_on_the_buccal_mucosa_2_11_d:'', 
      dry_mouth_2_11_d:'', 
      white_tongue_2_11_d:'', 
      presence_of_oral_candidiasis_2_11_d:'', 
      presence_of_halitosis_2_11_d:'', 
      presence_of_bacterial_plaque_2_11_d:'', 
      plate_retentive_factors_2_11_d:'', 
      obvious_presence_of_gingivitis_2_11_d:'', 
      obvious_presence_of_periodontitis_2_11_d:'', 
      presence_of_caries_2_11_d:'', 
      dental_loss_in_last_year_2_11_d:'', 
      attendance_at_the_health_unit_2_11_d:'', 
      home_service_2_11_d:'', 
      forwarding_for_specialties_dental_2_11_d:''
    };
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/oralhealthassessment",
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
    if (data.alcohol_2_11_d != null) {
      this.setState({alcohol_2_11_d: data.alcohol_2_11_d});
    }
    if (data.smoke_2_11_d != null) {
      this.setState({smoke_2_11_d: data.smoke_2_11_d});
    }
    if (data.presence_of_lesion_on_the_buccal_mucosa_2_11_d != null) {
      this.setState({presence_of_lesion_on_the_buccal_mucosa_2_11_d: data.presence_of_lesion_on_the_buccal_mucosa_2_11_d});
    }
    if (data.dry_mouth_2_11_d != null) {
      this.setState({dry_mouth_2_11_d: data.dry_mouth_2_11_d});
    }
    if (data.white_tongue_2_11_d != null) {
      this.setState({white_tongue_2_11_d: data.white_tongue_2_11_d});
    }
    if (data.presence_of_oral_candidiasis_2_11_d != null) {
      this.setState({presence_of_oral_candidiasis_2_11_d: data.presence_of_oral_candidiasis_2_11_d});
    }
    if (data.presence_of_halitosis_2_11_d != null) {
      this.setState({presence_of_halitosis_2_11_d: data.presence_of_halitosis_2_11_d});
    }
    if (data.presence_of_bacterial_plaque_2_11_d != null) {
      this.setState({presence_of_bacterial_plaque_2_11_d: data.presence_of_bacterial_plaque_2_11_d});
    }
    if (data.plate_retentive_factors_2_11_d != null) {
      this.setState({plate_retentive_factors_2_11_d: data.plate_retentive_factors_2_11_d});
    }
    if (data.obvious_presence_of_gingivitis_2_11_d != null) {
      this.setState({obvious_presence_of_gingivitis_2_11_d: data.obvious_presence_of_gingivitis_2_11_d});
    }
    if (data.obvious_presence_of_periodontitis_2_11_d != null) {
      this.setState({obvious_presence_of_periodontitis_2_11_d: data.obvious_presence_of_periodontitis_2_11_d});
    }
    if (data.presence_of_caries_2_11_d != null) {
      this.setState({presence_of_caries_2_11_d: data.presence_of_caries_2_11_d});
    }
    if (data.dental_loss_in_last_year_2_11_d != null) {
      this.setState({dental_loss_in_last_year_2_11_d: data.dental_loss_in_last_year_2_11_d});
    }
    if (data.attendance_at_the_health_unit_2_11_d != null) {
      this.setState({attendance_at_the_health_unit_2_11_d: data.attendance_at_the_health_unit_2_11_d});
    }
    if (data.home_service_2_11_d != null) {
      this.setState({home_service_2_11_d: data.home_service_2_11_d});
    }
    if (data.forwarding_for_specialties_dental_2_11_d != null) {
      this.setState({forwarding_for_specialties_dental_2_11_d: data.forwarding_for_specialties_dental_2_11_d});
    }
  }

 render () {
  return (
        <div className="container" >
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table"></i> Saúde bucal - Avaliação
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Álcool</th>
                      <th>Fumo</th>
                      <th>Presença de lesão na mucosa bucal </th>
                      <th>Boca seca (xerostomia – falta de saliva)</th>
                      <th>Presença de língua saburrosa (língua branca)</th>
                      <th>Presença de candidíase bucal</th>
                      <th>Presença de halitose</th>
                      <th>Presença de placa bacteriana (biofilme dental)</th>
                      <th>Fatores retentivos de placa (raízes residuais, cálculo)</th>
                      <th>Presença evidente de gengivite/sangramento gengival</th>
                      <th>Presença evidente de periodontite/perda óssea</th>
                      <th>Presença de cárie</th>
                      <th>Perda dental no último ano</th>
                      <th>Atendimento na unidade de saúde</th>
                      <th>Atendimento no domicílio</th>
                      <th>Encaminhamento para especialidades odontológicas</th>                  
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.alcohol_2_11_d}</td>
                      <td>{this.state.smoke_2_11_d}</td>
                      <td>{this.state.presence_of_lesion_on_the_buccal_mucosa_2_11_d}</td>
                      <td>{this.state.dry_mouth_2_11_d}</td>
                      <td>{this.state.white_tongue_2_11_d}</td>
                      <td>{this.state.presence_of_oral_candidiasis_2_11_d}</td>
                      <td>{this.state.presence_of_halitosis_2_11_d}</td>
                      <td>{this.state.presence_of_bacterial_plaque_2_11_d}</td>
                      <td>{this.state.plate_retentive_factors_2_11_d}</td>
                      <td>{this.state.obvious_presence_of_gingivitis_2_11_d}</td>
                      <td>{this.state.obvious_presence_of_periodontitis_2_11_d}</td>
                      <td>{this.state.presence_of_caries_2_11_d}</td>
                      <td>{this.state.dental_loss_in_last_year_2_11_d}</td>
                      <td>{this.state.attendance_at_the_health_unit_2_11_d}</td>
                      <td>{this.state.home_service_2_11_d}</td>
                      <td>{this.state.forwarding_for_specialties_dental_2_11_d}</td>
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

export default DetailsOralHealthAssessment