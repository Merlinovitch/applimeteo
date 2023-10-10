import axios from "axios";

const meteoJour = async (state) => {
    const peticion = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=50.6942&longitude=3.1746&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,weathercode,cloudcover,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=Europe%2FLondon')
    state(peticion.data.current_weather)
    // console.log(peticion.data.current_weather)
}

export{
    meteoJour
}