import React from 'react'
import styled from 'styled-components';

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

.farmProduce_shell {
    margin-top: .5rem;
    width: 100%;
    height: 95%;
    float: left;
    overflow: hidden;
    display: inline-block;
    border-radius: 12px;
    border: 5px solid var(--terra);
    background-color: var(--cream);

    
}
.produceTitle {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-left: 1rem;
}
.produceInventory {
    font-size: 1.1rem;
    margin-top: 1rem;
    margin-left: 2rem;
}
@media only screen and (max-width: 768px) {
    .produceTitle {
        display: flex;
        flex-direction: column;
    }
    .produceInventory {
        display: flex;
        flex-direction: column;
    }
}
`;

export default function FarmProduce() {

    
    let farmProduceArray = ("cucumbers", "kale", "pumpkin");

    return (
        <FarmProduceStyles>
        <div className="container">
                <div className="farmProduce_shell">
                    <h3 className="produceTitle">Current Produce Available</h3>
                    <h2 className="produceInventory">{farmProduceArray}</h2>
                </div>
        </div>
        </FarmProduceStyles>
    )
}
