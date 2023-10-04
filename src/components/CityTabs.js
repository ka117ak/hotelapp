import React from "react";

function CityTabs({ cities, activeCity, onCityChange }) {
    return (
        <div className="city-tabs">
            {cities.map((city) => (
                <button
                    key={city}
                    className={city === activeCity ? "active" : ""}
                    onClick={() => onCityChange(city)}
                >
                    {city}
                </button>
            ))}
        </div>
    );
}

export default CityTabs;