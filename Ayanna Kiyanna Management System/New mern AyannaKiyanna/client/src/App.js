import React, { useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import MainPages from './components/mainpages/Pages'
import './app.css'
import { Link } from 'react-router-dom';



function App() {
  const [topshow, settopShow] = useState(false)

  const contralbackbtn = ()=>{
    if(window.scrollY>=100) {
      settopShow(true)
    }else{
      settopShow(false)
    }
}
useEffect(() => {
    window.addEventListener('scroll',
    contralbackbtn)
    return () => {
        window.removeEventListener('scroll',
        contralbackbtn)
    }
},[])

  return (
    <DataProvider>
      <Router>
        <div className="App">
          <MainPages />
          <div className='newthinkMenu'><Link  to="/Header/NewHeader"><i class="fa-solid fa-bars"></i></Link></div>
          <div className={`toptoptop ${topshow && 'toptoptop-styles'}`}><a className='gotopbtn' href='#'><i class="fa-solid fa-up-long"></i></a></div>
        </div>

      </Router>
    </DataProvider>
  );
}

export default App;
