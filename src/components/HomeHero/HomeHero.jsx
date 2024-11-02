import React from 'react'
import './HomeHero.css'
import HeroImg from '../../images/HeroImg.png'

export default function HomeHero() {
    return (
        <section className='FM-padding FM-hero'>
            <div>
                <h5 className='FM-h5'>Branding | Image making </h5>
                <h1 className='FM-h1'>My awesome portfolio</h1>
                <p className='FM-p'>And I made it myself! Yes. In Figma with Anima</p>
            </div>
            <img src={HeroImg} alt="hero-img" />
        </section>
    )
}
