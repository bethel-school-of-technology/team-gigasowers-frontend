//import { SignalWifi1BarLock } from '@material-ui/icons';
import axios from 'axios';
import React from 'react'; //, { useState, useEffect }
import { PhotoPlaceholder } from 'react-placeholder-image';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';



const FarmDetailStyles = styled.div`


font-family: 'MontserratRegular';
* {
    box-sizing: border-box;
}

body {
    
    font-color: black;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 100vh;

}

.container {
        justify-content: center;
        height: 300px;
        background-color: var(--cream);
        padding: 1em;
        margin: 2rem auto;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        width: 50%;
}
.image_float {
    float: left;
    margin-top:1rem;
    width: 25%;
    display: block;
}

.farmImage {
    margin: 2rem auto;
    border-radius: 12px;
    display: block;
}
.info_float {
    float: right;
    margin-top: -2px;
    width: 50%;
    height: 200px;
    display: block;
}
.farmNameSection{
    width: 100%
    margin-bottom: 1rem;

}
.farmInfo {
    margin-top: 1rem;
    width: 100%;
    height: 100%;
    background-color: var(--cream);
    border: 5px solid var(--coral);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
}
.farmTitle {
    font-size: 1.75rem;
    float: left;
}
//produce

.produceContainer {
    justify-content: center;
    height: 200px;
    background-color: var(--cream);
    padding: 1em;
    margin: 2rem auto;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    width: 50%;
}
.produce_info_float {
width: 100%;
height: 100%;
display: block;
}
.farmProducts {
    margin-top: 1rem auto;
    width: 100%;
    height: 80%;
    background-color: var(--cream);
    border: 5px solid var(--md-gg);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
}
.eachProduct{
display: inline-block;
}


//events style


.eventsContainer {
    justify-content: center;
    height: 200px;
    background-color: var(--cream);
    padding: 1em;
    margin: 2rem auto;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    width: 50%;
}
.events_info_float {
float: right;
width: 100%;
height: 100%;
display: block;
}
.farmEvents {
margin-top: 1rem auto;
width: 100%;
height: 80%;
background-color: var(--cream);
border: 5px solid var(--lt-navy);
border-radius: 12px;
padding: 1.5rem;
text-align: left;
}
.eachEvent{
display: inline-block;
}

@media only screen and (max-width: 1000px) {
    .container {
        display: block;
        min-width: 325px;
        flex-direction: column;
        height: 600px;
    }
    .image_float {
        width: 100%;
        flex-direction: column;
    }

    .info_float {
        justify-content: center;
        width: 100%;
        max-height: 350px;
        flex-direction: column;
        padding-left: .5rem;
    }

    .events {
        justify-content: center;
        width: 100%;
        max-height: 375px;
        flex-direction: column;
        padding-left: .5rem;
    }
    .eachEvents{
        display: block;
        max-height: 200px;
        flex-direction: column;
        width: 85%
    }
    .eachProduct{
        display: block;
        max-height: 150px;
        flex-direction: column;
        width: 85%
    }
    .btn {
        margin-top: -1rem;
        float: right;
        padding: .5rem;
        background-color: var(--terra);
        border: 3px solid var(--terra);
        border-radius: 12px;
        text-decoration: none;
    }

}

@media only screen and (max-width: 768px) {
    .container {
        display: block;
        min-width: 325px;
        flex-direction: column;
        height: 600px;
    }
    .image_float {
        width: 100%;
        flex-direction: column;
    }
    .farmTitle{
        text-align: center;
    }
    .info_float {
        justify-content: center;
        width: 100%;
        max-height: 350px;
        flex-direction: column;
        padding-left: .5rem;
    }

    .eventsContainer {
        display: block;
        min-width: 325px;
        flex-direction: column;
    }
    
    .produceContainer {
        display: block;
        min-width: 325px;
        flex-direction: column;
    }
    

}
`


const FarmDetails = () => {
    //const =>  FarmDetails() {
    //export default function FarmDetails() {

    const location = useLocation();
    console.log("selectedFarm Received: ");
    console.log(location.state?.selectedFarm);
    const farm = location.state?.selectedFarm;

    console.log("logging inventory");
    console.log(farm.farmInventory);


    return (
        <FarmDetailStyles>

            <div className="container">
                <div className="image_float">
                    <PhotoPlaceholder width={280} height={200} className="farmImage" />
                </div>
                <div className="farmNameSection">
                    <h2 className="farmTitle">{farm.farmName}</h2>
                </div>
                <div className="info_float">
                    <div className="farmInfo">
                        <p class="farmDetails" tabindex="0">
                            <strong> {farm.farmDescription}</strong>
                            <br />
                            <strong>{farm.farmAddress}</strong>
                            <br />
                            <strong>{farm.farmCity}</strong>,
                            <strong> {farm.farmState}</strong>,
                            <strong>{farm.farmZip}</strong>
                            <br />
                            <strong>{farm.farmWebsite}</strong>
                            <br />
                            <strong>{farm.farmEmail}</strong>
                        </p>
                    </div>
                </div>

            </div>
            <div className="produceContainer">
                <h3>Current Produce:</h3>
                <div className="produce_info_float">
                    <div className="farmProducts">
                        {/* <div classname="eachProduct" key={props.farmProduct.productId}>
                            {farm.map(inv => (
                            <h3>{props.farmProduct.productCategory} -- {props.farmProduct.productName}</h3>
                            <h4>{props.farmProduct.productDescription}</h4>
                            <h4>Quantity Available: {props.farmProduct.productQty}</h4>
                            <h4>Cost: ${props.farmProduct.productUnitPrice}</h4>
                            <p>{farm.farmInventory[0].map}</p>
                            <br/>
                            <p>{farm.farmInventory[1].productCategory}</p>
                            <br/>
                            <h2>{farm.farmInventory[1].productName}</h2>
                            <br/>
                            <p>{farm.farmInventory[1].productQty}</p>
                            <p>{farm.farmInventory[1].productUnitPrice}</p>
                   
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="eventsContainer">
                <h3>Farm Events:</h3>
                <div className="events_info_float">
                    <div className="farmEvents">
                        {/* <div classname="eachEvents" key={farm.farmEvent.eventId}>
                                <strong>{farm.farmEvents}</strong>
                                <p>{farm.farmEvents.eventId}</p>
                                <h3>{farm.farmEvent.eventName} / {farm.farmEvent.eventStartDate} - {farm.farmEvent.eventFinishDate}</h3>
                                <h3>{farm.farmEvent.eventAddress}</h3>
                                <h3>{farm.farmEvent.eventCity} {farm.farmEvent.eventState} {farm.farmEvent.eventZip}</h3>
                        </div> */}
                    </div>
                </div>
            </div>

        </FarmDetailStyles>
    )
}
export default FarmDetails;


