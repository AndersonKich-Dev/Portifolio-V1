import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './services/routes'
import GlobalStyles from './styles/GlobalStyle'
import Fonts from './fonts'
import GlobalContextProvider from './context/GlobalContext'

ReactDOM.render(
 
    <React.StrictMode>
      <GlobalContextProvider>
        <Fonts/>
        <GlobalStyles/>
        <Routes />
      </GlobalContextProvider>
    </React.StrictMode>,
  
  document.getElementById('root')
);


