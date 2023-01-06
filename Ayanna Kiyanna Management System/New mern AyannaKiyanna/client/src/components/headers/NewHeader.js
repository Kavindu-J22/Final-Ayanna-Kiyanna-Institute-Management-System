import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'
import "./newHeader.css"
import Aklogo from "../assets/images/AKlogo.png"
import swal from 'sweetalert'
import topbaranimevi from "../assets/videos/particles.mp4"

function NewHeader() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [menu] = useState(false)

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
            swal(window.location.href = "/");
        });

    }

    const adminRouter = () =>{
        return(
            <>
                <li><i class="fa-solid fa-gears"></i><Link className='newheadlink' to="/create_product" data-text="-Add Items-">Add Items</Link></li>
                <li><i class="fa-solid fa-square-plus"></i><Link className='newheadlink' to="/category" data-text="-Create Categories-">Create Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><i class="fa-solid fa-right-from-bracket"></i><Link className='newheadlink' to="/" data-text="-LOGOUT-" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <section className='newheader'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            

            <img className="logoHead" src= {Aklogo}  alt="" />
                    <div className='logoHead-titlenew'>
                        <h2>- User Menu -</h2>
                        <h2>- User Menu -</h2>
                    </div>

                <div className='MyCloseBtn'><a onClick={() => window.history.back()}><i class="fa-solid fa-circle-xmark"></i></a></div>
            
                <div className='listofnewmenu'>
                <ul style={styleMenu}>
                    <li><i class="fa-solid fa-house"></i><Link className='newheadlink' to="/" data-text="-HOME-">{isAdmin ? 'Home' : 'Home - මුල් පිටුව'}</Link></li>
                    <li><i class="fa-solid fa-address-card"></i><Link className='newheadlink' to="/Home/About" data-text="-ABOUT-">{isAdmin ? 'About' : 'About - අප ගැන'}</Link></li>
                    <li><i class="fa-solid fa-circle-info"></i><Link className='newheadlink' to="/Home/Info" data-text="-INFO-">{isAdmin ? 'Info' : 'Info - තොරතුරු'}</Link></li>
                    <li><i class="fa-solid fa-book-open"></i><Link className='newheadlink' to="/Home/Service" data-text="-SERVICES-">{isAdmin ? 'Services' : 'Services - අපගේ සේවා'}</Link></li>
                    <li><i class="fa-solid fa-pen-nib"></i><Link className='newheadlink' to="/Home/ProductsTow" data-text="-FOR-YOU-">{isAdmin ? 'For You' : 'For You - ඔබ සඳහා'}</Link></li>
                    <li><i class="fa-solid fa-phone"></i><Link className='newheadlink' to="/Home/Contactfooter" data-text="-CONTACT-US-">{isAdmin ? 'Contact' : 'Contact - අපට කියන්න'}</Link></li>
                
                    {isAdmin && adminRouter()}

                    {
                        isLogged ? loggedRouter() : <li><i class="fa-sharp fa-solid fa-link"></i><Link className='newheadlink' to="/login" data-text="-Login ✦ Register-">Login ✦ Register</Link></li>
                    }

                </ul>
                </div>
            
        </section>
    )
}

export default NewHeader
