import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import Swal from "sweetalert2";


const CheckOut = () => {

    const service = useLoaderData();
    const {_id, title, price, img } = service;
    console.log(service)
    const {user} = useContext(AuthContext);

    const handleOrder = (event) =>{
      event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const date = form.date.value;
      const email = form.email.value;
      const price = form.price.value;

      const booking = {
        customerName: name,
        date,
        price,
        img,
        service: title,
        service_id: _id,
        email,
      }
      console.log(booking);
       
      fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        
        
      })
    }

    return (
        <div>
             <h1 className=" text-2xl font-bold text-center">Service: {title}</h1>
            <form onSubmit={handleOrder} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={user?.displayName}  className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Amount</span>
                    </label>
                    <input type="text" name="price"  defaultValue={'$'+ price} className="input input-bordered" required />
                </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary btn-block text-white">Order Confirm</button>
                </div>
            </form> 
        </div>
    );
};

export default CheckOut;