import React, { useState } from 'react';
import styled from 'styled-components';
import axios from "axios";


const FarmerRegStyles = styled.div`
    padding-top: 5rem;
    font-family: 'NunitoRegular';
    font-size: 1.5rem;
`;

export default function FarmerRegisterForm() {

    //set state for entered information
    const [enteredFarmName, setFarmName] = useState('');
    const [enteredFarmDetails, setFarmDetails] = useState('');
    const [enteredFarmAddress, setFarmAddress] = useState('');
    const [enteredFarmCity, setFarmCity] = useState('');
    const [enteredFarmState, setFarmState] = useState('');
    const [enteredFarmZip, setFarmZip] = useState('');
    const [enteredFarmWebsite, setFarmWebsite] = useState('');
    const [enteredFarmEmail, setFarmEmail] = useState('');
    // let [showError, setShowError] = useState(false);
    // let [formErrors, setFormErrors] = useState('');


    // const formErrorHandler = (formErrorMsg) => {
    //     //useState
    //     setShowError(true);

    // };

    const farmNameHandler = (event) => { setFarmName(event.target.value) };
    const farmDetailsHandler = (event) => { setFarmDetails(event.target.value) };
    const farmAddressHandler = (event) => { setFarmAddress(event.target.value) };
    const farmCityHandler = (event) => { setFarmCity(event.target.value) };
    const farmStateHandler = (event) => { setFarmState(event.target.value) };
    const farmZipHandler = (event) => { setFarmZip(event.target.value) };
    const farmWebsiteHandler = (event) => { setFarmWebsite(event.target.value) };
    const farmEmailHandler = (event) => { setFarmEmail(event.target.value) };


    const submitHandler = (event) => {
        event.preventDefault();


        const profileData = {
            farmName: enteredFarmName,
            farmDetails: enteredFarmDetails,
            farmAddress: enteredFarmAddress,
            farmCity: enteredFarmCity,
            farmState: enteredFarmState,
            farmZip: enteredFarmZip,
            farmWebsite: enteredFarmWebsite,
            farmEmail: enteredFarmEmail
        };

        // if (formErrorHandler === true) {
        //     FormErrors.push(msg);
        //     return;
        // } 

        // formErrors(profileData);


        axios.put('http://localhost:5000/api/users/update', {
            profileData
        })
            .then(function (response) {
                console.log(response.status);
                if (response.status >= 200 && response.status < 300) {
                    console.log("directing to farm profile");
                    // history.push('/users/farmProfile/:farmId', { userName: response.data.userName });
                }
                    else {
                        // setShowError(true);
                        // setFormErrors('Unable to register farm.')
                        console.log(`Unable to register farm: ${response.status} `);
                    }

                })
                .catch(function (error) {
                    // formErrorHandler(error.message);
                });

                setFarmName('');
                setFarmDetails('');
                setFarmAddress('');
                setFarmCity('');
                setFarmState('');
                setFarmZip('');
                setFarmWebsite('');
                setFarmEmail('');
            }
        

    return (
        <FarmerRegStyles>
            <div className='farmer-form-content'>
                <form id='farmReg' className='form' onSubmit={submitHandler}>
                    <h2>Register Your Farm:</h2>
                    <div className='form-field'>
                        <label className='form-label'>Farm Name:</label>
                        <input type='text'
                            className='farmName'
                            placeholder='Name of your farm'
                            value={enteredFarmName}
                            onChange={farmNameHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>Farm Details:</label>
                        <input type='text'
                            className='farmDetails'
                            placeholder='Tell us about your farm!'
                            value={enteredFarmDetails}
                            onChange={farmDetailsHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>Farm Address:</label>
                        <input type='text'
                            className='farmAddress'
                            placeholder='Where is your farm?'
                            value={enteredFarmAddress}
                            onChange={farmAddressHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>City:</label>
                        <input type='text'
                            className='farmCity'
                            placeholder='City'
                            value={enteredFarmCity}
                            onChange={farmCityHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>State:</label>
                        <input type='text'
                            className='farmState'
                            placeholder='State Abbrev'
                            value={enteredFarmState}
                            onChange={farmStateHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>Zip:</label>
                        <input type='text'
                            className='farmZip'
                            placeholder='Zip Code'
                            value={enteredFarmZip}
                            onChange={farmZipHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>Farm Website:</label>
                        <input type='text'
                            className='farmWebsite'
                            placeholder='Website'
                            value={enteredFarmWebsite}
                            onChange={farmWebsiteHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <label className='form-label'>Farm Email:</label>
                        <input type='text'
                            className='farmEmail'
                            placeholder='Email'
                            value={enteredFarmEmail}
                            onChange={farmEmailHandler}
                        />
                        <small></small>
                    </div>
                    <div className='form-field'>
                        <button type='submit'>Register</button>
                    </div>
                </form>
            </div>
        </FarmerRegStyles>
    )
}

