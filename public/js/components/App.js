import React from 'react';
import PersonalData from './PersonalData'
import CadernetaMenuGuide from './CadernetaMenuGuide'

class App extends React.Component {
  constructor (props) {
    super(props)    
    this.state = {}
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div id="menu_guide"></div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '25%', height: '1px'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
              <CadernetaMenuGuide />
              <PersonalData />
          </div>
        </div>
      </div>
    )
  }
}

  export default App;
