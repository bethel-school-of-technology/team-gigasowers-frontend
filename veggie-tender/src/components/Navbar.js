
import React, {useState} from 'react';
import "../../src/App.css";
import ReorderIcon from '@material-ui/icons/Reorder';
//import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import List from './List';
//import Input from './Input';


import LoginForm from "./LoginForm"
import { Route } from 'react-router';


const NavbarStyles = styled.div`
  *{
    font-family: 'MontserratMedium';
  }
  
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
    display: flex;
  
  }
  
  .Navbar .leftSide{
    flex: 65%;
    padding-top: 20px;
    background-color: var(--turq);     /*takeoff later*/
    justify-content: left;
    align-items: center;
  }
  
`;


function Navbar() {

  let [items, setItems] = useState([]);
  let [inputTxt, setInputTxt] = useState("");
  const[showLinks, setShowLinks] = useState(false);

    const changeText = (e) =>{
      setInputTxt(e.target.value)
    }

    const submitInput = (e) => {
      let newItems = [...items];
      newItems.push({
        name: inputTxt,
        completed:false
      })
      setItems(newItems)
    }

    const onComplete = (complete, idx) => {
      let updatedItems = [...items];

      updatedItems[idx].completed = complete
      setItems(updatedItems)
      
      console.log(items);
    }



    return (
        <NavbarStyles>
        <div className="Navbar">
            <div className="leftSide">
                <div className="links">
                    {/* <a href="/" id={showLinks ? "hidden" : ""}>Home</a> */}
                    <a href="/farmers">Farmers</a>
                    <a href="/events">Events</a>
                    <a href="/Umm">MAYYYYYYBEEEE</a>
                </div>
                {/* <button onClick={()=> setShowLinks(!showLinks)}>
                        {" "} 
                        <ReorderIcon/> */}
                {/* </button> */}
            </div>
            <div className="reftSide">
                <input onChange={changeText} onClick={submitInput} placeholder="search" title={'Add Item'}/>
                <List items={items} onComplete={onComplete}/>

                <button><Route exact path="/" component={LoginForm}>Login</Route></button>
            </div>
        </div>
        </NavbarStyles>
    )
}

export default Navbar
