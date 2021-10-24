import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FarmEvent from './FarmEvent';



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
        max-width: 800px;
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
//     // display: flex;
//     // flex-wrap: wrap;
//     border: 5px dashed var(--terra);
//     background-color: grey; 
// }
.info_float {
    width: 100%;
    height: 90%;
    display: block;
}
.farmEvents {
    margin-top: 1rem auto;
    width: 100%;
    height: 100%;
    background-color: var(--cream);
    border: 5px solid var(--md-gg);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
}
.eachEvent{
    display: inline-block;
}
.buttonSection{
    width: 100%; 
}
.btn {
    float:right;
    margin-top: -2rem;
    padding: .5rem;
    background-color: var(--terra);
    border: 3px solid var(--terra);
    border-radius: 12px;
    text-decoration: none;
}

.btn-1{
    float: left;
    padding: .5rem;
    margin-top: 0.5rem;
    background-color: var(--dk-mustard);
    border: 3px solid var(--dk-mustard);
    border-radius: 12px;
    text-decoration: none; 
}
.btn-2{
    float: right;
    padding: .5rem;
    margin-top: 0.5rem;
    background-color: var(--coral);
    border: 3px solid var(--coral);
    border-radius: 12px;
    text-decoration: none; 
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
        max-height: 375px;
        flex-direction: column;
        padding-left: .5rem;
    }
    .buttonSection{
        float: right;
        margin-top: 1rem;
        margin-right: 0rem; 
    }
}
`;


const Events = () => {

    // let validToken = CheckAuth();
    // if (!validToken) {
    //     console.log("validToken returned null or undefined");
    //    // history.push('/users/login');
    // } else {
    //     console.log(validToken);
    // }


    const [eventArr, setEventArr] = useState([]);  //state for events array


    useEffect(() => {

        //set JWT token into header for server side authentication
        let myHeaders = {
            'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
        };
        //get events for user profile
        axios.get('http://localhost:5000/api/users/profile',
            { 'headers': myHeaders })
            .then(function (response) {
                console.log("events GET response: " + response.status);
                if (response.status === 401) {
                    console.log("No token or must be logged in");
                }
                if (response.status === 200) {
                    //console.log(response);
                    //validate this profile is a farmer
                    if (!response.data.isFarmer) {
                        console.log("this profile is not a farmer");
                    }

                    setEventArr(prevArr => {
                        const newArr = [...prevArr, ...response.data.userFarms.farmEvent];
                        return newArr;
                    });
                }
                else {
                    console.log(`Unable to get farm event info; error status: ${response.status} `);
                }
            })
            .catch(function (error) {
                console.log("catch error: " + error);
            });

    }, []);


  
    return (
        <FarmInfoStyles>
            <div className="container">
                {/* <div className="image_float">
                    <h3 className="farmImage">Farmer Market Image</h3>
                </div> */}
                <div className="info_float">
                    <div className="farmEvents">
                        <div className="eachEvents">
                            <h4>
                                {eventArr.map(event => (
                                    <FarmEvent farmEvent={event} />
                                    
                                ))}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="buttonSection">
                    <Link to="/users/eventRegister" type='submit' className="btn-1">Schedule Event</Link>
                    <Link to="/users/farmProfile" type='submit' className="btn-2">Back to Farm</Link>
                </div>
            </div>
        </FarmInfoStyles >
    )
}

export default Events;