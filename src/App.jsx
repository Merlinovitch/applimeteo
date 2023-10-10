import React, {useEffect, useState} from 'react'
import Prevision from './components/Prevision'
import MeteoJour from './components/MeteoJour'
import { meteoApi } from './functions/functions'
import './App.css';

function App() {
    
    const [meteo, setMeteo] = useState(null)
    const [isLoading, setLoading] = useState (true)
  
  
    useEffect(()=> {
      meteoApi(setMeteo, setLoading)
    }, [])
    if (isLoading) {
      return (<div className='cont'>Loading...</div>);
    }
  


    return(

        <div className='app'>
            <MeteoJour meteo={meteo} className='meteoJour'> </MeteoJour>
            <div className='prevJours'>
            {meteo.daily.time.slice(1).map((day, i) => (
                <Prevision key={i} time={day} tempMax={meteo.daily.temperature_2m_max[i + 1 ]} 
                tempUnit={meteo.daily_units.temperature_2m_max} weatherCode={meteo.daily.weathercode[i +1]} className='meteoSemaine'> </Prevision>
            ))}
            </div>
            
        </div>
    )
 
}

export default App;
