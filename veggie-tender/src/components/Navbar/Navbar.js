
import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { createBrowserHistory } from "history";
// import kingyo from '../../assets/images/kingyo.png';
// import LoginForm from './LoginForm';
import LoginToggle from './LoginToggle';
import ProfileToggle from './ProfileToggle';
import FarmToggle from './FarmToggle';
// import { useLayoutEffect } from 'react';




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
  
  .Navbar .rightSide{
    width: 500px;
    display: flex;
    justify-content: flex-end;
    
  }
  
  .rightSide input {
    width: 220px;
    height: 30px;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    padding-left: 15px;
    color: bisque;
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
    flex: 65%;
    padding-top: 20px;
    background-color: var(--blue-green);     /*takeoff later*/
    justify-content: left;
    align-items: center;
  }
  .button{
 
  }
  ul{ 
      padding-top: 1rem;
      max-width: 50rem;
      margin: 0 auto;
        text-align: center;
        li{
            
            display: inline-block; 
            border-radius: 8px;
            transition: .3s ease background-color;
            :hover{
                background-color: var(--dk-green);
            }
        }
    }
  .btn{
    display: inline-block;
    margin: 0 auto;
    color: white;
    padding: 1rem;
    text-decoration: none;

  }
  
  .homeButton{
    font-family: 'OldGrowth';
    margin-top: -1rem;
    float: left;
    padding: 1rem;
  }


`;


function Navbar() {

  // let [items, setItems] = useState([]);
  // let [inputTxt, setInputTxt] = useState("");
  //const history = createBrowserHistory();


  //const[showLinks, setShowLinks] = useState(false);

  // const changeText = (e) => {
  //   setInputTxt(e.target.value)
  // }

  // const submitInput = (e) => {
  //   let newItems = [...items];
  //   newItems.push({
  //     name: inputTxt,
  //     completed: false
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





  return (
    <NavbarStyles>
      <div className="Navbar">
        <div className="leftSide">
          <div className="links">
            <a href="/" className="homeButton">Veggie tender</a>
            {/* <a href="/home"><img className="homeButton" src={kingyo} alt="Logo"/></a> */}
            {/* <a href="/" id={showLinks ? "hidden" : ""}>Home</a> */}
            {/* <a href="/farmers">Farmers</a>
                    <a href="/events">Events</a> */}
          </div>
        </div>

        <div className="rightSide">
          <ul className="buttons">
            {/* <li><ProfileToggle className="btn"/></li> */}
            <li><LoginToggle className="btn" /></li>
            {/* <li><FarmToggle className="btn" /></li> */}
          </ul>
        </div>
      </div>
    </NavbarStyles>
  )
}

export default Navbar
