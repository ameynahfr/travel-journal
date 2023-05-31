import React from 'react';
import globe from './globe.png';



export default function Navbar() {
    return(
        <div className='navbar'>
            <nav>
                <img id="globe" src={globe} alt='globe'/>
                <p id="journal">MY TRAVEL JOURNAL</p>
            </nav>
        </div>
    )
}