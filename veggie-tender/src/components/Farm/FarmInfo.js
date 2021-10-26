import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import CheckAuth from '../../services/CheckAuth';


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
    max-width: 600px;
    background-color: var(--cream);
    padding: 1em;
    margin: 2rem auto;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    width: 85%;
}
// .image_float {
//     float: left;
//     width: 35%;
//     display: flex;
//     flex-wrap: wrap;
// }
// .farmImage {
//     margin: 2rem auto;
//     width: 250px;
//     height: 250px;
//     border-radius: 50%;
//     border: 5px dashed var(--terra);
//     background-color: grey; 
// }
.farmNameSection {
    display: block;
    margin-top: 0.5rem;
    margin-left: 2rem;
    font-size: 1.5rem;
    justify-content: center;
}
.info_float {
    float: right;
    height: 80%;
    width: 100%;
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
.buttonSection{
    float: right;
    margin-top: 1rem;   
}
.btn-1{
    float: left;
    padding: .5rem;
    margin-top: -0.5rem;
    margin-right: 1rem;
    color: white;
    background-color: var(--lt-navy);
    border: 3px solid var(--lt-navy);
    border-radius: 12px;
    text-decoration: none; 
}
.btn-1:hover {
    background-color: var(--navy);
    border-color: var(--navy);
    color: var(--md-gg);
    cursor: pointer;
}
.btn-3{
    float: left;
    padding: .5rem;
    margin-top: -0.5rem;
    margin-right: 1rem;
    background-color: var(--md-gg);
    border: 3px solid var(--md-gg);
    border-radius: 12px;
    text-decoration: none;
    
}
.btn-3:hover {
    background-color: var(--gray-green);
    border-color: var(--gray-green);
    color: white;
    cursor: pointer;
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
.btn-2:hover {
    background-color: var(--greybrwn);
    border-color: var(--greybrwn);
    color: white;
    cursor: pointer;
}


@media only screen and (max-width: 768px) {
    .container {
        display: block;
        flex-direction: column;
        height: 450px;
    }
    .farmNameSection {
        margin-left: 3rem;
    }
    .info_float {
        justify-content: center;
        width: 100%;
        max-height: 300px;
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
    // const [farmImage, setFarmImage] = useState('');
    const [farmWebsite, setFarmWebsite] = useState('');
    const [farmEmail, setFarmEmail] = useState('');



    //state variable for validating user
    const [validToken, setValidToken] = useState(false);

    useEffect(async () => {
        //checkAuth for valid token will go here
        let response = await CheckAuth();
        
        if (!response?.userFarms) {
            setValidToken(false);
            console.log("FarmInfo no userFarm " + response);
            history.push('/users/login');
        } else {
            setValidToken(true);

            if (localStorage.getItem("isFarmer")) {
                console.log("farmer? " + localStorage.getItem("isFarmer"));
                //load state variables from response data
                setFarmName(response.userFarms.farmName);
                setFarmDescription(response.userFarms.farmDescription);
                setFarmAddress(response.userFarms.farmAddress);
                setFarmCity(response.userFarms.farmCity);
                setFarmState(response.userFarms.farmState);
                setFarmZip(response.userFarms.farmZip);
                // setFarmImage(response.userFarms.farmImage);
                setFarmWebsite(response.userFarms.farmWebsite);
                setFarmEmail(response.userFarms.farmEmail);
            } else {
                console.log("farmInfo: not a valid user");
                history.push('/users/profile');
            }
        }
    }, [validToken]);


    return (
        <FarmInfoStyles>
            <div className="container">
                {/* <div className="image_float">
                    <img className="farmImage" src={farmImage} alt="profileImage"></img> */}
                    <div className="farmNameSection">
                        <h3 className="farmName">{farmName}</h3>
                    </div>
                {/* </div> */}
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
                        <Link to='/users/productRegister' type="button" className="btn-3">Add Produce</Link>
                        <Link to='/users/events' type="button" className="btn-1">My Events</Link>
                        <Link to='/users/update/farmProfile' type="button" className="btn-2">Update Info</Link>
                    </div>
                </div>
            </div>
        </FarmInfoStyles>
    )
}

export default FarmInfo;

