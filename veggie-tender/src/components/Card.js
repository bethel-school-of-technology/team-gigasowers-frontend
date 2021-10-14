import React from 'react';
import styled from 'styled-components';
//import axios from "axios";
import { CustomPlaceholder } from 'react-placeholder-image';
//import { render } from 'react-dom';
// import FormErrors from '../services/FormErrors';


const CardStyles = styled.div`
.card{
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

// const CardStyles = styled.div`


// `


// export default function Card(){
//     return {
//         <div>
        
//         </div>
//     }

// }

const CardComponent = () => {

//render(
    return(
    <CardStyles>
        <div className="Card">
            <div className="cardWrapper">
            <div className="cardBody">
                <div className="cardImg">
                    {/* <img src="./imgtest/imgholder.png" /> */}
                    <CustomPlaceholder width={265} height={149} />
                </div>
                <div className="cardWords">
                    <h2 className="cardTitle">title</h2>
                    <p className="cardDes">description</p>
                </div>
            </div>
            <button className="cardBut">Buttonです</button>
            </div>
        </div>
    </CardStyles>
    )
}
export default CardComponent