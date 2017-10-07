import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import PersonalData from './components/PersonalData'
import CadernetaMenuGuide from './components/CadernetaMenuGuide'
// import SideMenu from './components/SideMenu'

ReactDOM.render(<App />, document.getElementById('app'))
ReactDOM.render(<PersonalData />, document.getElementById('personal-data'))
ReactDOM.render(<CadernetaMenuGuide />, document.getElementById('menu_guide'))
// ReactDOM.render(<SideMenu />, document.getElementById('sidemenu'))