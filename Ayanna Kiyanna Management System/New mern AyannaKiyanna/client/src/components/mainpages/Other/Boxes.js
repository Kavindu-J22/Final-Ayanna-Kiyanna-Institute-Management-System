import React from 'react'
import './boxes.css'
import { Link } from "react-router-dom";


function Boxes() {

    return (
        <div className="main-box">
            <section className='B-section'>
                <div className='B-container'>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <div className='newthinkMenu'><Link to="/Header/NewHeader"><i class="fa-solid fa-bars"></i></Link></div>
                <h1>- අපගේ සේවාවන් -</h1>
                    <h2>✥ විෂය සමගාමි ✥</h2>
                    <div className='B-cards'>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>ව්‍යාකරණ</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. </p>
                            <Link to="/boxes/viyabox">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>  
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>සාහිත්‍ය</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/litbox">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>අක්ෂර මාලාව</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/AksharaMalawa">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='B-section'>
                <div className='B-container'>
                    <h2>✥ පරීක්ෂණාත්මක ✥</h2>
                    <div className='B-cards'>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Paper Bank</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/Paperbank">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Online Exams</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/OnlineExams">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Quick Tests</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/Qtgrade">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='B-section'>
                <div className='B-container'>
                    <h2>✥ වැදගත් විශේෂාංග ✥</h2>
                    <div className='B-cards'>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>අයන්න කියන්න<br/>E-magazine</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/Emagazine">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>විචාර හා ගී<br/>රසවින්දන</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/Rasavindana">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>විෂය නිර්දේශ සහ ගුරු අත් පොත්</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/TeacherBook">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='B-section' id='OurAcadaminDiv'>
                <div className='B-container'>
                    <h2>✥ Our Academic information ✥</h2>
                    <div className='B-cards'>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>අයන්න කියන්න<br/>Class Details</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/ClassDetails">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Our Students<br/>Colours</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/StudentColors">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Photo<br/>bucket</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/PhotoBucket">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='B-section'>
                <div className='B-container'>
                    <h2>✥ වෙනත් විශේෂාංග ✥</h2>
                    <div className='B-cards'>
                        <span></span>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>වීඩියෝ පාඩම්</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/VideoLessons">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Paper Structures</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/PaperStructures">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Others</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/SpeOthers">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='B-section'>
                <div className='B-container'>
                    <h2>✥ ඔබගේ ශ්‍රේණිය තෝරන්න ✥</h2>
                    <div className='B-cards'>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>9 ශ්‍රේණිය</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/MainGradeNine">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>10 ශ්‍රේණිය</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/MainGradeTen">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>11 ශ්‍රේණිය</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/MainGradeEleven">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>A/L</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/MainGradeAL">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>සිංහල සාහිත්‍යය<br/>(කාණ්ඩ විෂය)</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/MainGradeLit">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            
        </div>
    )
}

export default Boxes