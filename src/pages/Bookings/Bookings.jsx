import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";



const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {

        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    
    }, [url]);

    const handleDelete = id => {
        Swal.fire({
            title: 'Do you want to delete booking?',
            showDenyButton: true,
            confirmButtonText: 'delete',
            denyButtonText: `cancel`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted Successfully ',
                        'success'
                      )
                      const remaining = bookings.filter(booking => booking._id !== id);
                      setBookings(remaining);
                }

            })
              
            } else if (result.isDenied) {
              Swal.fire('Booking not deleted')
            }
          })
        
    }

    const handleBookingConfirm = id => {
       fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            // update status
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking => booking._id === id);
            updated.status = 'confirm'
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
           }
       })
    }
        
        
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        bookings.map(booking => 
                        <BookingRow 
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        handleBookingConfirm={handleBookingConfirm}>
                        </BookingRow>)
                       }
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;