
import React from 'react'; //, {useState}
import "../../src/App.css";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//import React from "react";
//import ReactDOM from "react-dom";
//import { Router } from "react-router";
//import { createBrowserHistory } from "history";
import LoginButton from './loginout';


//import ReorderIcon from '@material-ui/icons/Reorder';
//import SearchIcon from '@material-ui/icons/Search';
//import List from './List';
// import LoginForm from './LoginForm';
//import Input from './Input';
// import { Route } from 'react-router';




const NavbarStyles = styled.div`
  *{
    font-family: 'MontserratMedium';
  }
  
  .Navbar .leftSide #hidden{
  margin:10px;
  position: sticky;
  top: 0;
  z-index: 100;

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
    color: white;
    font-size: 25px;
    margin-left: 15px;
  }
  
  .Navbar .reftSide{
    flex: 10%;
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
    background-color: var(--blue-green); 
    display: flex;
  
  }
  
  .Navbar .leftSide{
    flex: 90%;
    padding-top: 20px;
    background-color: var(--blue-green);     /*takeoff later*/
    justify-content: left;
    align-items: center;
  }
  
  .homeButton{
    flex: 0.2;

  }
`;


function Navbar() {

    return (
        <NavbarStyles>
        <div className="Navbar">
            <div className="leftSide">
                <div className="links">
                    <a href="/home" className="homeButton">Home</a>
                    <a href="/events">Events</a>
                </div>
            </div>

            <div className="reftSide">
            <div className="loginbuttons">
              <Link to='/users/login'>
              <button type="button" className="btn btn-info">LogIn</button>
              <LoginButton />
              </Link>
              <Link to='/users/register'>
              <button type="button" className="btn btn-info">Register</button>
              <LoginButton />
              </Link>
            </div>
            </div>
        </div>
        </NavbarStyles>
    )
}

export default Navbar





  //let [items, setItems] = useState([]);
  //let [inputTxt, setInputTxt] = useState("");
  //const history = createBrowserHistory();


  //const[showLinks, setShowLinks] = useState(false);

    // const changeText = (e) =>{
    //   setInputTxt(e.target.value)
    // }

    // const submitInput = (e) => {
    //   let newItems = [...items];
    //   newItems.push({
    //     name: inputTxt,
    //     completed:false
    //   })
    //   setItems(newItems)
    // }

    // const onComplete = (complete, idx) => {
    //   let updatedItems = [...items];

    //   updatedItems[idx].completed = complete
    //   setItems(updatedItems)
      
    //   console.log(items);
    // }

    // <Router>
    //   <Switch>
    //     <Navbar isAuth={loggedIn} />
    //     <Route exact path="/" exact component={Home} />
    //     <Route path="/login" component={Login} />
    //     <PrivateRoute path="/dashboard" component={Dashboard} />
    //   </Switch>
    // </Router>

