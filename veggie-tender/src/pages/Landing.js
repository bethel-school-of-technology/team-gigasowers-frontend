import React from 'react'
import Card from '../components/Landing/Card';
//import { CustomPlaceholder } from 'react-placeholder-image';
import styled from 'styled-components';
import Mascot from '../components/Navbar/Mascot';




const LandingStyles = styled.div`
.cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.mascot{
    float: top ;
}

`;



export default function Landing() {

    return (
        <LandingStyles>
        <div className="landing">
            <div className="cards">
                <Card />
                <div className="mascot">
                    <Mascot/>
                </div>          
            </div>
        </div>
        </LandingStyles>
    )
}

{/* <Mascot/>    */}