import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from '../../GlobalState'
// import Menu from './icon/menu.svg'
// import Close from './icon/close.svg'
import {Link} from 'react-scroll'
import axios from 'axios'
import swal from 'sweetalert'
import Landingpage from "../mainpages/LandingPage/LandingPage"
import About from "../mainpages/LandingPage/About"
import Sehome from "../mainpages/LandingPage/Sehome"
import Boxes from "../mainpages/Other/Boxes"
import Products from '../mainpages/products/Products'
import Contactfooter from '../mainpages/LandingPage/contactFooter'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    // const li = document.querySelectorAll('.navLinks');
    // const sec = document.querySelectorAll('section');

    // const activeStatusMenu = () => {
    //     let len = sec.length;
    //     while(--len && window.scrollY <= sec[len].offsetTop){}
    //     li.forEach(ltx => ltx.classList.remove('activeMenu'));
    //     li[len].classList.add('activeMenu');
    // };

    // window.addEventListener("scroll",activeStatusMenu)
    

    const [show, setShow] = useState(true)
    const contralHeader = ()=>{
        if(window.scrollY>100) {
            setShow(false)
        }else{
            setShow(true)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',
        contralHeader)
        return () => {
            window.removeEventListener('scroll',
            contralHeader)
        }
    },[])

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        swal({
            title: "Done!",
            text: "You are now loged out.!",
            icon: "info",
            button: false
        })
        .then((value) => {
            window.location.href = "/";
        });

    }

    const adminRouter = () =>{
        return(
            <>
                <li><a href="/create_product">Add for -You</a></li>
                <li><a href="/category">Add Categories</a></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                {
                    isAdmin ? <li><Link to="#">User Requests</Link></li> : <li><Link to="#">My Requests</Link></li>
                }
                <li><a href="/" onClick={logoutUser}>Logout</a></li>
                <li><Link to="#"><i class="fa-solid fa-user-large"></i></Link></li>
            </>
        )
    }

    return (
        <div>

            <div className={`myheadtopabs ${show && 'myheadtopabs_styles'}`}>

                <div className="logo">
                    <h1>
                        <Link to="/">{isAdmin ? '-Admin-' : '“අයන්න කියන්න”'}</Link>
                    </h1>
                </div>

                <ul>
                    <li><Link className='navLinks' to="fristhomeavailable" spy={true} smooth={true} offset={0} duration={1000}>{isAdmin ? 'Home' : 'Home'}</Link></li>
                    <li><Link className='navLinks' to="myAboutavailable" spy={true} smooth={true} offset={10} duration={500}>{isAdmin ? 'About' : 'About'}</Link></li>
                    <li><Link className='navLinks' to="myInfoavailable" spy={true} smooth={true} offset={10} duration={500}>{isAdmin ? 'Info' : 'Info'}</Link></li>
                    <li><Link className='navLinks' to="serviceboxesavailable" spy={true} smooth={true} offset={10} duration={500}>{isAdmin ? 'Services' : 'Services'}</Link></li>
                    <li><Link className='navLinks' to="foryouBoxesavailable" spy={true} smooth={true} offset={10} duration={1000}>{isAdmin ? 'for you' : 'for you'}</Link></li>
                    <li><Link className='navLinks' to="contactboxavailable" spy={true} smooth={true} offset={10} duration={500}>{isAdmin ? 'Contact' : 'Contact'}</Link></li>

                    {isAdmin && adminRouter()}

                    {
                        isLogged ? loggedRouter() : <li><a href="/login">Login ✦ Register</a></li>
                    }

                </ul> 
            </div>
            
            <section id='fristhomeavailable'>
                <Landingpage/>
            </section>

            <section id='myAboutavailable'>
                <About/>
            </section>

            <section id='myInfoavailable'>
                <Sehome/>
            </section>

            <section id='serviceboxesavailable'>
                <Boxes/>
            </section>

            <section id='foryouBoxesavailable'>
                <Products/>
            </section>

            <section id='contactboxavailable'>
                <Contactfooter/>
            </section>
            
        </div>
    )
}

export default Header
