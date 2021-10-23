
import React, { useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
//import { useLocation } from 'react-router-dom';
//import ErrorMessage from '../services/ErrorMessage';

const LoginFormStyles = styled.div`
font-family: 'MontserratMedium';

.title{
    text-transform: uppercase;
    font-size: 1.75rem;
}

.login-form-content {
    min-height: 100vh;
}


.login-shell {
    background-color: var(--cream);
    padding: 1rem;
    margin: 2rem auto;
    width: 25rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}
.login__controls {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
    margin-top: 2rem;
    text-align: left;
}
.login__control label {
    font-family: 'MontserratRegular';
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    display: block;
} 
.login__control input {
    font-family: 'MontserratRegular';
    padding: .5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
    text-align: left;
    margin-left: 0.3rem;
}
.login__actions {
    text-align: center;
}

.login-shell button {
    font-family: 'MontserratRegular';
    font-size: 16px;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid var(--terra);
    background-color: var(--terra);
    color: white;
    border-radius: 12px;
    /* margin-right: 1rem; */
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
}

.login-shell button:hover,
.login-shell button:active {
    background-color: var(--greybrwn);
    border-color: var(--greybrwn);
}
.login-shell button.alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;
}

.login-shell button.alternative:hover,
.login-shell button.alternative:active {
    background-color: #ddb3f8;
}
`;

const LoginForm = () => {

   // const location = useLocation();
    //const referer = location.state && location.state.referer;
    //console.log("referer: " + referer);

    let history = useHistory();  //Used to track page route history

    //set state for entered credentials
    const [enteredUserName, setUserName] = useState('');
    const [enteredPassword, setPassword] = useState('');
   // let [showError, setShowError] = useState(false);
   // let [errCode, setErrorCode] = useState('');



    //Error Code Handler
    //const errorCodeHandler = (errMsg) => {

        //setShowError(true);

    //     let errNumb = errMsg.match(/\d/g).join("");  //extracts the error code out of the error msg
    //     switch (errNumb) {
    //         case '403':
    //             setErrorCode('403');
    //             break;
    //         case '404':
    //             setErrorCode('404');
    //             break;
    //         case '423':
    //             console.log("errNumb: " + errNumb);
    //             setErrorCode('423');
    //             break;
    //         case '424':
    //             console.log("errNumb: " + errNumb);
    //             setErrorCode('424');
    //             break;
    //         default:
    //             setErrorCode('400');
    //     }

    //};


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


        // if (!loginData.userName || loginData.userName.trim().length === 0) {
        //     errorCodeHandler('User Name Required - 423');
        //     return;
        // };
        // if (!loginData.userPass || loginData.userPass.trim().length === 0) {
        //     errorCodeHandler('Password Required - 424');
        //     return;
        // };

        //post to login in API to auth user and get token
        axios.post('http://localhost:5000/api/users/login', loginData)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    //set into local storage 
                    localStorage.setItem("vegToken", response.data.jwt);
                    localStorage.setItem("userId", response.data.userId);
                    localStorage.setItem("userName", response.data.userName);
                    localStorage.setItem("isFarmer", response.data.isFarmer);
                    localStorage.setItem("isAdmin", response.data.isAdmin);

                    //redirect to landing or home page
                    history.push('/');
                } else {
                    //setShowError = true;
                   // setErrorCode = response.status;
                    console.log(`error response received: ${response.status} `);
                }

            })
            .catch(function (error) {
                //errorCodeHandler(error.message);
                console.log(error);
            });


        setUserName('');
        setPassword('');
    };

    return (
        <LoginFormStyles>
            <div className='login-form-content'>
            <form onSubmit={submitHandler}>
                <div className='login-shell'>
                    <div >
                        <h1 className='title'>Login</h1>
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
                        {/* {showError ? <ErrorMessage errorCode={errCode} /> : null} */}
                    </div>
                    <div className='login__control'>
                        <label>Don't have an account?</label>
                        <Link to="/users/register">Create your account</Link>
                    </div>
                </div>
            </form>
            </div>
        </LoginFormStyles>
    )
};

export default LoginForm;