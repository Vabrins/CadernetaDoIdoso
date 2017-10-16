import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class PersonalData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', crouch_2_6:'', tocharge_2_6:'', arms_2_6:'', write_2_6:'', walk_2_6:'', domestic_2_6:''};
    this.sendForm = this.sendForm.bind(this);
    this.setCrouch26 = this.setCrouch26.bind(this);
    this.setTocharge26 = this.setTocharge26.bind(this);
    this.setArms26 = this.setArms26.bind(this);
    this.setWrite26 = this.setWrite26.bind(this);
    this.setWalk26 = this.setWalk26.bind(this);
    this.setDomestic26 = this.setDomestic26.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/vulnerableelderly",
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
      url: "http://127.0.0.1:8000/api/v1/vulnerableelderly",
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
            <form id="vulnerableelderly" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <label>Curvar-se, agachar ou ajoelhar-se</label><br/>
                  <input type="text" value={this.state.crouch_2_6} onChange={this.setCrouch26} className="answers-78" id="2.6-crouch" name="answers[2.6[crouch]]"  />
                  <br/><br/>
                  <label>Levantar ou carregar objetos com peso aproximado de 5 kg</label><br/>
                  <input type="text" value={this.state.tocharge_2_6} onChange={this.setTocharge26} className="answers-79" id="2.6-tocharge" name="answers[2.6[tocharge]]"  />
                  <br/><br/>
                  <label>Elevar ou estender os braços acima do nível do ombro </label><br/>
                  <input type="text" value={this.state.arms_2_6} onChange={this.setArms26} className="answers-80" id="2.6-arms" name="answers[2.6[arms]]"  />
                  <br/><br/>
                  <label>Escrever ou manusear e segurar pequenos objetos</label><br/>
                  <input type="text" value={this.state.write_2_6} onChange={this.setWrite26} className="answers-81" id="2.6-Write" name="answers[2.6[Write]]"  />
                  <br/><br/>
                  <label>Andar 400 metros (aproximadamente quatro quarteirões)</label><br/>
                  <input type="text" value={this.state.walk_2_6} onChange={this.setWalk26} className="answers-82" id="2.6-walk" name="answers[2.6[walk]]"  />
                  <br/><br/>
                  <label>Fazer serviço doméstico pesado, como esfregar o chão ou limpar janelas</label><br/>
                  <input type="text" value={this.state.domestic_2_6} onChange={this.setDomestic26} className="answers-83" id="2.6-domestic" name="answers[2.6[domestic]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Protocolo de indentificação do idoso vulnerável">
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

  setCrouch26(evt) {
    this.setState({crouch_2_6: evt.target.value});  
  }

  setTocharge26(evt) {
    this.setState({tocharge_2_6: evt.target.value});  
  }

  setArms26(evt) {
    this.setState({arms_2_6: evt.target.value});  
  }

  setWrite26(evt) {
    this.setState({write_2_6: evt.target.value});  
  }

  setWalk26(evt) {
    this.setState({walk_2_6: evt.target.value});  
  }

  setDomestic26(evt) {
    this.setState({domestic_2_6: evt.target.value});  
  }

}

export default PersonsReferences