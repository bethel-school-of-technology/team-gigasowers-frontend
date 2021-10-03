
import React, { useState } from 'react';
import axios from "axios";







const UserRegisterForm = () => {

    //set state for entered credentials
    const [enteredUserName, setUserName] = useState('');
    const [enteredPassword, setPassword] = useState('');

    


    //handlers for each input field on the form
    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };



    const submitHandler = (event) => {
        event.preventDefault();  //prevents form from refreshing after submit

        const loginData = {
            userName: enteredUserName,
            userPass: enteredPassword
        };
        console.log(`Login userName from Form: ${loginData.userName}`);
        console.log(`Login password from Form: ${loginData.userPass}`);

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
                    <input type='text' value={enteredPassword} onChange={passwordChangeHandler} />
                </div>
            </div>

            <div className="">
                <button type='submit'>Register</button>
            </div>
        </form>
    )
};

export default UserRegisterForm;