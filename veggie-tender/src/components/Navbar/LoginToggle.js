import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckAuth from '../../services/CheckAuth';




const LoginToggle = () => {

    let history = useHistory();

    const [loginStatus, setLoginStatus] = useState(false);
    const [userName, setUserName] = useState('');


    useEffect(async () => {
        //checkAuth for valid token will go here
        let validToken = await CheckAuth();
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


    return (
        <div>
            {loginStatus ?
                <Link type="button" onClick={logoutHandler} className="btn">LogOut</Link>
                :
                <Link type="button" onClick={loginHandler} className="btn">LogIn</Link>
            }
        </div>
    )
}

export default LoginToggle;


