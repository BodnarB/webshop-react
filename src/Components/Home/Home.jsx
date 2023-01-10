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
            <div className='home-intro-container'>
                <div>
                    <p className='intro-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Exercitationem, harum! Rem optio quis expedita quam repellat labore sunt?
                        Laboriosam incidunt dicta inventore dolore. Vitae, quibusdam.</p>
                    <p className="intro-text">Iusto eum a nam rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore ullam ducimus adipisci magni quos, cupiditate labore. Quae ex nisi distinctio?</p>
                </div>
                <img className='intro-shop-img' src="https://images.unsplash.com/photo-1491222825723-0b8308840432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2154&q=80" alt="" />
            </div>
            <section className='trendings-section'>
                <Trendings addToCart={addToCart} prodTitle={prodTitle} />
            </section>
        </main>
    )
}
