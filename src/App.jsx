import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Booking from "./views/booking"
import Reservations from "./views/reservations"

function App() {

  return (
    <div className='container-mx-auto'> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/booking' />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/reservations' element={<Reservations />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
