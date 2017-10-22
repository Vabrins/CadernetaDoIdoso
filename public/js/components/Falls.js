import React from 'react';
import $ from 'jquery';
import SideMenu from './SideMenu';

class PersonalData extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {persons_references : [], id_historys:'1', id_elderlies:'1', falldate_2_9:'', localfall_2_9:'', fracture_2_9:'', afraidtofall_2_9:''};
    this.sendForm = this.sendForm.bind(this);
    this.setFallDate29 = this.setFallDate29.bind(this);
    this.setLocalFall29 = this.setLocalFall29.bind(this);
    this.setFracture29 = this.setFracture29.bind(this);
    this.setAfraidtoFall29 = this.setAfraidtoFall29.bind(this);
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
                  <h2>QUEDAS </h2>
                  <label>Data da queda (mês/ano)</label><br/>
                  <input type="text" value={this.state.falldate_2_9} onChange={this.setFallDate29} maxLength="12" className="answers-99" id="2.9-falldate" name="answers[2.9[falldate]]"  />
                  <br/><br/>
                  <label>Qual foi o local da queda?</label><br/>
                  <input type="radio" value={this.state.localfall_2_9} onChange={this.setLocalFall29} className="answers-100" id="2.9-localfall-y" name="answers[2.9[localfall]]" value="y"  />Dentro de casa
                  <input type="radio" value={this.state.localfall_2_9} onChange={this.setLocalFall29} className="answers-100" id="2.9-localfall-n" name="answers[2.9[localfall]]" value="n"  />Fora de casa
                  <br/><br/>
                  <label>A queda causou alguma fratura?</label><br/>
                  <input type="radio" value={this.state.fracture_2_9} onChange={this.setFracture29} className="answers-101" id="2.9a-fracture-y" name="answers[2.9[fracture]]" value="1"  />Sim
                  <input type="radio" value={this.state.fracture_2_9} onChange={this.setFracture29} className="answers-101" id="2.9a-fracture-n" name="answers[2.9[fracture]]" value="0"  />Não
                  <input type="text"  value={this.state.fracture_2_9} onChange={this.setFracture29} className="answers-101" id="2.9-fracture" name="answers[2.9[fracture]]"/>
                  <br/><br/>
                  <label>Você parou de realizar alguma atividade por medo de cair novamente?</label><br/>
                  <input type="radio" value={this.state.afraidtofall_2_9} onChange={this.setAfraidtoFall29} className="answers-102" id="2.9-afraidtofall-y" name="answers[2.9[afraidtofall]]" value="1"  />Sim
                  <input type="radio" value={this.state.afraidtofall_2_9} onChange={this.setAfraidtoFall29} className="answers-103" id="2.9-afraidtofall-n" name="answers[2.9[afraidtofall]]" value="0"  />Não
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

  setFallDate29(evt) {
    this.setState({falldate_2_9: evt.target.value});  
  }

  setLocalFall29(evt) {
    this.setState({localfall_2_9: evt.target.value});  
  }

  setFracture29(evt) {
    this.setState({fracture_2_9: evt.target.value});  
  }

  setAfraidtoFall29(evt) {
    this.setState({afraidtofall_2_9: evt.target.value});  
  }

}

export default PersonsReferences