import axios from 'axios';
import React, { useState, useEffect } from 'react'; //{useState, useEffect}
import styled from 'styled-components';
//import ReactPlaceholder from 'react-placeholder';
//import "react-placeholder/lib/reactPlaceholder.css";
import { CustomPlaceholder } from 'react-placeholder-image';
//import farmName from './LandingFunction';
//import farmDescription from './LandingFunction';
//import farmId from './LandingFunction';

const CardStyles = styled.div`
.card{
   flex: 0.8;
   box-sizing: border-box;
   margin: 0;
   padding: px;
   font-family: Oxygen, sans-serif;
   margin: 2rem;
   gap: 3px;
}

.cardWrapper{
    border: black dashed;
    float: center;
    width: 400px;
    height: 150px;
    box-shadow: 0 2px 20px gray;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;

}

.cardImg{
object-fit: cover;
float: left;
}

.cardWords{
width: 33%;
float: right;
}

.cardTitle{
    font-size: xx-large;
    padding: 1px;
}

.cardDes{
    padding: 0 1rem;
}

.cardBut{
    padding: 1rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
    margin: 1px;
    border: 2px solid red;
    //background: transparent;
    color: red;
    border-radius: $radius;
    transition : background 200ms ease-in, color 200ms ease-in;
}

.card::hover{
    transform: scale(1.02)
}
.cardBut :hover{
background: red;
color: white;
}
`;

//const responce = "";

export default function Card() {

    const [user, setUser] = useState([]);


    useEffect(() => {
       getFarm();
    }, [])



    async function getFarm() {
        try {
        const response = await axios.get('http://localhost:5000/api/users/farms');
    
        console.log(response.userFarms.farmId)
        setUser(response)

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

            {user.map(currentUser => (  
                <div>
                <div className="cardWrapper">
                    <div className="cardBody">
                        <div className="cardImg">
                            {/* <img src="./imgtest/imgholder.png" /> */}
                            <CustomPlaceholder width={265} height={149} />
                        </div>
                        <div className="cardWords">
                            <p className ="cardFarmId">{currentUser.userFarms.farmId}</p>
                            <h2 className="cardTitle">{currentUser.userFarms.farmName}</h2>
                            <p className="cardDes">{currentUser.userFarms.farmDescription}</p>
                        </div>
                        </div>
                    </div>
                </div> 
            ))};
        </CardStyles>

    )

}

//<button className="cardBut">Buttonです</button>
//<div>{currentUser.userFarms.farmId}</div>


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