import React from 'react'
import styled from 'styled-components';

const UserPreferenceStyles = styled.div`
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
    
}

.container {
        justify-content: center;
        background-color: var(--cream);
        padding: 1em;
        margin: 2rem auto;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        width: 85%;
        height: 250px;
    
}

.userPreferences {
    margin-top: 1rem;
    width: 250px;
    height: 100%;
    float: left;
    overflow: hidden;
    display: inline-block;
    border-radius: 12px;
    border: 5px solid var(--terra);
    background-color: var(--cream);

    
}
.title {
    font-size: 1.5rem;
}
.producePref {
    font-size: 1.1rem;
    margin-top: 1rem;
}
@media only screen and (max-width: 768px) {
    .title {
        display: flex;
        flex-direction: column;
    }
    .producePref {
        display: flex;
        flex-direction: column;
    }
}
`;

export default function FarmProduce() {
    let preferenceArray = ("cucumbers", "kale", "pumpkin");

    return (
        <UserPreferenceStyles>
        <div className="container">
                <div className="userPreferences">
                    <h3 className="title">My Favorite Fruits and Veggies</h3>
                    <h2 className="producePref">{preferenceArray}</h2>
                </div>
        </div>
        </UserPreferenceStyles>
    )
}