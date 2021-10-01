
import React, { useState } from 'react';
//import './LoginForm.css';



const LoginForm = () => {

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
        console.log(`Login Data: ${loginData.userName}`);
        console.log(`Login Data: ${loginData.userPass}`);
        
        setUserName('');
        setPassword('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className=''>
                <h2>Login</h2>
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
                <button type='submit'>Login</button>
            </div>
        </form>
    )
};

export default LoginForm;