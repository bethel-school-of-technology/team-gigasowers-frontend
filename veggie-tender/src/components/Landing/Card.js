import axios from 'axios';
import React, { useState, useEffect } from 'react'; //{useState, useEffect}
import styled from 'styled-components';
import { PhotoPlaceholder } from 'react-placeholder-image';



const CardStyles = styled.div`
@media (max-width: 2560px){
        .bigWrapper{
            margin-top: 6rem;
            
            display: flex;
            display: grid;
            grid-template-columns: 20% 20% 20% 20% 20%;
            position: absolute;
            width: 100%;
        }
}

@media (max-width: 1440px){
    .bigWrapper{
        margin-top: 6rem;
        display: flex;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media (max-width: 810px){
    .bigWrapper{
        margin-top: 6rem;
        display: flex;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 700px){
    .bigWrapper{
        margin-top: 6rem;
        margin-left: 0.5rem;
        display: grid;
        grid-template-columns: 1fr;
    }
}

.cards {
    display: flex;
    flex: wrap;
    margin-bottom: 2rem;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  
  .cardTop {
    background: var(--gray-green);
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border-radius: 16px;
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    text-align: center;
  }
  
  .cardImg {
    text-align: center;
    width: 100%;
    border-radius: 16px;
  }
  
  .cardName,
  .cards__album {
    color: #20263f;
  }
  
  .cardTop img {
    margin: 0;
    height: 250px;
  }

//   .cards__album {
//     font-style: italic;
//   }
  
  h2 {
    margin: 0;
    text-align: center;
  }
  
  p {
    line-height: 21px;
  }
  
  .cardTop,
    .cardBack {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
}

.cardTop {
  height: 100%;
  width: 300px;
  transform: rotateX(0deg);
  -webkit-transform: rotateX(0deg);
}

.cardBack {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  position: absolute;
  text-align: center;
  right: 0;
  left: 0;
  top: 10px;
  color: #20263f;
}

.card {
    -webkit-transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  
  .card.flip {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
  }
  
`;



const cards = document.querySelectorAll(".cardsTop");
    function flipCard() {
    this.classList.toggle("flip");
    }
    cards.forEach((card) => card.addEventListener("click", flipCard));



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
                

                <div className="cards">
                    <div className="card">
                        <div className="cardTop">
                            <PhotoPlaceholder width={350} height={250} className="cardImg"/>
                            <h2 className="cardName">{currentUser.userFarms.farmName}</h2>
                            <p class="cards__album" tabindex="0">
                                <strong>{currentUser.userFarms.farmCity}</strong>, 
                                <strong> {currentUser.userFarms.farmState}</strong>
                            </p>
                        </div>
                        {/* <div className="cardBack">
                            <h2 className="cardName">{currentUser.userFarms.farmName}</h2>
                            <p className="cardDes">{currentUser.userFarms.farmDescription}</p>
                            <p className="cardDes">{currentUser.userFarms.farmState}</p>
                            <p className="cardDes">{currentUser.userFarms.farmCity}</p>
                        </div> */}
                    </div>
                </div>
                
            ))}
            </div>

        </CardStyles>
    )
}





// <div class="flip-card">
//                     <div class="flip-card-inner">
//                         <div class="flip-card-back"></div>
//                             <div className="cardWrapper">
//                                 <div className="cardBody">
//                                     <div className="cardImg">
//                                         <PhotoPlaceholder width={330} height={155} />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="flip-card-front">
//                             <div className="cardWords">
//                                 <h2 className="cardName">{currentUser.userFarms.farmName}</h2>
//                                 <p className="cardDes">{currentUser.userFarms.farmDescription}</p>
//                                 <p className="cardDes">{currentUser.userFarms.farmState}</p>
//                                 <p className="cardDes">{currentUser.userFarms.farmCity}</p>
//                             </div>
//                         </div>
//                     </div>



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