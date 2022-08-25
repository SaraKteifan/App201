import React from 'react'

function WhatsappButton() {
  return (
    <>        
        {/* 👇️ whats app button */}
        <button
        title='WhatsApp'
        className='btn rounded-circle '
        onClick={() => {window.open('https://wa.me/962790208181', '_blank');}}
        style  ={{
        position       : 'fixed',
        bottom         : '40px',
        left           : '5px',
        fontSize       : '25px',
        color          : 'black',
        textAlign      : 'center',
        backgroundColor: 'white',
        border: 'none',
        zIndex: 100,
        }}
        >
        <i className="fab fa-whatsapp fa-xl"></i>
        </button>
        </>
  )
}

export default WhatsappButton