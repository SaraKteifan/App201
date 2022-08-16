import React, { useEffect, useState } from 'react';

function TopButton() {

    const [dis,setDis]=useState('none');

    // When the user scrolls down 20px from the top of the document, show the button
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setDis("block");
        } else {
            setDis("none");
        }
    }
    
    useEffect(()=>{
        window.onscroll = function() {scrollFunction()};
    },[dis])

    return (
        <>        
        {/* 👇️ scroll to top on button click */}
        <button
        className='btn rounded-circle btn-warning btn-xl border-0'
        onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
        style  ={{
        display        : dis,
        position       : 'fixed',
        bottom         : '40px',
        right          : '40px',
        color          : '#fff',
        textAlign      : 'center',
        }}
        >
        <i className="fa-solid fa-arrow-up fa-xl"></i>
        </button>
        </>
    )
}

export default TopButton