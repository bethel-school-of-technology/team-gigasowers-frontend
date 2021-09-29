import React from 'react'

export default function FarmerRegisterForm() {
    return (
        <div className='farmer-form-content'>
            <form className='form'>
                <h1>Register Your Farm:</h1>
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>
                        <input type='text' id='username' className='input' placeholder='Username'/>
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        <input type='text' id='password' className='input' placeholder='Password'/>
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='farmName' className='form-label'>
                        <input type='text' id='farmName' className='input' placeholder='What is the name of your farm?'/>
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='farmDescription' className='form-label'>
                        <input type='text' id='farmDescription' className='input' placeholder='Tell us a little bit about your farm!'/>
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='farmAddress' className='form-label'>
                        <input type='text' id='farmAddress' className='input' placeholder='Where is your farm?'/>
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='farmCity' className='form-label'>
                        <input type='text' id='farmCity' className='input' placeholder='City'/>
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='farmState' className='form-label'>
                        <input type='text' id='farmState' className='input' placeholder='State'/>
                    </label>
                </div>
            </form>
        </div>
    )
};

