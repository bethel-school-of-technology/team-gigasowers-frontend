import React from 'react'
//import Navbar from '../components/Navbar';
import Card from '../components/Landing/Card';
//import { CustomPlaceholder } from 'react-placeholder-image';
import styled from 'styled-components';
// import Sidebar from '../components/sidebar';



const LandingStyles = styled.div`
.cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

`;



export default function Landing() {

    return (
        <LandingStyles>
        <div className="landing">
            <div className="cards">
                <Card />              
            </div>
        </div>
        </LandingStyles>
    )
}

//<Sidebar />
               /* <div id="topShelf">
                <div className="wrapper">
                    <div className="Card">
                    <div className="cardBody">
                        <CustomPlaceholder width={265} height={149} />
                        <h2 className="cardTitle">Farm Event1</h2>
                        <p className="cardDes">description</p>
                    </div>
                    <button className="cardBut">a Button</button>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="Card">
                    <div className="cardBody">
                        <CustomPlaceholder width={265} height={149} />
                        <h2 className="cardTitle">local Farm</h2>
                        <p className="cardDes">description</p>
                    </div>
                    <button className="cardBut">a Button</button>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="Card">
                    <div className="cardBody">
                        <CustomPlaceholder width={265} height={149} />
                        <h2 className="cardTitle">farm</h2>
                        <p className="cardDes">description</p>
                    </div>
                    <button className="cardBut">a Button</button>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="Card">
                    <div className="cardBody">
                        <CustomPlaceholder width={265} height={149} />
                        <h2 className="cardTitle">farmer market</h2>
                        <p className="cardDes">description</p>
                    </div>
                    <button className="cardBut">a Button</button>
                    </div>
                </div>
                </div> */

//                 <h1>test</h1>
//                 <h1>test</h1>
//                 <h1>test</h1>
//                 <h1>test</h1>
//                 <h1>test</h1>
//                 <h1>test</h1>

