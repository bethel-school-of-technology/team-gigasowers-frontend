
import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const EventRegFormStyles = styled.div`
padding-top: 5rem;
font-size: 1.1rem;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    
    font-family: 'MontserratRegular';
    font-color: black;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.event-form-content {
    margin-left: 25rem;
        justify-content: center;
        background-color: var(--cream);
        padding: 2rem;
        margin: 2rem auto;
        margin-top: -3rem;
        // border: solid 2px;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        width: 26rem;
}


.form-title {
    font-family: 'MontserratRegular';
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;

}

.form-field {
    margin-bottom: 5px;

}

.form-field label {
    font-family: 'MontserratRegular';
    display: block;
    color: black;
    text-align: left;
    padding-top: 10px;
    padding-left: 15px;
    margin-bottom: 5px;
}

.form-field input {
    font-family: 'MontserratRegular';
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    padding: 10px;
    margin-bottom: 5px;
    font-size: 14px;
    display: block;
    width: 100%;
}

.form-field input:focus {
    outline: none;
}

.form-field.error input {
    border-color: var(--error-color);
}

.form-field.success input {
    border-color: var(--success-color);
}


.form-field small {
    font-family: 'MontserratThin'
    color: var(--error-color);
}


/* button */
.btn-field {
    padding-top: 1rem;
}
.btn {
    width: 100%;
    padding: 3%;
    background: var(--terra);
    border-bottom: 2px solid var(--terra);
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    font-family: 'MontserratRegular';
    font-size: 16px;
}

.btn:hover {
    background-color: var(--greybrwn);
    border-color: var(--greybrwn);
    cursor: pointer;
}

.btn:focus {
    outline: none;
}
`;

const EventRegForm = () => {


    let history = useHistory();  //Used to track page route history


    const [isSubmitComplete, setIsSubmitComplete] = useState(false);
    let tempArr = [];   //used to load event inputs from form
    const [eventArr, setEventArr] = useState([]);  //state for events array
    const [calcEventId, setCalcEventId] = useState('');  //load this separately by incrementing on array length
    //set state for entered credentials
    const [enteredEventName, setEventName] = useState('');
    const [enteredEventAddress, setEventAddress] = useState('');
    const [enteredEventCity, setEventCity] = useState('');
    const [enteredEventState, setEventState] = useState('');
    const [enteredEventZip, setEventZip] = useState('');
    const [enteredEventStartDate, setEventStartDate] = useState('');
    const [enteredEventFinishDate, setEventFinishDate] = useState('');
    //const [enteredEventImage, setEventImage] = useState('');


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

    useEffect(() => {

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
                    history.push('/users/login');
                }
                if (response.status === 200) {
                    console.log(response.status);
                    //validate this profile is a farmer
                    if (!response.data.isFarmer) {
                        console.log("this user is not a farmer");
                        history.push('/users/profile');
                    }

                    setEventArr(prevArr => {
                        const newArr = [...prevArr, ...response.data.userFarms.farmEvent];
                        return newArr;
                    });

                    if (response.data.userFarms.farmEvent.length) {
                        let incId = parseInt(response.data.userFarms.farmEvent.length);
                        setCalcEventId(++incId);
                    } else {
                        setCalcEventId(1);
                    }

                }
                else {
                    console.log(`Unable to get farm event info; error status: ${response.status} `);
                    history.push('/users/login');
                }
            })
            .catch(function (error) {
                console.log("catch error: " + error);
                history.push('/users/login');
            });

    }, []);



    const submitHandler = (event) => {
        event.preventDefault();  //prevents form from refreshing after submit


        tempArr = [{
            'eventId': calcEventId.toString(),
            'eventName': enteredEventName,
            'eventAddress': enteredEventAddress,
            'eventCity': enteredEventCity,
            'eventState': enteredEventState,
            'eventZip': enteredEventZip,
            'eventStartDate': enteredEventStartDate,
            'eventFinishDate': enteredEventFinishDate,
            'eventImage': ""
        }];
        setEventArr(prevArr => {
            const enteredArr = [...prevArr, ...tempArr];
            return enteredArr;
        });
        setIsSubmitComplete(true);
    };


    useEffect(() => {
        if (isSubmitComplete) {
            console.log(eventArr);
            //set JWT token into header for server side authentication
            let myHeaders = {
                'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
            };
            //post to login in API to auth user and get token
            axios.put('http://localhost:5000/api/users/update', { 'farmEvent': eventArr }, { 'headers': myHeaders })
                .then(function (response) {
                    if (response.status === 200) {
                        console.log(response.status);
                    } else {
                        console.log(`Event update error response received: ${response.status} `);
                    }
                })
                .catch(function (error) {
                    console.log(`Event update catch error: ${error} `);
                });

            setCalcEventId('');
            setEventName('');
            setEventAddress('');
            setEventCity('');
            setEventState('');
            setEventZip('');
            setEventStartDate('');
            setEventFinishDate('');

            history.goBack();
            

        }
    }, [isSubmitComplete, eventArr]);



    return (
        <EventRegFormStyles>
            <div className='event-form-content'>
                <form className='form' onSubmit={submitHandler}>
                    <h2 className='form-title'>Create Farmer Market Event</h2>
                    <div className='form-field'>
                        <label className="form-label">Event Name</label>
                        <input type='text' value={enteredEventName} onChange={eventNameChangeHandler} />
                    </div>
                    <div className='form-field'>
                        <label className="form-label">Event Address</label>
                        <input type='text' value={enteredEventAddress} onChange={eventAddressChangeHandler} />
                    </div>
                    <div className='form-field'>
                        <label className="form-label">Event City</label>
                        <input type='text' value={enteredEventCity} onChange={eventCityChangeHandler} />
                    </div>
                    <div className='form-field'>
                        <label className="form-label">Event State</label>
                        <input type='text' value={enteredEventState} onChange={eventStateChangeHandler} />
                    </div>
                    <div className='form-field'>
                        <label className="form-label">Event Zip</label>
                        <input type='text' value={enteredEventZip} onChange={eventZipChangeHandler} />
                    </div>
                    <div className='form-field'>
                        <label className="form-label">Event Start Date</label>
                        <input type='date' value={enteredEventStartDate} onChange={eventStartDateChangeHandler} />
                    </div>
                    <div className='form-field'>
                        <label className="form-label">Event Finish Date</label>
                        <input type='date' value={enteredEventFinishDate} onChange={eventFinishDateChangeHandler} />
                    </div>
                    {/* <div className='login__control'>
                                    <label>Event Image</label>
                                    <input type='text' value={enteredEventImage} onChange={eventImageChangeHandler} />
                                </div> */}
                    <div className="btn-field">
                        <button className="btn" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </EventRegFormStyles>
    )
};

export default EventRegForm;