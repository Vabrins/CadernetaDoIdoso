import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class SurgeriesPerformed extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {surgery_2_3:'', year_2_3:'', comments_2_3:''};
    this.sendForm = this.sendForm.bind(this);
    this.setSurgery23 = this.setSurgery23.bind(this);
    this.setYear23 = this.setYear23.bind(this);
    this.setComments23 = this.setComments23.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/v1/surgeriesperformed",
      dataType: "json",
      method: "GET",
      success:function(response){
        console.log(response);
      }.bind(this)
    });
  }

  sendForm(evt) {
    $.ajax({
      url: "/api/v1/surgeriesperformed",
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
            <form id="surgeriesperformed" method="post">
              <div className="row">
                <div className="col">
                  <fieldset>
                  <label>Cirurgia</label><br/>
                  <input type="text" value={this.state.surgery_2_3} onChange={this.setSurgery23} className="answers-70" id="2.3-surgery" name="answers[2.3[surgery]]"  />
                  <br/><br/>
                  <label>Ano</label><br/>
                  <input type="text"  value={this.state.year_2_3} onChange={this.setYear23} maxLength="5" className="answers-71" id="2.3-year" name="answers[2.3[year]]"  />
                  <br/><br/>
                  <label>Observações</label><br/>
                  <input type="text" value={this.state.comments_2_3} onChange={this.setComments23} className="answers-72" id="2.3-comments" name="answers[2.3[comments]]"  />
                  <br/><br/>
                  </fieldset>
                </div>
              </div>
            </form>
            <nav aria-label="Cirurgias realizadas">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <Link className="page-link" to="/diagnosisprevioushospitalization" tabIndex="-1"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" onClick={this.sendForm} to="/reactionorallergy"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </nav>
          </div>

    )
  }

  setSurgery23(evt) {
    this.setState({surgery_2_3: evt.target.value});  
  }

  setYear23(evt) {
    this.setState({year_2_3: evt.target.value});  
  }

  setComments23(evt) {
    this.setState({comments_2_3: evt.target.value});  
  }
}

export default SurgeriesPerformed