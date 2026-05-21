import React from 'react'
import '../components/Main.css'
import BookingForm from '../components/BookingForm'



function Reservations() {

  return (

    <main>

      <section className="hero">
        <div className="hero-content" style={{ width: '100%' }}>
          <h1 style={{ textAlign: 'center' }}>
            Reserve a Table
          </h1>
        </div>
      </section>

      <BookingForm />

    </main>

  )
}

export default Reservations