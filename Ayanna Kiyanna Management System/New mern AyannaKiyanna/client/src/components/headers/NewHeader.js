import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'
import "./newHeader.css"
import Aklogo from "../assets/images/AKlogo.png"

function NewHeader() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [menu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link className='newheadlink' to="/create_product" data-text="Add Items">Add Items</Link></li>
                <li><Link className='newheadlink' to="/category" data-text="Create Categories">Create Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link className='newheadlink' to="/" data-text="Logout" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <section className='newheader'>

            <img className="logoHead" src= {Aklogo}  alt="" />


            <ul style={styleMenu}>
                <li><Link className='newheadlink' to="/" data-text="Home">{isAdmin ? 'Home' : 'Home'}</Link></li>
                <li><Link className='newheadlink' to="/Home/Info" data-text="Info">{isAdmin ? 'Info' : 'Info'}</Link></li>
                <li><Link className='newheadlink' to="/Home/About" data-text="About">{isAdmin ? 'About' : 'About'}</Link></li>
                <li><Link className='newheadlink' to="/Home/Service" data-text="Services">{isAdmin ? 'Services' : 'Services'}</Link></li>
                <li><Link className='newheadlink' to="/Home/ProductsTow" data-text="For - You">{isAdmin ? 'For You' : 'For You'}</Link></li>
                <li><Link className='newheadlink' to="#" data-text="Contact">{isAdmin ? 'Contact' : 'Contact'}</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link className='newheadlink' to="/login" data-text="Login ✥ Register">Login ✥ Register</Link></li>
                }

            </ul>
            
        </section>
    )
}

export default NewHeader
