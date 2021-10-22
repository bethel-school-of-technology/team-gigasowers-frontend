
import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import CheckAuth from '../../services/CheckAuth';


const LoginFormStyles = styled.div`
font-family: 'MontserratMedium';

.title{
    text-transform: uppercase;
    font-size: 1.75rem;
}

.login-form-content {
    min-height: 100vh;
}


.login-shell {
    background-color: var(--cream);
    padding: 1rem;
    margin: 2rem auto;
    width: 28rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}
.login__controls {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    margin-left: 3rem;
    margin-top: 2rem;
    text-align: left;
}
.login__control label {
    font-family: 'MontserratRegular';
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    display: block;
} 
.login__control input {
    font-family: 'MontserratRegular';
    padding: .5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
    text-align: left;
    margin-left: 0.3rem;
}
.login__actions {
    text-align: center;
}

.login-shell button {
    font-family: 'MontserratRegular';
    font-size: 16px;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid var(--terra);
    background-color: var(--terra);
    color: white;
    border-radius: 12px;
    /* margin-right: 1rem; */
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
}

.login-shell button:hover,
.login-shell button:active {
    background-color: var(--greybrwn);
    border-color: var(--greybrwn);
}
.login-shell button.alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;
}

.login-shell button.alternative:hover,
.login-shell button.alternative:active {
    background-color: #ddb3f8;
}
`;

const EventRegForm = () => {

    // let validToken = CheckAuth();
    // if (!validToken) {
    //     console.log("validToken returned null or undefined");
    //    // history.push('/users/login');
    // } else {
    //     console.log(validToken);
    // }

    let history = useHistory();  //Used to track page route history
    let resEvents = [];
    let resEventsLength = 0;
    //set state for entered credentials
    const [eventArr, setEventArr] = useState([]);
    const [eventId, setEventId] = useState('');  //load this separately by incrementing on array length
    const [enteredEventName, setEventName] = useState('');
    const [enteredEventAddress, setEventAddress] = useState('');
    const [enteredEventCity, setEventCity] = useState('');
    const [enteredEventState, setEventState] = useState('');
    const [enteredEventZip, setEventZip] = useState('');
    const [enteredEventStartDate, setEventStartDate] = useState('');
    const [enteredEventFinishDate, setEventFinishDate] = useState('');
    //const [enteredEventImage, setEventImage] = useState('');



    const eventIdChangeHandler = (eId) => {
        setEventId(eId);
        console.log("eId handler: " + eventId);
    };
    //handlers for each input field on the form
    const eventNameChangeHandler = (event) => {
        setEventName(event.target.value);
    };
    const eventAddressChangeHandler = (event) => {
        setEventAddress(event.target.value);
    };
    const eventCityChangeHandler = (event) => {
        setEventCity(event.target.value);
    };
    const eventStateChangeHandler = (event) => {
        setEventState(event.target.value);
    };
    const eventZipChangeHandler = (event) => {
        setEventZip(event.target.value);
    };
    const eventStartDateChangeHandler = (event) => {
        setEventStartDate(event.target.value);
    };
    const eventFinishDateChangeHandler = (event) => {
        setEventFinishDate(event.target.value);
    };
    // const eventImageChangeHandler = (event) => {
    //     setEventImage(event.target.value);
    // };


    //set JWT token into header for server side authentication
    let myHeaders = {
        'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
    };
    //get events for user profile
    axios.get('http://localhost:5000/api/users/profile',
        { 'headers': myHeaders })
        .then(function (response) {
            console.log(response.status);
            if (response.status === 401) {
                console.log("No token or must be logged in");
            }
            if (response.status === 200) {
                console.log("response: ");
                console.log(response);
                //validate this profile is a farmer
                if (!response.data.isFarmer) {
                    console.log("this profile is not a farmer");
                }
                //load state variables from response data
                resEvents = response.data.userFarms.farmEvent;
                resEventsLength = resEvents.length;
                eventIdChangeHandler(resEventsLength);
            }
            else {
                console.log(`Unable to get farm event info; error status: ${response.status} `);
            }
        })
        .catch(function (error) {
            console.log("catch error: " + error);
        });

    console.log(resEvents);
    useEffect(() => {
        setEventArr(prevEventArr => [...prevEventArr, { ...resEvents }]);
    }, []);
    console.log("eventArr: ");
    console.log(eventArr);
    console.log(eventArr.length);


    const submitHandler = (event) => {
        event.preventDefault();  //prevents form from refreshing after submit

        setEventArr(prevEventArr => [...prevEventArr,
        {
            eventId: eventId,
            eventName: enteredEventName,
            eventAddress: enteredEventAddress,
            eventCity: enteredEventCity,
            eventState: enteredEventState,
            eventZip: enteredEventZip,
            eventStartDate: enteredEventStartDate,
            eventFinishDate: enteredEventFinishDate
        }]);
        console.log(eventArr);

/*

        //post to login in API to auth user and get token
        axios.put('http://localhost:5000/api/users/update', eventArr)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                } else {
                    console.log(`Event update error response received: ${response.status} `);
                }
            })
            .catch(function (error) {
                console.log(`Event update catch error: ${error} `);
            });

*/
        setEventId('');
        setEventName('');
        setEventAddress('');
        setEventCity('');
        setEventState('');
        setEventZip('');
        setEventStartDate('');
        setEventFinishDate('');
        //setEventImage('');

    };

    return (
        <LoginFormStyles>
            <div className='login-form-content'>
                <form onSubmit={submitHandler}>
                    <div className='login-shell'>
                        <div >
                            <h1 className='title'>Create Farmer Market Event</h1>
                            <div className='login__controls'>
                                <div className='login__control'>
                                    <label>Event Name</label>
                                    <input type='text' value={enteredEventName} onChange={eventNameChangeHandler} />
                                </div>
                                <div className='login__control'>
                                    <label>Event Address</label>
                                    <input type='text' value={enteredEventAddress} onChange={eventAddressChangeHandler} />
                                </div>
                                <div className='login__control'>
                                    <label>Event City</label>
                                    <input type='text' value={enteredEventCity} onChange={eventCityChangeHandler} />
                                </div>
                                <div className='login__control'>
                                    <label>Event State</label>
                                    <input type='text' value={enteredEventState} onChange={eventStateChangeHandler} />
                                </div>
                                <div className='login__control'>
                                    <label>Event Zip</label>
                                    <input type='text' value={enteredEventZip} onChange={eventZipChangeHandler} />
                                </div>
                                <div className='login__control'>
                                    <label>Event Start Date</label>
                                    <input type='date' value={enteredEventStartDate} onChange={eventStartDateChangeHandler} />
                                </div>
                                <div className='login__control'>
                                    <label>Event Finish Date</label>
                                    <input type='date' value={enteredEventFinishDate} onChange={eventFinishDateChangeHandler} />
                                </div>
                                {/* <div className='login__control'>
                                    <label>Event Image</label>
                                    <input type='text' value={enteredEventImage} onChange={eventImageChangeHandler} />
                                </div> */}
                            </div>
                        </div>
                        <div className="login__actions">
                            <button type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </LoginFormStyles>
    )
};

export default EventRegForm;