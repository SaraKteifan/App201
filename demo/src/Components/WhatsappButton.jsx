import React from 'react'

function WhatsappButton() {
  return (
    <>        
        {/* 👇️ whats app button */}
        <button
        className='btn rounded-circle btn-success resize'
        onClick={() => {window.open('https://wa.me/962790208181', '_blank');}}
        style  ={{
        position       : 'fixed',
        bottom         : '40px',
        left          : '40px',
        color          : '#fff',
        textAlign      : 'center',
        backgroundColor: 'green',
        }}
        >
        <i className="fab fa-whatsapp fa-xl"></i>
        </button>
        </>
  )
}

export default WhatsappButton