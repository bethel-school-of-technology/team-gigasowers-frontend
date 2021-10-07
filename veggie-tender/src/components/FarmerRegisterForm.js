import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { FormErrors } from '../services/FormErrors';
import axios from "axios";


const FarmerRegStyles = styled.div`
    padding-top: 5rem;
    font-family: 'NunitoRegular';
    font-size: 1.5rem;
`;

class FarmerRegisterForm extends Component() {

    constructor (props){
        super(props);
        this.state = {
            farmName: '',
            farmDetails: '',
            farmAddress: '',
            farmCity: '',
            farmState: '',
            farmZip: '',
            farmWebsite: '',
            farmEmail: '',
            formErrors: { farmName: '',farmDetails: '',farmAddress: '',farmCity: '',farmState: '',farmZip: '',farmWebsite: '',farmEmail: '',},
            farmNameValid: false,
            farmDetailsValid: false,
            farmAddressValid: false,
            farmCityValid: false,
            farmStateValid: false,
            farmZipValid: false,
            farmWebsiteValid: false,
            farmEmailValid: false,
            formValid: false
        }
    }

    handleUserInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                    () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let farmNameValid = this.state.farmNameValid;
        let farmDetailsValid = this.state.farmDetailsValid;
        let farmAddressValid = this.state.farmAddressValid;
        let farmCityValid = this.state.farmCityValid;
        let farmStateValid = this.state.farmStateValid;
        let farmZipValid = this.state.farmZipValid;
        let farmWebsiteValid = this.state.farmWebsiteValid;
        let farmEmailValid = this.state.farmEmailValid;

    switch(fieldName) {
        case 'farmName':
            farmNameValid = value.length < 5;
            fieldValidationErrors.farmName = farmNameValid ? '' : ' is an invalid farm name';
            break;
        case 'farmDetails':
            farmDetailsValid = value.length > 25;
            fieldValidationErrors.farmDetails = farmDetailsValid ? '' : ' -- Tell us more about your farm please';
            break;
        case 'farmAddress':
            farmAddressValid = value.match(/^[a-zA-Z0-9\s,.'-]{3,}$/);
            fieldValidationErrors.farmAddress = farmAddressValid ? '' : ' is an invalid address';
            break;
        case 'farmCity':
            farmCityValid = value.length < 1;
            fieldValidationErrors.farmCity = farmCityValid ? '' : ' is an invalid city';
            break;
        case 'farmState':
            farmStateValid = value.match(/[^,]*[A-Z]{2}/);
            fieldValidationErrors.farmState = farmStateValid ? '' : ' is an invalid state';
            break;
        case 'farmZip':
            farmZipValid = value.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
            fieldValidationErrors.farmZip = farmZipValid ? '' : ' is an invalid zip code';
            break;
        case 'farmWebsite':
            farmWebsiteValid = value.match(/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/);
            fieldValidationErrors.farmWebsite = farmWebsiteValid ? '' : ' is an invalid website';
            break;
        case 'farmEmail':
            farmEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.farmEmail = farmEmailValid ? '' : ' is an invalid email';
            break;
    }
    this.setState({formErrors: fieldValidationErrors, 
        farmNameValid: farmNameValid,
        farmDetailsValid: farmDetailsValid,
        farmAddressValid: farmAddressValid,
        farmCityValid: farmCityValid,
        farmStateValid: farmStateValid,
        farmZipValid: farmZipValid,
        farmWebsiteValid: farmWebsiteValid,
        farmEmailValid: farmEmailValid}, this.validateForm);
    

    validateForm() {
        this.setState({formValid: 
            this.state.farmNameValid && 
            this.state.farmDetailsValid &&
            this.state.farmAddressValid &&
            this.state.farmCityValid &&
            this.state.farmStateValid &&
            this.state.farmZipValid &&
            this.state.farmWebsiteValid &&
            this.state.farmEmailValid 
        })
    }}

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    // axios.put('http://localhost:5000/api/users/farmRegister?id', { 
    //             registerFarmData
    // })

    // const [enteredFarmName, setFarmName] = useState('');
    // const [enteredFarmDetails, setFarmDetails] = useState('');
    // const [enteredFarmAddress, setFarmAddress] = useState('');
    // const [enteredFarmCity, setFarmCity] = useState('');
    // const [enteredFarmState, setFarmState] = useState('');
    // const [enteredFarmZip, setFarmZip] = useState('');
    // const [enteredFarmWebsite, setFarmWebsite] = useState('');
    // const [enteredFarmEmail, setFarmEmail] = useState('');
        
    // const farmNameHandler = (event) => {setFarmName(event.target.value)};
    // const farmDetailsHandler = (event) => {setFarmDetails(event.target.value)};
    // const farmAddressHandler = (event) => {setFarmAddress(event.target.value)};
    // const farmCityHandler = (event) => {setFarmCity(event.target.value)};
    // const farmStateHandler = (event) => {setFarmState(event.target.value)};
    // const farmZipHandler = (event) => {setFarmZip(event.target.value)};
    // const farmWebsiteHandler = (event) => {setFarmWebsite(event.target.value)};
    // const farmEmailHandler = (event) => {setFarmEmail(event.target.value)};


    // const registerFarmData = {
    //         farmName: enteredFarmName,
    //         farmDetails: enteredFarmDetails,
    //         farmAddress: enteredFarmAddress,
    //         farmCity: enteredFarmCity,
    //         farmState: enteredFarmState,
    //         farmZip: enteredFarmZip,
    //         farmWebsite: enteredFarmWebsite,
    //         farmEmail: enteredFarmEmail
    //         };



            // .then(function (response) {
            //     console.log(response.status);
            //     if (response.status >= 200 && response.status < 300) {
            //         console.log("directing to farm profile");
            //         history.push('/users/farmProfile/:farmId', { userName: response.data.userName });
            // } else {
            //     // setShowError(true);
            //     // setShowError('Unable to register farm.')
            //     // console.log(`Unable to register farm: ${response.status} `);
            // }

            // })
            // .catch(function (error) {
            // // errorHandler(error.message);
            // });

                
};

    return (
        <FarmerRegStyles>
        <div className='farmer-form-content'>
            <form className='form' onSubmit={submitHandler}>
                <h2>Register Your Farm:</h2>
                <div className={`form-group ${this.errorClass(this.state.formErrors.farmName)}`}>
                    <label className='form-label'>Farm Name:
                        <input type='text'
                        className='farmName'  
                        placeholder='Name of your farm'
                        value={this.state.farmName} 
                        onChange={this.handleUserInput}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className={`form-group ${this.errorClass(this.state.formErrors.farmDetails)}`}>Farm Details:
                        <input type='text' 
                        className='farmDetails' 
                        placeholder='Tell us about your farm!'
                        value={this.state.FarmDetails} 
                        onChange={this.handleUserInput}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className={`form-group ${this.errorClass(this.state.formErrors.farmAddress)}`}>Farm Address:
                        <input type='text' 
                        className='farmAddress' 
                        placeholder='Where is your farm?'
                        value={this.state.FarmAddress} 
                        onChange={this.handleUserInput}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className={`form-group ${this.errorClass(this.state.formErrors.farmCity)}`}>City:
                        <input type='text' 
                        className='farmCity' 
                        placeholder='City'
                        value={this.state.FarmCity} 
                        onChange={this.handleUserInput}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className={`form-group ${this.errorClass(this.state.formErrors.farmState)}`}>State:
                        <input type='text' 
                        className='farmState' 
                        placeholder='State'
                        value={this.state.FarmState} 
                        onChange={this.handleUserInput}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className={`form-group ${this.errorClass(this.state.formErrors.farmZip)}`}>Zip:
                        <input type='text' 
                        className='farmZip' 
                        placeholder='Zip Code'
                        value={this.state.FarmZip} 
                        onChange={this.handleUserInput}
                        />
                    </label>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.farmWebsite)}`}>
                    <label className='form-label'>Farm Website:
                        <input type='text' 
                        className='farmWebsite' 
                        placeholder='Website'
                        value={this.state.FarmWebsite} 
                        onChange={this.handleUserInput}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label className={`form-group ${this.errorClass(this.state.formErrors.farmEmail)}`}>Farm Email:
                        <input type='text' 
                        className='farmEmail' 
                        placeholder='Email'
                        value={this.state.FarmEmail} 
                        onChange={this.handleUserInput}
                        />
                    </label>
                </div>
                <div className='register'>
                    <button type='submit' disabled={!this.state.formValid}>Register</button>
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
            </form>
        </div>
        </FarmerRegStyles>
    );