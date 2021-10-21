import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckAuth from '../../services/CheckAuth';




const FarmToggle = () => {

    let history = useHistory();

    const [farmerStatus, setFarmerStatus] = useState(false);
    const [userName, setUserName] = useState('');


    useEffect(() => {

        //checkAuth for valid token will go here
        let validToken = CheckAuth();
        if (!validToken) {
            console.log("validToken returned false or undefined");
            setUserName('');
            setFarmerStatus(false);
            
        } else {
            //console.log("LoginToggle userName: " + localStorage.getItem("userName"));
            if (localStorage.getItem("userName")){
                setUserName(localStorage.getItem("userName"));
                
                if (("isFarmer") === true) {
                    setFarmerStatus(true);     
                }else {
                    setFarmerStatus(false);
                }
            }        
        }
    }, []);
        
    //handlers for each input field on the form
    const notFarmerHandler = (event) => {
        history.push('/users/farmRegister');
        setFarmerStatus(false);
        window.location.reload();
    };
    const farmHandler = (event) => {
        //remove local storage items
        history.push('/users/farmProfile');
        setFarmerStatus(true);
        window.location.reload();
    };


    return (
        <div>
            {farmerStatus ?
                <Link type="button" onClick={farmHandler} className="btn">Farm Profile</Link>
                :
                <Link type="button" onClick={notFarmerHandler} className="btn">Sell Produce?</Link>
            }
        </div>
    )
}

export default FarmToggle;


