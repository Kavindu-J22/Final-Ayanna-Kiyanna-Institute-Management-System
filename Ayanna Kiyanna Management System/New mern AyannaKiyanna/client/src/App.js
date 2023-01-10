import React, { useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import MainPages from './components/mainpages/Pages'
import './app.css'
import { Link } from 'react-router-dom';
import GoToTop from './components/mainpages/utils/GoToTop'



function App() {

  return (
    <DataProvider>
      <Router>
        <div className="App">
          <MainPages />
          <div className='newthinkMenu'><Link to="/Header/NewHeader"><i class="fa-solid fa-bars"></i></Link></div>
          <GoToTop />
        </div>

      </Router>
    </DataProvider>
  );
}

export default App;
