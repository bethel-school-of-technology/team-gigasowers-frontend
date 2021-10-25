// import React, { useEffect, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import CheckAuth from '../../services/CheckAuth';




// const FarmToggle = () => {

//     let history = useHistory();

//     const [farmerStatus, setFarmerStatus] = useState(false);

//     useEffect(async () => {
//         //checkAuth for valid token will go here
//         let validToken = await CheckAuth();
//             console.log(validToken.isFarmer);
//         if (!validToken) {
//             setFarmerStatus(false);
//             console.log("userName");
//         } else {
//             if (localStorage.getItem("isFarmer")) {
//                 console.log("farmer? " + localStorage.getItem("isFarmer"));
//                 console.log("isFarmer");
//                 setFarmerStatus(true);
//             }
//         }
//     }, []);

        
//     //handlers for each input field on the form
//     const notFarmerHandler = (event) => {
//         history.push('/users/farmRegister');
//         window.location.reload();
//     };
//     const farmHandler = (event) => {
//         //remove local storage items
//         history.push('/users/farmProfile');
//         window.location.reload();
//     };


//     return (
//         <div>
//             {farmerStatus ?
//                 <Link type="button" onClick={farmHandler} className="btn">Farm Profile</Link>
//                 :
//                 <Link type="button" onClick={notFarmerHandler} className="btn">Sell Produce?</Link>
//             }
//         </div>
//     )
// }

// export default FarmToggle;


