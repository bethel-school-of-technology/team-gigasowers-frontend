import axios from "axios";

//Function determines wether user JWT Token is still valid; returns true or false
const CheckAuth = async () => {

    let result = null;
 

    //set JWT token into header for server side authentication
    let myHeaders = {
        'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
    };

   return await axios.get('http://localhost:5000/api/users/profile', { 'headers': myHeaders })
        .then(function (response) {
            //console.log(response.data);
            console.log("checkAuth response status: " + response.status);
            if (response.status === 401 || response === null) {
                //user does not have a valid token or is not logged in
                console.log("No token or must be logged in");
                return result;
            }
            if (response.status === 200) {
                //user has a valid token; return the userName 
                result = response.data;
               //console.log("CheckAuth result: ");
               // console.log(result);
                return result;
            }
            else {
                console.log(`Response status: ${response.status} `);
                return result;
            }

        })
        .catch(function (error) {
            console.log("catch error.response: " + error.message);
            return result;
        })

};

export default CheckAuth;