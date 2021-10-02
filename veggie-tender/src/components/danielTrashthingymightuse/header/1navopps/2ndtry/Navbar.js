import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navBar">
                <div className = "navBarContainer">
                    <link to="/" className="navBar-logo">
                        TRVL <i className='fab.fa-typo3' /> 
                        
                    </link>
                </div>
            </nav>
        </>
    )
}

export default Navbar

