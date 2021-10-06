import React, {useState} from 'react';
import "../../src/App.css";
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';

import LoginForm from "./LoginForm"
import { Route } from 'react-router';

function Navbar() {
    const[showLinks, setShowLinks] = useState(false);
    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="links">
                    <a href="/home" id={showLinks ? "hidden" : ""}>Home</a>
                    <a href="/farmers">Farmers</a>
                    <a href="/events">Events</a>
                    <a href="/Umm">MAYYYYYYBEEEE</a>
                </div>
                <button onClick={()=> setShowLinks(!showLinks)}>
                        {" "} 
                        <ReorderIcon/>
                </button>
            </div>
            <div className="reftSide">
                <input type="text" placeholder="search"/>
                {/* <button> <SearchIcon/> </button>
                    var button = document.getElementById('myButton');
                    button.onclick = function() {
                    location.assign('/users/login')
                    }
                <button id="myButton">Visit Website</button> */}
                <button><Route exact path="/" component={LoginForm}>Login</Route></button>
            </div>
        </div>
    )
}

export default Navbar
