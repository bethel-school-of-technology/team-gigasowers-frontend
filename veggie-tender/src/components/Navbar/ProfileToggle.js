// import React, { useEffect, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import CheckAuth from '../../services/CheckAuth';




// const ProfileToggle = () => {

//     let history = useHistory();

//     const [loginStatus, setLoginStatus] = useState(false);
//     const [userName, setUserName] = useState('');


//     useEffect(async () => {

//         //checkAuth for valid token will go here
//         let validToken = CheckAuth();
//         if (!validToken) {
//             console.log("validToken returned false or undefined");
//             setUserName('');
//             setLoginStatus(false);
//         } else {
//             //console.log("LoginToggle userName: " + localStorage.getItem("userName"));
//             if (localStorage.getItem("userName")) {
//                 setUserName(localStorage.getItem("userName"));
//                 setLoginStatus(true);
//             }
//         }
//     }, []);

//     // console.log("ProfileToggle: userName = " + userName);
//     // if (localStorage.getItem("userName") === userName) {
//     //     // console.log("Entering LoginToggle: userName are same, return...");
//     //     // console.log(userName);
//     //     // console.log("loginStatus: " + loginStatus);
        
//     // };


//     //handlers for each input field on the form
//     const regUserHandler = (event) => {
//         //redirect to registration page
//         history.push('/users/profile');
//         window.location.reload();
//     };
//     const userHandler = (event) => {
//         //remove local storage items
//         localStorage.clear();
//         setLoginStatus(false);
//         history.push('/users/register');
//         window.location.reload();
//     };


//     return (
//         <div>
//             {loginStatus ?
//                 <Link type="button" onClick={regUserHandler} className="btn">Profile</Link>
//                 :
//                 <Link type="button" onClick={userHandler} className="btn">Register</Link>
//             }
//         </div>
//     )
// }

// export default ProfileToggle;


