import React, { useState } from 'react'
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const UserInfoStyles = styled.div`
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


const UserInfo = () => {
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

    return (
        <UserInfoStyles>
            <div className="container">
                <div className="image_float">
                    <h3 className="userImage">Img</h3>
                </div>
                <div className="info_float">
                    <div className="userInfo">

                        <h3 className="userName">Username: </h3>
                        <p>{userName}</p><br />
                        <h3 className="address">Address: </h3>
                        <p>{address}</p><br />
                        <h3 className="city">City: </h3>
                        <p>{city}</p><br />
                        <h3 className="state">State: </h3>
                        <p>{state}</p><br />
                        <h3 className="zip">Zip: </h3>
                        <p>{zip}</p><br />
                        <h3 className="email">Email: </h3>
                        <p>{email}</p>

                    </div>
                </div>
                <div class="userFullName">
                    <h3 className="fullName">{firstName} {lastName}</h3>
                </div>
            </div>
        </UserInfoStyles >
    )
}
export default  UserInfo;