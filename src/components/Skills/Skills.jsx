import React from 'react'
import { SkillsData } from '../../Data/SkillsData'
import CardComponent from '../CardComponent/CardComponent'
import './Skills.css'

export default function Skills() {
    return (
        <section className='FM-padding FM-skills'>
            {SkillsData.map((e,index) => {
                return (
                    <CardComponent 
                                key={index}
                                cardClass={'FM-card-23'}
                                img={e.img}
                                imgClass={'d-block m-auto'}
                                title={e.title}
                                desc={e.desc}
                                txtCenter={'text-center'}
                    />
                )
            })}

        </section>
    )
}
