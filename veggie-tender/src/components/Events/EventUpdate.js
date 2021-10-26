import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const ProductUpdateStyles = styled.div`
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

const EventUpdate = () => {


    const location = useLocation();
    const fEvent = location.state?.fEvent;

    let history = useHistory();

    //set state for entered credentials
    const [eventId, setEventId] = useState('');
    const [enteredEventName, setEventName] = useState('');
    const [enteredEventAddress, setEventAddress] = useState('');
    const [enteredEventCity, setEventCity] = useState('');
    const [enteredEventState, setEventState] = useState('');
    const [enteredEventZip, setEventZip] = useState('');
    const [enteredEventStartDate, setEventStartDate] = useState('');
    const [enteredEventFinishDate, setEventFinishDate] = useState('');

    useEffect(() => {
        let myHeaders = {
            'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
        };

        axios.get('http://localhost:5000/api/users/profile',
            { 'headers': myHeaders })
            .then(function (response) {
                if (!response.status === 200) {
                    console.log(response.status);
                    console.log("Invalid Token");
                    history.push('/users/login');
                }
                if (response.status === 200) {
                    console.log(response.status);
                    //validate this profile is a farmer
                    if (!response.data.isFarmer) {
                        console.log("this user is not a farmer");
                        history.push('/users/profile');
                    }

                    //load state variables with product detail passed via location state
                    if (fEvent) {
                        setEventId(fEvent.eventId);
                        setEventName(fEvent.eventName);
                        setEventAddress(fEvent.eventAddress);
                        setEventCity(fEvent.eventCity);
                        setEventState(fEvent.eventState);
                        setEventZip(fEvent.eventZip);
                        setEventStartDate(fEvent.eventStartDate);
                        setEventFinishDate(fEvent.eventFinishDate);
                    } else {
                        console.log("No event info to update");
                        history.push('/users/profile');
                    }
                }
                else {
                    console.log(`Event Update error status: ${response.status} `);
                    history.push('/users/login');
                }

            })
            .catch(function (error) {
                console.log("catch error: " + error);
                history.push('/users/login');
            });
    }, []);

    //handlers for each input field on the form
    const eventNameChangeHandler = (event) => { setEventName(event.target.value); };
    const eventAddressChangeHandler = (event) => { setEventAddress(event.target.value); };
    const eventCityChangeHandler = (event) => { setEventCity(event.target.value); };
    const eventStateChangeHandler = (event) => { setEventState(event.target.value); };
    const eventZipChangeHandler = (event) => { setEventZip(event.target.value); };
    const eventStartDateChangeHandler = (event) => { setEventStartDate(event.target.value); };
    const eventFinishDateChangeHandler = (event) => { setEventFinishDate(event.target.value); };

    const submitHandler = (event) => {
        event.preventDefault();

        const upEvent = {
            'eventId': eventId,
            'eventName': enteredEventName,
            'eventAddress': enteredEventAddress,
            'eventCity': enteredEventCity,
            'eventState': enteredEventState,
            'eventZip': enteredEventZip,
            'eventStartDate': enteredEventStartDate,
            'eventFinishDate': enteredEventFinishDate
        };

        // set JWT token into header for server side authentication
        let myHeaders = {
            'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
        };
        //post to login in API to auth user and get token
        axios.put('http://localhost:5000/api/users/updateEvent', upEvent, { 'headers': myHeaders })
            .then(function (response) {
                //console.log(response);
                if (response.status === 200) {
                    console.log("Event Update Status: " + response.status);
                } else {
                    console.log(`Event update error response received: ${response.status} `);
                }
            })
            .catch(function (error) {
                console.log(`Event update catch error: ${error} `);
            });

        setEventId('');
        setEventName('');
        setEventAddress('');
        setEventCity('');
        setEventState('');
        setEventZip('');
        setEventStartDate('');
        setEventFinishDate('');

        history.goBack();

    }

    return (
        <ProductUpdateStyles>
            <div className='login-form-content'>
                <form onSubmit={submitHandler}>
                    <div className='login-shell'>
                        <div >
                            <h1 className='title'>Update Farm Event</h1>
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
                            </div>
                        </div>
                        <div className="login__actions">
                            <button type='submit'>Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </ProductUpdateStyles>
    )
}

export default EventUpdate;