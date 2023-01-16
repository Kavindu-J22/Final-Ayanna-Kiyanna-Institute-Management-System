import React, { useState } from 'react'
import './newSinhalaHodiya.css'
import { Link } from "react-router-dom";
import Staklogo from '../../../assets/images/AKlogo.png'
import backbtnmy from '../../../assets/images/B.png'
import VrnaLet from '../../../assets/images/VranaLet.png'

function NewSinhalaHodiya() {

    // swara letters

    const [showA, setShowA] = useState(false);
    const [showAa, setShowAa] = useState(false);
    const [showAe, setShowAe] = useState(false);
    const [showAee, setShowAee] = useState(false);
    const [showE, setShowE] = useState(false);
    const [showEe, setShowEe] = useState(false);
    const [showU, setShowU] = useState(false);
    const [showUu, setShowUu] = useState(false);
    const [showEru, setShowEru] = useState(false);
    const [showEruu, setShowEruu] = useState(false);
    const [showElu, setShowElu] = useState(false);
    const [showEluu, setShowEluu] = useState(false);
    const [showAea, setShowAea] = useState(false);
    const [showAeae, setShowAeae] = useState(false);
    const [showAeaei, setShowAeaei] = useState(false);
    const [showO, setShowO] = useState(false);
    const [showOo, setShowOo] = useState(false);
    const [showOu, setShowOu] = useState(false);

    //vinjana Lettes

    const [showAn,setShowAn] = useState(false);
    const [showAh,setShowAh] = useState(false);

    const [showKa,setShowKa] = useState(false);
    const [showKha,setShowKha] = useState(false);
    const [showGa,setShowGa] = useState(false);
    const [showGha,setShowGha] = useState(false);
    const [showXha,setShowXha] = useState(false);
    const [showXgha,setShowXgha] = useState(false);

    const [showCa,setShowCa] = useState(false);
    const [showCha,setShowCha] = useState(false);
    const [showJa,setShowJa] = useState(false);
    const [showJha,setShowJha] = useState(false);
    const [showChaha,setShowChaha] = useState(false);
    const [showXJhaha,setShowXJhaha] = useState(false);

    const [showTa,setShowTa] = useState(false);
    const [showTtha,setShowTtha] = useState(false);
    const [showDa,setShowDa] = useState(false);
    const [showDdha,setShowDdha] = useState(false);
    const [showMna,setShowMna] = useState(false);
    const [showMdhaha,setShowMdhaha] = useState(false);

    const [showTha,setShowTha] = useState(false);
    const [showThha,setShowThha] = useState(false);
    const [showTDa,setShowTDa] = useState(false);
    const [showTDdha,setShowTDdha] = useState(false);
    const [showNa,setShowNa] = useState(false);
    const [showdhaha,setShowdhaha] = useState(false);

    const [showPa,setShowPa] = useState(false);
    const [showPha,setShowPha] = useState(false);
    const [showBa,setShowBa] = useState(false);
    const [showBha,setShowBha] = useState(false);
    const [showMa,setShowMa] = useState(false);
    const [showBhaha,setShowBhaha] = useState(false);

    const [showYa,setShowYa] = useState(false);
    const [showRa,setShowRa] = useState(false);
    const [showLa,setShowLa] = useState(false);
    const [showWa,setShowWa] = useState(false);
    const [showSha,setShowSha] = useState(false);
    const [showSsha,setShowSsha] = useState(false);
    const [showSa,setShowSa] = useState(false);
    const [showha,setShowha] = useState(false);
    const [showLLa,setShowLLa] = useState(false);
    const [showFa,setShowFa] = useState(false);

    const [showSwara,setShowSwara] = useState(false);
    const [showViyan,setShowViyan] = useState(false);
    const [showVargak,setShowVargak] = useState(false);

    const [showKantaja,setShowKantaja] = useState(false);
    const [showThaluja,setShowThaluja] = useState(false);
    const [showMurdaja,setShowMurdaja] = useState(false);
    const [showDanthaja,setShowDanthaja] = useState(false);
    const [showOshtaja,setShowOshtaja] = useState(false);

    const [showLetNotInc,setShowLetNotInc] = useState(false);
    const [showCatNotInc,setShowCatNotInc] = useState(false);

    const [LetterBoxActive,setLetterBoxActive] = useState("Fristbox");

  return (
    <div className='NuthanahodiyaMain'>
        <div className='AkstableLogo'><Link to="/"><img src={Staklogo}></img></Link></div>
            <div className='MainBackbtnmy' onClick={() => window.history.back()}><img src={backbtnmy}></img></div>
        <div className='NuthanahodiyaMain-MAinTitelbox'>
            <h1>❂ නූතන සිංහල වර්ණ මාලාව ❂</h1>
            <h2>- Smart Sinhala Alphabet -</h2>
        </div>
        <div className='mainhodibox'>

          <div>

          {LetterBoxActive === "Fristbox" && <div className='sinhalaAkurumainbox' data-aos="fadeInUp">
               <div className='whatisbox'>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>
                <div className='swaraAkuruMaincontainer'>

                <div className='vargaLableBox'>
                    <h2 onClick={()=>setShowSwara(!showSwara)}>ස්වර</h2>
                </div>
                    <div className='MainSwaraya'>
                        <div className='emtySpaceSwarabox'></div>
                    <div className='swaraAkuruMain'>

                        <div className='AkuruColoms'>

                            <div className='akuruAK' id='swaraAkurahodi'>
                                <div className='akurucontent' onClick={()=>setShowA(!showA)}>
                                    <p>01</p>
                                    <h5 id='hreasSwara'>අ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowAa(!showAa)}>
                                    <p>02</p>
                                    <h5 id='deergaSware'>ආ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowAe(!showAe)}>
                                    <p>03</p>
                                    <h5 id='hreasSwara'>ඇ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowAee(!showAea)}>
                                    <p>04</p>
                                    <h5 id='deergaSware'>ඈ</h5>
                                </div> 
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowE(!showE)}>
                                    <p>05</p>
                                    <h5 id='hreasSwara'>ඉ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowEe(!showEe)}>
                                    <p>06</p>
                                    <h5 id='deergaSware'>ඊ</h5>
                                </div>
                            </div>

                        </div>
                         <div className='AkuruColoms'>

                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowU(!showU)}>
                                    <p>07</p>
                                    <h5 id='hreasSwara'>උ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowUu(!showUu)}>
                                    <p>08</p>
                                    <h5 id='deergaSware'>ඌ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowEru(!showEru)}>
                                    <p>09</p>
                                    <h5 id='hreasSwara'>ඍ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowEruu(!showEruu)}>
                                    <p>10</p>
                                    <h5 id='deergaSware'>ඎ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowElu(!showElu)}>
                                    <p>11</p>
                                    <h5 id='hreasSwara'>ඏ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowEluu(!showEluu)}>
                                    <p>12</p>
                                    <h5 id='deergaSware'>ඐ</h5>
                                </div>
                            </div>

                        </div>
                         <div className='AkuruColoms'>

                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowAea(!showAea)}>
                                    <p>13</p>
                                    <h5 id='hreasSwara'>එ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowAeae(!showAeae)}>
                                    <p>14</p>
                                    <h5 id='deergaSware'>ඒ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowAeaei(!showAeaei)}>
                                    <p>15</p>
                                    <h5 id='deergaSware'>ඓ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowO(!showO)}>
                                    <p>16</p>
                                    <h5 id='hreasSwara'>ඔ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowOo(!showOo)}>
                                    <p>17</p>
                                    <h5 id='deergaSware'>ඕ</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='swaraAkurahodi'>
                            <div className='akurucontent' onClick={()=>setShowOu(!showOu)}>
                                    <p>18</p>
                                    <h5 id='deergaSware'>ඖ</h5>
                                </div>
                            </div>

                        </div>
                        

                    </div>
                    </div>
                </div>

                <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>

                            <div className='akuruAK' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowAn(!showAn)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='akuruAK' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowAh(!showAh)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowKa(!showKa)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowKha(!showKha)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowGa(!showGa)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowGha(!showGha)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowXha(!showXha)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowCa(!showCa)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowCha(!showCha)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowJa(!showJa)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowJha(!showJha)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowChaha(!showChaha)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowTa(!showTa)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowTtha(!showTtha)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowDa(!showDa)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowDdha(!showDdha)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMna(!showMna)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowTha(!showTha)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowThha(!showThha)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowTDa(!showTDa)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowTDdha(!showTDdha)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowNa(!showNa)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowPa(!showPa)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowPha(!showPha)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowBa(!showBa)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowBha(!showBha)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMa(!showMa)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>

                                <div className='akuruAK' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowXgha(!showXgha)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowXJhaha(!showXJhaha)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowMdhaha(!showMdhaha)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowdhaha(!showdhaha)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowBhaha(!showBhaha)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowYa(!showYa)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowRa(!showRa)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLa(!showLa)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowWa(!showWa)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSha(!showSha)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSsha(!showSsha)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSa(!showSa)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='akuruAK' id='yatamaAkuru' onClick={()=>setShowha(!showha)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLLa(!showLLa)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowFa(!showFa)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>
                    
               </div>
               }

               {LetterBoxActive === "hraswaswaraMainBox" && <div className='hraswaswaraMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>
                    <div className='whatisbox'>
                         <h1>❐ හ්‍රස්ව ස්වර ❐</h1>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>
               <div className='swaraAkuruMaincontainer'>

                         <div className='vargaLableBox'>
                         <h2 onClick={()=>setShowSwara(!showSwara)}>ස්වර</h2>
                         </div>
                         <div className='MainSwaraya'>
                              
                         <div className='swaraAkuruMain'>

                              <div className='AkuruColoms'>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                        <div className='akurucontent' onClick={()=>setShowA(!showA)}>
                                             <p>01</p>
                                             <h5 id='hreasSwara'>අ</h5>
                                        </div>
                                   </div>
                                   </div>

                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>02</p>
                                             <h5 id='deergaSware'>ආ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowAe(!showAe)}>
                                             <p>03</p>
                                             <h5 id='hreasSwara'>ඇ</h5>
                                        </div>
                                   </div></div>

                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>04</p>
                                             <h5 id='deergaSware'>ඈ</h5>
                                        </div> 
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowE(!showE)}>
                                             <p>05</p>
                                             <h5 id='hreasSwara'>ඉ</h5>
                                        </div>
                                   </div></div>

                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>06</p>
                                             <h5 id='deergaSware'>ඊ</h5>
                                        </div>
                                   </div>

                              </div>
                              <div className='AkuruColoms'>

                              <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowU(!showU)}>
                                             <p>07</p>
                                             <h5 id='hreasSwara'>උ</h5>
                                        </div>
                                   </div></div>

                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>08</p>
                                             <h5 id='deergaSware'>ඌ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowEru(!showEru)}>
                                             <p>09</p>
                                             <h5 id='hreasSwara'>ඍ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>10</p>
                                             <h5 id='deergaSware'>ඎ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowElu(!showElu)}>
                                             <p>11</p>
                                             <h5 id='hreasSwara'>ඏ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>12</p>
                                             <h5 id='deergaSware'>ඐ</h5>
                                        </div>
                                   </div>

                              </div>
                              <div className='AkuruColoms'>

                              <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowAea(!showAea)}>
                                             <p>13</p>
                                             <h5 id='hreasSwara'>එ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>14</p>
                                             <h5 id='deergaSware'>ඒ</h5>
                                        </div>
                                   </div>
                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>15</p>
                                             <h5 id='deergaSware'>ඓ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowO(!showO)}>
                                             <p>16</p>
                                             <h5 id='hreasSwara'>ඔ</h5>
                                        </div>
                                   </div></div>

                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>17</p>
                                             <h5 id='deergaSware'>ඕ</h5>
                                        </div>
                                   </div>
                                   <div className='akuruAK dee' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>18</p>
                                             <h5 id='deergaSware'>ඖ</h5>
                                        </div>
                                   </div>

                              </div>
                              

                         </div>
                         </div>
                         </div>
               </div>

               }

               {LetterBoxActive === "DeergswaswaraMainBox" && <div className='DeergswaswaraMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>
                    <div className='whatisbox'>
                         <h1>❐ දීර්ඝ ස්වර ❐</h1>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>
               <div className='swaraAkuruMaincontainer'>

                         <div className='vargaLableBox'>
                         <h2 onClick={()=>setShowSwara(!showSwara)}>ස්වර</h2>
                         </div>
                         <div className='MainSwaraya'>
                              
                         <div className='swaraAkuruMain'>

                              <div className='AkuruColoms'>

                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                        <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>01</p>
                                             <h5 id='hreasSwara'>අ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowAa(!showAa)}>
                                             <p>02</p>
                                             <h5 id='deergaSware'>ආ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>03</p>
                                             <h5 id='hreasSwara'>ඇ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowAee(!showAee)}>
                                             <p>04</p>
                                             <h5 id='deergaSware'>ඈ</h5>
                                        </div> 
                                   </div></div>
                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>05</p>
                                             <h5 id='hreasSwara'>ඉ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowEe(!showEe)}>
                                             <p>06</p>
                                             <h5 id='deergaSware'>ඊ</h5>
                                        </div>
                                   </div></div>

                              </div>
                              <div className='AkuruColoms'>

                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>07</p>
                                             <h5 id='hreasSwara'>උ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowUu(!showUu)}>
                                             <p>08</p>
                                             <h5 id='deergaSware'>ඌ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>09</p>
                                             <h5 id='hreasSwara'>ඍ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowEruu(!showEruu)}>
                                             <p>10</p>
                                             <h5 id='deergaSware'>ඎ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>11</p>
                                             <h5 id='hreasSwara'>ඏ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowEluu(!showEluu)}>
                                             <p>12</p>
                                             <h5 id='deergaSware'>ඐ</h5>
                                        </div>
                                   </div></div>

                              </div>
                              <div className='AkuruColoms'>

                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>13</p>
                                             <h5 id='hreasSwara'>එ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowAeae(!showAeae)}>
                                             <p>14</p>
                                             <h5 id='deergaSware'>ඒ</h5>
                                        </div>
                                   </div></div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowAeaei(!showAeaei)}>
                                             <p>15</p>
                                             <h5 id='deergaSware'>ඓ</h5>
                                        </div>
                                   </div></div>
                                   <div className='akuruAK hras' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                             <p>16</p>
                                             <h5 id='hreasSwara'>ඔ</h5>
                                        </div>
                                   </div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowOo(!showOo)}>
                                             <p>17</p>
                                             <h5 id='deergaSware'>ඕ</h5>
                                        </div>
                                   </div></div>

                                   <div className='PointedLeterAnimeBox'>
                                   <div className='akuruAK' id='swaraAkurahodi'>
                                   <div className='akurucontent' onClick={()=>setShowOu(!showOu)}>
                                             <p>18</p>
                                             <h5 id='deergaSware'>ඖ</h5>
                                        </div>
                                   </div></div>

                              </div>
                              

                         </div>
                         </div>
                         </div>
               </div>

               }

               {LetterBoxActive === "AlpapranaDiscMainBox" && <div className='AlpapranaDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ අල්පප්‍රාණ ❐</h1>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>

                            <div className='akuruAK noalp' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='akuruAK noalp' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                            <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowKa(!showKa)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div></div>

                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowGa(!showGa)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                                   <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowCa(!showCa)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowJa(!showJa)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                                   <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowTa(!showTa)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div></div>
                                    
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowDa(!showDa)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div></div>

                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                               <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowTha(!showTha)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowTDa(!showTDa)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div></div>

                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                              <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowPa(!showPa)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div></div>

                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowBa(!showBa)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div></div>

                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noalp' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMa(!showMa)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>

                                <div className='akuruAK noalp' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noalp' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noalp' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noalp' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noalp' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                            <div className='akuruAK noalp'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK noalp' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp' id='yatamaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noalp' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>

               </div>
               }

               {LetterBoxActive === "MahappranaDiscMainBox" && <div className='MahappranaDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ මහප්‍රාණ ❐</h1>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>

                            <div className='akuruAK noMahap' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='akuruAK noMahap' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noMahap' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowKha(!showKha)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowGha(!showGha)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>

                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowCha(!showCha)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowJha(!showJha)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowTtha(!showTtha)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowDdha(!showDdha)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowThha(!showThha)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowTDdha(!showTDdha)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowPha(!showPha)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowBha(!showBha)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div></div>
                                    <div className='akuruAK noMahap' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>

                                <div className='akuruAK noMahap' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noMahap' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noMahap' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noMahap' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noMahap' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                            <div className='akuruAK noMahap'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK noMahap' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap' id='yatamaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noMahap' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>

               </div>
               }

               {LetterBoxActive === "VargaAnuDiscMainBox" && <div className='VargaAnuDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ වර්ගාන්තාක්ෂර ❐</h1>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>
                         <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowAn(!showAn)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div></div>
                            
                            <div className='akuruAK Novran' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK Novran' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowXha(!showXha)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowChaha(!showChaha)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMna(!showMna)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowNa(!showNa)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK Novran' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMa(!showMa)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div></div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>

                                <div className='akuruAK Novran' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK Novran' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK Novran' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK Novran' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK Novran' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                            <div className='akuruAK Novran'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK Novran' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran' id='yatamaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK Novran' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>

               </div>
               }

               {LetterBoxActive === "SanjakaDiscMainBox" && <div className='SanjakaDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ සඤ්ඤකාක්ෂර ❐</h1>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>

                            <div className='akuruAK noSanjaka' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='akuruAK noSanjaka' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara' id='vrdisforTitle'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noSanjaka' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>
                              <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowXgha(!showXgha)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowXJhaha(!showXJhaha)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowMdhaha(!showMdhaha)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowdhaha(!showdhaha)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowBhaha(!showBhaha)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div></div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                            <div className='akuruAK noSanjaka'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK noSanjaka' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka' id='yatamaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noSanjaka' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>

               </div>
               }

               {LetterBoxActive === "AnthahsDiscMainBox" && <div className='AnthahsDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ අන්තඃස්ථාක්ෂර ❐</h1>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>

                            <div className='akuruAK noMahap' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='akuruAK noMahap' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowCatNotInc(!showCatNotInc)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noAnthahstha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>

                                <div className='akuruAK noAnthahstha' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noAnthahstha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noAnthahstha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noAnthahstha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noAnthahstha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>
                         <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowYa(!showYa)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowRa(!showRa)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLa(!showLa)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowWa(!showWa)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div></div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK noAnthahstha' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noAnthahstha' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noAnthahstha' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noAnthahstha' id='yatamaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLLa(!showLLa)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div></div>
                            <div className='akuruAK noAnthahstha' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>

               </div>
               }

               {LetterBoxActive === "UshmakDiscMainBox" && <div className='UshmakDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ ඌෂ්මාක්ෂර ❐</h1>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>

                            <div className='akuruAK noush' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowAh(!showAh)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div></div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowCatNotInc(!showCatNotInc)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowCatNotInc(!showCatNotInc)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noush' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK noush' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>

                                <div className='akuruAK noush' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noush' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noush' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noush' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK noush' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                            <div className='akuruAK noush'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noush'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noush'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            <div className='akuruAK noush'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>
                        <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSha(!showSha)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSsha(!showSsha)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSa(!showSa)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru' onClick={()=>setShowha(!showha)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div></div>
                            <div className='akuruAK noush'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowFa(!showFa)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div></div>

                        </div>
                    </div>
                </div>

               </div>
               }

               {LetterBoxActive === "GoshaDiscMainBox" && <div className='GoshaDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ ඝෝෂාක්ෂර ❐</h1>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>
                         <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='anahboxAkuru'>
                            <div className='akurucontent' onClick={()=>setShowAn(!showAn)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div></div>
                            <div className='akuruAK agoagoo' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK agoagoo' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowGa(!showGa)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowGha(!showGha)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowXha(!showXha)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowJa(!showJa)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowJha(!showJha)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowChaha(!showChaha)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowDa(!showDa)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowDdha(!showDdha)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMna(!showMna)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowTDa(!showTDa)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowTDdha(!showTDdha)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowNa(!showNa)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div></div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK agoagoo' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowBa(!showBa)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowBha(!showBha)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowMa(!showMa)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div></div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>
                        <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowXgha(!showXgha)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowXJhaha(!showXJhaha)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowMdhaha(!showMdhaha)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowdhaha(!showdhaha)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div></div>
                                <div className='PointedLeterAnimeBox'>
                                <div className='akuruAK' id='SanjakaAkuru' onClick={()=>setShowBhaha(!showBhaha)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div></div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>
                        <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowYa(!showYa)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowRa(!showRa)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLa(!showLa)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowWa(!showWa)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div></div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK agoagoo' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK agoagoo' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK agoagoo' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru' onClick={()=>setShowha(!showha)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLLa(!showLLa)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div></div>
                            <div className='akuruAK agoagoo' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>

               </div>
               }

            {LetterBoxActive === "AGoshaDiscMainBox" && <div className='AGoshaDiscMainBox' data-aos="zoom-in-up">
               <div onClick={()=>setLetterBoxActive("Fristbox")}>
                        <div className='backtoWarnalabel'>
                            <div className='backToWarnamala'>
                                <i class="fa-solid fa-backward"></i>
                                <img src={VrnaLet}></img>
                            </div>
                         </div>
                         </div>

               <div className='whatisbox'>
                         <h1>❐ අඝෝෂාක්ෂර ❐</h1>
                         <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය. නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>
                    </div>

               <div className='viyanAkuruMainContainer'>
                    <div className='vargaLableBox' id='vargaLableBoxviya'>
                        <h2 onClick={()=>setShowViyan(!showViyan)}>ව්‍යංජන</h2>
                    </div>
                    <div className='viyanAkuruMain'>
                         <div className='AkuruColoms' id='anahbox'>
                         
                            <div className='akuruAK notAgosha' id='anahboxAkuru'>
                            <div className='akurucontent notAgosha' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                    <p>19</p>
                                    <h5 id='anLetter'>අං</h5>
                                </div>
                            </div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='anahboxAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowAh(!showAh)}>
                                    <p>20</p>
                                    <h5 id='ahLetter'>අඃ</h5>
                                </div></div>
                        </div>
                    </div>

                    <div className='viyaakuruDividaPink'>

                        <div className='pinkbox'>
                        <div className='Varganthaksaradevidebox'>

                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowKantaja(!showKantaja)}>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowThaluja(!showThaluja)}>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowMurdaja(!showMurdaja)}>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowDanthaja(!showDanthaja)}>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv' onClick={()=>setShowOshtaja(!showOshtaja)}>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2 onClick={()=>setShowVargak(!showVargak)}>වර්ගාක්ෂර</h2>
                            </div>

                            <div>
                            <div className='AkuruColoms'>
                            <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                        <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowKa(!showKa)}>
                                            <p>21</p>
                                            <h5>ක</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowKha(!showKha)}>
                                            <p>22</p>
                                            <h5>ඛ</h5>
                                        </div>
                                    </div></div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>23</p>
                                            <h5>ග</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>24</p>
                                            <h5>ඝ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>25</p>
                                            <h5>ඞ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                            <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowCa(!showCa)}>
                                            <p>27</p>
                                            <h5>ච</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowCha(!showCha)}>
                                            <p>28</p>
                                            <h5>ඡ</h5>
                                        </div>
                                    </div></div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>29</p>
                                            <h5>ජ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>30</p>
                                            <h5>ඣ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>31</p>
                                            <h5>ඤ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                            <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowTa(!showTa)}>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowTtha(!showTtha)}>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div></div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                            <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowTha(!showTha)}>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowThha(!showThha)}>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div></div>
                                   
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>
                            <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana' onClick={()=>setShowPa(!showPa)}>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div></div>
                                    <div className='PointedLeterAnimeBox'>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana' onClick={()=>setShowPha(!showPha)}>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div></div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    
                                    <div className='akuruAK notAgosha' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>49</p>
                                            <h5>ම</h5>
                                        </div>
                                    </div>
                        
                            </div>
                            </div>
                        </div>

                        <div className='AkuruColomsSanjaka'>
                        
                                <div className='akuruAK notAgosha' id='SanjakaAkuru'>
                                <div className='akurucontent' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>26</p>
                                            <h5>ඟ</h5>
                                        </div>
                                </div>
                                
                                <div className='akuruAK notAgosha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>32</p>
                                            <h5>ඦ</h5>
                                        </div>
                                </div>
                                
                                <div className='akuruAK notAgosha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                
                                <div className='akuruAK notAgosha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                
                                <div className='akuruAK notAgosha' id='SanjakaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>
                        
                            <div className='akuruAK notAgosha'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            
                            <div className='akuruAK notAgosha'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            
                            <div className='akuruAK notAgosha'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            
                            <div className='akuruAK notAgosha'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>
                        <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSha(!showSha)}>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSsha(!showSsha)}>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div></div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowSa(!showSa)}>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div></div>
                            
                            <div className='akuruAK notAgosha' id='yatamaAkuru' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            
                            <div className='akuruAK notAgosha'>
                            <div className='akurucontent' id='anthahLetters' onClick={()=>setShowLetNotInc(!showLetNotInc)}>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='PointedLeterAnimeBox'>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark' onClick={()=>setShowFa(!showFa)}>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div></div>

                        </div>
                    </div>
                </div>

               </div>
               }


               </div>
                
                    {/* Discriptiop buttons  */}

                    <div className='sinhalaAkuruDiscbox'data-aos="fadeInUp">
                         
                         <div className='swarabtnsboxnn'>
                            <div onClick={()=>setLetterBoxActive("hraswaswaraMainBox")} className="listboxes">
                                <div className='cbforborder hColorbox'><span></span></div><div><h5>හ්‍රස්ව ස්වර</h5>
                                <p>(ලුහ ස්වර, ලඝු ස්වර) 08</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("DeergswaswaraMainBox")} className="listboxes">
                                <div className='cbforborder DColorbox'><span></span></div><div><h5>දීර්ඝ ස්වර</h5>
                                <p>(ගුරු ස්වර දික් ස්වර) 10</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("DeergswaswaraMainBox")} className="listboxes">
                                <div className='cbforborder SandyaColorbox'><i class="fa-sharp fa-solid fa-pen-nib"></i></div><div><h5>සන්ධ්‍යක්ෂර</h5>
                                <p>(ගුරු ස්වර දික් ස්වර) 10</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("DeergswaswaraMainBox")} className="listboxes">
                                <div className='cbforborder NamyaColorbox'><i class="fa-sharp fa-solid fa-pen-nib"></i></div><div><h5>නම්‍ය ස්වර</h5>
                                <p>(ගුරු ස්වර දික් ස්වර) 10</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("DeergswaswaraMainBox")} className="listboxes">
                                <div className='cbforborder AnamyaColorbox'><i class="fa-sharp fa-solid fa-pen-nib"></i></div><div><h5>අනම්‍ය ස්වර</h5>
                                <p>(ගුරු ස්වර දික් ස්වර) 10</p></div>
                            </div>
                         </div>

                         <div className='viyanjanabtnsboxnn'>
                            <div onClick={()=>setLetterBoxActive("AlpapranaDiscMainBox")} className="listboxes">
                                <div className='cbforborder AlColorbox'><span></span></div><div><h5>අල්පප්‍රාණ</h5>
                                <p>(ශිථිලාක්ෂර) 10</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("MahappranaDiscMainBox")} className="listboxes">
                                <div className='cbforborder MhColorbox'><span></span></div><div><h5>මහප්‍රාණ</h5>
                                <p>(ධනිතාක්ෂර) 10</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("VargaAnuDiscMainBox")} className="listboxes">
                                <div className='cbforborder VrhColorbox'><span></span></div><div><h5>වර්ගාන්තාක්ෂර</h5>
                                <p>(අනුනාසික්‍ය) 05 <span id='otherNum'>(06)</span></p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("SanjakaDiscMainBox")} className="listboxes">
                                <div className='cbforborder SjColorbox'><span></span></div><div><h5>සඤ්ඤකාක්ෂර</h5>
                                <p>(අර්ධනාසික්‍ය) 05</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("AnthahsDiscMainBox")} className="listboxes">
                                <div className='cbforborder AthhColorbox'><span></span></div><div><h5>අන්තඃස්ථාක්ෂර</h5>
                                <p>(අර්ධස්වර) 04 <span id='otherNum'>(05)</span></p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("UshmakDiscMainBox")} className="listboxes">
                                <div className='cbforborder UshColorbox'><span></span></div><div><h5>ඌෂ්මාක්ෂර</h5>
                                <p>(ඝර්ෂ අක්ෂර) 06</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("AGoshaDiscMainBox")} className="listboxes">
                                <div className='cbforborder AGooColorbox'></div><div><h5>අඝෝෂාක්ෂර</h5>
                                <p>(අඝෝෂ) 15</p></div>
                            </div>
                            <div onClick={()=>setLetterBoxActive("GoshaDiscMainBox")} className="listboxes">
                                <div className='cbforborder GooColorbox'></div><div><h5>ඝෝෂාක්ෂර</h5>
                                <p>(ඝෝෂ) 45</p></div>
                            </div>
                            
                         </div>
                    </div>


          </div>

        <div>

         {/* end of hodiya letters cording */}

        {
            showA && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                        <div className='MyCloseBtn'><a onClick={()=>setShowA(!showA)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>අ</h1>
                            <p id='titleP'>'අ' යන්න. (කණ්ඨජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන මුල් ම අකුරයි. එය ස්වරයකි. එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ. එය කණ්ඨජ අක්ෂරයකි. ඝෝෂයකි. එය නම්‍ය ස්වරයකි (අ ❭ ඇ)*. අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 01 වේ. මෙම ස්වරය ව්‍යඤ්ජන අකුරකට ආරෑඪ කළ විට පිල්ලක් නොයෙදේ. (ක් + අ = ක) *නම්‍ය ස්වර බලන්න.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showAa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAa(!showAa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ආ</h1>
                            <p id='titleP'>'ආ' යන්න. (කණ්ඨජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන දෙවන අකුරයි. එය  ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. එය කණ්ඨජ අක්ෂරයකි. ඝෝෂයකි. අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 02 වේ. ආ යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල ඇලපිල්ල ය. (ක් + ආ = කා)</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showAe && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAe(!showAe)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඇ</h1>
                            <p id='titleP'>'ඇ' යන්න. (කණ්ඨජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <p>සිංහල අක්ෂර මාලාවට අනන්‍ය අක්ෂරයකි. පෙරදිග භාෂා හෝඩිවල මෙය දක්නට ලැබෙන්නේ සිංහල අක්ෂර මාලාවේ පමණි. අක්ෂර මාලාවේ අපට හමුවන තෙවන අකුරයි. එය ස්වරයකි. එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ. එය කණ්ඨජ අක්ෂරයකි.(මුලින් මෙය කණ්ඨතාලුජ ලෙස නම් කර තිබුණි.) ඝෝෂයකි. අනම්‍ය ස්වරයකි.(ඇ ❭ ඇ)* අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 03 වේ. ඇ යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල ඇදයයි. කෙටි ඇද පිල්ල, ඇක්ම, ඇකාරාංශය යන නම්වලින් ද එය හැඳින්වේ. (ක් + ඇ = කැ) *අනම්‍ය ස්වර බලන්න</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showAee && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAee(!showAee)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඈ</h1>
                            <p id='titleP'>'ඈ' යන්න. (කණ්ඨජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <p>සිංහල අක්ෂර මාලාවට අනන්‍ය අක්ෂරයකි. පෙරදිග භාෂා හෝඩිවල මෙය දක්නට ලැබෙන්නේ සිංහල අක්ෂර මාලාවේ පමණි. අක්ෂර මාලාවේ අපට හමුවන සිව්වන අකුරයි. එය  ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. එය කණ්ඨජ අක්ෂරයකි. ඝෝෂයකි. අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 04 වේ. ඈ යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල දීර්ඝ ඇදයයි. (ක් + ඈ = කෑ)</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showE && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowE(!showE)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඉ</h1>
                            <p id='titleP'>'ඉ' යන්න. (තාලුජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන පස්වන අකුරයි. එය ස්වරයකි. එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ. එය තාලුජ අක්ෂරයකි. ඝෝෂයකි. අනම්‍ය ස්වරයකි.(ඉ ❭ ඉ)*අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 05 වේ. ඉ යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල ඉස්පිල්ලයි.  (ක් + ඉ = කි) *අනම්‍ය ස්වර බලන්න</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showEe && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowEe(!showEe)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඊ</h1>
                            <p id='titleP'>'ඊ' යන්න. (තාලුජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන හයවැනි අකුරයි. එය  ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. එය තාලුජ අක්ෂරයකි. ඝෝෂයකි. අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 06 වේ. 'ඊ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල දීර්ඝ ඉස්පිල්ලයි. (ක් + ඊ = කී)</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showU && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowU(!showU)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>උ</h1>
                            <p id='titleP'>'උ' යන්න. (ඕෂ්ඨජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන සත්වැනි අකුරයි. එය ස්වරයකි. එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ. එය ඕෂ්ඨජ අක්ෂරයකි. ඝෝෂයකි. නම්‍ය ස්වරයකි. අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 07 වේ. උ යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිලි කිහිපයකි.</p>
                            

                                   <ul>
                                        <li>ක් + උ = කු - කෙටි වක් පාපිල්ල</li>
                                        <li>ප් + උ = පු - කෙටි කොන් පාපිල්ල</li>
                                        <li>ර් + උ = රු - කෙටි ඇද පාපිල්ල</li>
                                   </ul>

                                   <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showUu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowUu(!showUu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඌ</h1>
                            <p id='titleP'>'ඌ' යන්න. (ඕෂ්ඨජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන අටවැනි අකුරයි. එය ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. එය ඕෂ්ඨජ අක්ෂරයකි. ඝෝෂයකි. අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 08 වේ. ඌ යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිලි කිහිපයකි.</p>
                            

                                   <ul>
                                        <li>ක් + ඌ = කූ - දික් වක් පාපිල්ල</li>
                                        <li>ප් + ඌ = පු - දික් කොන් පාපිල්ල</li>
                                        <li>ර් + ඌ = රූ - දික් ඇද පාපිල්ල</li>
                                   </ul>

                                   <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showEru && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowEru(!showEru)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඍ</h1>
                            <p id='titleP'>'ඍ' යන්න. (මුර්ධජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන නවවැනි අකුරයි. එය මාතෘ භාෂාවන් ආශ්‍රයෙන් සිංහල හෝඩියට එක්වූ ස්වරයකි. එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ. එය මුර්ධජ අක්ෂරයකි. ඝෝෂයකි. අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 09 වේ. 'ඍ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල ගැටය සහිත ඇලපිල්ලයි.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showEruu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                        <div className='MyCloseBtn'><a onClick={()=>setShowEruu(!showEruu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඎ</h1>
                            <p id='titleP'>'ඎ' යන්න. (මුර්ධජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන දසවැනි අකුරයි. එය මාතෘ භාෂාවන් ආශ්‍රයෙන් සිංහල හෝඩියට එක්වූ ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. එය මුර්ධජ අක්ෂරයකි. ඝෝෂයකි. අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 10 වේ. 'ඎ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල ගැටය සහිත ඇලපිලි දෙකයි.</p>
                            <ul>
                                        <li>(ක් + ඎ = කෲ)</li>
                                   </ul>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showElu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowElu(!showElu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඏ</h1>
                            <p id='titleP'>'ඐ' යන්න. (දන්තජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන ඒකොළොස්වැනි අකුරයි. එය ස්වරයකි. එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ. එය දන්තජ අක්ෂරයකි. ඝෝෂයකි. මාතෘ භාෂාවන් ආශ්‍රයෙන් සිංහල භාෂාවට එක් වී ඇති මෙම ස්වරය, අක්ෂර මාලාවේ දක්නට ලැබෙන්නේ වුවද භාෂාවේ එකදු වචනයක හෝ නොයෙදේ. එබැවින් මහාචාර්ය ජේ.බී.දිසානායකයන් සිය සමකාලීන සිංහල හෝඩියේ දී  මෙම අක්ෂරය ඉවත් කර ඇත.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showEluu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowEluu(!showEluu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඐ</h1>
                            <p id='titleP'>'ඐ' යන්න. (දන්තජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන දොළොස්වැනි අකුරයි. එය ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. එය දන්තජ අක්ෂරයකි. ඝෝෂයකි. මාතෘ භාෂාවන් ආශ්‍රයෙන් සිංහල භාෂාවට එක් වී ඇති මෙම ස්වරය, අක්ෂර මාලාවේ දක්නට ලැබෙන්නේ වුවද භාෂාවේ එකදු වචනයක හෝ නොයෙදේ. එබැවින් මහාචාර්ය ජේ.බී.දිසානායකයන් සිය සමකාලීන සිංහල හෝඩියේ දී  මෙම අක්ෂරය ඉවත් කර ඇත.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showAea && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAea(!showAea)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>එ</h1>
                            <p id='titleP'>'එ' යන්න. (කණ්ඨතාලුජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන දහතුන්වැනි අකුරයි. එය ස්වරයකි. එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ. එය කණ්ඨතාලුජ අක්ෂරයකි හෙවත් ද්විජාක්ෂරයකි. ඝෝෂයකි. අනම්‍ය ස්වරයකි. (ඇ ❭ ඇ)* අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 13 වේ. 'එ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල කොම්ඹුවයි. (ක් + එ = කෙ)  *අනම්‍ය ස්වර බලන්න.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showAeae && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAeae(!showAeae)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඒ</h1>
                            <p id='titleP'>'ඒ' යන්න. (කණ්ඨතාලුජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන දාහතරවැනි අකුරයි. එය ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. එය කණ්ඨතාලුජ අක්ෂරයකි හෙවත් ද්විජාක්ෂරයකි. ඝෝෂයකි. අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 14 වේ. 'ඒ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිලි දෙකකි. එනම් කොම්ඹුව හා දීර්ඝත්ව සළකුණයි. (ක් + ඒ =කේ)</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showAeaei && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAeaei(!showAeaei)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඓ</h1>
                            <p id='titleP'>'ඓ' යන්න. (කණ්ඨතාලුජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන පහළොස්වැනි අකුරයි. එය ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. එය කණ්ඨතාලුජ අක්ෂරයකි හෙවත් ද්විජාක්ෂරයකි. ඝෝෂයකි. සංයුක්තාක්ෂරයකි. එසේම එය සන්ධ්‍යක්ෂර ගණයට ද අයත්වේ. අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 15 වේ. 'ඓ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිල්ල වන්නේ කොම්ඹු දෙකයි. (ක් + ඓ = කෛ)</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showO && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentHraswa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowO(!showO)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඔ</h1>
                            <p id='titleP'>'ඔ' යන්න. (කණ්ඨෞෂ්ඨජ ඝෝෂ හ්‍රස්ව ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන දහසය වැනි අකුරයි. එය ස්වරයකි. එයිනුදු හ්‍රස්ව ස්වර ගණයට අයත් වේ. එය කණ්ඨෞෂ්ඨජ අක්ෂරයකි හෙවත් ද්විජාක්ෂරයකි. ඝෝෂයකි. නම්‍ය ස්වරයකි. අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 16 වේ. 'ඔ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිලි දෙකකි. එනම් කෙම්ඹුව හා ඇලපිල්ලයි. (ක් + ඔ = කො)  (ො)</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showOo && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowOo(!showOo)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඕ</h1>
                            <p id='titleP'>'ඕ' යන්න. (කණ්ඨෞෂ්ඨජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන දාහත්වැනි අකුරයි. එය ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. එය කණ්ඨෞෂ්ඨජ අක්ෂරයකි හෙවත් ද්විජාක්ෂරයකි. ඝෝෂයකි. අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 17 වේ. 'ඕ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිලි දෙකකි. එනම් කොම්ඹුව හා දීර්ඝත්ව සළකුණ සහිත ඇලපිල්ලයි. (ක් + ඕ = කෝ)</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showOu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentDeerga'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowOu(!showOu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඖ</h1>
                            <p id='titleP'>'ඖ' යන්න. (කණ්ඨෞෂ්ඨජ ඝෝෂ දීර්ඝ ප්‍රාණාක්ෂර)</p>
                            <p>අක්ෂර මාලාවේ අපට හමුවන අවසාන ස්වරය හෙවත් දහඅට වන  අකුරයි. එය ස්වරයකි. එයිනුදු දීර්ඝ ස්වර ගණයට අයත් වේ. එය කණ්ඨෞෂ්ඨජ අක්ෂරයකි හෙවත් ද්විජාක්ෂරයකි. ඝෝෂයකි. සංයුක්තාක්ෂරයකි. එසේම එය සන්ධ්‍යක්ෂර ගණයට ද අයත්වේ. අකාරාදිය පිළිවෙළ අනුව එයට හිමි ස්ථානය අංක 18 වේ. 'ඖ' යන්න වෙනුවට ව්‍යඤ්ජන අකුරකට යෙදෙන පිලි වන්නේ කොම්ඹුව හා ගයනුකිත්ත යන දෙකයි. (ක් + ‌ඖ = කෞ)</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showAn && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent VarAnuContentt'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAn(!showAn)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>අං</h1>
                            <p id='titleP'>(අ)ං යන්න. (අනුස්වාරය)</p>
                            <p>නිරන්තරයෙන් ස්වරයකට පසුව පමණක් යෙදෙන බැවින් "අනුස්වාරය" ලෙස හැඳින්වෙන  මෙය ව්‍යඤ්ජන මාලාවේ පළමු ව හමුවන අක්ෂරයයි. 'බිංදුව' ලෙස ද හැඳින්වෙන මෙය කණ්ඨජ ඝෝෂ නාසික්‍යයක් ලෙස ද පෙන්වා දිය හැකිය. සම්පූර්ණයෙන් නාසයට බරව උච්චාරණය කෙරෙන බැවින් "පූර්ණ නාසික්‍ය" අක්ෂරයක් ලෙස ද හැඳින්විය හැකිය. මෙය සියලු ම නාසික්‍ය අක්ෂරයන්ට පොදුවේ භාවිත කෙරෙනු දක්නට ලැබේ. අකාරාදිය පිළිවෙළ අනුව මෙයට හිමි ස්ථානය වන්නේ 19 යි.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showAh && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentUshh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAh(!showAh)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>අඃ</h1>
                            <p id='titleP'>(අ)ඃ යන්න. (විසර්ගය)</p>
                            <p>සංස්කෘත භාෂාවෙන් සිංහල භාෂාවට එක් වූ මෙය සංස්කෘත තත්සම වචන සිංහලෙන් ලියා දැක්වීමේ දී භාෂාවේ යෙදේ. එය හඳුන්වනු ලබන්නේ විසර්ගය ලෙසයි. එය කණ්ඨජ අඝෝෂ ඌෂ්ම අක්ෂරයක් ලෙස පෙන්වා දිය හැකිය.  මෙය ව්‍යඤ්ජන මාලාවේ දෙවනුව හමුවන අක්ෂරයයි. අකාරාදිය පිළිවෙළ අනුව මෙයට හිමි ස්ථානය වන්නේ 20 යි.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showKa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowKa(!showKa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ක</h1>
                            <p id='titleP'>'ක' යන්න. (කණ්ඨජ අඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ අපට හමුවන මුල් ම හල් අකුරයි. එය වර්ගාක්ෂරයන්හි ක'වර්ගයේ වර්ගමූල අක්ෂරයයි. එය කණ්ඨජ අක්ෂර ගණයට අයත් වන අඝෝෂයකි. අල්පප්‍රාණයකි. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 21 වේ. </p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showKha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowKha(!showKha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඛ</h1>
                            <p id='titleP'>'ඛ' යන්න. (කණ්ඨජ අඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  ක'වර්ගයේ අකුරක් වන මෙය කණ්ඨජ අක්ෂර ගණයට අයත් වේ. අඝෝෂයකි. මහප්‍රාණයකි. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 22 වේ. </p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showGa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowGa(!showGa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ග</h1>
                            <p id='titleP'>'ග' යන්න. (කණ්ඨජ ඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  ක'වර්ගයේ අකුරක් වන මෙය කණ්ඨජ අක්ෂර ගණයට අයත් වේ. අඝෝෂයකි. අල්පප්‍රාණයකි. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 23 වේ. </p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showGha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowGha(!showGha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඝ</h1>
                            <p id='titleP'>'ඝ' යන්න. (කණ්ඨජ ඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  ක'වර්ගයේ අකුරක් වන මෙය කණ්ඨජ අක්ෂර ගණයට අයත් වේ. ඝෝෂයකි. මහප්‍රාණයකි. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 24 වේ. </p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showXha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent VarAnuContentt'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowXha(!showXha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඞ</h1>
                            <p id='titleP'>'ඞ' යන්න. (කණ්ඨජ ඝෝෂ වර්ගාන්ත නාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි. ක'වර්ගයට අයත් වන මෙය ක'වර්ගයේ වර්ගාන්තාක්ෂරයයි. කණ්ඨජ අක්ෂර ගණයට අයත් වේ. ඝෝෂයකි. එය නාසයට බරව උච්චාරණය කෙරෙන හෙයින් නාසික්‍ය හෙවත් අනුනාසික ගණයට අයත් වේ. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 25 වේ. </p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showXgha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentSanjakaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowXgha(!showXgha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඟ</h1>
                            <p id='titleP'>'ඟ' යන්න. (කණ්ඨජ ඝෝෂ අර්ධානුනාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <p>නූතන සිංහල වර්ණ මාලාවට අලුතෙන් ම හඳුන්වාදෙනු ලැබූ මෙය සඤ්ඤක අක්ෂරයකි. කණ්ඨජ අක්ෂර ගණයට අයත් ඝෝෂයකි. අර්ධයක් නාසයට බරව උච්චාරණය කෙරෙන බැවින් එය අර්ධානුනාසික ශබ්දයක් ලෙස හැඳින්වේ. මෙම අකුරෙන් පටන් ගන්නා කිසිඳු වචනයක් භාෂාවේ හමු නොවේ. මෙය කිසිවිටෙකත් වචනයක හල්ව නොයෙදේ. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 26 වේ. </p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showCa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowCa(!showCa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ච</h1>
                            <p id='titleP'>'ච' යන්න. (තාලුජ අඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  ච'වර්ගයේ වර්ගමූල අක්ෂරය වන මෙය තාලුජ අක්ෂර ගණයට අයත් වේ. අඝෝෂයකි. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 27 වේ.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showCha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowCha(!showCha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඡ</h1>
                            <p id='titleP'>'ඡ' යන්න. (තාලුජ අඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  ච'වර්ගයේ අකුරක් වන මෙය තාලුජ අක්ෂර ගණයට අයත් වේ. අඝෝෂයකි. මහප්‍රාණයකි. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 28 වේ. </p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showJa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowJa(!showJa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ජ</h1>
                            <p id='titleP'>'ජ' යන්න. (තාලුජ ඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  ච'වර්ගයේ අකුරක් වන මෙය තාලුජ අක්ෂර ගණයට අයත් ඝෝෂයකි. අල්පප්‍රාණයකි. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 29 වේ.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showJha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowJha(!showJha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඣ</h1>
                            <p id='titleP'>'ඣ' යන්න. (තාලුජ ඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  ච'වර්ගයේ අකුරක් වන මෙය තාලුජ අක්ෂර ගණයට අයත් ඝෝෂයකි. මහප්‍රාණයකි. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 30 වේ. </p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showChaha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent VarAnuContentt'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowChaha(!showChaha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඤ</h1>
                            <p id='titleP'>'ඤ' යන්න. (තාලුජ ඝෝෂ වර්ගාන්ත නාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි. ච'වර්ගයට අයත් වන මෙය ච'වර්ගයේ වර්ගාන්තාක්ෂරයයි. තාලුජ අක්ෂර ගණයට අයත් වේ. ඝෝෂයකි. එය නාසයට බරව උච්චාරණය කෙරෙන හෙයින් නාසික්‍ය හෙවත් අනුනාසික ගණයට අයත් වේ. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 31 වේ. </p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showXJhaha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentSanjakaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowXJhaha(!showXJhaha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඦ</h1>
                            <p id='titleP'>'ඦ' යන්න. (තාලුජ ඝෝෂ අර්ධානුනාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <p>නූතන සිංහල වර්ණ මාලාවට අලුතෙන් ම හඳුන්වාදෙනු ලැබූ අක්ෂරයකි. එය සඤ්ඤක අක්ෂරයකි. තාලුජ අක්ෂර ගණයට අයත් ඝෝෂයකි. අර්ධයක් නාසයට බරව උච්චාරණය කෙරෙන බැවින් එය අර්ධානුනාසික ශබ්දයක් ලෙස හැඳින්වේ.</p>
                            <p>මෙම අක්ෂරය යෙදී ඇති එකම එක වචනයක් භාෂාවේ පවතී. එනම් සුනඛයින්ට අසුරු ගැසීමේ දී යෙදෙන "ඉඦුඃ" යන්නෙහි පමණි. මහාචාර්ය ජේ.බී.දිසානායකයන්ගේ සමකාලීන සිංහල හෝඩියෙන් මෙම අක්ෂරය ඉවත් කොට ඇති අතර එම ස්ථානයට "ඥ" අක්ෂරය එක් කර ඇත. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 32 වේ.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showTa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowTa(!showTa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ට</h1>
                            <p id='titleP'>'ට' යන්න. (මුර්ධජ අඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  ට'වර්ගයේ වර්ගමූල අක්ෂරය වන මෙය මුර්ධජ අක්ෂර ගණයට අයත් අඝෝෂයකි. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 33 වේ. </p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }
        {
            showTtha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowTtha(!showTtha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඨ</h1>
                            <p id='titleP'>'ඨ' යන්න. (මුර්ධජ අඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  ට'වර්ගයේ අකුරක් වන මෙය මුර්ධජ අක්ෂර ගණයට අයත් වේ. අඝෝෂයකි. මහප්‍රාණයකි. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 34 වේ.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }
        {
            showDa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowDa(!showDa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඩ</h1>
                            <p id='titleP'>'ඩ' යන්න. (මුර්ධජ ඝෝෂ අල්පප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  ට'වර්ගයේ අකුරක් වන මෙය මුර්ධජ අක්ෂර ගණයට අයත් ඝෝෂයකි. අල්පප්‍රාණයකි. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 35 වේ.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }
        {
            showDdha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowDdha(!showDdha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඪ</h1>
                            <p id='titleP'>'ඪ' යන්න. (මුර්ධජ ඝෝෂ මහප්‍රාණ ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි.  ට'වර්ගයේ අකුරක් වන මෙය මුර්ධජ අක්ෂර ගණයට අයත් ඝෝෂයකි. මහප්‍රාණයකි. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 36 වේ.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }
        {
            showMna && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent VarAnuContentt'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowMna(!showMna)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ණ</h1>
                            <p id='titleP'>'ණ' යන්න. (මුර්ධජ ඝෝෂ වර්ගාන්ත නාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <p>ව්‍යඤ්ජන මාලාවේ ඇති වර්ගාක්ෂරයකි. ට'වර්ගයේ අකුරක් වන මෙය ට'වර්ගයේ වර්ගාන්තාක්ෂරයයි. මුර්ධජ අක්ෂර ගණයට අයත් වේ. ඝෝෂයකි. එය නාසයට බරව උච්චාරණය කෙරෙන හෙයින් නාසික්‍ය හෙවත් අනුනාසික ගණයට අයත් වේ. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 37 වේ.</p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }
        {
            showMdhaha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentSanjakaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowMdhaha(!showMdhaha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඬ</h1>
                            <p id='titleP'>'ඬ' යන්න. (මුර්ධජ ඝෝෂ අර්ධානුනාසික්‍ය ගාත්‍රාක්ෂරය)</p>
                            <p>නූතන සිංහල වර්ණ මාලාවට අලුතෙන් ම හඳුන්වාදෙනු ලැබූ අකුරක් වන මෙය සඤ්ඤක අක්ෂරයකි. මුර්ධජ අක්ෂර ගණයට අයත් ඝෝෂයකි. අර්ධයක් නාසයට බරව උච්චාරණය කෙරෙන බැවින් එය අර්ධානුනාසික ශබ්දයක් ලෙස හැඳින්වේ. මෙම අකුරෙන් පටන් ගන්නා කිසිඳු වචනයක් භාෂාවේ හමු නොවේ. මෙය කිසිවිටෙකත් වචනයක හල්ව නොයෙදේ. අක්ෂර මාලාවෙහි එයට හිමි ස්ථානය 38 වේ. </p>
                            <p id='EngP'>The Sinhalese alphabet is one of the South Indian alphabets. It is a so-called “Abugida” alphabet. Its letters originate from the Brahman script, whose oldest documents date back to the 3rd Century B.C. The Sinhalese alphabet comprises 58 letters of which 42 are consonants and 16 vowels.</p>
                        </div>
                        
                </div>
        }

{
            showTha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowTha(!showTha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ත</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showThha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowThha(!showThha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ථ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showTDa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowTDa(!showTDa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ද</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showTDdha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowTDdha(!showTDdha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ධ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showNa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent VarAnuContentt'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowNa(!showNa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>න</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showdhaha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentSanjakaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowdhaha(!showdhaha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඳ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }

{
            showPa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowPa(!showPa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ප</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showPha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowPha(!showPha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඵ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showBa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAlpaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowBa(!showBa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>බ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showBha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentmarapraa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowBha(!showBha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>භ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showMa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent VarAnuContentt'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowMa(!showMa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ම</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showBhaha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentSanjakaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowBhaha(!showBhaha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඹ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }


{
            showYa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAnthahh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowYa(!showYa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ය</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showRa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAnthahh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowRa(!showRa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ර</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showLa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAnthahh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowLa(!showLa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ල</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showWa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAnthahh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowWa(!showWa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ව</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showSha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentUshh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowSha(!showSha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ශ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showSsha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentUshh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowSsha(!showSsha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ෂ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showSa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentUshh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowSa(!showSa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ස</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentUshh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowha(!showha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>හ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showLLa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentAnthahh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowLLa(!showLLa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ළ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showFa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentUshh'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowFa(!showFa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ෆ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }


{
            showSwara && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent MAINswyawiyaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowSwara(!showSwara)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ස්වර</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <a className='moreStudy' href='#'>වැඩිදුර අධ්‍යනය කරන්න ➢</a>
                        </div>
                        
                </div>
        }
        {
            showViyan && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent MAINswyawiyaa'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowViyan(!showViyan)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ව්‍යංජන</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <a className='moreStudy' href='#'>වැඩිදුර අධ්‍යනය කරන්න ➢</a>
                        </div>
                        
                </div>
        }

{
            showVargak && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent PinkWargaMaint'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowVargak(!showVargak)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>වර්ගාක්ෂර</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }

{
            showKantaja && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentVargasTitle'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowKantaja(!showKantaja)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>කණ්ඨජ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showThaluja && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentVargasTitle'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowThaluja(!showThaluja)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>තාලුජ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showMurdaja && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentVargasTitle'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowMurdaja(!showMurdaja)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>මූර්ධජ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showDanthaja && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentVargasTitle'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowDanthaja(!showDanthaja)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>දන්තජ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }
        {
            showOshtaja && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent contentVargasTitle'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowOshtaja(!showOshtaja)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඕෂ්ඨජ</h1>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.</p>
                            <p>“අයන්න කියන්න” නමින් සිංහල සඟරාවක් පළ කිරීමේ අවශ්‍යතාව අප තුළ ඇතිව තිබූයේ මීට වසර ගණනාවකට ඔබ්බෙහි සිට ය.
                                 නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින් එළිදැක්වීමට අවස්ථාව උදා
                                  වූයේ මෙම වසරේදී ය.නොයෙකුත් වූ බාධකයන් හේතුවෙන් දිනෙන් දින ප්‍රමාද වූ එකී සංකල්පය ප්‍රයෝගික යථාර්ථයක් ලෙසින්
                                   එළිදැක්වීමට අවස්ථාව උදා වූයේ මෙම වසරේදී ය.</p>

                                   <ul>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                        <li>අයන්න කියන්න + අයන්න කියන්න</li>
                                   </ul>
                        </div>
                        
                </div>
        }

{
            showLetNotInc && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent notincludeContent'>
                       <div className='MyOkBtn'><a onClick={()=>setShowLetNotInc(!showLetNotInc)}>OK</a></div>
                            <p>මෙම අක්ෂරය මෙම අක්ෂර කාණ්ඩයට ඇතුලත් නොවේ..!</p>
                            <p>This character is not included in this character category..!</p>
                        </div>
                        
                </div>
        }
        {
            showCatNotInc && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent notincludeContent'>
                       <div className='MyOkBtn'><a onClick={()=>setShowCatNotInc(!showCatNotInc)}>OK</a></div>
                            <p>මෙම තීරුවේ මෙම අක්ශර ප්‍රවර්ගයට අයත් අක්ශර මේ මොහොතේ අක්රියව පවතී...!</p>
                            <p>The characters belonging to this character category in this column are currently inactive..!</p>
                        </div>
                        
                </div>
        }

        </div>
        
        
    </div>
  )
}

export default NewSinhalaHodiya