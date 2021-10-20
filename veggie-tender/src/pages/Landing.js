import React from 'react'
//import Navbar from '../components/Navbar';
import Card from '../components/Landing/Card';
//import { CustomPlaceholder } from 'react-placeholder-image';
import styled from 'styled-components';
// import Sidebar from '../components/sidebar';



const LandingStyles = styled.div`
.cards{
    display: flex;
}
`
//@import
// url("http://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap");

// $clr-primary: #d50000;
// $clr-primary-hover: #29e6a7;
// $clr-primary-dark: #039d69;
// $clr-grey100: #f9fbff;
// $clr-grey150: #f4f6fb;
// $clr-grey200: #eef1f6;
// $clr-grey300: #e1e5ee;
// $clr-grey400: #767b91;
// $clr-grey500: #4f546c;
// $clr-grey600: #2a324b;
// $clr-grey700: #161d34;

// #wrapper
// #topShelf{
//     list-style: none;

// }

// .#topshelf .wrapper{
//     display: inline;
// }


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

