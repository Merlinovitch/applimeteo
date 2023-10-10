import React, {useEffect, useState} from 'react'
import { meteoJour } from '../functions/functions'
import Prevision from './Prevision'

const TemperatureJour = () => {
  const [temperature, setTemperature] = useState(null)

  useEffect(()=> {
    meteoJour(setTemperature)
  }, [])

  return (
    <>
    <p>Temperature du jour </p>
    {temperature.temperature}
    
    </>
  )
}

export default TemperatureJour