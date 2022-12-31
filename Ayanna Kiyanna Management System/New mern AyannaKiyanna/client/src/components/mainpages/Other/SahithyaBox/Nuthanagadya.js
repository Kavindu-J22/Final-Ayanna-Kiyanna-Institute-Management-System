import React from 'react'
import { Link } from "react-router-dom";
import "./nuthanagadya.css"


function Nuthanagadya() {

    return (
        <div className="Nuthanagadya-main-box">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <section className='Nuthanagadya-section'>
                <div className='Nuthanagadya-container'>
                <h1>✥ නූතන ගද්‍ය </h1>
                    <h4>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</h4>
                    <div className='Nuthanagadya-cards'>
                        <div className='Nuthanagadya-text-card'>
                        <Link className='Nuthanagadya-link' to="#">
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>කෙටිකතා</h3>
                            <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                        </Link>
                        </div>
                        <div className='Nuthanagadya-text-card'>
                        <Link className='Nuthanagadya-link' to="#">
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>නවකතා</h3>
                            <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>
                        </Link>
                        </div>
                    </div>
                </div>
            </section>
            </div>
    )
}

export default Nuthanagadya