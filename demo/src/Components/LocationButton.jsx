import React from 'react'
import { useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import './CSS/Buttons.css'

function LocationButton() {
  const [locDis, setLocDis]= useState('none')

  return (
    <>        
        {/* 👇️ whats app button */}
        <button
        onMouseOver={()=>setLocDis('inline-block')}
        onMouseOut={()=>setLocDis('none')}
        className='btn rounded-square'
        id='locationbutton'
        onClick={() => {window.open('https://www.google.com/maps/dir//APP+201/@29.5347908,35.0091534,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x150071e53fe15aa7:0x6932945f10c78f97!2m2!1d35.0085445!2d29.5330405', '_blank');}}
        >
            {/* <img width='30px' height='30vh' src="./Images/location.png" alt="" /> */}
            <span id='loc-span' style={{display: locDis}}>موقعنا</span><HiLocationMarker/> 
        {/* <i class="fa-solid fa-map-location-dot fa-xl"></i> */}
        {/* <i class="fa-solid fa-location-dot fa-xl"></i> */}
        {/* <i class="fa-solid fa-location-crosshairs fa-xl"></i> */}
        </button>
        </>
  )
}

export default LocationButton