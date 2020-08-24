import React from 'react';

import GlobalStyles from './styles/global';
import GlobalFonts from './styles/fonts';

import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <GlobalFonts />
      <Dashboard />
    </>
  );
};

export default App;
