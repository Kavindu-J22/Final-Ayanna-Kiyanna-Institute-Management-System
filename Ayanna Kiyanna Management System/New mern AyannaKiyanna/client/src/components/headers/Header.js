import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
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
                <li><Link to="/Home/Info">{isAdmin ? 'Info' : 'Info'}</Link></li>
                <li><Link to="/Home/About">{isAdmin ? 'About' : 'About'}</Link></li>
                <li><Link to="/Home/Service">{isAdmin ? 'Services' : 'Services'}</Link></li>
                <li><Link to="/">{isAdmin ? 'Contact' : 'Contact'}</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>
            
        </header>
    )
}

export default Header
