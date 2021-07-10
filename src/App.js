import React from 'react';
import './App.css';
import Header1 from './components/Header1' ;
import Header2 from "./components/Header2";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
        <Header1/>
          <Header2/>
      </div>

  );
}

export default App;
