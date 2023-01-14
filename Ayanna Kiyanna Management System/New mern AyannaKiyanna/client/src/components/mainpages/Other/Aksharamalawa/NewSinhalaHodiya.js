import React, { useState } from 'react'
import './newSinhalaHodiya.css'

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

  return (
    <div className='NuthanahodiyaMain'>
        <div className='mainhodibox'>
                <div className='sinhalaAkurumainbox'>

                <div className='swaraAkuruMaincontainer'>

                <div className='vargaLableBox'>
                    <h2>ස්වර</h2>
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
                    <div className='vargaLableBox'>
                        <h2>ව්‍යංජන</h2>
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

                                    <div className='akuruAK' id='akvrdv'>
                                        <h2>කණ්ඨජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv'>
                                        <h2>තාලුජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv'>
                                        <h2>මූර්ධජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv'>
                                        <h2>දන්තජ➠</h2>
                                    </div>
                                    <div className='akuruAK' id='akvrdv'>
                                        <h2>ඕෂ්ඨජ➠</h2> 
                                    </div>
                                    
                            </div>

                            <div className='Varganthaksara'>
                                <h2>වර්ගාක්ෂර</h2>
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
                                    <div className='akurucontent agoshamark' id='alpaprana'>
                                            <p>33</p>
                                            <h5>ට</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana'>
                                            <p>34</p>
                                            <h5>ඨ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana'>
                                            <p>35</p>
                                            <h5>ඩ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana'>
                                            <p>36</p>
                                            <h5>ඪ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters'>
                                            <p>37</p>
                                            <h5>ණ</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana'>
                                            <p>39</p>
                                            <h5>ත</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana'>
                                            <p>40</p>
                                            <h5>ථ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana'>
                                            <p>41</p>
                                            <h5>ද</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana'>
                                            <p>42</p>
                                            <h5>ධ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters'>
                                            <p>43</p>
                                            <h5>න</h5>
                                        </div>
                                    </div>
                                    

                            </div>
                            <div className='AkuruColoms'>

                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='alpaprana'>
                                            <p>45</p>
                                            <h5>ප</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent agoshamark' id='mahaprana'>
                                            <p>46</p>
                                            <h5>ඵ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='alpaprana'>
                                            <p>47</p>
                                            <h5>බ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='mahaprana'>
                                            <p>48</p>
                                            <h5>භ</h5>
                                        </div>
                                    </div>
                                    <div className='akuruAK' id='vrvr'>
                                    <div className='akurucontent' id='anunasiLetters'>
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
                                <div className='akuruAK' id='SanjakaAkuru'>
                                <div className='akurucontent'>
                                            <p>38</p>
                                            <h5>ඬ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK' id='SanjakaAkuru'>
                                <div className='akurucontent'>
                                            <p>44</p>
                                            <h5>ඳ</h5>
                                        </div>
                                </div>
                                <div className='akuruAK' id='SanjakaAkuru'>
                                <div className='akurucontent'>
                                            <p>50</p>
                                            <h5>ඹ</h5>
                                        </div>
                                </div>
                    
                        </div>


                    </div>

                        <div className='AkuruColoms' id='yataAkuruSet'>

                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters'>
                                            <p>51</p>
                                            <h5>ය</h5>
                                        </div>
                            </div>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters'>
                                            <p>52</p>
                                            <h5>ර</h5>
                                        </div>
                            </div>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters'>
                                            <p>53</p>
                                            <h5>ල</h5>
                                        </div>
                            </div>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters'>
                                            <p>54</p>
                                            <h5>ව</h5>
                                        </div>
                            </div>
                        </div>
                        <div className='AkuruColoms' id='finalYataLetters'>

                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark'>
                                            <p>55</p>
                                            <h5>ශ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark'>
                                            <p>56</p>
                                            <h5>ෂ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark'>
                                            <p>57</p>
                                            <h5>ස</h5>
                                        </div>
                            </div>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent'>
                                            <p>58</p>
                                            <h5>හ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK'>
                            <div className='akurucontent' id='anthahLetters'>
                                            <p>59</p>
                                            <h5>ළ</h5>
                                        </div>
                            </div>
                            <div className='akuruAK' id='yatamaAkuru'>
                            <div className='akurucontent agoshamark'>
                                            <p>60</p>
                                            <h5>ෆ</h5>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>
                    
                </div>
                
                <div className='sinhalaAkuruDiscbox'>

                </div>
        </div>


        <div>

        {
            showA && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                        <div className='MyCloseBtn'><a onClick={()=>setShowA(!showA)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>අ</h1>
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
            showAa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAa(!showAa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ආ</h1>
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
            showAe && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAe(!showAe)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඇ</h1>
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
            showAee && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAee(!showAee)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඈ</h1>
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
            showE && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowE(!showE)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඉ</h1>
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
            showEe && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowEe(!showEe)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඊ</h1>
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
            showU && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowU(!showU)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>උ</h1>
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
            showUu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowUu(!showUu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඌ</h1>
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
            showEru && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowEru(!showEru)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඍ</h1>
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
            showEruu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                        <div className='MyCloseBtn'><a onClick={()=>setShowEruu(!showEruu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඎ</h1>
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
            showElu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowElu(!showElu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඏ</h1>
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
            showEluu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowEluu(!showEluu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඐ</h1>
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
            showAea && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAea(!showAea)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>එ</h1>
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
            showAeae && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAeae(!showAeae)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඒ</h1>
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
            showAeaei && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAeaei(!showAeaei)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඓ</h1>
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
            showO && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowO(!showO)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඔ</h1>
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
            showOo && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
                
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowOo(!showOo)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඕ</h1>
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
            showOu && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowOu(!showOu)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඖ</h1>
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
            showAn && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAn(!showAn)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>අං</h1>
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
            showAh && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowAh(!showAh)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>අඃ</h1>
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
            showKa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowKa(!showKa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ක</h1>
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
            showKha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowKha(!showKha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඛ</h1>
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
            showGa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowGa(!showGa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ග</h1>
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
            showGha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowGha(!showGha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඝ</h1>
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
            showXha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowXha(!showXha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඞ</h1>
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
            showXgha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowXgha(!showXgha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඟ</h1>
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
            showCa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowCa(!showCa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ච</h1>
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
            showCha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowCha(!showCha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඡ</h1>
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
            showJa && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowJa(!showJa)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ජ</h1>
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
            showJha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowJha(!showJha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඣ</h1>
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
            showChaha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowChaha(!showChaha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඤ</h1>
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
            showXJhaha && <div className='akuruwistharamain' id='Aakuruwistharamainbox' data-aos="fadeInUp">
               
                       <div className='AakuruwistharamainboxContent'>
                       <div className='MyCloseBtn'><a onClick={()=>setShowXJhaha(!showXJhaha)}><i class="fa-solid fa-circle-xmark"></i></a></div>
                            <h1>ඦ</h1>
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

        </div>
        
        
    </div>
  )
}

export default NewSinhalaHodiya