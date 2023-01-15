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
                <img className='intro-shop-img' src="https://images.unsplash.com/photo-1491222825723-0b8308840432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2154&q=80" alt="" />
                <div>
                    <p className='intro-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Exercitationem, harum! Rem optio quis expedita quam repellat labore sunt?
                        Laboriosam incidunt dicta inventore dolore. Vitae, quibusdam.</p>
                    <p className="intro-text">Iusto eum a nam rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore ullam ducimus adipisci magni quos, cupiditate labore. Quae ex nisi distinctio?</p>
                </div>
            </div>
            <section className='trendings-section'>
                <Trendings addToCart={addToCart} prodTitle={prodTitle} />
            </section>
            <section className='history-section'>
                <div className='history-container'>
                    <div>
                        <h3 className='h3-history'>Our history</h3>
                        <p className='intro-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eligendi eius optio porro aspernatur,
                            molestias fugit sint. Iusto atque et iure illo autem repudiandae quas quaerat, eligendi possimus velit porro laborum odit,
                            esse voluptatum est laboriosam! Architecto culpa excepturi, consequatur quam labore eius, explicabo est alias tempora beatae
                            quo quaerat!</p>
                    </div>
                    <img className='history-img' src="https://images.pexels.com/photos/6210908/pexels-photo-6210908.jpeg" alt="" />
                </div>
            </section>
        </main>
    )
}
