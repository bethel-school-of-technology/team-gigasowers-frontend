import React from 'react';
import styled from 'styled-components';
//import ReactPlaceholder from 'react-placeholder';
//import "react-placeholder/lib/reactPlaceholder.css";
import { CustomPlaceholder } from 'react-placeholder-image';

const CardStyles = styled.div`
.cardWrapper{

}

.cardImg{

}

.cardWords{

}

.cardTitle{

}

.cardDes{

}


`;


export default function Card() {

    return (
        <CardStyles>
            <div className="cardWrapper">
                <div className="cardImg">
                    {/* <img src="./imgtest/imgholder.png" /> */}
                    <CustomPlaceholder width={265} height={149} />
                </div>
                <div className="cardWords">
                <h2 className="cardTitle">titl</h2>
                <p className="cardDes">description</p>
                </div>
            </div>
        
        </CardStyles>
    )

}




// <div className="Card">
//             <div className="cardBody">
//                 {/* <img src="./imgtest/imgholder.png" /> */}
//                 <CustomPlaceholder width={265} height={149} />
//                 <h2 className="cardTitle">title</h2>
//                 <p className="cardDes">description</p>
//             </div>
//             <button className="cardBut">Button</button>
//         </div>