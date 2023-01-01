import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import MainPages from './components/mainpages/Pages'
import './app.css'



function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          
          <MainPages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
