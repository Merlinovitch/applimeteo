import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://api.open-meteo.com/v1/forecast?latitude=50.6942&longitude=3.1746&hourly=temperature_2m'
            )
            .then((res) => {
                console.log(res);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return <div>FetchData</div>;
};

export default FetchData;
