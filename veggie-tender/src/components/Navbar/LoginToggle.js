import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckAuth from '../../services/CheckAuth';
import styled from "styled-components";

const LoginToggleStyles = styled.div`
ul{ 
    padding: 1rem;

    max-width: 50rem;
    margin-righ: 1rem;
    text-align: center;
        li{
            display: inline-block; 
            border-radius: 8px;
            
        }
    }
.btn1{
  display: inline-block;
  margin: 0 auto;
  color: white;
  padding: 1rem;
  text-decoration: none;
  transition: .3s ease background-color;
                :hover{
                    background-color: var(--dk-green);
                    border-radius: 8px;
                }
}
.btn2{
    display: inline-block;
    margin: 0 auto;
    color: white;
    padding: 1rem;
    text-decoration: none;
    transition: .3s ease background-color;
                :hover{
                    background-color: var(--dk-green);
                    border-radius: 8px;
                }
  }
`;


const LoginToggle = () => {

    let history = useHistory();

    const [loginStatus, setLoginStatus] = useState(false);
    const [farmerStatus, setFarmerStatus] = useState(false);
    const [adminStatus, setAdminStatus] = useState(false);
    const [userName, setUserName] = useState('');


    useEffect(async() => {
        //checkAuth for valid token will go here
        let validToken = await CheckAuth();
        if (!validToken) {
            console.log("Not a validToken");
            setLoginStatus(false);
            setFarmerStatus('');
            setAdminStatus('');
            setUserName('');
            localStorage.clear();
        } else {
            setLoginStatus(true);

            if (localStorage.getItem("userName")) {
                setUserName(localStorage.getItem("userName"));
            }
            if (localStorage.getItem("isFarmer")) {
                console.log("farmer? " + localStorage.getItem("isFarmer"));
                setFarmerStatus(true);
            }
            if (localStorage.getItem("isAdmin")) {
                console.log("Admin? " + localStorage.getItem("isAdmin"));
                setAdminStatus(true);
            }
        }
    }, []);



    //handlers for each input field on the form
    const loginHandler = (event) => {
        //redirect to landing or home page
        history.push('/users/login');
        window.location.reload();
    };
    const logoutHandler = (event) => {
        //remove local storage items
        localStorage.clear();
        setUserName('');
        setLoginStatus(false);
        window.location.reload();
    };
    const profileHandler = (event) => {
        history.push('/users/profile');
        window.location.reload();
    };
    const registerHandler = (event) => {
        history.push('/users/register');
        window.location.reload();
    };



    return (
        <LoginToggleStyles>
            <ul>
                <span>
                    <li>
                        {loginStatus ?
                            <Link type="button" onClick={profileHandler} className="btn1">{userName}</Link>
                            :
                            <Link type="button" onClick={registerHandler} className="btn1">Register</Link>
                        }
                    </li>
                </span>
                <span>
                    <li>
                        {loginStatus ?
                            <Link type="button" onClick={logoutHandler} className="btn2">LogOut</Link>
                            :
                            <Link type="button" onClick={loginHandler} className="btn2">LogIn</Link>
                        }
                    </li>
                </span>
            </ul>
        </LoginToggleStyles>
    )
}

export default LoginToggle;


