// import React, {useState} from 'react';
import styled from 'styled-components';
import "../../src/App.css";

const NavbarStyles = styled.div`

`;

function Navbar() {
    // const[showLinks, setShowLinks] = useState(false);
    return (
        <NavbarStyles>
        <div className="Navbar">
            <div className="leftSide">
                <div className="links">
                    <a href="/home">Home</a>
                    <a href="/farmers">Farmers</a>
                    <a href="/events">Events</a>
                    <a href="/Umm">MAYYYYYYBEEEE</a>
                    <button> Button </button>
                </div>
            </div>
            <div className="reftSide">
                <input type="text" placeholder="search"/>
                <button> Search </button>
            </div>
        </div>
        </NavbarStyles>
    )
}

export default Navbar
