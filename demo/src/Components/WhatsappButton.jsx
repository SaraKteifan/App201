import React, { useState } from 'react'

function WhatsappButton() {
  const [wappDis, setWappDis]= useState('none')

  return (
    <>        
        {/* 👇️ whats app button */}
        <button

        onMouseOver={()=>setWappDis('inline-block')}
        onMouseOut={()=>setWappDis('none')}
        className='btn rounded-circle '
        onClick={() => {window.open('https://wa.me/962790208181', '_blank');}}
        id='whatsappbutton'
        >
        <span id='wapp-span' style={{display: wappDis}}>واتساب</span>
        <i className="fab fa-whatsapp fa-xl"></i>
       
        </button>
        </>
  )
}

export default WhatsappButton