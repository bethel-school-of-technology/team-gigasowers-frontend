import React from 'react'
// import { CustomPlaceholder } from 'react-placeholder-image';
import styled from 'styled-components';
import Card from '../Card';

const LandingFunctionStyles = styled.div`
.landing {
    margin-top: 10rem;
}

.topShelf{
    list-style: none;
}

.topshelf .wrapper{
    display: inline;
}

`;

export default function LandingFunction (){

    return (

        <LandingFunctionStyles>
            <div className="landing">
                
                    <Card />
            </div>
        </LandingFunctionStyles>

    )
}

