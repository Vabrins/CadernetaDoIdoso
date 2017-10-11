import React, { Component } from 'react';

export default class RadioGroup extends Component {

  render() {
    return(
      <div>    
        <br/><label>{this.props.title}</label><br/>
        <div className="btn-group" id={this.props.idDiv} data-toggle="buttons">
          <label className="btn btn-light">
            <input type={this.props.type} name={this.props.name} onChange={this.props.onChange} className={this.props.className} value={this.props.value1} checked={this.props.checked1} /> {this.props.optName1}
          </label>
          <label className="btn btn-light">
            <input type={this.props.type} name={this.props.name} onChange={this.props.onChange} className={this.props.className} value={this.props.value2} checked={this.props.checked2} /> {this.props.optName2}
          </label>
        </div>    
      </div>
    )
  }
}
