/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    console.log(service);
    const {_id, title, img, price } = service;
    
    return (
        <div className="mt-8">
            <div className="card w-96 h-5/6 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-xl text-orange-500">Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-primary">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;