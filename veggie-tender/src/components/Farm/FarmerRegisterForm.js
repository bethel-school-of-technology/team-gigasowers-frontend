import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import CheckAuth from '../../services/CheckAuth';
// import { checkField, checkEmail, checkAddress, checkState, checkZip, checkWebsite } from '../services/FormErrors';


const FarmerRegStyles = styled.div`
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
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        margin: 0;
    }
    
    .farmer-form-content {
        margin-left: 25rem;
        justify-content: center;
        background-color: var(--cream);
        padding: 2rem;
        margin: 2rem auto;
        margin-top: -3rem;
        // border: solid 2px;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        width: 26rem;
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
        background-color: var(--greybrwn);
        border-color: var(--greybrwn);
        cursor: pointer;
    }
    
    .btn:focus {
        outline: none;
    }
`;

export default function FarmerRegisterForm() {

    let history = useHistory();  //Used to track page route history

    useEffect(async () => {
        //checkAuth for valid token 
        let validToken = await CheckAuth();
        if (!validToken) {
            console.log("Not a validToken");
            history.push('/users/login');
        }
    }, []);

  

    //set state for entered information
    const [enteredFarmName, setFarmName] = useState('');
    const [enteredFarmDescription, setFarmDescription] = useState('');
    const [enteredFarmAddress, setFarmAddress] = useState('');
    const [enteredFarmCity, setFarmCity] = useState('');
    const [enteredFarmState, setFarmState] = useState('');
    const [enteredFarmZip, setFarmZip] = useState('');
    const [enteredFarmWebsite, setFarmWebsite] = useState('');
    const [enteredFarmEmail, setFarmEmail] = useState('');
    const [isFarmer, setIsFarmer] = useState('');
    // let [showError, setShowError] = useState(false);
    // let [formErrors, setFormErrors] = useState('');


    const farmNameHandler = (event) => { setFarmName(event.target.value) };
    const farmDescriptionHandler = (event) => { setFarmDescription(event.target.value) };
    const farmAddressHandler = (event) => { setFarmAddress(event.target.value) };
    const farmCityHandler = (event) => { setFarmCity(event.target.value) };
    const farmStateHandler = (event) => { setFarmState(event.target.value) };
    const farmZipHandler = (event) => { setFarmZip(event.target.value) };
    const farmWebsiteHandler = (event) => { setFarmWebsite(event.target.value) };
    const farmEmailHandler = (event) => { setFarmEmail(event.target.value) };

    const submitHandler = (event) => {
        event.preventDefault();

        // checkField(enteredFarmName, 3, 'Farm name must be at least 3 characters');
        // checkField(enteredFarmDetails, 15, 'Farm details must be at least 8 characters');
        // checkAddress(enteredFarmAddress, 'Address is not valid');
        // checkField(enteredFarmCity, 3, 'City must be at least 3 characters.');
        // checkState(enteredFarmState, 'State is not valid');
        // checkZip(enteredFarmZip, 'Zip is not valid');
        // checkWebsite(enteredFarmWebsite, 'Website is not valid');
        // checkEmail(enteredFarmEmail, 'Email is not valid');

        const profileData = {
            farmId: "1",
            farmName: enteredFarmName,
            farmDescription: enteredFarmDescription,
            farmAddress: enteredFarmAddress,
            farmCity: enteredFarmCity,
            farmState: enteredFarmState,
            farmZip: enteredFarmZip,
            farmWebsite: enteredFarmWebsite,
            farmEmail: enteredFarmEmail,
            isFarmer: true
        };


        //set JWT token into header for server side authentication
        let myHeaders = {
            'Authorization': `Bearer ${localStorage.getItem("vegToken")}`,
            'Content-Type': 'application/json'

        };

        axios.put('http://localhost:5000/api/users/update', profileData,
            { 'headers': myHeaders })
            .then(function (response) {
                console.log(response.status);
                if (response.status === 401) {
                    console.log("No token or must be logged in");
                    console.log(response.status.message);
                    history.push('/users/login');
                }
                if (response.status === 200) {
                    console.log("directing to farm profile");
                    history.push('/users/farmProfile/');
                }
                else {
                    // setShowError(true);
                    // setFormErrors('Unable to register farm.')
                    console.log(`Unable to register farm: ${response.status} `);
                }

            })
            .catch(function (error) {
                // formErrorHandler(error.message);
                console.log(`Unable to register farm: ${error.status} `);
            });

        setFarmName('');
        setFarmDescription('');
        setFarmAddress('');
        setFarmCity('');
        setFarmState('');
        setFarmZip('');
        setFarmWebsite('');
        setFarmEmail('');
        setIsFarmer(true);
    }


    return (
        <FarmerRegStyles>

            <div className='farmer-form-content'>
                <form id='farmReg' className='form' onSubmit={submitHandler}>
                    <h2 className='form-title'>- Register Your Farm -</h2>
                    <div className='form-field'>
                        <label className='form-label'>Farm Name</label>
                        <input type='text'
                            className='farmName'
                            placeholder='Name of your farm'
                            value={enteredFarmName}
                            onChange={farmNameHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>Farm Details</label>
                        <input type='text'
                            className='farmDetails'
                            placeholder='Tell us about your farm!'
                            value={enteredFarmDescription}
                            onChange={farmDescriptionHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>Farm Address</label>
                        <input type='text'
                            className='farmAddress'
                            placeholder='Where is your farm?'
                            value={enteredFarmAddress}
                            onChange={farmAddressHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>City</label>
                        <input type='text'
                            className='farmCity'
                            placeholder='City'
                            value={enteredFarmCity}
                            onChange={farmCityHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>State</label>
                        <input type='text'
                            className='farmState'
                            placeholder='State Abbrev'
                            value={enteredFarmState}
                            onChange={farmStateHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>Zip</label>
                        <input type='text'
                            className='farmZip'
                            placeholder='Zip Code'
                            value={enteredFarmZip}
                            onChange={farmZipHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>Farm Website</label>
                        <input type='text'
                            className='farmWebsite'
                            placeholder='Website'
                            value={enteredFarmWebsite}
                            onChange={farmWebsiteHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>Farm Email</label>
                        <input type='text'
                            className='farmEmail'
                            placeholder='Email'
                            value={enteredFarmEmail}
                            onChange={farmEmailHandler}
                        />
                        <small></small>
                    </div>
                    <div className='btn-field'>
                        <button className='btn' type='submit'>Register</button>
                    </div>
                </form>
            </div>

        </FarmerRegStyles>
    )
}

