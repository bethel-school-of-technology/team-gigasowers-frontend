import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import CheckAuth from '../../services/CheckAuth';
// import LoginForm from '../LoginForm';


const FarmInfoStyles = styled.div`
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
    height: 90%;
    width: 65%;
    display: block;
}
.farmInfo {
    margin-top: 1rem auto;
    width: 100%;
    height: 100%;
    background-color: var(--cream);
    border: 5px solid var(--coral);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
}
.stateContain {
    float: right;
    margin-right: 15rem;
    margin-top: -3.75rem;
    height: 10px;
    display: inline-block;
    flex-direction: column;
}
.zipContain {
    float: right;
    margin-right: 10rem;
    margin-top: -3.75rem;
    height: 10px;
    display: inline-block;
    margin-left: 5rem;
}
.farmNameSection {
    margin-top: -0.5rem;
    margin-left: 2rem;
    font-size: 1.5rem;
    justify-content: center;
}
.buttonSection{
    float: right;
    margin-top: 1rem;   
}
.btn{
    padding: .5rem;
    link-color: white;
    background-color: var(--terra);
    border: 3px solid var(--terra);
    border-radius: 12px;
    text-decoration: none;
    justify-content: flex-end;
    
}
.btn-1{
    float: left;
    padding: .5rem;
    margin-top: -0.5rem;
    margin-right: 1rem;
    background-color: var(--md-gg);
    border: 3px solid var(--md-gg);
    border-radius: 12px;
    text-decoration: none; 
}
.btn-2{
    float: right;
    padding: .5rem;
    margin-top: -0.5rem;
    background-color: var(--terra);
    border: 3px solid var(--terra);
    border-radius: 12px;
    text-decoration: none; 
}

@media only screen and (max-width: 768px) {
    .container {
        display: block;
        flex-direction: column;
        height: 900px;
    }
    .image_float {
        width: 100%;
        flex-direction: column;
    }
    .farmNameSection {
        margin-left: 3rem;
    }
    .info_float {
        justify-content: center;
        width: 100%;
        max-height: 450px;
        flex-direction: column;
        padding-left: .5rem;
    }
    .buttonSection{
        float: right;
        margin-top: 2rem;
        margin-right: 0rem; 
    }
    .stateContain {
        float: right;
        margin-right: 5rem;
        margin-top: -3.75rem;
        height: 10px;
        display: inline-block;
        flex-direction: column;
    }
    .zipContain {
        float: right;
        margin-right: 0rem;
        margin-top: -3.75rem;
        height: 10px;
        display: inline-block;
        margin-left: 5rem;
    }
}
`;

const FarmInfo = () => {

    let history = useHistory();


    //State Variables for farm profile
    const [farmName, setFarmName] = useState('');
    const [farmDescription, setFarmDescription] = useState('');
    const [farmAddress, setFarmAddress] = useState('');
    const [farmCity, setFarmCity] = useState('');
    const [farmState, setFarmState] = useState('');
    const [farmZip, setFarmZip] = useState('');
    const [farmImage, setFarmImage] = useState('');
    const [farmWebsite, setFarmWebsite] = useState('');
    const [farmEmail, setFarmEmail] = useState('');

    //state variable for validating user
    let validUser = false;



    useEffect(async () => {
        //checkAuth for valid token will go here
        let validToken = await CheckAuth();
        console.log(validToken);
        if (!validToken) {
            validUser = false;
        } else {
            if (localStorage.getItem("isFarmer")) {
                console.log("farmer? " + localStorage.getItem("isFarmer"));
                validUser = true;
            }
        }
        if (validUser) {
            loadFarmInfo();
        } else {
            history.push('/users/login');
        };
    }, []);




    const loadFarmInfo = () => {
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
                    setFarmImage(response.data.userFarms.farmImage);
                    setFarmWebsite(response.data.userFarms.farmWebsite);
                    setFarmEmail(response.data.userFarms.farmEmail);
                    console.log(farmImage);
                    // history.push('/users/farmProfile/:farmId');
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

    };


    return (
        <FarmInfoStyles>
            <div className="container">
                <div className="image_float">
                    <img className="farmImage" src={farmImage} alt="profileImage"></img>
                    <div className="farmNameSection">
                        <h3 className="farmName">{farmName}</h3>
                    </div>
                </div>
                <div className="info_float">
                    <div className="farmInfo">

                        <h3 className="farmDescription">Farm Description: </h3>
                        <p>{farmDescription}</p><br />
                        <h3 className="farmAddress">Address: </h3>
                        <p>{farmAddress}</p><br />
                        <h3 className="farmCity">City: </h3>
                        <p>{farmCity}</p><br />
                            <div className="stateContain">
                                <h3 className="farmState">State: </h3>
                                <p>{farmState}</p><br />
                            </div>
                            <div className="zipContain">
                                <h3 className="farmZip">Zip: </h3>
                                <p>{farmZip}</p><br />
                            </div>
                        <h3 className="farmWebsite">Website: </h3>
                        <p>{farmWebsite}</p><br />
                        <h3 className="farmEmail">Contact Us: </h3>
                        <p>{farmEmail}</p>
                    </div>
                    <div className="buttonSection">
                        <Link to='/users/events' type="button" className="btn-1">My Events</Link>
                        <Link to='/users/update/farmProfile' type="button" className="btn-2">Update Info</Link>
                    </div>
                </div>
            </div>
        </FarmInfoStyles>
    )
}

export default FarmInfo;
