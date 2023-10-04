import React from "react";
import { useParams } from "react-router-dom";
import hotels from "./hotels.json";
import { CiLocationOn } from "react-icons/ci"
import "./HotelDetails.css"

function HotelDetails() {
    const { id } = useParams();
    const hotel = hotels.find((hotel) => hotel.id === parseInt(id));

    if (!hotel) {
        return <div>Hotel not found.</div>;
    }

    return (
        <div>
            <div className="bodyD"
                key={hotel.id} >
                <h1 className="textDetails">{hotel.name}</h1>
                <div className="left">
                    <small>{hotel.address}</small><span className="location"><CiLocationOn size={20} /></span>
                    <div className="price detials">{hotel.rent}</div>/day
                </div>
                <p><img className="Detail_image" src={hotel.img} alt="" /></p>
                <div className="logoD">
                    <p>Number of Rooms: 3 </p>
                    <p>Number of Beds: 4 </p>
                    <p>Number of BathRoom: 1</p>
                    <p>Area: 732 sft</p>
                </div>
            </div>

        </div>
    );
}

export default HotelDetails;