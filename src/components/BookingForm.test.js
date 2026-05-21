import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import BookingForm from './BookingForm'


//tests for booking form component
test('renders booking form heading', () => {

  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  )

  const nameInput = screen.getByLabelText(/full name/i)
  expect(nameInput).toBeInTheDocument()

})

//test for full name input field
test('allows user to type into full name input', () => {

  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  )

  const nameInput = screen.getByLabelText(/full name/i)
  fireEvent.change(nameInput, { target: { value: 'John Doe'} })
  expect(nameInput.value).toBe('John Doe')

})


//test if confirmation modal appears after form submission
test('shows confirmation modal after form submission', () => {
  render(
        <BrowserRouter>
        <BookingForm />
        </BrowserRouter>
         )

  fireEvent.change( screen.getByLabelText(/full name/i),{target: {value: 'John Doe' }})

  fireEvent.change( screen.getByLabelText(/phone number/i),{target: { value: '+123456789'} })

  fireEvent.change(screen.getByLabelText(/choose date/i), {target: {value: '2030-01-01' }} )

  fireEvent.click(screen.getByRole('button', {name: /make your reservation/i }))

  const modalHeading = screen.getByText(/please confirm reservation/i)
  expect(modalHeading).toBeInTheDocument()

})


//test if modal closes when go back button is clicked
test('closes modal when go back is clicked', () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
       )

  fireEvent.change(screen.getByLabelText(/full name/i),{target: { value: 'John Doe'}})

  fireEvent.change(screen.getByLabelText(/phone number/i),{target: {value: '+123456789'}} )

  fireEvent.change(screen.getByLabelText(/choose date/i), {target: {value: '2030-01-01'}})

  fireEvent.click(screen.getByRole('button', {name: /make your reservation/i}))

  fireEvent.click(screen.getByText(/go back/i) )

  expect(screen.queryByText(/please confirm reservation/i)).not.toBeInTheDocument()

})