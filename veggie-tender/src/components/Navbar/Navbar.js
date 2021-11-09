
import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { createBrowserHistory } from "history";
import LoginToggle from './LoginToggle';





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
  
  li{
    display: inline-block; 
    text-decoration: none;
  }
  
  .homeButton{
    font-family: 'OldGrowth';
    margin-top: -1rem;
    float: left;
    padding: 1rem;
  }
  @media only screen and (max-width: 880px){
    .Navbar .leftSide .links a{
      font-size: 25px;
    }

  }
  
  @media only screen and (max-width: 750px){
    .Navbar .leftSide .links a{
      font-size: 20px;
      margin-top: -1.5rem;
    }
  }
  
  @media only screen and (max-width: 650px){
    .Navbar .leftSide .button{
      display: flex;
    }
  
    // .Navbar .leftSide .links{
    //   display: none;
    // }
  
    .Navbar .leftSide .links{
  // position: absolute;
  // left: 0px;
  // top: 50px;
  // height: auto;
  // max-height: 230px;
  // font-size: 25px;
  // width: 130%;
  // background-color: aliceblue;
  // display: flex;
  // flex-direction: colomn;
  // align-items: center;
  
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
            <a href="/" className="homeButton">Veggie tender </a>

          </div>
        </div>

        <div className="rightSide">
          <ul className="buttons">
            <li><LoginToggle className="btn" /></li>

          </ul>
        </div>
      </div>
    </NavbarStyles>
  )
}

export default Navbar
