import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class LivingHabits extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', attendclubs_2_11:'', volunteerwork_2_11:'', leisureactivity_2_11:'', physicalactivity_2_11:'', activityprogram_2_11:'', threemeals_2_11:'', fruitsvegetables_2_11:'', meatfish_2_11:'', sugarydrinks_2_11:'', greaseoils_2_11:'', water_2_11:'', tobacco_2_11:'', stopsmoking_2_11:'', exsmoker_2_11:'', alcoholicbeverage_2_11:'', suspendalcohol_2_11:'', drink_2_11:'', guiltyfordrinking_2_11:'', drinkmorning_2_11:''};
    this.sendForm = this.sendForm.bind(this);
    this.setAttendClubs211 = this.setAttendClubs211.bind(this);
    this.setVolunteerWork211 = this.setVolunteerWork211.bind(this);
    this.setLeiSureActivity211 = this.setLeiSureActivity211.bind(this);
    this.setPhysicalActivity211 = this.setPhysicalActivity211.bind(this);
    this.setActivityProgram211 = this.setActivityProgram211.bind(this);
    this.setThreeMeals211 = this.setThreeMeals211.bind(this);
    this.setFruitsvegeTables211 = this.setFruitsvegeTables211.bind(this);
    this.setMeatFish211 = this.setMeatFish211.bind(this);
    this.setSugaryDrinks211 = this.setSugaryDrinks211.bind(this);
    this.setGreaseOils211 = this.setGreaseOils211.bind(this);
    this.setWater211 = this.setWater211.bind(this);
    this.setTobacco211 = this.setTobacco211.bind(this);
    this.setStopSmoking211 = this.setStopSmoking211.bind(this);
    this.setExSmoker211 = this.setExSmoker211.bind(this);
    this.setAlcoholicBeverage211 = this.setAlcoholicBeverage211.bind(this);
    this.setSuspendAlcohol211 = this.setSuspendAlcohol211.bind(this);
    this.setDrink211 = this.setDrink211.bind(this);
    this.setGuiltyforDrinking211 = this.setGuiltyforDrinking211.bind(this);
    this.setDrinkMorning211 = this.setDrinkMorning211.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/livinghabits",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {
    evt.preventDefault();

    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/livinghabits",
      contentType: 'application/json',
      dataType: 'json',
      method: "POST",
      data: JSON.stringify({ test: this.state }),
      success: function(response){
        console.log(response);
        console.log("enviado com sucesso");
      },
      error: function(response){
        console.log("erro");
        console.log(response);
      }.bind(this)
    });
  }

 render () {
  return (
          <div className="container" >
            <form id="livinghabits" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2>HÁBITOS DE VIDA </h2> 
                  <h2> Identificação de hábitos de vida </h2>
                  <h2> Interesse social e lazer </h2>
                  <label>Você frequenta centros-dia, clubes ou grupos de convivência? </label><br/>
                  <input type="radio" value={this.state.attendclubs_2_11} onChange={this.setAttendClubs211} className="answers-110" id="2.11-attendclubs-y" name="answers[2.11[attendclubs]]" value="1"  />Sim
                  <input type="radio" value={this.state.attendclubs_2_11} onChange={this.setAttendClubs211} className="answers-110" id="2.11-attendclubs-n" name="answers[2.11[attendclubs]]" value="0"  />Não
                  <br/><br/>
                  <label>Você realiza algum trabalho voluntário? </label><br/>
                  <input type="radio" value={this.state.volunteerwork_2_11} onChange={this.setVolunteerWork211} className="answers-111" id="2.11-volunteerwork-y" name="answers[2.11[volunteerwork]]" value="1"  />Sim
                  <input type="radio" value={this.state.volunteerwork_2_11} onChange={this.setVolunteerWork211} className="answers-111" id="2.11-volunteerwork-n" name="answers[2.11[volunteerwork]]" value="0"  />Não
                  <br/><br/>
                  <label>Você tem alguma atividade de lazer? </label><br/>
                  <input type="radio" value={this.state.leisureactivity_2_11} onChange={this.setLeiSureActivity211} className="answers-112" id="2.11-leisureactivity-y" name="answers[2.11[leisureactivity]]" value="1"  />Sim
                  <input type="radio" value={this.state.leisureactivity_2_11} onChange={this.setLeiSureActivity211} className="answers-112" id="2.11-leisureactivity-n" name="answers[2.11[leisureactivity]]" value="0"  />Não
                  <br/><br/>

                  <h2> ATIVIDADE FÍSICA </h2>
                  <label>Você pratica algum tipo de atividade física (como caminhadas, natação, dança, ginástica etc.) pelo menos três vezes por semana? </label><br/>
                  <input type="radio" value={this.state.physicalactivity_2_11} onChange={this.setPhysicalActivity211} className="answers-113" id="2.11-physicalactivity-y" name="answers[2.11[physicalactivity]]" value="1"  />Sim
                  <input type="radio" value={this.state.physicalactivity_2_11} onChange={this.setPhysicalActivity211} className="answers-113" id="2.11-physicalactivity-n" name="answers[2.11[physicalactivity]]" value="0"  />Não
                  <br/><br/>
                  <label>Você gostaria de começar algum programa de atividade física? </label><br/>
                  <input type="radio" value={this.state.activityprogram_2_11} onChange={this.setActivityProgram211} className="answers-114" id="2.11-activityprogram-y" name="answers[2.11[activityprogram]]" value="1"  />Sim
                  <input type="radio" value={this.state.activityprogram_2_11} onChange={this.setActivityProgram211} className="answers-114" id="2.11-activityprogram-n" name="answers[2.11[activityprogram]]" value="0"  />Não
                  <br/><br/>

                  <h2> ALIMENTAÇÃO </h2>
                  <label>Você faz pelo menos três refeições por dia?</label><br/>
                  <input type="radio" value={this.state.threemeals_2_11} onChange={this.setThreeMeals211} className="answers-115" id="2.11-threemeals-y" name="answers[2.11[threemeals]]" value="1"  />Sim
                  <input type="radio" value={this.state.threemeals_2_11} onChange={this.setThreeMeals211} className="answers-115" id="2.11-threemeals-n" name="answers[2.11[threemeals]]" value="0"  />Não
                  <br/><br/>
                  <label>Você come frutas, legumes e verduras nas suas refeições ao longo do dia?  </label><br/>
                  <input type="radio" value={this.state.fruitsvegetables_2_11} onChange={this.setFruitsvegeTables211} className="answers-116" id="2.11-fruitsvegetables-y" name="answers[2.11[fruitsvegetables]]" value="1"  />Sim
                  <input type="radio" value={this.state.fruitsvegetables_2_11} onChange={this.setFruitsvegeTables211} className="answers-116" id="2.11-fruitsvegetables-n" name="answers[2.11[fruitsvegetables]]" value="0"  />Não
                  <br/><br/>
                  <label>Em pelo menos uma refeição diária, você come carnes, peixes ou ovos?</label><br/>
                  <input type="radio" value={this.state.meatfish_2_11} onChange={this.setMeatFish211} className="answers-117" id="2.11-meatfish-y" name="answers[2.11[meatfish]]" value="1"  />Sim
                  <input type="radio" value={this.state.meatfish_2_11} onChange={this.setMeatFish211} className="answers-117" id="2.11-meatfish-n" name="answers[2.11[meatfish]]" value="0"  />Não
                  <br/><br/>
                  <label>Você tem o costume de consumir bebidas açucaradas, bolos, biscoitos recheados e sobremesas? </label><br/>
                  <input type="radio" value={this.state.sugarydrinks_2_11} onChange={this.setSugaryDrinks211} className="answers-118" id="2.11-sugarydrinks-y" name="answers[2.11[sugarydrinks]]" value="1"  />Sim
                  <input type="radio" value={this.state.sugarydrinks_2_11} onChange={this.setSugaryDrinks211} className="answers-118" id="2.11-sugarydrinks-n" name="answers[2.11[sugarydrinks]]" value="0"  />Não
                  <br/><br/>
                  <label>No preparo das suas refeições, é utilizada grande quantidade de óleos, gorduras, açúcar e sal?</label><br/>
                  <input type="radio" value={this.state.greaseoils_2_11} onChange={this.setGreaseOils211} className="answers-119" id="2.11-greaseoils-y" name="answers[2.11[greaseoils]]" value="1"  />Sim
                  <input type="radio" value={this.state.greaseoils_2_11} onChange={this.setGreaseOils211} className="answers-119" id="2.11-greaseoils-n" name="answers[2.11[greaseoils]]" value="0"  />Não
                  <br/><br/>
                  <label>Você inclui a ingestão de água na sua rotina diária? </label><br/>
                  <input type="radio" value={this.state.water_2_11} onChange={this.setWater211} className="answers-120" id="2.11-water-y" name="answers[2.11[water]]" value="1"  />Sim
                  <input type="radio" value={this.state.water_2_11} onChange={this.setWater211} className="answers-120" id="2.11-water-n" name="answers[2.11[water]]" value="0"  />Não
                  <br/><br/>

                  <h2> TABAGISMO </h2>
                  <label>Atualmente, você fuma algum produto do tabaco?</label><br/>
                  <input type="radio" value={this.state.tobacco_2_11} onChange={this.setTobacco211} className="answers-121" id="2.11-tobacco-y" name="answers[2.11[tobacco]]" value="1"  />Sim
                  <input type="radio" value={this.state.tobacco_2_11} onChange={this.setTobacco211} className="answers-121" id="2.11-tobacco-n" name="answers[2.11[tobacco]]" value="0"  />Não
                  <br/><br/>
                  <label>Você gostaria de parar de fumar? </label><br/>
                  <input type="radio" value={this.state.stopsmoking_2_11} onChange={this.setStopSmoking211} className="answers-122" id="2.11-stopsmoking-y" name="answers[2.11[stopsmoking]]" value="1"  />Sim
                  <input type="radio" value={this.state.stopsmoking_2_11} onChange={this.setStopSmoking211} className="answers-122" id="2.11-stopsmoking-n" name="answers[2.11[stopsmoking]]" value="0"  />Não
                  <br/><br/>
                  <label>Você é ex-fumante? </label><br/>
                  <input type="radio" value={this.state.exsmoker_2_11} onChange={this.setExSmoker211} className="answers-123" id="2.11-exsmoker-y" name="answers[2.11[exsmoker]]" value="1"  />Sim
                  <input type="radio" value={this.state.exsmoker_2_11} onChange={this.setExSmoker211} className="answers-123" id="2.11-exsmoker-n" name="answers[2.11[exsmoker]]" value="0"  />Não
                  <br/><br/>

                  <h2> ÁLCOOL </h2>
                  <label>Você consome bebida alcoólica? </label><br/>
                  <input type="radio" value={this.state.alcoholicbeverage_2_11} onChange={this.setAlcoholicBeverage211} className="answers-124" id="2.11-alcoholicbeverage-y" name="answers[2.11[alcoholicbeverage]]" value="1"  />Sim
                  <input type="radio" value={this.state.alcoholicbeverage_2_11} onChange={this.setAlcoholicBeverage211} className="answers-124" id="2.11-alcoholicbeverage-n" name="answers[2.11[alcoholicbeverage]]" value="0"  />Não
                  <br/><br/>
                  <label>Você já sentiu a necessidade de reduzir ou suspender o consumo de álcool? </label><br/>
                  <input type="radio" value={this.state.suspendalcohol_2_11} onChange={this.setSuspendAlcohol211} className="answers-125" id="2.11-suspendalcohol-y" name="answers[2.11[suspendalcohol]]" value="1"  />Sim
                  <input type="radio" value={this.state.suspendalcohol_2_11} onChange={this.setSuspendAlcohol211} className="answers-125" id="2.11-suspendalcohol-n" name="answers[2.11[suspendalcohol]]" value="0"  />Não
                  <br/><br/>
                  <label>Alguém já lhe criticou por você beber? </label><br/>
                  <input type="radio" value={this.state.drink_2_11} onChange={this.setDrink211} className="answers-126" id="2.11-drink-y" name="answers[2.11[drink]]" value="1"  />Sim
                  <input type="radio" value={this.state.drink_2_11} onChange={this.setDrink211} className="answers-126" id="2.11-drink-n" name="answers[2.11[drink]]" value="0"  />Não
                  <br/><br/>
                  <label>Sente-se culpado(a) por beber? </label><br/>
                  <input type="radio" value={this.state.guiltyfordrinking_2_11} onChange={this.setGuiltyforDrinking211} className="answers-127" id="2.11-guiltyfordrinking-y" name="answers[2.11[guiltyfordrinking]]" value="1"  />Sim
                  <input type="radio" value={this.state.guiltyfordrinking_2_11} onChange={this.setGuiltyforDrinking211} className="answers-127" id="2.11-guiltyfordrinking-n" name="answers[2.11[guiltyfordrinking]]" value="0"  />Não
                  <br/><br/>
                  <label>Costuma beber logo pela manhã?</label><br/>
                  <input type="radio" value={this.state.drinkmorning_2_11} onChange={this.setDrinkMorning211} className="answers-128" id="2.11-drinkmorning-y" name="answers[2.11[drinkmorning]]" value="1"  />Sim
                  <input type="radio" value={this.state.drinkmorning_2_11} onChange={this.setDrinkMorning211} className="answers-128" id="2.11-drinkmorning-n" name="answers[2.11[drinkmorning]]" value="0"  />Não
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Avaliação de saúde bucal">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></a>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={this.sendForm} href="javascript:;"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </li>
              </ul>
            </nav>
          </div>

    )
  }
  setAttendClubs211(evt) {
    this.setState({attendclubs_2_11: evt.target.value});  
  }

  setVolunteerWork211(evt) {
    this.setState({volunteerwork_2_11: evt.target.value});  
  }

  setLeiSureActivity211(evt) {
    this.setState({leisureactivity_2_11: evt.target.value});  
  }

  setPhysicalActivity211(evt) {
    this.setState({physicalactivity_2_11: evt.target.value});  
  }

  setActivityProgram211(evt) {
    this.setState({activityprogram_2_11: evt.target.value});  
  }

  setThreeMeals211(evt) {
    this.setState({threemeals_2_11: evt.target.value});  
  }

  setFruitsvegeTables211(evt) {
    this.setState({fruitsvegetables_2_11: evt.target.value});  
  }

  setMeatFish211(evt) {
    this.setState({meatfish_2_11: evt.target.value});  
  }

  setSugaryDrinks211(evt) {
    this.setState({sugarydrinks_2_11: evt.target.value});  
  }

  setGreaseOils211(evt) {
    this.setState({greaseoils_2_11: evt.target.value});  
  }

  setWater211(evt) {
    this.setState({water_2_11: evt.target.value});  
  }

  setTobacco211(evt) {
    this.setState({tobacco_2_11: evt.target.value});  
  }

  setStopSmoking211(evt) {
    this.setState({stopsmoking_2_11: evt.target.value});  
  }

  setExSmoker211(evt) {
    this.setState({exsmoker_2_11: evt.target.value});  
  }

  setAlcoholicBeverage211(evt) {
    this.setState({alcoholicbeverage_2_11: evt.target.value});  
  }

  setDentalSpecialTies211d(evt) {
    this.setState({suspendalcohol_2_11: evt.target.value});  
  }

  setDrink211(evt) {
    this.setState({drink_2_11: evt.target.value});  
  }

  setGuiltyforDrinking211(evt) {
    this.setState({guiltyfordrinking_2_11: evt.target.value});  
  }

  setDrinkMorning211(evt) {
    this.setState({drinkmorning_2_11: evt.target.value});
  }

  setSuspendAlcohol211(evt) {    
    this.setState({suspendalcohol_2_11: evt.target.value});
  }

}

export default LivingHabits