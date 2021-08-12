import React, { ReactElement } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const App = (): ReactElement => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
