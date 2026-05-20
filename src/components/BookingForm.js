import React, {useState} from 'react'

import '../components/Main.css'
import ReservationImage from '../assets/pic6.jpg'

function BookingForm() {

  // State variables for form inputs
const [title, setTitle] = useState('Mr.')
const [fullName, setFullName] = useState('')
const [phone, setPhone] = useState('')
const [date, setDate] = useState('')
const [time, setTime] = useState('15:00')
const [guests, setGuests] = useState(1)
const [occasion, setOccasion] = useState('Birthday')
const [specialRequests, setSpecialRequests] = useState('')

// Available times for the time dropdown
const [availableTimes] = useState([ '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

// State variable to control modal visibility
const [showModal, setShowModal] = useState(false)

// Prevent default form submission and show confirmation modal instead
const handleSubmit = (e) =>{
    e.preventDefault();
    setShowModal(true);
  }

  return (
    <section className="reservation-section">

        <div className="reservation-form-container">

          <form className="reservation-form"   onSubmit={handleSubmit}>

           <div className="radio-group">

            <p>Title</p>

         <label><input type="radio" name="title" value="Mr." checked={title === 'Mr.'} onChange={(e) =>setTitle(e.target.value)}/>
          Mr.
         </label>

        <label><input type="radio" name="title" value="Mrs." checked={title === 'Mrs.'} onChange={(e) =>setTitle(e.target.value) }/>
          Mrs.
        </label>

        <label><input type="radio" name="title" value="Miss" checked={title === 'Miss'} onChange={(e) =>setTitle(e.target.value)}/>
          Miss
        </label>
      </div>

            <label htmlFor="full-name"> Full Name</label>
            <input type="text" id="full-name" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)}  required/>

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="+1 234 567 890" value={phone} onChange={(e) => setPhone(e.target.value)} required/>

            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
             {  availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
                ))
            }
            </select>

            <label htmlFor="guests">Number of guests</label>
           <input  type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}  placeholder="1" min="1" max="10"/>

            <label htmlFor="occasion"> Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
            </select>

            <label htmlFor="special-requests">Special Requests</label>
            <textarea id="special-requests" placeholder="Any allergies, seating preferences, birthday setup, etc." rows="5" value={specialRequests} onChange={(e) =>setSpecialRequests(e.target.value)}/>

            <button type="submit"> Make Your Reservation</button>
          </form>
        </div>

        <div className="reservation-image">
          <img src={ReservationImage} alt="Restaurant dining"/>
        </div>

        { showModal && (

        <div className="modal-overlay">
        <div className="confirmation-modal">

        <h2> Please Confirm Reservation</h2>

        <div className="confirmation-details">
          <p><strong>Name:</strong>{' '}{title} {fullName}</p>
          <p><strong>Date:</strong>{' '}{date}</p>
          <p><strong>Time:</strong>{' '}{time}</p>
          <p><strong>Guests:</strong>{' '}{guests}</p>
          <p><strong>Phone:</strong>{' '}{phone}</p>
          <p><strong>Occasion:</strong>{' '}{occasion}</p>
          <p><strong>Special Requests:</strong>{' '}{specialRequests || 'None'}</p>
        </div>

         <button onClick={()=> alert('Reservation Confirmed')}>Confirm</button>

         <p className="go-back" onClick={() => setShowModal(false)}> Go Back </p>

          </div>
          </div>
      )
         }

      </section>

         

  )
}

export default BookingForm;