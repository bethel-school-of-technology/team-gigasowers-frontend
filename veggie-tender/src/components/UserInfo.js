import React from 'react'
import styled from 'styled-components';

const UserInfoStyles = styled.div`
font-family: 'MontserratRegular';
.container {
    width: 80%;
    min-height: 100vh;
    padding-left: 5rem;
}
.userImage_shell {
    margin-top: 1rem;
    width: 250px;
    height: 250px;
    float: left;
    border-radius: 50%;
    // overflow: hidden;
    // display: inline-block;
    border: 10px solid var(--terra);
    background-color: black;
    img {
        height: 100%;
    }
    
}
.userInfo {
    margin-top: 2rem;
    margin-left: 35%;
    width: 65%;
    height: 400px;
    background-color: var(--turq);
    border-radius: 12px;
    padding: 1rem;
    padding-left: 3rem;
    text-align: left;

}
.fullName {
    margin-top: 16rem;
    font-size: 2rem;
}

@media only screen and (max-width: 768px) {
    .userImage {
        height: 350px;
        flex-direction: column;
    }
    .userInfo {
        flex-direction: column;
    }
}
`;


export default function FarmerInfo({
    // farmImage = 'Farm Image',
            userName = 'Username',
            firstName = 'First Name',
            lastName = 'Last Name',
            email = 'Email',
            address = 'Address',
            city = 'City',
            state = 'State',
            zip = 'Zip'
}) {

    return (
        <UserInfoStyles>
            <div className="container">
                <div className="userImage_shell">
                    <h3 className="userImage">Img</h3>
                    <h3 className="fullName">{firstName} {lastName}</h3>
                </div>
                <div className="UserInfo">
                    <h3 className="userName">Username: </h3>
                        <p>{userName}</p><br/>
                    <h3 className="address">Address: </h3>
                        <p>{address}</p><br/>
                    <h3 className="city">City: </h3>
                        <p>{city}</p><br/>
                    <h3 className="state">State: </h3>
                        <p>{state}</p><br/>
                    <h3 className="zip">Zip: </h3>
                        <p>{zip}</p><br/>
                    <h3 className="email">Email: </h3>
                        <p>{email}</p>
                </div>
            </div>
        </UserInfoStyles>
    )
}
