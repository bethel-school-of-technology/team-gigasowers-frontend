import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckAuth from '../services/CheckAuth';




const LoginToggle = () => {

    let history = useHistory();

    const [loginStatus, setLoginStatus] = useState(false);
    const [userName, setUserName] = useState('');


    useEffect(() => {

        //checkAuth for valid token will go here
        let validToken = CheckAuth();
        if (!validToken) {
            console.log("validToken returned false or undefined");
            setUserName('');
            setLoginStatus(false);
        } else {
            console.log("LoginToggle userName: " + localStorage.getItem("userName"));
            if (localStorage.getItem("userName")) {
                setUserName(localStorage.getItem("userName"));
                setLoginStatus(true);
            }
        }


    });



    //handlers for each input field on the form
    const loginHandler = (event) => {
        //redirect to landing or home page
        history.push('/users/login');
        //setLoginStatus(true);
    };
    const logoutHandler = (event) => {
        //remove local storage items
        setUserName('');
        setLoginStatus(false);
        localStorage.clear();
        history.push('/');
    };


    return (
        <div>
            {loginStatus ?
                <button type="button" onClick={logoutHandler} className="btn btn-info">LogOut</button>
                :
                <button type="button" onClick={loginHandler} className="btn btn-info">LogIn</button>
            }
        </div>
    )
}

export default LoginToggle;


