import React from 'react';
import './App.scss';

import Filters from '../Filters';
import Content from '../Content';


const App: React.FC = () => {
  return (
    <div className="app">
      <div className="icon-container">
        <img className="top-icon" src="http://simpleicon.com/wp-content/uploads/cute.png" alt="Airplane" />
      </div>
      <Filters />
      <Content />
    </div>
  );
}

export default App;
