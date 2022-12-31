import React from 'react'
import { Link } from "react-router-dom";
import "./qtgrade.css"


function Qtgrade() {

    return (
        <div className="Qtgrade-main-box">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <section className='Qtgrade-section'>
                <div className='Qtgrade-container'>
                    <h2>✥ Quick Tests </h2>
                    <h4> - ඔබගේ ශ්‍රේණිය තෝරන්න - </h4>
                    <div className='Qtgrade-cards'>
                        <div className='Qtgrade-text-card'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>9 ශ්‍රේණිය</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>

                                <Link to="/Qtgrade/Qtnine" class="Qtgrade-button" type="submit">View List</Link>
                            
                        </div>
                        <div className='Qtgrade-text-card'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>10 ශ්‍රේණිය</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            
                            <Link to="/Qtgrade/QtTen" class="Qtgrade-button" type="submit">View List</Link>
                            
                        </div>
                        <div className='Qtgrade-text-card'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>11 ශ්‍රේණිය</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            
                            <Link to="/Qtgrade/QtEleven" class="Qtgrade-button" type="submit">View List</Link>
                            
                        </div>
                        <div className='Qtgrade-text-card'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>A/L</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            
                            <Link to="/Qtgrade/QtAl" class="Qtgrade-button" type="submit">View List</Link>
                            
                        </div>
                    </div>
                </div>
            </section>
            </div>
    )
}

export default Qtgrade