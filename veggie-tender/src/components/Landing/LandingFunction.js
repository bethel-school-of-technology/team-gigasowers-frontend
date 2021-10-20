import React from 'react'
// import { CustomPlaceholder } from 'react-placeholder-image';
import styled from 'styled-components';
import Card from './Card';



const LandingFunctionStyles = styled.div`
.topShelf{
    list-style: none;

}

.topshelf .wrapper{
    display: inline;
}

`;



export default function LandingFunction ({

    farmName = 'Farm Name',
    farmDescription = 'Farm Details',
    farmAddress = 'Farm Address',
    farmCity = "Farm City",
    farmState = "Farm State",
    farmWebsite = "Farm Website",
    farmEmail = "Farm Email",


}){

    return (

        <LandingFunctionStyles>
            <div className="landing">
                
                    <Card />
            </div>
        </LandingFunctionStyles>

    )
}

// {/* <div id="topShelf">
// <div className="wrapper">
//     <div className="Card">
//         <div className="cardBody">
//             <CustomPlaceholder width={265} height={149} />
//             <h2 className="cardTitle">Farm Event1</h2>
//             <p className="cardDes">description</p>
//         </div>
//         <button className="cardBut">Button</button>
//     </div>
// </div>

// </div> */}
// {/* <div className="wrapper">
//                             <div className="Card">
//                                 <div className="cardBody">
//                                     <CustomPlaceholder width={265} height={149} />
//                                     <h2 className="cardTitle">local Farm</h2>
//                                     <p className="cardDes">description</p>
//                                 </div>
//                                 <button className="cardBut">Button</button>
//                             </div>
//                         </div>
//                         <div className="wrapper">
//                             <div className="Card">
//                                 <div className="cardBody">
//                                     <CustomPlaceholder width={265} height={149} />
//                                     <h2 className="cardTitle">farm</h2>
//                                     <p className="cardDes">description</p>
//                                 </div>
//                                 <button className="cardBut">Button</button>
//                             </div>
//                         </div>
//                         <div className="wrapper">
//                             <div className="Card">
//                                 <div className="cardBody">
//                                     <CustomPlaceholder width={265} height={149} />
//                                     <h2 className="cardTitle">farmer market</h2>
//                                     <p className="cardDes">description</p>
//                                 </div>
//                                 <button className="cardBut">Button</button>
//                             </div>
//                         </div> */}

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
    


    // const farmNameHandler = (event) => { setFarmName(event.target.value) };
    // const farmDetailsHandler = (event) => { setFarmDetails(event.target.value) };
    // const farmAddressHandler = (event) => { setFarmAddress(event.target.value) };
    // const farmCityHandler = (event) => { setFarmCity(event.target.value) };
    // const farmStateHandler = (event) => { setFarmState(event.target.value) };
    // const farmZipHandler = (event) => { setFarmZip(event.target.value) };
    // const farmWebsiteHandler = (event) => { setFarmWebsite(event.target.value) };
    // const farmEmailHandler = (event) => { setFarmEmail(event.target.value) };



    // const profileData = {
    //     farmName: enteredFarmName,
    //     farmDescription: enteredFarmDetails, 
    //     farmAddress: enteredFarmAddress,
    //     farmCity: enteredFarmCity,
    //     farmState: enteredFarmState,
    //     farmZip: enteredFarmZip,
    //     farmWebsite: enteredFarmWebsite,
    //     farmEmail: enteredFarmEmail
    // };