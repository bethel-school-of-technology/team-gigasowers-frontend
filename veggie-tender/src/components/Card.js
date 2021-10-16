import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`


`;


export default function Card() {
    return (
        <CardStyles>
        <div className="Card">
            <div className="cardBody">
                {/* <img src="./imgtest/imgholder.png" /> */}
                <CustomPlaceholder width={265} height={149} />
                <h2 className="cardTitle">title</h2>
                <p className="cardDes">description</p>
            </div>
            <button className="cardBut">Button</button>
        </div>
        </CardStyles>
    )

}

