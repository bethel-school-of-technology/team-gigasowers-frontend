import React from 'react'
import styled from 'styled-components';

const FarmerInfoStyles = styled.div`
font-family: 'MontserratRegular';
.container {
    width: 80%;
    height: 400px;
    padding-left: 5rem;
}
.farmImage_shell {
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
.farmInfo {
    margin-top: 2rem;
    margin-left: 35%;
    width: 65%;
    height: 400px;
    background-color: var(--turq);
    border-radius: 12px;
    padding: 1rem;
    padding-left: 3rem;
    text-align: left;

}
.farmName {
    margin-top: 16rem;
    font-size: 2rem;
}
.farmDesc {
    font-size: 1.1rem;
    margin-top: 1rem;
}
@media only screen and (max-width: 768px) {
    .farmImage {
        height: 350px;
        flex-direction: column;
    }
    .farmInfo {
        flex-direction: column;
    }
}
`;


export default function FarmerInfo({
    // farmImage = 'Farm Image',
    farmName = 'Farm Name',
    farmDescription = 'Farm Details',
    farmAddress = 'Farm Address',
    farmCity = "Farm City",
    farmState = "Farm State",
    farmWebsite = "Farm Website",
    farmEmail = "Farm Email",
}) {

    return (
        <FarmerInfoStyles>
            <div className="container">
                <div className="farmImage_shell">
                    <h3 className="farmImage">Img</h3>
                    <h3 className="farmName">{farmName}</h3>
                </div>
                <div className="farmInfo">
                    <h3 className="farmDesc">Farm Description: </h3>
                        <p>{farmDescription}</p><br/>
                    <h3 className="farmAddress">Address: </h3>
                        <p>{farmAddress}</p><br/>
                    <h3 className="farmCity">City: </h3>
                        <p>{farmCity}</p><br/>
                    <h3 className="farmState">State: </h3>
                        <p>{farmState}</p><br/>
                    <h3 className="farmWebsite">Website: </h3>
                        <p>{farmWebsite}</p><br/>
                    <h3 className="farmEmail">Contact Us: </h3>
                        <p>{farmEmail}</p>
                </div>
            </div>
        </FarmerInfoStyles>
    )
}
