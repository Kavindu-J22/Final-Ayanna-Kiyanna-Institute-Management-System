import React from 'react'
import { Link } from "react-router-dom";


function Rasavindana() {

    return (
        <div className="v-main-box">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <section className='v-section'>
                <div className='v-container'>
                <h1>✥ විචාර හා ගී රසවින්දන </h1>
                    <h4>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</h4>
                    <div className='v-cards'>
                        <div className='v-text-card'>
                        <Link className='v-link' to="/">
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>විචාර රසවින්දන</h3>
                            <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>   
                        </Link>
                        </div>
                        <div className='v-text-card'>
                        <Link className='v-link' to="/">
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>ගී රසවින්දන</h3>
                            <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>
                        </Link>
                        </div>
                        <div className='v-text-card'>
                        <Link className='v-link' to="/">
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>වෙනත්</h3>
                            <h5>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</h5>
                        </Link>
                        </div>
                    </div>
                </div>
            </section>
            </div>
    )
}

export default Rasavindana