import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';

export default function Card(props) {



        return (
            <div className="card">
                <div className="cardBody">
                <img src={props.img} />
                <h2 className="cardTitle">{props.title}</h2>
                <p className="cardDescription">{props.description}</p>
                </div>
                <button className="cardButton">Buttonn</button>
            </div>
            

        )
    
}
=======
import styled from 'styled-components';

const CardStyles = styled.div`


`;


export default function Card() {
    return (
        <CardStyles>
        <div className="Card">
            <div className="cardBody">
                {/* <img src="./imgtest/imgholder.png" /> */}
                <h2 className="cardTitle">title</h2>
                <p className="cardDes">description</p>
            </div>
            <button className="cardBut">Button</button>
        </div>
        </CardStyles>
    )

}

>>>>>>> 7ebb665190f25028d7b06dcfe8f93d95cc4d5020
