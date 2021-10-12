import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

export default function LandingFunction() {

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

    var farms = [
        {
            farmName: 'Farm 1',
        },
        {
            farmName: 'Farm 2',
        },
    ];
    
    return (
        <div >


        
            {farms.map(function(farm, index){
                    return <Card 
                    img=""
                    title={farm.farmName}
                    description="des 1"/>
                  })}

            {/* <Cards 
            img=""
            title="tit1"
            description="des 1"/>   //need to add img etc
            <Cards
            img=""
            title="2"
            description="des 2" /> */}
        </div>

    )
}
