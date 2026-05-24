import React from 'react'
import { Link } from 'react-router-dom'

import '../components/Main.css'

function ReservationConfirmed() {

  return (

    <main className="confirmation-page" aria-labelledby="confirmation-heading">

      <section className="confirmation-success">
        <h1>Reservation Confirmed!</h1>
        <p>Thank you for booking with Little Lemon. We look forward to serving you.</p>
        <Link to="/"><button>Back To Home</button>
        </Link>
      </section>

    </main>

  )

}

export default ReservationConfirmed