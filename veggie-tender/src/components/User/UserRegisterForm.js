
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from 'react-router-dom';
// import {checkField, checkEmail, checkAddress, checkState, checkZip } from '../services/FormErrors';


const UserRegStyles = styled.div`
padding-top: 5rem;
    font-size: 1.1rem;

    //form validation
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    
    body {
        
        font-family: 'MontserratRegular';
        font-color: black;
        font-size: 12px;
        background-color: #f4f4f4;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        margin: 0;
    }
    
    .user-form-content {
        margin-left: 25rem;
        justify-content: center;
        background-color: var(--cream);
        padding: 2rem;
        margin: 2rem auto;
        margin-top: -3rem;
        // border: solid 2px;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        width: 25rem;
    }
    
    .form-title {
        font-family: 'MontserratRegular';
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 10px;
    
    }
    
    .form-field {
        margin-bottom: 5px;
    
    }
    
    .form-field label {
        font-family: 'MontserratRegular';
        display: block;
        color: black;
        text-align: left;
        padding-top: 10px;
        padding-left: 15px;
        margin-bottom: 5px;
    }
    
    .form-field input {
        font-family: 'MontserratRegular';
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: white;
        padding: 10px;
        margin-bottom: 5px;
        font-size: 14px;
        display: block;
        width: 100%;
    }
    
    .form-field input:focus {
        outline: none;
    }
    
    .form-field.error input {
        border-color: var(--error-color);
    }
    
    .form-field.success input {
        border-color: var(--success-color);
    }
    
    
    .form-field small {
        font-family: 'MontserratThin'
        color: var(--error-color);
    }
    
    
    /* button */
    .btn-field {
        padding-top: 1rem;
    }
    .btn {
        width: 100%;
        padding: 3%;
        background: var(--terra);
        border-bottom: 2px solid var(--terra);
        border-top-style: none;
        border-right-style: none;
        border-left-style: none;
        border-radius: 5px;
        color: #fff;
        text-transform: uppercase;
        font-family: 'MontserratRegular';
        font-size: 16px;
    }
    
    .btn:hover {
        background: var(--greybrwn);
        border-color: var(--greybrwn);
        cursor: pointer;
    }
    
    .btn:focus {
        outline: none;
    }
`;


const UserRegisterForm = () => {

    let history = useHistory();  //Used to track page route history

    //set state for entered credentials
    const [enteredUserName, setUserName] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [enteredFirstName, setFirstName] = useState('');
    const [enteredLastName, setLastName] = useState('');
    const [enteredEmail, setEmail] = useState('');
    const [enteredAddress, setAddress] = useState('');
    const [enteredCity, setCity] = useState('');
    const [enteredState, setState] = useState('');
    const [enteredZip, setZip] = useState('');



    //handlers for each input field on the form
    const usernameChangeHandler = (event) => {setUserName(event.target.value) };
    const passwordChangeHandler = (event) => {setPassword(event.target.value) };
    const firstNameChangeHandler = (event) => {setFirstName(event.target.value) };
    const lastNameChangeHandler = (event) => {setLastName(event.target.value) };
    const emailChangeHandler = (event) => {setEmail(event.target.value) };
    const addressChangeHandler = (event) => {setAddress(event.target.value) };
    const cityChangeHandler = (event) => {setCity(event.target.value) };
    const stateChangeHandler = (event) => {setState(event.target.value) };
    const zipChangeHandler = (event) => {setZip(event.target.value) };


    const submitHandler = (event) => {
        event.preventDefault();  //prevents form from refreshing after submit

        // checkField(enteredUserName, 3, 'Username must be at least 3 characters.');
        // checkField(enteredPassword, 8, 'Username must be at least 8 characters.');
        // checkField(enteredFirstName, 3, 'First name must be at least 3 characters.');
        // checkField(enteredLastName, 3, 'Last name must be at least 3 characters.');
        // checkEmail(enteredEmail, 'Email is not valid');
        // checkAddress(enteredAddress, 'Address is not valid');
        // checkField(enteredCity, 3, 'City must be at least 3 characters.');
        // checkState(enteredState, 'State is not valid');
        // checkZip(enteredZip, 'Zip is not valid');


        const profileData = {
            userName: enteredUserName,
            password: enteredPassword,
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            address: enteredAddress,
            city: enteredCity,
            state: enteredState,
            zip: enteredZip
        };


        // post to register API to create user 
        axios.post('http://localhost:5000/api/users/register', profileData)

            .then(function (response) {
                if (response.status >= 200 && response.status <= 206) {
                    //redirect to sign in page
                    history.push('/users/login');
                } else {
                    console.log(`error response received: ${response.status} `);
                }
            })
            .catch(function (error) {
                console.log(error);
            });


        setUserName('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setAddress('');
        setCity('');
        setState('');
        setZip('');
    };

    return (
        <UserRegStyles>
            <div className='user-form-content'>
                <form id='userReg' className='form' onSubmit={submitHandler}>
                    <h2 className='form-title'>Register</h2>
                    <div className='form-field'>
                        <label className='form-label'>User Name</label>
                        <input type='text' value={enteredUserName} onChange={usernameChangeHandler} />
                        <small></small>
                    </div>

                    <div className='form-field'>
                        <label className='form-label'>Password</label>
                        <input type='password' className='password' value={enteredPassword} onChange={passwordChangeHandler} />
                        <small></small>
                    </div>

                    <div className='form-field'>
                        <label className='form-label'>FirstName</label>
                        <input type='text' className='firstName' value={enteredFirstName} onChange={firstNameChangeHandler} />
                        <small></small>
                    </div>

                    <div className='form-field'>
                        <label className='form-label'>LastName</label>
                        <input type='text' className='lastName' value={enteredLastName} onChange={lastNameChangeHandler} />
                        <small></small>
                    </div>

                    <div className='form-field'>
                        <label className='form-label'>Email</label>
                        <input type='text' className='email' value={enteredEmail} onChange={emailChangeHandler} />
                        <small></small>
                    </div>

                    <div className='form-field'>
                        <label className='form-label'>Address</label>
                        <input type='text' className='address' value={enteredAddress} onChange={addressChangeHandler} />
                        <small></small>
                    </div>

                    <div className='form-field'>
                        <label className='form-label'>City</label>
                        <input type='text' className='city' value={enteredCity} onChange={cityChangeHandler} />
                        <small></small>
                    </div>

                    <div className='form-field'>
                        <label className='form-label'>State</label>
                        <input type='text' className='state' value={enteredState} onChange={stateChangeHandler} />
                    </div>

                    <div className='form-field'>
                        <label className='form-label'>Zip</label>
                        <input type='text' className='zip' value={enteredZip} onChange={zipChangeHandler} />
                    </div>

                    <div className="btn-field">
                        <button className='btn' type='submit'>Register</button>
                    </div>
                </form>
            </div>
        </UserRegStyles>
    )
};

export default UserRegisterForm;