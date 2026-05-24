import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import BookingForm from './BookingForm'


// Helper function to render the BookingForm component within a Router context
const renderBookingForm = () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  )
}


//tests for booking form component
test('renders booking form heading', () => {

renderBookingForm()

  const nameInput = screen.getByLabelText(/full name/i)
  expect(nameInput).toBeInTheDocument()

})

//test for full name input field
test('allows user to type into full name input', () => {
renderBookingForm()

  const nameInput = screen.getByLabelText(/full name/i)
  fireEvent.change(nameInput, { target: { value: 'John Doe'} })
  expect(nameInput.value).toBe('John Doe')

})


//test if confirmation modal appears after form submission
test('shows confirmation modal after form submission', () => {
 renderBookingForm()

  fireEvent.change( screen.getByLabelText(/full name/i),{target: {value: 'John Doe' }})

  fireEvent.change( screen.getByLabelText(/phone number/i),{target: { value: '+123456789'} })

  fireEvent.change(screen.getByLabelText(/choose date/i), {target: {value: '2030-01-01' }} )

  fireEvent.click(screen.getByRole('button', {name: /make your reservation/i }))

  const modalHeading = screen.getByText(/please confirm reservation/i)
  expect(modalHeading).toBeInTheDocument()

})


//test if modal closes when go back button is clicked
test('closes modal when go back is clicked', () => {
renderBookingForm()

  fireEvent.change(screen.getByLabelText(/full name/i),{target: { value: 'John Doe'}})

  fireEvent.change(screen.getByLabelText(/phone number/i),{target: {value: '+123456789'}} )

  fireEvent.change(screen.getByLabelText(/choose date/i), {target: {value: '2030-01-01'}})

  fireEvent.click(screen.getByRole('button', {name: /make your reservation/i}))

  fireEvent.click(screen.getByText(/go back/i) )

  expect(screen.queryByText(/please confirm reservation/i)).not.toBeInTheDocument()

})

//test if full name input is required
test('full name input is required', () => {

  renderBookingForm()

  const nameInput = screen.getByLabelText(/full name/i)

  expect(nameInput).toBeRequired()

})

//test if phone number input is required
test('phone number input has correct type', () => {

  renderBookingForm()

  const phoneInput = screen.getByLabelText(/phone number/i)

  expect(phoneInput).toHaveAttribute('type', 'tel')

})

//test if date input is required
test('date input is required', () => {

  renderBookingForm()

  const dateInput = screen.getByLabelText(/choose date/i)

  expect(dateInput).toBeRequired()

})

//test if guests input has min and max validation
test('guests input has min and max validation', () => {

  renderBookingForm()

  const guestsInput = screen.getByLabelText(/number of guests/i)

  expect(guestsInput).toHaveAttribute('min', '1')

  expect(guestsInput).toHaveAttribute('max', '10')

})


//test if time selection is required
test('time selection is required', () => {

  renderBookingForm()

  const timeSelect = screen.getByLabelText(/choose time/i)

  expect(timeSelect).toBeRequired()

})

//test if guests input becomes invalid for value above 10
test('guests input becomes invalid for value below 1', () => {

  renderBookingForm()

  const guestsInput = screen.getByLabelText(/number of guests/i)

  fireEvent.change(guestsInput, {
    target: { value: '0' }
  })

  expect(guestsInput.validity.rangeUnderflow).toBe(true)

})

//test if guests input becomes invalid for value above 10
test('guests input is valid for acceptable value', () => {

  renderBookingForm()

  const guestsInput = screen.getByLabelText(/number of guests/i)

  fireEvent.change(guestsInput, {
    target: { value: '5' }
  })

  expect(guestsInput.validity.valid).toBe(true)

})

//test submit button is disabled when form is invalid
test('submit button is disabled when form is invalid', () => {

  renderBookingForm()

  const submitButton = screen.getByRole('button', {
    name: /make your reservation/i
  })

  expect(submitButton).toBeDisabled()

})


//test submit button is enabled when form is valid
test('submit button is enabled when form is valid', () => {

  renderBookingForm()

  fireEvent.change(screen.getByLabelText(/full name/i), {
    target: { value: 'John Doe' }
  })

  fireEvent.change(screen.getByLabelText(/phone number/i), {
    target: { value: '+123456789' }
  })

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: '2030-01-01' }
  })

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: '4' }
  })
  
  const submitButton = screen.getByRole('button', {
    name: /make your reservation/i
  })
  expect(submitButton).toBeEnabled()

})