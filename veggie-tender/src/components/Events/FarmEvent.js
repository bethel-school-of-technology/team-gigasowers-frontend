import styled from 'styled-components';
import { Link } from 'react-router-dom';


const FarmInfoStyles = styled.div`
font-family: 'MontserratRegular';
* {
    box-sizing: border-box;
}

body {
    font-family: 'MontserratRegular';
    font-color: black;
    font-size: 12px;
    display: flex;
    align-items: center;
    min-height: 100vh;

}

.container {
        justify-content: center;
        height: 200px;
        max-width: 600px;
        background-color: var(--cream);
        padding: 1em;
        margin: 2rem auto;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        width: 85%;
}
.info_float {
    width: 100%;
    height: 100%;
    display: block;
}
.farmEvents {
    margin-top: 1rem auto;
    width: 100%;
    height: 100%;
    background-color: var(--cream);
    border: 5px solid var(--lt-navy);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
}
.eachEvent{
    display: inline-block;
}
.btn {
    margin-top: 0.5rem;
    float: left;
    padding: .5rem;
    background-color: var(--terra);
    border: 3px solid var(--terra);
    border-radius: 12px;
    text-decoration: none;
}
.btn:hover {
    background-color: var(--greybrwn);
    border-color: var(--greybrwn);
    color: white;
    cursor: pointer;
}


@media only screen and (max-width: 768px) {
    
    .info_float {
        justify-content: center;
        width: 100%;
        max-height: 375px;
        flex-direction: column;
        padding-left: .5rem;
    }
    .eachEvents{
        display: block;
        max-height: 200px;
        flex-direction: column;
        width: 85%
    }
    .btn {
        margin-top: -1rem;
        float: right;
        padding: .5rem;
        background-color: var(--terra);
        border: 3px solid var(--terra);
        border-radius: 12px;
        text-decoration: none;
    }
}
`;


const FarmEvent = (props) => {


    let eventAvailable = false;
    if (props.farmEvent) {
        eventAvailable = true;
    }


    return (
        <FarmInfoStyles>
            {eventAvailable ?
                <div className="container">
                    <div className="image_float">
                        <h3 className="farmImage">{props.farmEvent.eventImage}</h3>
                    </div>
                    <div className="info_float">
                        <div className="farmEvents">
                            <div classname="eachEvents" key={props.farmEvent.eventId}>
                                <h3>{props.farmEvent.eventName} / {props.farmEvent.eventStartDate} - {props.farmEvent.eventFinishDate}</h3>
                                <h3>{props.farmEvent.eventAddress}</h3>
                                <h3>{props.farmEvent.eventCity} {props.farmEvent.eventState} {props.farmEvent.eventZip}</h3>
                                <Link type="button" className="btn" to={{
                                    pathname: '/users/eventUpdate',
                                    state: { 'fEvent': props.farmEvent }
                                }}>Edit Event Info</Link>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null
            }

        </FarmInfoStyles >
    )
}

export default FarmEvent;

// {loginStatus ?
//     <Link type="button" onClick={logoutHandler} className="btn2">LogOut</Link>
//     :
//     <Link type="button" onClick={loginHandler} className="btn2">LogIn</Link>
// }