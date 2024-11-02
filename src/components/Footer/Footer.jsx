import React from 'react'
import './Footer.css'
import { FooterLinks } from '../../Data/FooterLinks'
import { Link } from 'react-router-dom'
import Form from '../Form/Form'

export default function Footer() {
    return (
        <footer className='FM-footer'>
            <div className='FM-footer-right-sec'>
                <h2 className='FM-h2'>Let’s work together</h2>
                <p className="FM-p">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div className='FM-footer-links'>
                    {FooterLinks.map((e,index) => {
                        return (
                            <Link className='FM-footer-link' key={index} to={'#'}><img src={e.img} alt='link'/></Link>
                        )
                    })}
                </div>
            </div>
            <Form />

        </footer>
    )
}
