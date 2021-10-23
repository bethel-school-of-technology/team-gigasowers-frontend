import axios from 'axios';
import React, { useState, useEffect } from 'react'; //{useState, useEffect}
import styled from 'styled-components';
//import ReactPlaceholder from 'react-placeholder';
//import "react-placeholder/lib/reactPlaceholder.css";
import { PhotoPlaceholder } from 'react-placeholder-image';
//import farmName from './LandingFunction';
//import farmDescription from './LandingFunction';
//import farmId from './LandingFunction';




const CardStyles = styled.div`
@media (max-width: 2560px){
    .bigWrapper{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 25px;
        position: center;
        // border: 3px solid green; 
        .cardWrapper{
            border: black solid;
        }
    }
}

@media (max-width: 1440px){
    .bigWrapper{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 25px;
        position: center;
        // border: 3px solid green; 
        .cardWrapper{
            border: black solid;
        }
    }
}

@media (max-width: 810px){
    .bigWrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
    }
}

@media (max-width: 400){
    .bigWrapper{
        display: grid;
        grid-template-columns: 1fr;
    }
}

.cardWrapper{
    display: flex;
    flex-direction: row;
    border: black dashed;
    flex-wrap: wrap;
    float: center;
    width: 265px;
    height: 150px;
    box-shadow: 0 2px 20px gray;
    justify-content: space-between;
    cursor: pointer;
}

.cardImg{
    object-fit: cover;
    float: top;
}

.cardWords{
float: bottom;
}

.cardTitle{
    font-size: x-large;
    padding: 1px;
}

`;

// .card::hover{
//     transform: scale(1.02)
// }
// .cardBut :hover{
// background: red;
// color: white;
// }
// .card{
//     flex-wrap: wrap;
//     flex: 0.8;
//     box-sizing: border-box;
//     margin: 0;
//     padding: px;
//     font-family: Oxygen, sans-serif;
//     margin: 2rem;
//     gap: 3px;
//  }
//const responce = "";

export default function Card() {

    const [user, setUser] = useState([]);


    useEffect(() => {
       getFarm();
    }, [])



    async function getFarm() {
        try {
        const response = await axios.get('http://localhost:5000/api/users/farms');
    
        console.log(response.data)
        setUser(response.data)

        //   for (let i = 0; i < response.length; i++) {
        //       console.log(response[i].userF)
        //   }
        //  response = await axios.get('/farms.farmDescription');
        //   console.log(response);
        //  response = await axios.get('/farms.farmId');
        //   console.log(response);
        } catch (error) {
        console.error(error);
        }
    }

    return (
        <CardStyles>
            <div className="bigWrapper">
            {user.map(currentUser => (  
                //<link to="users/farmProfile">    className="d-flex flex-wrap"> console.log(currentUser.userFarms.farmId)
                <div>
                    <br/>
                <div className="cardWrapper">
                    <div className="cardBody">
                        <div className="cardImg">
                            {/* <img src="./imgtest/imgholder.png" /> */}
                            <PhotoPlaceholder width={265} height={149} />
                        </div>
                        <div className="cardWords">
                            {/* <p className ="cardFarmId">{currentUser.userFarms.farmId}</p> */}
                            <h2 className="cardTitle">{currentUser.userFarms.farmName}</h2>
                        </div>
                        </div>
                    </div>
                </div>    
                //</link> 
            ))};
            </div>
        </CardStyles>

    )
}

//<button className="cardBut">Buttonです</button>
//<div>{currentUser.userFarms.farmId}</div>
                            //<p className="cardDes">{currentUser.userFarms.farmDescription}</p>

    // farmName = 'Farm Name',
    // farmDescription = 'Farm Details',
    // farmAddress = 'Farm Address',
    // farmCity = "Farm City",
    // farmState = "Farm State",
    // farmWebsite = "Farm Website",
    // farmEmail = "Farm Email",

// }){
    // const [repo, setRepo] = useState([]);
    

    // const getRepo = () => {
    // axios.get('localhost:5000/api/users/farms')
    // .then((response) => {
    //     console.log(response);
    //     const myRepo = response.data;
    //     setRepo(myRepo);
    // });
    // };

    // useEffect (() => getRepo(), []);


    // farmId = 'farm ID',
    // farmName = 'Farm Name',
    // farmDescription = 'Farm Details',
    // farmCity = "Farm City",

    // function componentDidMount() {
    //     fetch('localhost:5000/api/users/farms')
    //         .then(response => response.json())
    //         .then(data => this.setState({ totalReactPackages: data.total }));
    // }

    // useEffect(() => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch('https://localhost:5000/api/users/farms')
    //         .then(response => response.json())
    //         .then(data => setTotalReactPackages(data.total));
    // }, []);

    // axios.get('/farms', {
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

//     axios.get('localhost:5000/api/users/farms')
//   .then((response) => {
    
//     console.log(response);
//   })
//   .catch((error) => {
  
//   })