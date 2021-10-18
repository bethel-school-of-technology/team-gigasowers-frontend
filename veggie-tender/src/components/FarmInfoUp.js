import { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';


const FarmUpdateStyles = styled.div`
font-family: 'MontserratRegular';
* {
    box-sizing: border-box;
}

body {
    font-family: 'MontserratRegular';
    font-color: black;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 100vh;

}

.container {
        justify-content: center;
        height: 450px;
        background-color: var(--cream);
        padding: 1em;
        margin: 2rem auto;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        width: 85%;
}
.image_float {
    float: left;
    width: 35%;
    display: flex;
    flex-wrap: wrap;
}

.farmImage {
    margin: 2rem auto;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    // display: flex;
    // flex-wrap: wrap;
    border: 5px dashed var(--terra);
    background-color: grey; 
}
.info_float {
    float: right;
    width: 65%;
    display: flex;
    flex-wrap: wrap;
}
.farmInfoUpdate {
    margin-top: 2rem auto;
    width: 100%;
    height: 100%;
    background-color: var(--cream);
    border: 5px solid var(--coral);
    border-radius: 12px;
    padding: 2rem;
    text-align: left;
}

.h3 {
    font-size: 1.5rem;
}
.farmNameSection {
    
}
.farmName {
    margin-top: -1rem;
    font-size: 1.75rem;
}

@media only screen and (max-width: 768px) {
    .farmImage {
        height: 200px;
        flex-direction: column;
    }
    .farmInfo {
        flex-direction: column;
    }
}
`;


const FarmInfoUpdate = () => {

    // const [farmImage, setFarmImage] = useState();
    const [userFarms, setUserFarms] = useState({
            profileSection: 'FARM',
            farmName: '',
            farmDescription: '',
            farmAddress: '',
            farmCity: '',
            farmState: '',
            farmZip: '',
            farmWebsite: '',
            farmEmail: ''
    });
    // const [farmName, setFarmName] = useState();
    // const [farmDescription, setFarmDescription] = useState();
    // const [farmAddress, setFarmAddress] = useState();
    // const [farmCity, setFarmCity] = useState();
    // const [farmState, setFarmState] = useState();
    // const [farmZip, setFarmZip] = useState();
    // const [farmWebsite, setFarmWebsite] = useState();
    // const [farmEmail, setFarmEmail] = useState();

    let { farmId } = useParams;
    //set JWT token into header for server side authentication
    let myHeaders = {
        'Authorization': `Bearer ${localStorage.getItem("vegToken")}`,
        'Content-Type': 'application/json'
    };

    const updateHandler = (event) => {
        event.preventDefault();

        useEffect(() => {
            const url = `http://localhost:5000/api/users/farms/${farmId}`;

            axios.put(url,
                { 'headers': myHeaders }).then(result => {
                    setUserFarms(result.data);
                    // setFarmName(result.data);
                    // setFarmDescription(result.data);
                    // setFarmAddress(result.data);
                    // setFarmCity(result.data);
                    // setFarmState(result.data);
                    // setFarmZip(result.data);
                    // setFarmWebsite(result.data);
                    // setFarmEmail(result.data);
                }, err => {
                    useHistory.push('/');
                }, [farmId, useHistory]);
        });
    }
        return (
            <FarmUpdateStyles>
                <div className="container">
                    <div className="image_float">
                        <h3 className="farmImage">Farm Image</h3>
                    </div>
                    <div className="info_float">
                        <div className="farmInfoUpdate">

                            <form id='farmUpdate' className='form' onSubmit={updateHandler}>
                                <h2>Update Your Farm Information:</h2>
                                <div className='form-field'>
                                    <label className='form-label'>Farm Name</label>
                                    <input type='text'
                                        placeholder='Update your farm name'
                                        value={userFarms.farmName}
                                        onChange={e => setUserFarms({...userFarms, farmName: e.target.value})}
                                    />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>Farm Details</label>
                                    <field type='text'
                                        placeholder='Update your farm details'
                                        value={userFarms.farmDescription}
                                        onChange={e => setUserFarms({...userFarms, farmDescription: e.target.value})}
                                    />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>Farm Address</label>
                                    <input type='text'
                                        placeholder='Update farm address'
                                        value={userFarms.farmAddress}
                                        onChange={e => setUserFarms({...userFarms, farmAddress: e.target.value})}
                                    />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>City</label>
                                    <input type='text'
                                        placeholder='Update City'
                                        value={userFarms.farmCity}
                                        onChange={e => setUserFarms({...userFarms, farmCity: e.target.value})}
                                    />
                                    <small></small>
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>State</label>
                                    <input type='text'
                                        placeholder='Update your state'
                                        value={userFarms.farmState}
                                        onChange={e => setUserFarms({...userFarms, farmState: e.target.value})}
                                    />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>Zip</label>
                                    <input type='text'
                                        placeholder='Update zipcode'
                                        value={userFarms.farmZip}
                                        onChange={e => setUserFarms({...userFarms, farmZip: e.target.value})}
                                    />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>Farm Website</label>
                                    <input type='text'
                                        placeholder='Website'
                                        value={userFarms.farmWebsite}
                                        onChange={e => setUserFarms({...userFarms, farmWebsite: e.target.value})}
                                    />
                                </div>
                                <div className='form-field'>
                                    <label className='form-label'>Farm Email</label>
                                    <input type='text'
                                        placeholder='Email'
                                        value={userFarms.farmEmail}
                                        onChange={e => setUserFarms({...userFarms, farmEmail: e.target.value})}
                                    />
                                </div>
                                <div className='btn-field'>
                                    <button className='btn' type='submit'>Update</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </FarmUpdateStyles>
        )
    }

    export default FarmInfoUpdate;