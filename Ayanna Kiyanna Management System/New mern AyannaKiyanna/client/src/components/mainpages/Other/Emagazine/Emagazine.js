import React from 'react'
import "./emagazine.css"


function Emagazine() {

    return (
        <div className="Emagazine-main-box">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <section className='Emagazine-section'>
                <div className='Emagazine-container'>
                    <h2>✥ අයන්න කියන්න - E-magazine </h2>
                    <h4>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</h4>
                    <div className='Emagazine-cards'>
                        <div className='Emagazine-text-card'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>අලුත්ම සඟරාව බලන්න</h3>

                                <a href="https://drive.google.com/file/d/1mhKoTfOKHe0RcbWl2Ihdz67EEbb8WZCg/view?usp=share_link" class="Emagazine-button" type="submit">View</a>
                            
                        </div>
                        <div className='Emagazine-text-card'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>සියලුම සඟරා ලයිස්තුව<br/>බලන්න</h3>
                            
                                <a href="#" class="Emagazine-button" type="submit">View</a>
                            
                        </div>
                        
                    </div>
                </div>
            </section>
            </div>
    )
}

export default Emagazine