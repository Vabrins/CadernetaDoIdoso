import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class ComplementaryInformation extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', forgotten_2_7:'', lastmonths_2_7:'', activity_2_7:'', sad_2_7:'', pleasure_2_7:''};
    this.sendForm = this.sendForm.bind(this);
    this.setForgotten27 = this.setForgotten27.bind(this);
    this.setLastmonths27 = this.setLastmonths27.bind(this);
    this.setActivity27 = this.setActivity27.bind(this);
    this.setSad27 = this.setSad27.bind(this);
    this.setPleasure27 = this.setPleasure27.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1/complementaryinformation",
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
      url: "http://127.0.0.1:8000/api/v1/complementaryinformation",
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
            <form id="complementaryinformation" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <h2> COGNIÇÃO </h2>
                  <label>Algum familiar ou amigo(a) falou que você está ficando esquecido(a)?  </label><br/>
                  <input type="radio"  value={this.state.forgotten_2_7} onChange={this.setForgotten27} className="answers-84" id="2.7-forgotten-y" name="answers[2.7[forgotten]]" value="1"  />Sim
                  <input type="radio"  value={this.state.forgotten_2_7} onChange={this.setForgotten27} className="answers-84" id="2.7-forgotten-n" name="answers[2.7[forgotten]]" value="0"  />Não
                  <br/><br/>
                  <label>O esquecimento está piorando nos últimos meses?  </label><br/>
                  <input type="radio"  value={this.state.lastmonths_2_7} onChange={this.setLastmonths27} className="answers-85" id="2.7-lastmonths-y" name="answers[2.7[lastmonths]]" value="1"  />Sim
                  <input type="radio"  value={this.state.lastmonths_2_7} onChange={this.setLastmonths27} className="answers-85" id="2.7-lastmonths-n" name="answers[2.7[lastmonths]]" value="0"  />Não
                  <br/><br/>
                  <label>O esquecimento está impedindo a realização de alguma atividade do cotidiano?  </label><br/>
                  <input type="radio"  value={this.state.activity_2_7} onChange={this.setActivity27} className="answers-86" id="2.7-activity-y" name="answers[2.7[activity]]" value="1"  />Sim
                  <input type="radio"  value={this.state.activity_2_7} onChange={this.setActivity27} className="answers-86" id="2.7-activity-n" name="answers[2.7[activity]]" value="0"  />Não
                  <br/><br/>
                  <h2> HUMOR </h2>
                  <label>No último mês, você ficou com desânimo, tristeza ou desesperança? </label><br/>
                  <input type="radio"  value={this.state.sad_2_7} onChange={this.setSad27} className="answers-87" id="2.7-sad-y" name="answers[2.7[sad]]" value="1"  />Sim
                  <input type="radio"  value={this.state.sad_2_7} onChange={this.setSad27} className="answers-87" id="2.7-sad-n" name="answers[2.7[sad]]" value="0"  />Não
                  <br/><br/>
                  <label>No último mês, você perdeu o interesse ou o prazer por atividades anteriormente prazerosas? </label><br/>
                  <input type="radio"  value={this.state.pleasure_2_7} onChange={this.setPleasure27} className="answers-88" id="2.7-pleasure-y" name="answers[2.7[pleasure]]" value="1"  />Sim
                  <input type="radio"  value={this.state.pleasure_2_7} onChange={this.setPleasure27} className="answers-88" id="2.7-pleasure-n" name="answers[2.7[pleasure]]" value="0"  />Não
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label=" Informações complementares">
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

  setForgotten27(evt) {
    this.setState({forgotten_2_7: evt.target.value});  
  }

  setLastmonths27(evt) {
    this.setState({lastmonths_2_7: evt.target.value});  
  }

  setActivity27(evt) {
    this.setState({activity_2_7: evt.target.value});  
  }

  setSad27(evt) {
    this.setState({sad_2_7: evt.target.value});  
  }

  setPleasure27(evt) {
    this.setState({pleasure_2_7: evt.target.value});  
  }

}

export default ComplementaryInformation