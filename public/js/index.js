import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Test from './components/Test'
import CadernetaMenuGuide from './components/CadernetaMenuGuide'
import SideMenu from './components/SideMenu'

ReactDOM.render(<App />, document.getElementById('app'))
ReactDOM.render(<Test />, document.getElementById('test'))
ReactDOM.render(<CadernetaMenuGuide />, document.getElementById('menu_guide'))
ReactDOM.render(<SideMenu />, document.getElementById('sidemenu'))