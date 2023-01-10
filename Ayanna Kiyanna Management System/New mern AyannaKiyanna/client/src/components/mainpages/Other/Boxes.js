import React from 'react'
import './boxes.css'
import { Link } from "react-router-dom";


function Boxes() {

    return (
        <div className="main-box" id='serviceboxes'>
            <section className='B-section' id='vvvv001'>
                <div className='B-container' data-aos="zoom-in-up">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <h1>- අපගේ සේවාවන් -</h1>
                <div className='B-section-newupbtns'>
                    <a href='#vvvv001'><span></span><span></span><span></span><span></span>විෂය සමගාමි</a>
                    <a href='#vvvv002'><span></span><span></span><span></span><span></span>පරීක්ෂණාත්මක</a>
                    <a href='#vvvv003'><span></span><span></span><span></span><span></span>වැදගත් විශේෂාංග</a>
                    <a href='#vvvv004'><span></span><span></span><span></span><span></span>වෙනත් විශේෂාංග</a>
                    <a href='#vvvv005'><span></span><span></span><span></span><span></span>Institute Related information</a>
                    <a href='#vvvv006'><span></span><span></span><span></span><span></span>ශ්‍රේණියේ අනුව අධ්‍යයනය කරන්න</a>
                </div>
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

            <section className='B-section' id='vvvv002'>
                <div className='B-container' data-aos="zoom-in-up">
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
                            <h3>Speed Tests</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/Qtgrade">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='B-section' id='vvvv003'>
                <div className='B-container' data-aos="zoom-in-up">
                    <h2>✥ වැදගත් විශේෂාංග ✥</h2>
                    <div className='B-cards'>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>අයන්න කියන්න<br/>E-Magazine</h3>
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

            <section className='B-section' id='vvvv004'>
                <div className='B-container' data-aos="zoom-in-up">
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

            <section className='B-section' id='vvvv005'>
                <div className='B-container' data-aos="flip-up">
                    <h2>✥ Institute Related information ✥</h2>
                    <div className='B-cards'>
                        <div className='B-text-card'>
                            <span></span>
                            <div className='B-content'>
                            <i class="fa-solid fa-newspaper"></i>
                            <h3>Academic Information</h3>
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
                            <h3>Extracurricular Infomation</h3>
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
                            <h3>Photo<br/>Bucket</h3>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.</p>
                            <Link to="/boxes/PhotoBucket">
                                <a class="B-button" type="submit">See More</a>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='B-section' id='vvvv006'>
                <div className='B-container' data-aos="zoom-in-up">
                    <h2>✥ ශ්‍රේණියේ අනුව අධ්‍යයනය කරන්න ✥</h2>
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