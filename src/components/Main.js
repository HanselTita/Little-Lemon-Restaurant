import React from 'react'
import HeroImage from '../assets/pic1.jpg'
import './Main.css'

import Rice from "../assets/jellof-rice.jpg";
import Eru from "../assets/fufu-eru.jpg";
import Katti from "../assets/katti-katti.jpg";

import User1 from "../assets/user.jpg";

import Dish1 from "../assets/pic4.jpg";
import Dish2 from "../assets/pic5.jpg";


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

    <button className="button" onClick={() => window.location.href = '/reservations'}>
      Reserve a Table
    </button>
  </div>

    <div className="hero-image">
    <img src={HeroImage} alt="Little Lemon Food" />
    </div>

     </section>

 <section className="specials">

   <div className="specials-top">

    <h2>This Weeks Specials!</h2>
 
  <button className="button">Online Menu</button>

</div>

<div className="specials-cards">

<div className="special-card">

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

  <img src={Katti} alt="Katti Katti" />

  <div className="card-content">

    <div className="card-top">
      <h3>Kati Kati</h3>
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

   <section className="testimonials">

<h2>Testimonials</h2>

<div className="testimonials-cards">

<div className="testimonial-card">

  <h4>Rating</h4>

  <img src={User1} alt="Customer" />

  <h3>Username</h3>

  <p>
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit,
    sed do eiusmod tempor.
  </p>

</div>

<div className="testimonial-card">

  <h4>Rating</h4>

  <img src={User1} alt="Customer" />

  <h3>Username</h3>

  <p>
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit,
    sed do eiusmod tempor.
  </p>

</div>

<div className="testimonial-card">

  <h4>Rating</h4>

  <img src={User1} alt="Customer" />

  <h3>Username</h3>

  <p>
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit,
    sed do eiusmod tempor.
  </p>

  </div>

<div className="testimonial-card">

  <h4>Rating</h4>

  <img src={User1} alt="Customer" />

  <h3>Username</h3>

  <p>
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit,
    sed do eiusmod tempor.
  </p>

  </div>
</div>
</section>

<section className="about">

  <div className="about-text">

  <h2>Little Lemon</h2>

  <h3>Chicago</h3>

  <p>
    Journey across Africa without leaving your seat.
    At Little Lemon, every dish tells a story —
    from bold fragrant tagines to soulful Jollof rice.
  </p>

</div>

<div className="about-images">

  <img
  className="about-img1"
  src={Dish2}
  alt="African cuisine"
/>

<img
  className="about-img2"
  src={Dish1}
  alt="African cuisine"
/>

</div>

</section>

</main>
  )
}

export default Main