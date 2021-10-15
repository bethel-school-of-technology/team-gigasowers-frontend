import React from 'react'
import styled from 'styled-components';

const FarmProduceStyles = styled.div`
font-family: 'MontserratRegular';
.container {
    width: 80%;
    min-height: 100vh;
    padding-left: 5rem;
}
.farmProduce_shell {
    margin-top: 1rem;
    width: 250px;
    height: 250px;
    float: left;
    border-radius: 50%;
    // overflow: hidden;
    // display: inline-block;
    border: 10px solid var(--terra);
    background-color: black;
    img {
        height: 100%;
    }
    
}
.produceTitle {
    margin-top: 16rem;
    font-size: 2rem;
}
.produceInventory {
    font-size: 1.1rem;
    margin-top: 1rem;
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
