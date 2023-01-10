import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from '../../GlobalState'
// import Menu from './icon/menu.svg'
// import Close from './icon/close.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    // const [menu, setMenu] = useState(false)

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
                <li><Link to="/create_product">Add for -You</Link></li>
                <li><Link to="/category">Add Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                {
                    isAdmin ? <li><Link to="#">User Requests</Link></li> : <li><Link to="#">My Requests</Link></li>
                }
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
                <li><Link to="#"><i class="fa-solid fa-user-large"></i></Link></li>
            </>
        )
    }


    // const styleMenu = {
    //     left: menu ? 0 : "-100%"
    // }

    return (
        <div className={`myheadtopabs ${show && 'myheadtopabs_styles'}`}>
            {/* <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div> */}

            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? '-Admin-' : '“අයන්න කියන්න”'}</Link>
                </h1>
            </div>


            {/*inside ul..> style={styleMenu} */}
            <ul>
                <li><a href="#fristhome">{isAdmin ? 'Home' : 'Home'}</a></li>
                <li><a href="#MAboutDiv">{isAdmin ? 'About' : 'About'}</a></li>
                <li><a href="#SemomeDiv">{isAdmin ? 'Info' : 'Info'}</a></li>
                <li><a href="#MBoxesDiv">{isAdmin ? 'Services' : 'Services'}</a></li>
                <li><a href="#foryouDiv">{isAdmin ? 'for you' : 'for you'}</a></li>
                <li><a href="#Contactfooter">{isAdmin ? 'Contact' : 'Contact'}</a></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login ✦ Register</Link></li>
                }

                {/* <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li> */}

            </ul>
            
        </div>
    )
}

export default Header
