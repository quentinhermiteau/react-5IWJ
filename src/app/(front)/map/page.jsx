'use client';

import { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';

export default () => {
    const [location, setLocation] = useState({ longitude: 0, latitude: 0});  
    
    useEffect(() => {
        setInterval(() => {
            setLocation({ longitude: Math.random() * 1 + 2, latitude: Math.random() * 2 + 48 })
        }, 2000); 
    }, [])

    return (
        <Map
            mapboxAccessToken="pk.eyJ1IjoicXVlbnRpbi1oZXJtaXRlYXUiLCJhIjoiY2xvaXFvNTVvMXNtNzJqbzJmMHYwbmRpbCJ9.jK1B6lwvS-_HzOCfLObzGA"
            initialViewState={{
                longitude: 2.3333,
                latitude: 48.8667,
                zoom: 8
            }}
            style={{width: 1500, height: 700}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            attributionControl={false}
        >
            <Marker
                key={1}
                longitude={location.longitude}
                latitude={location.latitude}
                color='red'
            />
        </Map>
    );
}