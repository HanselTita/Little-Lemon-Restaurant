import React, { useState, useReducer, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/Main.css'
import ReservationImage from '../assets/pic6.jpg'
import emailjs from '@emailjs/browser'
import { fetchAPI, submitAPI } from '../api'

// Function to initialize available times based on today's date
export const initializeTimes = () => {
  const today = new Date()
  return fetchAPI(today)
}

// Reducer function to update available times when date changes
export const updateTimes = (state, action) => {
  switch(action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.date))
    default:
      return state
  }
}


function BookingForm() {

  // State variables for form inputs
const [title, setTitle] = useState('Mr.')
const [fullName, setFullName] = useState('')
const [phone, setPhone] = useState('')
const today = new Date().toISOString().split('T')[0]
const [date, setDate] = useState(today)
const [time, setTime] = useState('')
const [guests, setGuests] = useState(1)
const [occasion, setOccasion] = useState('None')
const [specialRequests, setSpecialRequests] = useState('')



// State and dispatch for available times
const [availableTimes, dispatch] = useReducer(updateTimes,[],initializeTimes)


// Available times for the time dropdown
//const [availableTimes] = useState([ '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

// State variable to control modal visibility
const [showModal, setShowModal] = useState(false)

// Navigate hook for programmatic navigation after confirmation
const navigate = useNavigate()

// Prevent default form submission and show confirmation modal instead
const handleSubmit = (e) =>{
    e.preventDefault();
    setShowModal(true);
  }


  //emailjs-com
   const sendReservationEmail = () => {

  setLoading(true)

  const templateParams = {
    customer_name: fullName,
    customer_phone: phone,
    reservation_date: date,
    reservation_time: time,
    guests: guests,
    occasion: occasion,
    special_request: specialRequests,
  }

  // Form data for API
  const formData = {
    title,
    fullName,
    phone,
    date,
    time,
    guests,
    occasion,
    specialRequests
  }

  // Submit reservation to API
  const success = submitAPI(formData)

  if (!success) {
    setLoading(false)
    alert('Reservation failed')
    return
  }

  // Send email
  emailjs.send(
    'service_brvqs77',
    'template_bj1i42b',
    templateParams,
    'T7lP15S2xy1L8981v'
  )

  .then(() => {

    // Close modal
    setShowModal(false)

    // Reset form
    setTitle('Mr.')
    setFullName('')
    setPhone('')
    setDate(today)
    setTime('15:00')
    setGuests(1)
    setOccasion('None')
    setSpecialRequests('')

    // Stop loading
    setLoading(false)

    // Redirect
    navigate('/reservation-confirmed')

  })

  .catch((error) => {

    console.log(error)

    setLoading(false)

    alert('Failed to send reservation email.')

  })
}

  // State variable to indicate loading state during email sending
  const [loading, setLoading] = useState(false)

 // Set initial time to first available time when availableTimes changes
useEffect(() => {
  if (availableTimes.length > 0) {
    setTime(availableTimes[0])
  }
}, [availableTimes])

// Form validation logic
const isFormValid =
  fullName.trim().length >= 3 &&
  /^[A-Za-z\s]+$/.test(fullName) &&
  /^[0-9+\s]+$/.test(phone) &&
  phone.length >= 8 &&
  date !== '' &&
  time !== '' &&
  guests >= 1 &&
  guests <= 10

  return (
    <section className="reservation-section">

        <div className="reservation-form-container">

          <form className="reservation-form"   onSubmit={handleSubmit}>

           <fieldset className="radio-group">

            <legend>Title</legend>

         <label><input type="radio" name="title" value="Mr." checked={title === 'Mr.'} onChange={(e) =>setTitle(e.target.value)}/>
          Mr.
         </label>

        <label><input type="radio" name="title" value="Mrs." checked={title === 'Mrs.'} onChange={(e) =>setTitle(e.target.value) }/>
          Mrs.
        </label>

        <label><input type="radio" name="title" value="Miss" checked={title === 'Miss'} onChange={(e) =>setTitle(e.target.value)}/>
          Miss
        </label>
      </fieldset>

            <label htmlFor="full-name"> Full Name</label>
            <input type="text"   aria-label="Full Name" id="full-name" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} minLength="3" pattern="[A-Za-z\s]+" title="Name should contain only letters" required/>
            {fullName && fullName.length < 3 && ( <p className="error"> Name must be at least 3 characters</p>)}

            <label htmlFor="phone">Phone Number</label>
            <input type="tel"   aria-label="Phone Number" id="phone" placeholder="+1 234 567 890" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="[0-9+\s]+" minLength="8" maxLength="15" title="Enter a valid phone number" required/>
              {phone && phone.length < 8 && ( <p className="error"> Phone number must be at least 8 digits</p>)}
            <label htmlFor="res-date">Choose date</label>
            <input type="date"   aria-label="Reservation Date" id="res-date" value={date} onChange={(e) => {
            setDate(e.target.value)
               dispatch({
                  type: 'UPDATE_TIMES',
                       date: e.target.value
                        })
                    }}
               min={new Date().toISOString().split('T')[0]} required />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
             {  availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
                ))
            }
            </select>

            <label htmlFor="guests">Number of guests</label>
           <input  type="number"   aria-label="Number of Guests" id="guests" value={guests} onChange={(e) => setGuests(Number(e.target.value))}  placeholder="1" min="1" max="10" required/>

            <label htmlFor="occasion"> Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
            </select>

            <label htmlFor="special-requests">Special Requests</label>
            <textarea id="special-requests" placeholder="Any allergies, seating preferences, birthday setup, etc." rows="5" value={specialRequests} onChange={(e) =>setSpecialRequests(e.target.value)} maxLength="200"/>

            <button type="submit" disabled={!isFormValid}>{loading ? 'Processing...' : 'Make Your Reservation'}</button>
          </form>
        </div>

        <div className="reservation-image">
          <img src={ReservationImage} alt="Restaurant dining"/>
        </div>

        { showModal && (

        <div className="modal-overlay" onClick={() => setShowModal(false)}>
        <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>

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

        <button onClick={sendReservationEmail} disabled={loading}>{loading ? 'Sending...' : 'Confirm Reservation'}</button>

         <p className="go-back" onClick={() => setShowModal(false)}> Go Back </p>

          </div>
          </div>
      )
         }

      </section>

         

  )
}

export default BookingForm;