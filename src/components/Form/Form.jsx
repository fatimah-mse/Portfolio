import React from 'react'
import './Form.css'

export default function Form() {
    return (
        <form className='FM-form'>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>
            <textarea placeholder='Type your message here'></textarea>
            <button className='FM-btn' type="submit">Submit</button>
        </form>
    )
}
