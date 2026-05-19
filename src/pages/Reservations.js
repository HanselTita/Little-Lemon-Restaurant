import React from 'react'
import '../components/Main.css'

function Reservations() {
  return (
    <div>
      <section className="hero">

  <div className="hero-content" style={{width: '100%'}}>
    <h1 style ={{textAlign: 'center'}}>Reserve a Table</h1>
    </div>
     </section>
      
     <form style={{ display: 'grid', maxWidth: '200px', gap: '20px', margin: '40px auto' }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
        </select>

        <input type="submit" value="Make Your reservation"  style={{ backgroundColor: '#F4CE14', color: '#000000', border: 'none', padding: '12px 24px', fontSize: '16px', fontFamily: "'Karla', sans-serif", cursor: 'pointer', borderRadius: '8px', fontWeight: '600', transition: 'background-color 0.3s ease' }}/>
      </form>
    </div>
  )
}

export default Reservations