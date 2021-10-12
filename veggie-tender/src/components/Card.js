import React from 'react';
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
