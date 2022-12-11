import React from 'react'
import './Home.css'
import illustration from '../../Assets/jason-dent-uQe0o0Ub2Cs-unsplash.jpg'
import Trendings from '../Trendings/Trendings'

export default function Home() {
    return (
        <main>
            <div className='intro-img-fade'>
                <img className='intro-img' src={illustration} alt="" />
            </div>
            <p className='intro-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem, harum! Rem optio quis expedita quam repellat labore sunt?
                Laboriosam incidunt dicta inventore dolore. Vitae, quibusdam?</p>
            <Trendings />
        </main>
    )
}
