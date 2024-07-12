import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './styles.css';

export default function Booking() {

    // Flight reservation fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [flightNumber, setFlightNumber] = useState("");
    const [seatNumber, setSeatNumber] = useState("");

    // Hotel reservation fields
    const [hotelId, setHotelId] = useState("");
    const [userId, setUserId] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // Reservation endpoint url
    const url = "http://apigateway:8005/reservations/create/";

    //navigate
    const navigate = useNavigate();

    // Reservations API
    const reservationsAPI = axios.create({
        baseURL: url,
        headers: {
            "Content-type": "application/json"
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const hotelReservation = {
            hotelId: hotelId,
            userId: userId,
            startDate: startDate,
            endDate: endDate,
            status: "booked"
        };
        const flightReservation = {
            flight_number: flightNumber,
            first_name: firstName,
            last_name: lastName,
            seat_number: seatNumber,
            email: email,
            phone: phone
        };
        const combinedReservation = {
            hotel_data: hotelReservation,
            flight_data: flightReservation
        };

        try {
            const response = await reservationsAPI.post(url, combinedReservation);
            if (response.data) {
                alert(`Reservation successful!`);
            } else {
                alert('Reservation successful, but could not retrieve data.');
            }
        } catch (error) {
            console.error('Error making reservation:', error);
            alert('Failed to make reservation. Please try again.');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Make Reservations</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                <form style={{ width: '48%' }} className="vertical-form">
                    <h2>Flight Reservation</h2>
                    <input type="text" placeholder="Flight Number" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} />
                    <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <input type="text" placeholder="Seat Number" value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </form>
                <form onSubmit={handleSubmit} style={{ width: '48%' }} className="vertical-form">
                    <h2>Hotel Reservation</h2>
                    <input type="text" placeholder="Hotel ID" value={hotelId} onChange={(e) => setHotelId(e.target.value)} />
                    <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
                    <input type="date" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    <input type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </form>
            </div>
            <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <button onClick={()=> {navigate('/reservations')}}>Manage Reservations</button>
            </div>
        </div>
    )

}