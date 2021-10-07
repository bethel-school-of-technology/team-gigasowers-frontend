// import React, {useState} from 'react';
import styled from 'styled-components';
import "../../src/App.css";
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

import LoginForm from "./LoginForm"
import { Route } from 'react-router';


const NavbarStyles = styled.div`

  
  .Navbar .leftSide #hidden{
  margin:10px;
  
  
  }
  /* .Navbar .leftSide .links{
    display: none;
  } */
  
  .Navbar .leftSide .button{
    max-height: 80px;
    margin-left: 20px;
  }
  
  .Navbar .leftSide #hidden{
    display: flex;
  }
  
  .Navbar .leftSide .links a {
    text-decoration: none;
    color: aliceblue;
    font-size: 25px;
    margin-left: 15px;
  }
  
  .Navbar .reftSide{
    flex: 35%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 25px;
  }
  
  .reftSide input {
    width: 220px;
    height: 30px;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    padding-left: 15px;
    color: bisque;
  }
  
  .reftSide button {
    height: 32px;
    width: 70px;
    font-size: 16px;
  }

  button:hover{
    cursor: pointer;
  }
  
  .Navbar{
  
    width: 100%;
    height: 80px;
    background-color: #a0db8d;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
  
  }
  
  .Navbar .leftSide{
    flex: 65%;
    background-color: #61dafb;     /*takeoff later*/
    justify-content: left;
    align-items: center;
  }
  
`;


const NavbarStyles = styled.div`

`;

function Navbar() {
    // const[showLinks, setShowLinks] = useState(false);
    return (
        <NavbarStyles>
        <div className="Navbar">
            <div className="leftSide">
                <div className="links">
                    <a href="/" id={showLinks ? "hidden" : ""}>Home</a>
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
        </NavbarStyles>
    )
}

export default Navbar
