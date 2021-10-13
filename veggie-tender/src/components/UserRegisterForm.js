
import React, { useState } from 'react';
import styled from 'styled-components';
// import axios from "axios";


const UserRegStyles = styled.div`
padding-top: 5rem;
    font-size: 1.1rem;

    //form validation
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    
    body {
        
        font-family: 'MontserratRegular';
        font-color: black;
        font-size: 12px;
        background-color: #f4f4f4;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        margin: 0;
    }
    
    .user-form-content {
        margin-left: 25rem;
        justify-content: center;
        background-color: var(--turq);
        padding: 1em;
        // border: solid 2px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        width: 400px;
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
        border: solid 2px var(--turq);
        border-radius: 5px;
        background-color: var(--cream);
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
        background: var(--dk-turq);
        border-bottom: 2px solid var(--dk-turq);
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
        background: var(--lt-tan);
        cursor: pointer;
    }
    
    .btn:focus {
        outline: none;
    }
`;




const UserRegisterForm = () => {

    //set state for entered credentials
    const [enteredUserName, setUserName] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [enteredFirstName, setFirstName] = useState('');
    const [enteredLastName, setLastName] = useState('');
    const [enteredEmail, setEmail] = useState('');

    const [enteredCity, setCity] = useState('');
    const [enteredState, setState] = useState('');



    //handlers for each input field on the form
    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };
    const FirstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    };
    const LastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    };
    const EmailChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    const CityChangeHandler = (event) => {
        setCity(event.target.value);
    };
    const StateChangeHandler = (event) => {
        setState(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();  //prevents form from refreshing after submit

        console.log(`register userName from Form: ${UserRegisterForm.userName}`);
        console.log(`register password from Form: ${UserRegisterForm.userPassword}`);
        console.log(`register firstName from Form: ${UserRegisterForm.firstName}`);
        console.log(`register lastName from Form: ${UserRegisterForm.lastName}`);
        console.log(`register email from Form: ${UserRegisterForm.email}`);
        console.log(`register city from Form: ${UserRegisterForm.city}`);
        console.log(`register state from Form: ${UserRegisterForm.state}`);

        // insert profile data object 
        const profileData = {
            userName: enteredUserName,
            userPass: enteredPassword
        };
        //post to login in API to get user 
        // axios.post('http://localhost:5000/api/users/register', { 
        //     profileData
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });


        setUserName('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setCity('');
        setState('');
    };

    return (
        <UserRegStyles>
            <div className='user-form-content'>
                <form id='userReg' className='form' onSubmit={submitHandler}>
                    <h2 className='form-title'>Register Now!</h2>
                    <div className='form-field'>
                        <label className='form-label'>User Name</label>
                        <input type='text' value={enteredUserName} onChange={usernameChangeHandler} />
                        <small></small>
                    </div>

                    <div className='form-field'>
                        <label className='form-label'>Password</label>
                        <input type='text' className='password' value={enteredPassword} onChange={passwordChangeHandler} />
                        <small></small>
                    </div>

                    <div className='form-field'>
                        <label className='form-label'>FirstName</label>
                        <input type='text' className='firstName' value={enteredFirstName} onChange={FirstNameChangeHandler} />
                        <small></small>
                    </div>

                    <div className='form-field'>
                        <label className='form-label'>LastName</label>
                        <input type='text' className='lastName' value={enteredLastName} onChange={LastNameChangeHandler} />
                        <small></small>
                    </div>

                    <div className='form-field'>
                        <label className='form-label'>Email</label>
                        <input type='text' className='email' value={enteredEmail} onChange={EmailChangeHandler} />
                        <small></small>
                    </div>

                    <div className="btn-field">
                        <button className='btn' type='submit'>Register</button>
                    </div>
                </form>
            </div>
        </UserRegStyles>
    )
};

export default UserRegisterForm;