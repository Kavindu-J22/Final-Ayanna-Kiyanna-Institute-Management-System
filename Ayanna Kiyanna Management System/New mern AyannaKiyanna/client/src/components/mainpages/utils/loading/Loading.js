import React from 'react'
import './loading.css'
import AKlogo from '../../../assets/images/AKlogo.png'

function Loading() {
    return (
        <div className="load-page">
            <div className="loader">
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div><img className="loard-logo" src= {AKlogo}  alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading
