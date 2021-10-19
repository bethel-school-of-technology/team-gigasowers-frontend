import axios from "axios";

//Function determines wether user JWT Token is still valid; returns true or false
const CheckAuth = async() => {

    //set JWT token into header for server side authentication
    let myHeaders = {
        'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
    };

    await axios.get('http://localhost:5000/api/users/profile',
        { 'headers': myHeaders })
        .then(function (response) {
            //console.log(response.status);
            if (response.status === 401) {
                //user does not have a valid token or is not logged in
                console.log("No token or must be logged in");
                return false;
            }
            if (response.status === 200) {
                //user has a valid token
                return true;
            }
            else {
                console.log(`Response status: ${response.status} `);
            }

        })
        .catch(function (error) {
            console.log("catch error: " + error);
        });


};

export default CheckAuth;