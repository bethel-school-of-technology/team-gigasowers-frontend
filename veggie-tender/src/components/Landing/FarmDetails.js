//import { SignalWifi1BarLock } from '@material-ui/icons';
import axios from 'axios';
import React from 'react'; //, { useState, useEffect }
import { PhotoPlaceholder } from 'react-placeholder-image';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';



const FarmDetailStyles = styled.div`
.bigBox{
    border: solid black;
}

.infoBox{
    border: solid black;
}

.produceBox{
    background-color: #e7feff;
    border: solid black;
}

.eventsBox{
    border: solid black;

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
            
            <div className="bigBox">
                <div className="infoBox">
                    <PhotoPlaceholder width={350} height={250} className="farmImg"/>
                         <h2 className="farmTitle">{farm.farmName}</h2>
                        <p class="farmDetails" tabindex="0">
                        <strong>{farm.farmAddress}</strong>
                            <strong>{farm.farmCity}</strong>, 
                            <strong> {farm.farmState}</strong>, 
                            <strong>{farm.farmZip}</strong>
                            <br/>
                            <strong> {farm.farmDescription}</strong>
                        </p>
                </div>

                 <div className="produceBox">
                    {/* {farm.map(inv => ( */}
                    <div>aaaa もの　items</div>
                    <br/>
                        {/* <p>{farm.farmInventory[0].map}</p>
                        <br/>
                        <p>{farm.farmInventory[1].productCategory}</p>
                        <br/>
                        <h2>{farm.farmInventory[1].productName}</h2>
                        <br/>
                        <p>{farm.farmInventory[1].productQty}</p>
                        <p>{farm.farmInventory[1].productUnitPrice}</p>
                    */}
                </div>

                <div className="eventsBox">
                    <div>ahh event box あああああ</div>
                    {/* <strong>{farm.farmEvents}</strong>
                    <p>{farm.farmEvents.eventId}</p> */}
                </div>
            </div>
        </FarmDetailStyles>
    )
}
export default FarmDetails;

  // const [user, setUser] = useState([]);
    //     useEffect(() => {
    //     getFarm();
    //     }, [])



    // async function getFarm() {
    //     try {
    //     const response = await axios.get('http://localhost:5000/api/users/farms');
    //         console.log(response.data)
    //         setUser(response.data)
    //     } 
    //     catch (error) {
    //     console.error(error);
    //     }
    // }





///{user.map(currentUser => (
//    ))}


// <div className="container">
//                 <div className="image_float">
//                     <img className="farmImage" src={farmImage} alt="profileImage"></img>
//                     <div className="farmNameSection">
//                         <h3 className="farmName">{farmName}</h3>
//                     </div>
//                 </div>
//                 <div className="info_float">
//                     <div className="farmInfo">

//                         <h3 className="farmDescription">Farm Description: </h3>
//                         <p>{farmDescription}</p><br />
//                         <h3 className="farmAddress">Address: </h3>
//                         <p>{farmAddress}</p><br />
//                         <h3 className="farmCity">City: </h3>
//                         <p>{farmCity}</p><br />
//                         <div className="stateContain">
//                             <h3 className="farmState">State: </h3>
//                             <p>{farmState}</p><br />
//                         </div>
//                         <div className="zipContain">
//                             <h3 className="farmZip">Zip: </h3>
//                             <p>{farmZip}</p><br />
//                         </div>
//                         <h3 className="farmWebsite">Website: </h3>
//                         <p>{farmWebsite}</p><br />
//                         <h3 className="farmEmail">Contact Us: </h3>
//                         <p>{farmEmail}</p>
//                     </div>
//                     <div className="buttonSection">
//                         <Link to='/users/productRegister' type="button" className="btn-1">Add Produce</Link>
//                         <Link to='/users/events' type="button" className="btn-1">My Events</Link>
//                         <Link to='/users/update/farmProfile' type="button" className="btn-2">Update Info</Link>
//                     </div>
//                 </div>
//             </div>



// const FarmInfoStyles = styled.div`
// font-family: 'MontserratRegular';
// * {
//     box-sizing: border-box;
// }

// body {
//     font-family: 'MontserratRegular';
//     font-color: black;
//     font-size: 12px;
//     display: flex;
//     align-items: center;
//     min-height: 100vh;
// }
// .container {
//     justify-content: center;
//     height: 450px;
//     background-color: var(--cream);
//     padding: 1em;
//     margin: 2rem auto;
//     border-radius: 12px;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
//     width: 85%;
// }
// .image_float {
//     float: left;
//     width: 35%;
//     display: flex;
//     flex-wrap: wrap;
// }
// .farmImage {
//     margin: 2rem auto;
//     width: 250px;
//     height: 250px;
//     border-radius: 50%;
//     border: 5px dashed var(--terra);
//     background-color: grey; 
// }
// .info_float {
//     float: right;
//     height: 90%;
//     width: 65%;
//     display: block;
// }
// .farmInfo {
//     margin-top: 1rem auto;
//     width: 100%;
//     height: 100%;
//     background-color: var(--cream);
//     border: 5px solid var(--coral);
//     border-radius: 12px;
//     padding: 1.5rem;
//     text-align: left;
// }
// .stateContain {
//     float: right;
//     margin-right: 15rem;
//     margin-top: -3.75rem;
//     height: 10px;
//     display: inline-block;
//     flex-direction: column;
// }
// .zipContain {
//     float: right;
//     margin-right: 10rem;
//     margin-top: -3.75rem;
//     height: 10px;
//     display: inline-block;
//     margin-left: 5rem;
// }
// .farmNameSection {
//     margin-top: -0.5rem;
//     margin-left: 2rem;
//     font-size: 1.5rem;
//     justify-content: center;
// }
// .buttonSection{
//     float: right;
//     margin-top: 1rem;   
// }
// .btn{
//     padding: .5rem;
//     link-color: white;
//     background-color: var(--terra);
//     border: 3px solid var(--terra);
//     border-radius: 12px;
//     text-decoration: none;
//     justify-content: flex-end;
    
// }
// .btn-1{
//     float: left;
//     padding: .5rem;
//     margin-top: -0.5rem;
//     margin-right: 1rem;
//     background-color: var(--md-gg);
//     border: 3px solid var(--md-gg);
//     border-radius: 12px;
//     text-decoration: none; 
// }
// .btn-2{
//     float: right;
//     padding: .5rem;
//     margin-top: -0.5rem;
//     background-color: var(--terra);
//     border: 3px solid var(--terra);
//     border-radius: 12px;
//     text-decoration: none; 
// }

// @media only screen and (max-width: 768px) {
//     .container {
//         display: block;
//         flex-direction: column;
//         height: 900px;
//     }
//     .image_float {
//         width: 100%;
//         flex-direction: column;
//     }
//     .farmNameSection {
//         margin-left: 3rem;
//     }
//     .info_float {
//         justify-content: center;
//         width: 100%;
//         max-height: 450px;
//         flex-direction: column;
//         padding-left: .5rem;
//     }
//     .buttonSection{
//         float: right;
//         margin-top: 2rem;
//         margin-right: 0rem; 
//     }
//     .stateContain {
//         float: right;
//         margin-right: 5rem;
//         margin-top: -3.75rem;
//         height: 10px;
//         display: inline-block;
//         flex-direction: column;
//     }
//     .zipContain {
//         float: right;
//         margin-right: 0rem;
//         margin-top: -3.75rem;
//         height: 10px;
//         display: inline-block;
//         margin-left: 5rem;
//     }
// }
// `;
