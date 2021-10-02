import React from 'react';
import "../../src/App.css";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="links">
                    <a href="/home">Home</a>
                    <a href="/farmers">Farmers</a>
                    <a href="/events">Events</a>
                    <a href="/Umm">MAYYYYYYBEEEE</a>
                </div>
            </div>
            <div className="reftSide">
                <input type="text" placeholder="search"/>
                <button> Search </button>
            </div>
        </div>
    )
}

export default Navbar
