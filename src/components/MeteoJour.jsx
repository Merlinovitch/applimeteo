import React, {useEffect, useState} from 'react'
import { meteoJour } from '../functions/functions'
import Prevision from './Prevision'

function MeteoJour(props){
  return (
      <div className="contJour">
        <div className="top">
          <div className="location">
            <p>Roubaix</p>
          </div>
          <div className='contTemp'>
          <div className='temp'>
            <h1>{props.meteo.current.temperature_2m} {props.meteo.current_units.temperature_2m}</h1>
          </div>
          <div className='descrip'>
            <p>{props.meteo.current.weathercode}</p>
          </div>
          </div>
        </div>
        <div className="bottom">
          <div className='resenti'>
            <p className='bold'>{props.meteo.current.apparent_temperature}{props.meteo.current_units.apparent_temperature}</p>
            <p className='nomsIndi'>Ressenti</p>
          </div>
          <div className='humidity'>
            <p className='bold'>{props.meteo.current.relativehumidity_2m}{props.meteo.current_units.relativehumidity_2m}</p>
            <p className='nomsIndi'>Humidité</p>
          </div>
          <div className='vent'>
            <p className='bold'>{props.meteo.current.windspeed_10m}{props.meteo.current_units.windspeed_10m}</p>
            <p className='nomsIndi'>Vent</p>
          </div>
        </div>
      </div>
  )
}

export default MeteoJour