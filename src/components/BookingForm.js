import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/Main.css'
import ReservationImage from '../assets/pic6.jpg'
import emailjs from '@emailjs/browser'


function BookingForm() {

  // State variables for form inputs
const [title, setTitle] = useState('Mr.')
const [fullName, setFullName] = useState('')
const [phone, setPhone] = useState('')
const [date, setDate] = useState('')
const [time, setTime] = useState('15:00')
const [guests, setGuests] = useState(1)
const [occasion, setOccasion] = useState('None')
const [specialRequests, setSpecialRequests] = useState('')

// Available times for the time dropdown
const [availableTimes] = useState([ '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

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
    };
  
    emailjs.send(
      'service_brvqs77',
      'template_bj1i42b',
      templateParams,
      'T7lP15S2xy1L8981v'
    )
    .then(() => {

  // Close modal
  setShowModal(false);

  // Clear form fields
  setTitle('Mr.');
  setFullName('');
  setPhone('');
  setDate('');
  setTime('15:00');
  setGuests(1);
  setOccasion('None');
  setSpecialRequests('');

  // Redirect user
  navigate('/reservation-confirmed')

})
    .catch((error) => {
      setLoading(false)
      console.log(error);
      alert('Failed to send reservation.');
    });
  };

  // State variable to indicate loading state during email sending
  const [loading, setLoading] = useState(false)


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
            <input type="text" id="full-name" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)}  required/>

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="+1 234 567 890" value={phone} onChange={(e) => setPhone(e.target.value)} required/>

            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split('T')[0]} required/>

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
           <input  type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}  placeholder="1" min="1" max="10" required/>

            <label htmlFor="occasion"> Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option>None</option>
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