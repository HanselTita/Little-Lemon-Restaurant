import { initializeTimes, updateTimes } from './BookingForm'

test('initializeTimes returns available booking times', () => {
  const result = initializeTimes()
  expect(result.length).toBeGreaterThan(0)

})

test('updateTimes returns updated times based on selected date', () => {

  const selectedDate = '2025-08-01'
  const action = {
    type: 'UPDATE_TIMES',
    date: selectedDate
  }

  const result = updateTimes([], action)
  expect(result.length).toBeGreaterThan(0)

})

