import React from 'react'
import { CustomPlaceholder } from 'react-placeholder-image';
import styled from 'styled-components';



const LandingFunctionStyles = styled.div`
.topShelf{
    list-style: none;

}

.topshelf .wrapper{
    display: inline;
}

`;

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

export default function LandingFunction() {
    return (
        <LandingFunctionStyles>
            <div className="landing">
                something
            <div>
                    <div id="topShelf">
                        <div className="wrapper">
                            <div className="Card">
                                <div className="cardBody">
                                    <CustomPlaceholder width={265} height={149} />
                                    <h2 className="cardTitle">Farm Event1</h2>
                                    <p className="cardDes">description</p>
                                </div>
                                <button className="cardBut">Button</button>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="Card">
                                <div className="cardBody">
                                    <CustomPlaceholder width={265} height={149} />
                                    <h2 className="cardTitle">local Farm</h2>
                                    <p className="cardDes">description</p>
                                </div>
                                <button className="cardBut">Button</button>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="Card">
                                <div className="cardBody">
                                    <CustomPlaceholder width={265} height={149} />
                                    <h2 className="cardTitle">farm</h2>
                                    <p className="cardDes">description</p>
                                </div>
                                <button className="cardBut">Button</button>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="Card">
                                <div className="cardBody">
                                    <CustomPlaceholder width={265} height={149} />
                                    <h2 className="cardTitle">farmer market</h2>
                                    <p className="cardDes">description</p>
                                </div>
                                <button className="cardBut">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LandingFunctionStyles>
    )
}
