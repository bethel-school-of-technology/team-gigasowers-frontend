import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import Product from './Product';



const FarmProduceStyles = styled.div`
font-family: 'MontserratRegular';
* {
    box-sizing: border-box;
}

body {
    font-family: 'MontserratRegular';
    font-color: black;
    font-size: 12px;
    display: flex;
    align-items: center;
    min-height: 100vh;

}`;


const FarmProduce = () => {


    const [productArr, setProductArr] = useState([]);  //state for events array


    useEffect(() => {

        //set JWT token into header for server side authentication
        let myHeaders = {
            'Authorization': `Bearer ${localStorage.getItem("vegToken")}`
        };
        //get events for user profile
        axios.get('http://localhost:5000/api/users/profile',
            { 'headers': myHeaders })
            .then(function (response) {
                console.log("events GET response: " + response.status);
                if (response.status === 401) {
                    console.log("No token or must be logged in");
                }
                if (response.status === 200) {
                    //console.log(response);
                    //validate this profile is a farmer
                    if (!response.data.isFarmer) {
                        console.log("this profile is not a farmer");
                    }

                    setProductArr(prevArr => {
                        const newArr = [...prevArr, ...response.data.userFarms.farmInventory];
                        return newArr;
                    });
                }
                else {
                    console.log(`Unable to get farm event info; error status: ${response.status} `);
                }
            })
            .catch(function (error) {
                console.log("catch error: " + error);
            });

    }, []);



    return (
        <FarmProduceStyles>
            {/* <div className="container">
                <div className="info_float">
                    <div className="farmEvents"> */}
                        <div>
                            <h3>
                                {productArr.map(item => (
                                    <Product farmProduct={item} />
                                ))}
                            </h3>
                        </div>
                    {/* </div>
                </div>
            </div> */}
        </FarmProduceStyles >
    )
};

export default FarmProduce;


