import React from 'react';
import styled from 'styled-components';
//import ReactPlaceholder from 'react-placeholder';
//import "react-placeholder/lib/reactPlaceholder.css";
import { CustomPlaceholder } from 'react-placeholder-image';

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

export default function Card() {

    return (
        <CardStyles>
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
            </div>
        
        </CardStyles>

    )

}

//<button className="cardBut">Buttonです</button>


