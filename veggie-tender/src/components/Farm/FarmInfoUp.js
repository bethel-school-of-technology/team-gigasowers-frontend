import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import CheckAuth from '../../services/CheckAuth';


const FarmUpdateStyles = styled.div`
font-family: 'MontserratRegular';
* {
    box-sizing: border-box;
}

body {
    font-family: 'MontserratRegular';
    font-color: black;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 100vh;

}

.container {
        justify-content: center;
        height: 600px;
        max-width: 800px;
        background-color: var(--cream);
        padding: 1em;
        margin: 2rem auto;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        width: 85%;
}
.image_float {
    float: left;
    width: 35%;
    margin-left: 1rem;
    display: flex;
    flex-wrap: wrap;
}

.farmImage {
    margin: 2rem auto;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 5px dashed var(--terra);
    background-color: grey; 
}
.info_float {
    float: right;
    height: 95%;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
}
.farmInfoUpdate{
    margin-top: 1rem auto;
    width: 100%;
    height: 100%;
    background-color: var(--cream);
    border: 5px solid var(--coral);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
}

.form-field label {
    font-family: 'MontserratRegular';
    display: block;
    color: black;
    text-align: left;
    padding-left: 15px;
    margin-top: 5px;
}

.form-field input {
    font-family: 'MontserratRegular';
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    padding: 5px;
    font-size: 14px;
    display: block;
    width: 95%;
}

.h2 {
    font-size: 1.5rem;
}
.addressDetails {
    float: right;
    display: flex;
    flex-wrap: wrap;
}
.farmZip {
    float: right;
    display: flex;
    flex-wrap: wrap;
}
.farmName {
    margin-top: -1rem;
    font-size: 1.75rem;
}
.buttonSection{
    margin-top: 2rem;
}
.btn{
    padding: .5rem;
    margin-top: 1rem;
    background-color: var(--dk-coral);
    border: 3px solid var(--dk-coral);
    border-radius: 12px;
    text-decoration: none;
    
}

@media only screen and (max-width: 768px) {
    .farmImage {
        height: 200px;
        flex-direction: column;
    }
    .farmInfo {
        flex-direction: column;
    }
}
`;


const FarmInfoUpdate = () => {

    let history = useHistory();

    //checkAuth for valid token will go here
    let validToken = CheckAuth();
    if (!validToken) {
        console.log("validToken returned false or undefined");
        history.push('/users/login');
    }

    //State Variables for farm profile
    const [farmName, setFarmName] = useState('');
    const [farmDescription, setFarmDescription] = useState('');
    const [farmAddress, setFarmAddress] = useState('');
    const [farmCity, setFarmCity] = useState('');
    const [farmState, setFarmState] = useState('');
    const [farmZip, setFarmZip] = useState('');
    //const [farmImage, setFarmImage] = useState('');
    const [farmWebsite, setFarmWebsite] = useState('');
    const [farmEmail, setFarmEmail] = useState('');



    useEffect(() => {
        let myHeaders = {
            'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
        };

        axios.get('http://localhost:5000/api/users/profile',
        { 'headers': myHeaders })
        .then(function (response) {
            console.log(response.status);
            if (response.status === 401) {
                console.log("No token or must be logged in");
                console.log(response.status.message);
                //history.push('/users/login');
            }
            if (response.status === 200) {
                console.log("response: ");
                console.log(response);
                //validate this profile is a farmer
                if (!response.data.isFarmer) {
                    console.log("this profile is not a farmer");
                }
                //load state variables from response data
                setFarmName(response.data.userFarms.farmName);
                setFarmDescription(response.data.userFarms.farmDescription);
                setFarmAddress(response.data.userFarms.farmAddress);
                setFarmCity(response.data.userFarms.farmCity);
                setFarmState(response.data.userFarms.farmState);
                setFarmZip(response.data.userFarms.farmZip);
                //setFarmImage(response.data.userFarms.farmImage);
                setFarmWebsite(response.data.userFarms.farmWebsite);
                setFarmEmail(response.data.userFarms.farmEmail);
            }
            else {
                // setShowError(true);
                // setFormErrors('Unable to register farm.')
                console.log(`Unable to get farm info; error status: ${response.status} `);
            }

        })
        .catch(function (error) {
            console.log("catch error: " + error);
            // formErrorHandler(error.message);
        });
    }, []);

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

        const profileData = {
            farmName: farmName,
            farmDescription: farmDescription,
            farmAddress: farmAddress,
            farmCity: farmCity,
            farmState: farmState,
            farmZip: farmZip,
            farmWebsite: farmWebsite,
            farmEmail: farmEmail
        };

        //set JWT token into header for server side authentication
        let myHeaders = {
            'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
        };

        axios.put('http://localhost:5000/api/users/update', profileData,
            { 'headers': myHeaders })
            .then(function (response) {
                console.log(response.status);
                if (response.status === 401) {
                    console.log("No token or must be logged in");
                    console.log(response.status.message);
                    //history.push('/users/login');
                }
                if (response.status === 200) {
                    console.log("directing to farm profile");
                    history.push('/users/farmProfile/:farmId');
                }
                else {
                    // setShowError(true);
                    // setFormErrors('Unable to register farm.')
                    console.log(`Unable to get farm info; error status: ${response.status} `);
                }

            })
            .catch(function (error) {
                console.log("catch error: " + error);
                // formErrorHandler(error.message);
            });
        setFarmName('');
        setFarmDescription('');
        setFarmAddress('');
        setFarmCity('');
        setFarmState('');
        setFarmZip('');
        setFarmWebsite('');
        setFarmEmail('');

        }

        return (
            <FarmUpdateStyles>
                <div className="container">
                    <div className="image_float">
                        <h3 className="farmImage">Farm Image</h3>
                    </div>
                    <div className="info_float">
                        <h2>Update Farm Information:</h2>
                        <div className="farmInfoUpdate">

                            <form id='farmUpdate' className='form' onSubmit={submitHandler}>
                                
                                <div className='form-field'>
                                    <label className='form-label'>Farm Name</label>
                                    <input type='text'
                                        placeholder='Update your farm name'
                                        value={farmName}
                                        onChange={farmNameHandler}
                                    />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>Farm Details</label>
                                    <input type='text'
                                        placeholder='Update your farm details'
                                        value={farmDescription}
                                        onChange={farmDescriptionHandler}
                                    />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>Farm Address</label>
                                    <input type='text'
                                        placeholder='Update farm address'
                                        value={farmAddress}
                                        onChange={farmAddressHandler}
                                    />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>City</label>
                                    <input type='text'
                                        placeholder='Update City'
                                        value={farmCity}
                                        onChange={farmCityHandler}
                                    />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>State</label>
                                    <input type='text'
                                        placeholder='Update your state'
                                        value={farmState}
                                        onChange={farmStateHandler}
                                    />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>Zip</label>
                                    <input type='text'
                                        placeholder='Update zipcode'
                                        value={farmZip}
                                        onChange={farmZipHandler}
                                    />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>Farm Website</label>
                                    <input type='text'
                                        placeholder='Website'
                                        value={farmWebsite}
                                        onChange={farmWebsiteHandler}
                                    />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>Farm Email</label>
                                    <input type='text'
                                        placeholder='Email'
                                        value={farmEmail}
                                        onChange={farmEmailHandler}
                                    />
                                </div>
                                <div className='buttonSection'>
                                <Link to='/users/farmProfile' type="button" className="btn">Update Info</Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </FarmUpdateStyles>
        )
    }

    export default FarmInfoUpdate;