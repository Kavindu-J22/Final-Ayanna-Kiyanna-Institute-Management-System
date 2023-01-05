import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import MainPages from './components/mainpages/Pages'
import './app.css'
import { Link } from 'react-router-dom';
import Staklogo from './components/assets/images/AKlogo.png'



function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <MainPages />
          <div className='newthinkMenu'><Link  to="/Header/NewHeader"><i class="fa-solid fa-bars"></i></Link></div>
          <a className='gotopbtn' href='#'><i class="fa-solid fa-up-long"></i></a>
        </div>

      </Router>
    </DataProvider>
  );
}

export default App;
