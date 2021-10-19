import React, { useState } from 'react'
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import CheckAuth from '../services/CheckAuth';

const UserUpdateStyles = styled.div`
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
    height: 450px;
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
    display: flex;
    flex-wrap: wrap;
}
.userImage {
    margin: 2rem auto;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    // display: flex;
    // flex-wrap: wrap;
    border: 5px dashed var(--terra);
    background-color: grey;   
}
.info_float {
    float: right;
    width: 65%;
    display: flex;
    flex-wrap: wrap;
}
.userInfo {
    margin-top: 2rem auto;
    width: 100%;
    height: 100%;
    background-color: var(--cream);
    border: 5px solid var(--coral);
    border-radius: 12px;
    padding: 2rem;
    text-align: left;
}
.fullName {
    margin-top: 16rem;
    font-size: 2rem;
}
.h3 {
    font-size: 1.5rem;
}
.userFullName{
    
}
.farmName {
    margin-top: -1rem;
    font-size: 1.75rem;
}

@media only screen and (max-width: 768px) {
    .userImage {
        height: 200px;
        flex-direction: column;
    }
    .userInfo {
        flex-direction: column;
    }
}
`;


const UserInfoUpdate = () => {
    let history = useHistory();

    //checkAuth for valid token will go here
    let validToken = CheckAuth();
    if (!validToken) {
        console.log("validToken returned false or undefined");
        history.push('/users/login');
    }

    // const [userImage, setUserImage] = useState();
    const [userName, setUserName] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zip, setZip] = useState();
    const [email, setEmail] = useState();

    //set JWT token into header for server side authentication
    let myHeaders = {
        'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
    };

    axios.put('http://localhost:5000/api/users/profile',  
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
            
            //load state variables from response data
            setUserName(response.data.userName);
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setAddress(response.data.address);
            setCity(response.data.city);
            setState(response.data.state);
            setZip(response.data.zip);
            setEmail(response.data.email);

            // history.push('/users/profile/:_id');
        }
        else {
            // setShowError(true);
            console.log(`Unable to get user info; error status: ${response.status} `);
        }
    })
    .catch(function (error) {
        console.log("catch error: " + error);
        // formErrorHandler(error.message);
    });

    const updateHandler = (event) => {
        event.preventDefault();

    }
    return (
        <UserUpdateStyles>
            <div className="container">
                <div className="image_float">
                    <h3 className="userImage">Farm Image</h3>
                </div>
                <div className="info_float">
                    <div className="userInfoUpdate">

                        <form id='userUpdate' className='form' onSubmit={updateHandler}>
                            <h2>Update Your Farm Information:</h2>
                            <div className='form-field'>
                                <label className='form-label'>User Name</label>
                                <input type='text'
                                    placeholder='Update your user name'
                                    value={userName}
                                    onChange={e => setUserName({userName: e.target.value})}
                                />
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>First Name</label>
                                <input type='text'
                                    placeholder='Update your first name'
                                    value={firstName}
                                    onChange={e => setFirstName({firstName: e.target.value})}
                                />
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>User Name</label>
                                <input type='text'
                                    placeholder='Update your last name'
                                    value={lastName}
                                    onChange={e => setLastName({lastName: e.target.value})}
                                />
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>Farm Address</label>
                                <input type='text'
                                    placeholder='Update your address'
                                    value={address}
                                    onChange={e => setAddress({address: e.target.value})}
                                />
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>City</label>
                                <input type='text'
                                    placeholder='Update city'
                                    value={city}
                                    onChange={e => setCity({city: e.target.value})}
                                />
                                <small></small>
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>State</label>
                                <input type='text'
                                    placeholder='Update your state'
                                    value={state}
                                    onChange={e => setState({state: e.target.value})}
                                />
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>Zip</label>
                                <input type='text'
                                    placeholder='Update zipcode'
                                    value={zip}
                                    onChange={e => setZip({zip: e.target.value})}
                                />
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>Farm Email</label>
                                <input type='text'
                                    placeholder='Update email'
                                    value={email}
                                    onChange={e => setEmail({email: e.target.value})}
                                />
                            </div>
                            <div className='btn-field'>
                                <button className='btn' type='submit'>Update</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </UserUpdateStyles>
    )
}

export default UserInfoUpdate;