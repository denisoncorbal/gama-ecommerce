import React from 'react';
import Routes from './routes';
import GlobalStyle from './GlobalStyles';
import Header from './view/header';
import Footer from './view/footer';

function App() {
  return (
    <>
      <Header />    
      <GlobalStyle />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
