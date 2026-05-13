import React from 'react'
import HeroImage from '../assets/pic1.jpg'
import './Main.css'

function Main() {
  return (
<main>

<section className="hero">

  <div className="hero-content">
    <h1>Little Lemon</h1>

    <h2>Chicago</h2>

    <p>
    We are a family owned African restaurant,
    focused on traditional recipes served with a modern twist
    </p>

    <button>Reserve a Table</button>
  </div>

  <div className="hero-image">
    <img src={HeroImage} alt="Little Lemon Food" />
  </div>

</section>

  <section className="specials">

  </section>

  <section className="testimonials">

  </section>

  <section className="about">
  </section>

</main>
  )
}

export default Main