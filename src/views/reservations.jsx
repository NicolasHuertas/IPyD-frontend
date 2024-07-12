import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reservations = () => {
  const [reservationId, setReservationId] = useState('');
  const [reservationDetails, setReservationDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const baseurl = 'http://localhost:8005/reservations/';

  const navigate = useNavigate();

  const fetchReservationDetails = async (id) => {
	setLoading(true);
	setError('');
	try {
	  const response = await axios.get(`${baseurl}${id}/`);
	  setReservationDetails(response.data);
	} catch (err) {
	  setError('Failed to fetch reservation details.');
	  console.error(err);
	} finally {
	  setLoading(false);
	}
  };

  const cancelReservation = async (id) => {
	setLoading(true);
	setError('');
	try {
	  await axios.post(`${baseurl}cancel/`, { reservation_id: id });
	  setReservationDetails(null); // Clear the displayed reservation details after cancellation
	  alert('Reservation cancelled successfully.');
	} catch (err) {
	  setError('Failed to cancel reservation.');
	  console.error(err);
	} finally {
	  setLoading(false);
	}
  };

  const handleSearch = (e) => {
	e.preventDefault();
	fetchReservationDetails(reservationId);
  };

  return (
	<div>
	  <form onSubmit={handleSearch}>
		<label htmlFor="reservationId">Reservation ID:</label>
		<input
		  type="text"
		  id="reservationId"
		  value={reservationId}
		  onChange={(e) => setReservationId(e.target.value)}
		/>
		<button type="submit">Search</button>
        <button onClick={() => navigate('/booking')}>Make a Reservation</button>
	  </form>
	  {loading && <p>Loading...</p>}
	  {error && <p>{error}</p>}
	  {reservationDetails && (
		<div>
			<h2>Reservation Details</h2>
			<p>ID: {reservationDetails.id}</p>
			<p>Reservation Date: {reservationDetails.reservation_date}</p>
			<p>Hotel Reservation ID: {reservationDetails.hotel_reservation_id}</p>
			<p>Flight Reservation ID: {reservationDetails.flight_reservation_id}</p>
			<p>Status: {reservationDetails.cancelled ? 'Cancelled' : 'Active'}</p>
			<button onClick={() => cancelReservation(reservationDetails.id)}>Cancel Reservation</button>
	    </div>
	  )}
	</div>
  );
};

export default Reservations;
