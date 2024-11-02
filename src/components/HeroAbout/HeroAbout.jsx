import React from 'react'
import './HeroAbout.css'
import image from '../../images/about-img.png'

export default function HeroAbout() {
    return (
        <section className='FM-padding FM-hero-about'>
            <div className='FM-hero-left-sec'>
                <img className='img-fluid' src={image} alt="hero" />
                <h5 className='FM-h5'>Pablo Designero</h5>
                <p className='FM-p mb-0'>Designer & Unicorn Trainer</p>
            </div>
            <div className='FM-hero-right-sec'>
                <h5 className='FM-h5'>Bio:</h5>
                <p className='FM-p mb-0'>Father of 3 humans, 5 unicorns & 2 dogs,I design since I can remember it. I often get asked where I get my inspiration from: in everyday’s lil’ details. And sometimes in leftover food I find in my beard.</p>
            </div>
        </section>
    )
}
