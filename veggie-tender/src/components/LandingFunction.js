import React from 'react'
import { CustomPlaceholder } from 'react-placeholder-image';
import styled from 'styled-components';
import Card from '../components/Card.js';



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
                <Card />
            </div>
            </div>
        </LandingFunctionStyles>

    )
}

{/* <div id="topShelf">
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

</div> */}
{/* <div className="wrapper">
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
                        </div> */}

    // useEffect(() => {
    //     axios
    //       .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    //       .then(response => {
    //         console.log(response.data.items);
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       })
    //     }, [])

        

    // const [cards, setCards] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [isError, setIsError] = useState(false);
    
    // let newCards =[];
    // for (const farmer of farmerHere){
    //     const farmerId = farmer.id;
    //     const farmerPage = 
    // }

    // var farms = [
    //     {
    //         farmName: 'Farm 1',
    //     },
    //     {
    //         farmName: 'Farm 2',
    //     },
    // ];
    
