import React from 'react'
import HeroImage from '../assets/pic1.jpg'
import './Main.css'

import Rice from "../assets/jellof-rice.jpg";
import Eru from "../assets/fufu-eru.jpg";
import Fish from "../assets/katti-katti.jpg";

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

   <div className="specials-top">

    <h2>This Weeks Specials!</h2>
 
  <button>Online Menu</button>

</div>

<div className="specials-cards">

<   div className="special-card">

     <img src={Rice} alt="Jellof Rice" />

    <div className="card-content">

    <div className="card-top">
      <h3>Jellof Rice</h3>
      <span>$250</span>
    </div>

    <p>
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </p>

    <h4>Order & Delivery</h4>

  </div>

</div>

<div className="special-card">

  <img src={Eru} alt="Fufu Eru" />

  <div className="card-content">

    <div className="card-top">
      <h3>Fufu Eru</h3>
      <span>$300</span>
    </div>

    <p>
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </p>

    <h4>Order & Delivery</h4>

  </div>

</div>

<div className="special-card">

  <img src={Fish} alt="Katti Katti" />

  <div className="card-content">

    <div className="card-top">
      <h3>Katti katti</h3>
      <span>$350</span>
    </div>
    <p>
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </p>
    <h4>Order & Delivery</h4>
  </div>

</div>

</div>

  </section>

</main>
  )
}

export default Main