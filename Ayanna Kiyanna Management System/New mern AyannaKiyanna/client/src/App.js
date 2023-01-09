import React, { useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import MainPages from './components/mainpages/Pages'
import './app.css'
import { Link } from 'react-router-dom';



function App() {
  const [show, setShow] = useState(true)

  const contralbackbtn = ()=>{
    if(window.scrollY>100) {
        setShow(true)
    }else{
        setShow(false)
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
          <div className={`toptoptop ${show && 'toptoptop-styles'}`}><a className='gotopbtn' href='#'><i class="fa-solid fa-up-long"></i></a></div>
        </div>

      </Router>
    </DataProvider>
  );
}

export default App;
