import React, { useState } from 'react'
import styled from 'styled-components';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';

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
    align-items: center;
    min-height: 100vh;
}
.container {
    justify-content: center;
    height: 475px;
    max-width: 25rem;
    background-color: var(--cream);
    padding: 1em;
    margin: 2rem auto;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    width: 85%;
}
.userFullName{
    display: block;
    margin-bottom: 1rem;
    margin-top:0.5rem;
    margin-left: -1rem;
}
// .image_float {
//     float: left;
//     width: 35%;
//     display: flex;
//     flex-wrap: wrap;
// }
// .userImage {
//     margin: 2rem auto;
//     margin-left: 2rem;
//     width: 250px;
//     height: 250px;
//     border-radius: 50%;
//     border: 3px dashed var(--terra);
//     background-color: grey;   
// }
.info_float {
    float: right;
    height: 80%;
    width: 100%;
    display: block;
}
.userInfo {
    margin-top: 1rem auto;
    width: 100%;
    height: 100%;
    background-color: var(--cream);
    border: 5px solid var(--dk-green);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
}
.fullName {
    margin-top: -0.5rem;
    margin-left: 3rem;
    font-size: 1.5rem; 
    ustify-content: center;
}
.zipContain {
    float: right;
    margin-right: 8rem;
    margin-top: -3.75rem;
    height: 10px;
    display: inline-block;
}
.buttonSection{
    width: 100%; 
}
.btn{
    float: right;
    padding: .5rem;
    margin-top: 0.5rem;
    background-color: var(--terra);
    border: 3px solid var(--terra);
    border-radius: 12px;
    text-decoration: none; 
}
.btn:hover {
    background-color: var(--greybrwn);
    border-color: var(--greybrwn);
    color: white;
    cursor: pointer;
}
.btn-2{
    float: left;
    padding: .5rem;
    margin-top: 0.5rem;
    background-color: var(--coral);
    border: 3px solid var(--coral);
    border-radius: 12px;
    text-decoration: none; 
}
.btn-2:hover {
    background-color: var(--dk-coral);
    border-color: var(--dk-coral);
    color:white;
    cursor: pointer;
}

@media only screen and (max-width: 768px) {
    .container {
        display: block;
        flex-direction: column;
        height: 475px;
    }
    .image_float {
        width: 100%;
        margin-left: -1rem; 
        flex-direction: column;
    }
    .info_float {
        justify-content: center;
        width: 100%;
        max-height: 350px;
        flex-direction: column;
        padding-left: .5rem;
    }
    .buttonSection{
        float: right;
        margin-top: 2rem;
        margin-right: 0rem; 
    }
    .zipContain {
        float: right;
        margin-right: 8rem;
        margin-top: -3.75rem;
        height: 10px;
        display: inline-block;
        flex-direction: column;
    }
}
`;


const UserInfo = () => {

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
    const [isFarmer, setIsFarmer] = useState(false);

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
                history.push('/users/login');
            }
            if (response.status === 200) {
                console.log("response: ");
                console.log(response.status);
           
                //load state variables from response data
                setUserName(response.data.userName);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setAddress(response.data.address);
                setCity(response.data.city);
                setState(response.data.state);
                setZip(response.data.zip);
                setEmail(response.data.email);
                setIsFarmer(response.data.isFarmer);
            }
            else {
                console.log(`Unable to get user info; error status: ${response.status} `);
            }
        })
        .catch(function (error) {
            console.log("catch error: " + error);
            history.push('/users/login');
        });

    return (
        <UserInfoStyles>
            <div className="container">

                {/* <h3 className="userImage">Img</h3> */}
                <div class="userFullName">
                    <h3 className="fullName">{firstName} {lastName}</h3>
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
                        <div className="zipContain">
                            <h3 className="zip">Zip: </h3>
                            <p>{zip}</p><br />
                        </div>
                        <h3 className="email">Email: </h3>
                        <p>{email}</p>

                    </div>
                    <div className="buttonSection">
                    {isFarmer ?
                            <Link to="/users/farmProfile" type='button' className="btn-2">My Farm</Link>
                            :
                            <Link to="/users/farmRegister" type="button" className="btn-2">Register Your Farm</Link>
                        }
                        <Link to='/users/update/profile' type="button" className="btn">Update Info</Link>
                    </div>
                </div>
            </div>
        </UserInfoStyles >
    )
}
export default UserInfo;