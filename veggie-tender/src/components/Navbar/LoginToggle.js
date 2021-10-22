import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckAuth from '../../services/CheckAuth';




const LoginToggle = () => {

    let history = useHistory();

    const [loginStatus, setLoginStatus] = useState(false);
    const [farmerStatus, setFarmerStatus] = useState(false);
    const [adminStatus, setAdminStatus] = useState(false);
    const [userName, setUserName] = useState('');


    useEffect(async () => {
        //checkAuth for valid token will go here
        let validToken = await CheckAuth();
        if (!validToken) {
            console.log("validToken returned false or undefined");
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
        <div>
            <span>
                {loginStatus ?
                    <Link type="button" onClick={profileHandler} className="btn">{userName}</Link>
                    :
                    <Link type="button" onClick={registerHandler} className="btn">Register</Link>
                }
            </span>
            <span>
                {loginStatus ?
                    <Link type="button" onClick={logoutHandler} className="btn">LogOut</Link>
                    :
                    <Link type="button" onClick={loginHandler} className="btn">LogIn</Link>
                }
            </span>
        </div>
    )
}

export default LoginToggle;


