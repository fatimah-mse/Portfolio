import React from 'react'
import './ClientsSec.css'
import star from '../../images/Star.png'
import { ClientData } from '../../Data/ClientData'

export default function ClientsSec() {

    return (
        <section className='FM-padding FM-clients'>
            <h2 className="FM-h2">Clients</h2>
            <div className="FM-client-cards">
                {ClientData.map((e, i) => {
                    return (
                        <div key={i} className='FM-client-card'>
                            <p className='FM-h5'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                            <div className='d-flex align-items-start'>
                                <img className='FM-author-img' src={e.img} alt="img" />
                                <div>
                                    {Array(5).fill().map((_, index) => (
                                        <img className='me-1' src={star} alt="star" key={index} />
                                    ))}
                                    <p className='FM-p w-75'>Gemma Nolen, Google</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
