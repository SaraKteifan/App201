import React from 'react'

function WhatsappButton() {
  return (
    <>        
        {/* 👇️ whats app button */}
        <button
        title='WhatsApp'
        className='btn rounded-square '
        onClick={() => {window.open('https://wa.me/962790208181', '_blank');}}
        style  ={{
        position       : 'fixed',
        bottom         : '40px',
        left           : '5px',
        fontSize       : '25px',
        color          : 'black',
        textAlign      : 'center',
        backgroundColor: '#351C5C',
        border: 'none',
        zIndex: 100,
        }}
        >
        <p style={{display: 'inline-block',fontSize: '15px'}}>Whatsapp</p>
        <i className="fab fa-whatsapp"></i>
        </button>
        </>
  )
}

export default WhatsappButton