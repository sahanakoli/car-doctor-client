import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Bookings = () => {
    const {user} =useContext(AuthContext);
    const [booking, setBooking] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])
    return (
        <div>
           <h2>Booking</h2> 
        </div>
    );
};

export default Bookings;