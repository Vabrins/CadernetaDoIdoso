import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class DetailsLivingHabits extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      do_you_go_to_day_centers_clubs_or_social_groups_2_11:'',
      do_you_do_any_volunteer_work_2_11:'',
      do_you_have_any_leisure_activities_2_11:'',
      do_you_engage_type_ph_act_least_three_tm_week_2_11:'',
      would_you_like_start_some_phy_activity_program_2_11:'',
      do_you_make_at_least_three_meals_a_day_2_11:'',
      do_you_eat_fruits_veg_your_meals_thro_the_day_2_11:'',
      in_at_least_one_meal_day_you_eat_meat_fish_eggs_2_11:'',
      you_have_custom_consuming_sug_dr_cak_bis_stuf_dess_2_11:'',
      in_the_prep_your_meals_great_qt_oils_used_fats_su_salt_2_11:'',
      do_you_include_water_intake_in_your_daily_routine_2_11:'',
      do_you_currently_smoke_any_tobacco_products_2_11:'',
      would_you_like_to_quit_smoking_2_11:'',
      are_you_a_former_smoker_2_11:'',
      do_you_drink_alcohol_2_11:'',
      have_you_ever_felt_the_need_to_reduce_or_of_alcohol_2_11:'',
      has_anyone_ever_criticized_you_for_drinking_2_11:'',
      feel_guilty_for_drinking_2_11:'',
      do_you_usually_drink_in_the_morning_2_11:''
    };
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/livinghabits",
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
    if (data.do_you_go_to_day_centers_clubs_or_social_groups_2_11 != null) {
      this.setState({do_you_go_to_day_centers_clubs_or_social_groups_2_11: data.do_you_go_to_day_centers_clubs_or_social_groups_2_11});
    }
    if (data.do_you_do_any_volunteer_work_2_11 != null) {
      this.setState({do_you_do_any_volunteer_work_2_11: data.do_you_do_any_volunteer_work_2_11});
    }
    if (data.do_you_have_any_leisure_activities_2_11 != null) {
      this.setState({do_you_have_any_leisure_activities_2_11: data.do_you_have_any_leisure_activities_2_11});
    }
    if (data.do_you_engage_type_ph_act_least_three_tm_week_2_11 != null) {
      this.setState({do_you_engage_type_ph_act_least_three_tm_week_2_11: data.do_you_engage_type_ph_act_least_three_tm_week_2_11});
    }
    if (data.would_you_like_start_some_phy_activity_program_2_11 != null) {
      this.setState({would_you_like_start_some_phy_activity_program_2_11: data.would_you_like_start_some_phy_activity_program_2_11});
    }
    if (data.do_you_make_at_least_three_meals_a_day_2_11 != null) {
      this.setState({do_you_make_at_least_three_meals_a_day_2_11: data.do_you_make_at_least_three_meals_a_day_2_11});
    }
    if (data.do_you_eat_fruits_veg_your_meals_thro_the_day_2_11 != null) {
      this.setState({do_you_eat_fruits_veg_your_meals_thro_the_day_2_11: data.do_you_eat_fruits_veg_your_meals_thro_the_day_2_11});
    }
    if (data.in_at_least_one_meal_day_you_eat_meat_fish_eggs_2_11 != null) {
      this.setState({in_at_least_one_meal_day_you_eat_meat_fish_eggs_2_11: data.in_at_least_one_meal_day_you_eat_meat_fish_eggs_2_11});
    }
    if (data.you_have_custom_consuming_sug_dr_cak_bis_stuf_dess_2_11 != null) {
      this.setState({you_have_custom_consuming_sug_dr_cak_bis_stuf_dess_2_11: data.you_have_custom_consuming_sug_dr_cak_bis_stuf_dess_2_11});
    }
    if (data.in_the_prep_your_meals_great_qt_oils_used_fats_su_salt_2_11 != null) {
      this.setState({in_the_prep_your_meals_great_qt_oils_used_fats_su_salt_2_11: data.in_the_prep_your_meals_great_qt_oils_used_fats_su_salt_2_11});
    }
    if (data.do_you_include_water_intake_in_your_daily_routine_2_11 != null) {
      this.setState({do_you_include_water_intake_in_your_daily_routine_2_11: data.do_you_include_water_intake_in_your_daily_routine_2_11});
    }
    if (data.do_you_currently_smoke_any_tobacco_products_2_11 != null) {
      this.setState({do_you_currently_smoke_any_tobacco_products_2_11: data.do_you_currently_smoke_any_tobacco_products_2_11});
    }
    if (data.would_you_like_to_quit_smoking_2_11 != null) {
      this.setState({would_you_like_to_quit_smoking_2_11: data.would_you_like_to_quit_smoking_2_11});
    }
    if (data.are_you_a_former_smoker_2_11 != null) {
      this.setState({are_you_a_former_smoker_2_11: data.are_you_a_former_smoker_2_11});
    }
    if (data.do_you_drink_alcohol_2_11 != null) {
      this.setState({do_you_drink_alcohol_2_11: data.do_you_drink_alcohol_2_11});
    }
    if (data.have_you_ever_felt_the_need_to_reduce_or_of_alcohol_2_11 != null) {
      this.setState({have_you_ever_felt_the_need_to_reduce_or_of_alcohol_2_11: data.have_you_ever_felt_the_need_to_reduce_or_of_alcohol_2_11});
    }
    if (data.has_anyone_ever_criticized_you_for_drinking_2_11 != null) {
      this.setState({has_anyone_ever_criticized_you_for_drinking_2_11: data.has_anyone_ever_criticized_you_for_drinking_2_11});
    }
    if (data.feel_guilty_for_drinking_2_11 != null) {
      this.setState({feel_guilty_for_drinking_2_11: data.feel_guilty_for_drinking_2_11});
    }
    if (data.do_you_usually_drink_in_the_morning_2_11 != null) {
      this.setState({do_you_usually_drink_in_the_morning_2_11: data.do_you_usually_drink_in_the_morning_2_11});
    }
  }

 render () {
  return (
        <div className="container" >
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table"></i> Hábitos de vida
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Você frequenta centros-dia, clubes ou grupos de convivência? </th>
                      <th>Você realiza algum trabalho voluntário? </th>
                      <th>Você tem alguma atividade de lazer? </th>
                      <th>Você pratica algum tipo de atividade física (como caminhadas, natação, dança, ginástica etc.) pelo menos três vezes por semana? </th>
                      <th>Você gostaria de começar algum programa de atividade física? </th>
                      <th>Você faz pelo menos três refeições por dia?</th>
                      <th>Você come frutas, legumes e verduras nas suas refeições ao longo do dia?  </th>
                      <th>Em pelo menos uma refeição diária, você come carnes, peixes ou ovos?</th>
                      <th>Você tem o costume de consumir bebidas açucaradas, bolos, biscoitos recheados e sobremesas? </th>
                      <th>No preparo das suas refeições, é utilizada grande quantidade de óleos, gorduras, açúcar e sal?</th>
                      <th>Você inclui a ingestão de água na sua rotina diária? </th>
                      <th>Atualmente, você fuma algum produto do tabaco?</th>
                      <th>Você gostaria de parar de fumar? </th>
                      <th>Você é ex-fumante? </th>
                      <th>Você consome bebida alcoólica? </th>
                      <th>Você já sentiu a necessidade de reduzir ou suspender o consumo de álcool? </th>
                      <th>Alguém já lhe criticou por você beber? </th>
                      <th>Sente-se culpado(a) por beber? </th>                                        
                      <th>Costuma beber logo pela manhã?</th>                                        
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.do_you_go_to_day_centers_clubs_or_social_groups_2_11}</td>
                      <td>{this.state.do_you_do_any_volunteer_work_2_11}</td>
                      <td>{this.state.do_you_have_any_leisure_activities_2_11}</td>
                      <td>{this.state.do_you_engage_type_ph_act_least_three_tm_week_2_11}</td>
                      <td>{this.state.would_you_like_start_some_phy_activity_program_2_11}</td>
                      <td>{this.state.do_you_make_at_least_three_meals_a_day_2_11}</td>
                      <td>{this.state.do_you_eat_fruits_veg_your_meals_thro_the_day_2_11}</td>
                      <td>{this.state.in_at_least_one_meal_day_you_eat_meat_fish_eggs_2_11}</td>
                      <td>{this.state.you_have_custom_consuming_sug_dr_cak_bis_stuf_dess_2_11}</td>
                      <td>{this.state.in_the_prep_your_meals_great_qt_oils_used_fats_su_salt_2_11}</td>
                      <td>{this.state.do_you_include_water_intake_in_your_daily_routine_2_11}</td>
                      <td>{this.state.do_you_currently_smoke_any_tobacco_products_2_11}</td>
                      <td>{this.state.would_you_like_to_quit_smoking_2_11}</td>
                      <td>{this.state.are_you_a_former_smoker_2_11}</td>
                      <td>{this.state.do_you_drink_alcohol_2_11}</td>
                      <td>{this.state.have_you_ever_felt_the_need_to_reduce_or_of_alcohol_2_11}</td>
                      <td>{this.state.has_anyone_ever_criticized_you_for_drinking_2_11}</td>
                      <td>{this.state.feel_guilty_for_drinking_2_11}</td>                                            
                      <td>{this.state.do_you_usually_drink_in_the_morning_2_11}</td>                                            
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

export default DetailsLivingHabits