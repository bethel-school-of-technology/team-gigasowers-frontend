import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from 'react-router-dom';

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
    align-items: center;
    min-height: 100vh;
}
.container {
    justify-content: center;
    height: 600px;
    max-width: 25rem;
    background-color: var(--cream);
    padding: 1em;
    margin: 2rem auto;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    width: 90%;
}
// .image_float {
//     float: left;
//     width: 35%;
//     display: flex;
// }
// .userImage {
//     margin: 2rem auto;
//     width: 250px;
//     height: 250px;
//     border-radius: 50%;
//     border: 3px dashed var(--terra);
//     background-color: grey;   
// }
.info_float {
    float: right;
    width: 95%;
    height: 90%;
    display: block;
    margin-right: 0.5rem;
}
.userInfoUpdate {
    margin-top: 1rem auto;
    width: 100%;
    height: 95%;
    background-color: var(--cream);
    border: 5px solid var(--dk-green);
    border-radius: 12px;
    padding: 0.5rem;
    text-align: left;
}
.form{
    padding: 0rem;
    margin-left:0.5rem;
    margin-top:0.5rem;
}
.pageTitle{
    font-size: 1.25rem;
    margin-bottom: 1rem;
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
.buttonSection{
    float: right;
    margin-top: 3rem;
    margin-right: -1rem; 
}
.btn-1{
    padding: .5rem;
    background-color: var(--terra);
    border: 3px solid var(--terra);
    border-radius: 12px;
    font-family: 'MontserratRegular';
    font-size: 1rem;
    text-decoration: none;  
}
.btn-1:hover {
    background-color: var(--greybrwn);
    border-color: var(--greybrwn);
    color: white;
    cursor: pointer;
}


@media only screen and (max-width: 768px) {
    .container {
        display: block;
        flex-direction: column;
        height: 950px;
    }
    .image_float {
        width: 100%;
        flex-direction: column;
    }
    .info_float {
        justify-content: center;
        width: 100%;
        max-height: 575px;
        flex-direction: column;
        padding-left: 1.5rem;
    }
    .buttonSection{
        float: right;
        margin-top: 3.5rem;
        margin-right: -2rem; 
    }
}
`;


const UserInfoUpdate = () => {
    let history = useHistory();

    // const [userImage, setUserImage] = useState();
    const [userName, setUserName] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zip, setZip] = useState();
    const [email, setEmail] = useState();


    const usernameChangeHandler = (event) => { setUserName(event.target.value) };
    const firstNameChangeHandler = (event) => { setFirstName(event.target.value) };
    const lastNameChangeHandler = (event) => { setLastName(event.target.value) };
    const emailChangeHandler = (event) => { setEmail(event.target.value) };
    const addressChangeHandler = (event) => { setAddress(event.target.value) };
    const cityChangeHandler = (event) => { setCity(event.target.value) };
    const stateChangeHandler = (event) => { setState(event.target.value) };
    const zipChangeHandler = (event) => { setZip(event.target.value) };


    useEffect(() => {
        //set JWT token into header for server side authentication
        let myHeaders = {
            'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
        };

        axios.get('http://localhost:5000/api/users/profile',
            { 'headers': myHeaders })
            .then(function (response) {
                console.log(response.status);
                if (!response.status === 200) {
                    console.log("No token or must be logged in");
                    console.log(response.status.message);
                    history.push('/users/login');
                }
                if (response.status === 200) {
                    console.log("response: ");
                    console.log(response);

                    //load state variables from response data
                    setUserName(response.data.userName);
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setAddress(response.data.address);
                    setCity(response.data.city);
                    setState(response.data.state);
                    setZip(response.data.zip);
                    setEmail(response.data.email);
                }
                else {
                    console.log(`Unable to get user info; error status: ${response.status} `);
                }
            })
            .catch(function (error) {
                console.log("catch error: " + error);
                history.push('/users/login');
            });
    }, []);



    const submitHandler = (event) => {
        event.preventDefault();

        const profileData = {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            city: city,
            state: state,
            zip: zip
        };
        console.log("profileData: ");
        console.log(profileData);

        //set JWT token into header for server side authentication
        let myHeaders = {
            'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
        };

        axios.put('http://localhost:5000/api/users/update', profileData,
            { 'headers': myHeaders })
            .then(function (response) {
                console.log(response.status);
                if (!response.status === 200) {
                    console.log("No token or must be logged in");
                    console.log(response.status.message);
                    history.push('/users/login');
                }
                if (response.status === 200) {
                    console.log("directing to profile");
                    history.push('/users/profile');
                }
                else {
                    console.log(`Unable to get info; error status: ${response.status} `);
                }

            })
            .catch(function (error) {
                console.log("catch error: " + error);
                // formErrorHandler(error.message);
            });

        setUserName('');
        setFirstName('');
        setLastName('');
        setAddress('');
        setCity('');
        setState('');
        setZip('');
        setEmail('');

    };


    return (
        <UserUpdateStyles>
            <div className="container">
                {/* <div className="image_float">
                    <h3 className="userImage">Image</h3>
                </div> */}
                <div className="info_float">
                <h2 className="pageTitle">Update Your User Information:</h2>
                    <div className="userInfoUpdate">

                        <form id='userUpdate' className='form' onSubmit={submitHandler}>
                            
                            <div className='form-field'>
                                <label className='form-label'>User Name</label>
                                <input type='text'
                                    placeholder='Update your user name'
                                    value={userName}
                                    onChange={usernameChangeHandler}
                                />
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>First Name</label>
                                <input type='text'
                                    placeholder='Update your first name'
                                    value={firstName}
                                    onChange={firstNameChangeHandler}
                                />
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>Last Name</label>
                                <input type='text'
                                    placeholder='Update your last name'
                                    value={lastName}
                                    onChange={lastNameChangeHandler}
                                />
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>Address</label>
                                <input type='text'
                                    placeholder='Update your address'
                                    value={address}
                                    onChange={addressChangeHandler}
                                />
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>City</label>
                                <input type='text'
                                    placeholder='Update city'
                                    value={city}
                                    onChange={cityChangeHandler}
                                />
                                <small></small>
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>State</label>
                                <input type='text'
                                    placeholder='Update your state'
                                    value={state}
                                    onChange={stateChangeHandler}
                                />
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>Zip</label>
                                <input type='text'
                                    placeholder='Update zipcode'
                                    value={zip}
                                    onChange={zipChangeHandler}
                                />
                            </div>
                            <div className='form-field'>
                                <label className='form-label'>Email</label>
                                <input type='text'
                                    placeholder='Update email'
                                    value={email}
                                    onChange={emailChangeHandler}
                                />
                            </div>
                            <div className='buttonSection'>
                                <button type='submit' className="btn-1">Update Info</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </UserUpdateStyles>
    )
}

export default UserInfoUpdate;