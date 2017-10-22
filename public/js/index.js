import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';

const AppT = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
    <AppT />,
    document.getElementById('app')
);

