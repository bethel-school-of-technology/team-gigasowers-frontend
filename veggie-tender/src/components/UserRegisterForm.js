
import React, { useState } from 'react';
import axios from "axios";







const UserRegisterForm = () => {

    //set state for entered credentials
    const [enteredUserName, setUserName] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [enteredFirstName, setFirstName] = useState('');
    const [enteredLastName, setLastName] = useState('');
    const [enteredEmail, setEmail] = useState('');
    


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


    const submitHandler = (event) => {
        event.preventDefault();  //prevents form from refreshing after submit

        console.log(`register userName from Form: ${UserRegisterForm.userName}`);
        console.log(`register password from Form: ${UserRegisterForm.userPassword}`);
        console.log(`register firstName from Form: ${UserRegisterForm.firstName}`);
        console.log(`register lastName from Form: ${UserRegisterForm.lastName}`);
        console.log(`register email from Form: ${UserRegisterForm.email}`);

        //post to login in API to get user 
        // axios.post('http://localhost:5000/api/users/register', { 
        //     loginData
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
    };

    return (
        <form onSubmit={submitHandler}>
            <div className=''>
                <h2>Register Now!</h2>
                <div className=''>
                    <label>User Name</label>
                    <input type='text' value={enteredUserName} onChange={usernameChangeHandler} />
                </div>

                <div className=''>
                    <label>Password</label>
                    <input type='Password' value={enteredPassword} onChange={passwordChangeHandler} />
                </div>

                <div className=''>
                    <label>FirstName</label>
                    <input type='FirstName' value={enteredFirstName} onChange={FirstNameChangeHandler} />
                </div>

                <div className=''>
                    <label>LastName</label>
                    <input type='LastName' value={enteredLastName} onChange={LastNameChangeHandler} />
                </div>

                <div className=''>
                    <label>Email</label>
                    <input type='Email' value={enteredEmail} onChange={EmailChangeHandler} />
                </div>
 
            </div>

            <div className="">
                <button type='submit'>Register</button>
            </div>
        </form>
    )
};

export default UserRegisterForm;