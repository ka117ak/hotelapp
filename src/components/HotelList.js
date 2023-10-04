import React, { useState } from "react";
import { Link } from "react-router-dom";
import hotels from "./hotels.json";
import CityTabs from "./CityTabs";
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineBedroomParent, MdOutlineBathtub } from "react-icons/md"
import { PiHouseBold } from "react-icons/pi"
import { BsArrowsMove } from "react-icons/bs"
import "./HotelList.css";

function HotelList() {
    const [activeCity, setActiveCity] = useState("All");
    const [propertiesToShow, setPropertiesToShow] = useState(6);
    const filteredHotels =
        activeCity === "All"
            ? hotels
            : hotels.filter((hotel) => hotel.location === activeCity);

    const cities = Array.from(new Set(hotels.map((hotel) => hotel.location)));
    cities.unshift("All");

    const handleCityChange = (city) => {
        setActiveCity(city);
        setPropertiesToShow(6);
    };

    const handleShowMore = () => {
        setPropertiesToShow((prevCount) => prevCount + 3);
    };

    return (
        <div className="body">
            <h1 className="text" >Featrure Listed Property</h1>
            <CityTabs
                cities={cities}
                activeCity={activeCity}
                onCityChange={handleCityChange}
            />
            <div className="property-card-container">
                {filteredHotels.slice(0, propertiesToShow).map((hotel) => (
                    <div key={hotel.id} className="property-card">
                        <p><img className="image" src={hotel.img} alt="" /></p>
                        <small>{hotel.address}</small><span className="location"><CiLocationOn size={20} /></span>
                        <h3>{hotel.name}</h3>
                        <div className="logo">
                            <div className="sub"><PiHouseBold size={25} />3 Room</div>
                            <div className="sub"><MdOutlineBedroomParent size={25} />4 Bed</div>
                            <div className="sub"><MdOutlineBathtub size={25} />1 Bath</div>
                            <div className="sub"><BsArrowsMove size={25} />732 sft</div>
                        </div>
                        <div className="display">
                            <div className="left">
                                <div className="price priceOne">₹{hotel.rent}</div>/day
                            </div>
                            <div>
                                <Link to={`/hotel/${hotel.id}`}>read more</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {propertiesToShow < filteredHotels.length && (
                <button className="showMore" onClick={handleShowMore}>Show More</button>
            )}
        </div>
    );
}

export default HotelList;