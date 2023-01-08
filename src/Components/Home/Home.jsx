import React from 'react'
import './Home.css'
import illustration from '../../Assets/homecover.avif'
import Trendings from '../Trendings/Trendings'

export default function Home({ addToCart, prodTitle }) {
    return (
        <main>
            <div className='intro-img-fade'>
                <h2 className='main-title'>The best cakes in town</h2>
                <img className='intro-img' src={illustration} alt="" />
            </div>
            <p className='intro-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem, harum! Rem optio quis expedita quam repellat labore sunt?
                Laboriosam incidunt dicta inventore dolore. Vitae, quibusdam?</p>
            <section className='trendings-section'>
                <Trendings addToCart={addToCart} prodTitle={prodTitle} />
            </section>
        </main>
    )
}
