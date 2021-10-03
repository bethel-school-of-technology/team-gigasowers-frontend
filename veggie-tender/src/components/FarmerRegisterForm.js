import React, { useState } from 'react'
import styled from 'styled-components';
import axios from "axios";

const FarmerRegStyles = styled.div`
    padding-top: 5rem;
    font-family: 'NunitoRegular';
    font-size: 1.5rem;
`;

export default function FarmerRegisterForm() {
    
    const [enteredFarmName, setFarmName] = useState('');
    const [enteredFarmDetails, setFarmDetails] = useState('');
    const [enteredFarmAddress, setFarmAddress] = useState('');
    const [enteredFarmCity, setFarmCity] = useState('');
    const [enteredFarmState, setFarmState] = useState('');
    const [enteredFarmZip, setFarmZip] = useState('');
    const [enteredFarmWebsite, setFarmWebsite] = useState('');
    const [enteredFarmEmail, setFarmEmail] = useState('');
        
    const farmNameHandler = (event) => {
        setFarmName(event.target.value);
    };
    const farmDetailsHandler = (event) => {
        setFarmDetails(event.target.value);
    };
    const farmAddressHandler = (event) => {
        setFarmAddress(event.target.value);
    };
    const farmCityHandler = (event) => {
        setFarmCity(event.target.value);
    };
    const farmStateHandler = (event) => {
        setFarmState(event.target.value);
    };
    const farmZipHandler = (event) => {
        setFarmZip(event.target.value);
    };
    const farmWebsiteHandler = (event) => {
        setFarmWebsite(event.target.value);
    };
    const farmEmailHandler = (event) => {
        setFarmEmail(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();  //prevents form from refreshing after submit

        const registerFarmData = {
            farmName: enteredFarmName,
            farmDetails: enteredFarmDetails,
            farmAddress: enteredFarmAddress,
            farmCity: enteredFarmCity,
            farmState: enteredFarmState,
            farmZip: enteredFarmZip,
            farmWebsite: enteredFarmWebsite,
            farmEmail: enteredFarmEmail

        };
    
        console.log(`Login farmName from Form: ${registerFarmData.farmName}`);
        console.log(`Login farmDetails from Form: ${registerFarmData.farmDetails}`);
        console.log(`Login farmAddress from Form: ${registerFarmData.farmAddress}`);
        console.log(`Login farmCity from Form: ${registerFarmData.farmCity}`);
        console.log(`Login farmState from Form: ${registerFarmData.farmState}`);
        console.log(`Login farmZip from Form: ${registerFarmData.farmZip}`);
        console.log(`Login farmWebsite from Form: ${registerFarmData.farmWebsite}`);
        console.log(`Login farmEmail from Form: ${registerFarmData.farmEmail}`);

        axios.put('http://localhost:5000/api/users/farmRegister', { 
            registerFarmData
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          setFarmName('');
          setFarmDetails('');
          setFarmAddress('');
          setFarmCity('');
          setFarmState('');
          setFarmZip('');
          setFarmWebsite('');
          setFarmEmail('');
    };

    return (
        <FarmerRegStyles>
        <div className='farmer-form-content'>
            <form className='form' onSubmit={submitHandler}>
                <h2>Register Your Farm:</h2>
                <div className='form-inputs'>
                    <label className='form-label'>Farm Name:
                        <input type='text'
                        className='farmName'  
                        placeholder='Name of your farm'
                        value={enteredFarmName} 
                        onChange={farmNameHandler}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Farm Details:
                        <input type='text' 
                        className='farmDetails' 
                        placeholder='Tell us about your farm!'
                        value={enteredFarmDetails} 
                        onChange={farmDetailsHandler}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Farm Address:
                        <input type='text' 
                        className='farmAddress' 
                        placeholder='Where is your farm?'
                        value={enteredFarmAddress} 
                        onChange={farmAddressHandler}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>City:
                        <input type='text' 
                        className='farmCity' 
                        placeholder='City'
                        value={enteredFarmCity} 
                        onChange={farmCityHandler}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>State:
                        <input type='text' 
                        className='farmState' 
                        placeholder='State'
                        value={enteredFarmState} 
                        onChange={farmStateHandler}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Zip:
                        <input type='text' 
                        className='farmZip' 
                        placeholder='Zip Code'
                        value={enteredFarmZip} 
                        onChange={farmZipHandler}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Farm Website:
                        <input type='text' 
                        className='farmWebsite' 
                        placeholder='Website'
                        value={enteredFarmWebsite} 
                        onChange={farmWebsiteHandler}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Farm Email:
                        <input type='text' 
                        className='farmEmail' 
                        placeholder='Email'
                        value={enteredFarmEmail} 
                        onChange={farmEmailHandler}
                        />
                    </label>
                </div>
                <div className="">
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
        </FarmerRegStyles>
    )
};