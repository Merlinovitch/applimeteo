import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Data() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            axios 
            .get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=GMT')
            .then(response => {
                setData(response.data)
                console.log(response)
            })
            .catch(error => {
                console.error('Erreur lors de la requête GET :', error);
            });
        } 

        fetchData();
    }, []);


    return (
        <div>
            <h1>Temperature</h1>
            <p>{data?.hourly?.temperature_2m}</p>

        </div>
    )

    

}

export default Data;