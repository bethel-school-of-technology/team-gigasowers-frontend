import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from "axios";
import { useParams } from 'react-router';

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
    // const [userImage, setUserImage] = useState();
    const [user, setUser] = useState();
    const [userName, setUserName] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userAddress, setUserAddress] = useState();
    const [userCity, setUserCity] = useState();
    const [userState, setUserState] = useState();
    const [userZip, setUserZip] = useState();
    const [userEmail, setUserEmail] = useState();

    let {_id} = useParams;

    //set JWT token into header for server side authentication
    let myHeaders = {
        'Authorization': `Bearer ${localStorage.getItem("vegToken")}`,
        'Content-Type': 'application/json'
    };
    console.log(_id);
    useEffect(() => {
        axios.get('http://localhost:5000/api/users/?_id', "USER", 
        { 'headers': myHeaders }).then(result => {
            setUserName(result.data);
            setFirstName(result.data);
            setLastName(result.data);
            setUserAddress(result.data);
            setUserCity(result.data);
            setUserState(result.data);
            setUserZip(result.data);
            setUserEmail(result.data);
        });
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
                        <p>{user.userName}</p><br />
                        <h3 className="address">Address: </h3>
                        <p>{user.address}</p><br />
                        <h3 className="city">City: </h3>
                        <p>{user.city}</p><br />
                        <h3 className="state">State: </h3>
                        <p>{user.state}</p><br />
                        <h3 className="zip">Zip: </h3>
                        <p>{user.zip}</p><br />
                        <h3 className="email">Email: </h3>
                        <p>{user.email}</p>

                    </div>
                </div>
                <div class="userFullName">
                    <h3 className="fullName">{user.firstName} {user.lastName}</h3>
                </div>
            </div>
        </UserInfoStyles >
    )
}
export default  UserInfo;