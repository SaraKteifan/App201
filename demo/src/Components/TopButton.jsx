import React from 'react';

function TopButton(props) {

    return (
        <>        
        {/* 👇️ scroll to top on button click */}
        <button
        className='btn rounded-circle btn-xl border-0 up'
        onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
        style  ={{
        display        : props.dis,
        position       : 'fixed',
        bottom         : '40px',
        right          : '40px',
        color          : '#fff',
        textAlign      : 'center',
        backgroundColor: '#FCC719',
        zIndex         : 999,
        }}
        >
        <i className="fa-solid fa-angles-up"></i>
        </button>
        </>
    )
}

export default TopButton