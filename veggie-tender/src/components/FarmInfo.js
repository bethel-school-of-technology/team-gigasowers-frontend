import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';


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

.farmImage {
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
.farmInfo {
    margin-top: 2rem auto;
    width: 100%;
    height: 100%;
    background-color: var(--cream);
    border: 5px solid var(--coral);
    border-radius: 12px;
    padding: 2rem;
    text-align: left;
}

.h3 {
    font-size: 1.5rem;
}
.farmNameSection {
    
}
.farmName {
    margin-top: -1rem;
    font-size: 1.75rem;
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


const FarmInfo = () => {
    
    // const [farmImage, setFarmImage] = useState();
    const [userFarms, setUserFarms] = useState({
            profileSection: 'FARM',
            farmName: '',
            farmDescription: '',
            farmAddress: '',
            farmCity: '',
            farmState: '',
            farmZip: '',
            farmWebsite: '',
            farmEmail: ''
    });
    // const [farmName, setFarmName] = useState();
    // const [farmDescription, setFarmDescription] = useState();
    // const [farmAddress, setFarmAddress] = useState();
    // const [farmCity, setFarmCity] = useState();
    // const [farmState, setFarmState] = useState();
    // const [farmZip, setFarmZip] = useState();
    // const [farmWebsite, setFarmWebsite] = useState();
    // const [farmEmail, setFarmEmail] = useState();

    let {farmId} = useParams;
    //set JWT token into header for server side authentication
    let myHeaders = {
        'Authorization': `Bearer ${localStorage.getItem("vegToken")}`,
        'Content-Type': 'application/json'
    };
    
    
    useEffect(() => {
        const url = `http://localhost:5000/api/users/farms/${farmId}`;
        
        axios.get(url, 
        { 'headers': myHeaders }).then(result => {
            setUserFarms(result.data);
            // setFarmName(result.data);
            // setFarmDescription(result.data);
            // setFarmAddress(result.data);
            // setFarmCity(result.data);
            // setFarmState(result.data);
            // setFarmZip(result.data);
            // setFarmWebsite(result.data);
            // setFarmEmail(result.data);
        }, err => {
            useHistory.push('/');
        }, []);
    });

    
    


    return (
        <FarmInfoStyles>
            <div className="container">
                <div className="image_float">
                    <h3 className="farmImage">Farm Image</h3>
                </div>
                <div className="info_float">
                    <div className="farmInfo">

                        <h3 className="farmDescription">Farm Description: </h3>
                        <p>{userFarms.farmDescription}</p><br />
                        <h3 className="farmAddress">Address: </h3>
                        <p>{userFarms.farmAddress}</p><br />
                        <h3 className="farmCity">City: </h3>
                        <p>{userFarms.farmCity}</p><br />
                        <h3 className="farmState">State: </h3>
                        <p>{userFarms.farmState}</p><br />
                        <h3 className="farmZip">Zip: </h3>
                        <p>{userFarms.farmZip}</p><br />
                        <h3 className="farmWebsite">Website: </h3>
                        <p>{userFarms.farmWebsite}</p><br />
                        <h3 className="farmEmail">Contact Us: </h3>
                        <p>{userFarms.farmEmail}</p>

                    </div>
                </div>
                <div className="farmNameSection">

                    <h3 className="farmName">{userFarms.farmName}</h3>
                </div>
            </div>
        </FarmInfoStyles>
    )
}

export default FarmInfo;