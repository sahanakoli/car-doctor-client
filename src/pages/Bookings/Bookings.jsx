import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedId > 0){
                    Swal.fire(
                        'Deleted Successfully ',
                        'success'
                      )
                }
            })
        }
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
            
           }
       })
    }
        
        
    return (
        <div>
            <h2 className=" text-5xl">My Bookings: {bookings.length}</h2>
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