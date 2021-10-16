import React from 'react'
import styled from 'styled-components';

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


export default function UserInfo({
    // userImage = 'User Image',
    userName = 'Username',
    firstName = 'Full',
    lastName = 'Name',
    email = 'Email',
    address = 'Address',
    city = 'City',
    state = 'State',
    zip = 'Zip'
}) {

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
