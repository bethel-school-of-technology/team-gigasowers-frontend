import React from 'react';
import styled from 'styled-components';
import FarmerEvent from './FarmerEvent';



const FarmInfoStyles = styled.div`
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
.farmInfo {
    margin-top: 2rem auto;
    width: 100%;
    height: 100%;
    background-color: var(--cream);
    border: 5px solid var(--coral);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
}

.h3 {
    font-size: 1.5rem;
}
.addressDetails {
    float: right;
    display: flex;
    flex-wrap: wrap;
}
.farmZip {
    float: right;
    display: flex;
    flex-wrap: wrap;
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



const Events = () => {


    return (
        <FarmInfoStyles>
            <div className="container">
                <div className="image_float">
                    <h3 className="farmImage">Farmer Market Image</h3>
                </div>
                <div className="info_float">
                    <div className="farmInfo">
                        <FarmerEvent />

                        <button type="button" className="btn">Edit Event Info</button>

                    </div>
                </div>
            </div>
        </FarmInfoStyles>


    )
}

export default Events;