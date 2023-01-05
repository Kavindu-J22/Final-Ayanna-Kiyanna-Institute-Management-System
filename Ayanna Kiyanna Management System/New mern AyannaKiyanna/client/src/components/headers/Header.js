import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        swal({
            title: 'Are you sure?',
            text: "You won't be able to Logout at this moment!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout Me!'
          }).then((result) => {
            if (result.isConfirmed) {
              swal(
                'Logout!',
                'Your has been Logout.',
                'success'
              )
            }
          })
        .then((value) => {
            swal(window.location.href = "/");
        });

    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Add Items</Link></li>
                <li><Link to="/category">Create Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 'අයන්න කියන්න (Admin)' : 'අයන්න කියන්න.'}</Link>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li><Link to="/">{isAdmin ? 'Home' : 'Home'}</Link></li>
                <li><a href="#MAboutDiv">{isAdmin ? 'About' : 'About'}</a></li>
                <li><a href="#SemomeDiv">{isAdmin ? 'Info' : 'Info'}</a></li>
                <li><a href="#MBoxesDiv">{isAdmin ? 'Services' : 'Services'}</a></li>
                <li><a href="#foryouDiv">{isAdmin ? 'for you' : 'for you'}</a></li>
                <li><a href="#Contactfooter">{isAdmin ? 'Contact' : 'Contact'}</a></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login ✦ Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>
            
        </header>
    )
}

export default Header
