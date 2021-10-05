
import React, { useState } from 'react';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import ErrorMessage from '../services/ErrorMessage';
import './LoginForm.css';



const LoginForm = () => {

    let history = useHistory();  //Used to track page route history

    //set state for entered credentials
    const [enteredUserName, setUserName] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [errCode, setErrorCode] = useState('');


    //Error Code Handler
    const errorCodeHandler = (errMsg) => {

        setShowError(true);

        let errNumb = errMsg.match(/\d/g).join("");  //extracts the error code out of the error msg
        switch (errNumb) {
            case '403':
                setErrorCode('403');
                break;
            case '404':
                setErrorCode('404');
                break;
            case '423':
                console.log("errNumb: " + errNumb);
                setErrorCode('423');
                break;
            case '424':
                console.log("errNumb: " + errNumb);
                setErrorCode('424');
                break;
            default:
                setErrorCode('400');
        }

    };


    //handlers for each input field on the form
    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };



    const submitHandler = (event) => {
        event.preventDefault();  //prevents form from refreshing after submit

        const loginData = {
            userName: enteredUserName,
            userPass: enteredPassword
        };

     
        if (!loginData.userName || loginData.userName.trim().length === 0) {
            errorCodeHandler('User Name Required - 423');
            return;
        };
        if (!loginData.userPass || loginData.userPass.trim().length === 0) { 
            errorCodeHandler('Password Required - 424'); 
            return;
        };

        //post to login in API to get user 
        axios.post('http://localhost:5000/api/users/login', {
            loginData
        })
            .then(function (response) {
                console.log(response.status);
                if (response.status >= 200 && response.status < 300) {
                    console.log("redirecting push to home page");
                    history.push('/', { userName: response.data.userName });
                } else {
                    setShowError = true;
                    setErrorCode = response.status;
                    console.log(`error response received: ${response.status} `);
                }

            })
            .catch(function (error) {
                errorCodeHandler(error.message);
            });


        setUserName('');
        setPassword('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='login-shell'>
                <div >
                    <h1>Login</h1>
                    <div className='login__controls'>
                        <div className='login__control'>
                            <label>User Name</label>
                            <input type='text' value={enteredUserName} onChange={usernameChangeHandler} />
                        </div>
                        <div className='login__control'>
                            <label>Password</label>
                            <input type='password' value={enteredPassword} onChange={passwordChangeHandler} />
                        </div>
                    </div>
                </div>
                <div className="login__actions">
                    <button type='submit'>Login</button>
                    {showError ? <ErrorMessage errorCode={errCode} /> : null}
                </div>
                <div className='login__control'>
                    <label>Don't have an account?</label>
                    <Link to="/users/register">Create your account</Link>
                </div>
            </div>
        </form>
    )
};

export default LoginForm;