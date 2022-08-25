import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
function LocationButton() {
  return (
    <>        
        {/* 👇️ whats app button */}
        <button
        className='btn rounded-circle'
        id='locationbutton'
        onClick={() => {window.open('https://www.google.com/maps/dir//APP+201/@29.5347908,35.0091534,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x150071e53fe15aa7:0x6932945f10c78f97!2m2!1d35.0085445!2d29.5330405', '_blank');}}
        style  ={{
        position       : 'fixed',
        bottom         : '90px',
        left          : '0px',
        color          : '#170039',
        textAlign      : 'center',
        // backgroundColor: 'green',
        fontSize       : '40px',
        border: 'none',
        zIndex: 100,
        }}
        >
            {/* <img width='30px' height='30vh' src="./Images/location.png" alt="" /> */}
            <HiLocationMarker />
        {/* <i class="fa-solid fa-map-location-dot fa-xl"></i> */}
        {/* <i class="fa-solid fa-location-dot fa-xl"></i> */}
        {/* <i class="fa-solid fa-location-crosshairs fa-xl"></i> */}
        </button>
        </>
  )
}

export default LocationButton