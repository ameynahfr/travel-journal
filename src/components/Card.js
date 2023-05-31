import React from "react";
import locator from './locator.png'

export default function Card(props) {
    return(
        <div className="cards">
            <img id="destination" src={props.imageUrl} alt="travel destination" />
            
            <div className="description">
                <img id="locator" src={locator} alt="map" />
                <h3 id="location"> {props.location}</h3>
                <a id="mapsLink" href={props.googleMapsUrl}><p id="googleMaps">View on Google Maps</p></a>
                <h1 id="title">{props.title}</h1>
                <p className="date"><b>{props.startDate}</b></p>
                <p className="date"><b> - </b></p>
                <p className="date"><b>{props.endDate}</b></p>
                <p id="description">{props.description}</p>
            </div>
        </div>

    )
}

/*
{
        Id: 1,
        title: "Mount Fuji",
        location: "JAPAN",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://unsplash.com/photos/WLxQvbMyfas"
    },
*/