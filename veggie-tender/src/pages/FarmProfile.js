import React from 'react';
import FarmInfo from '../components/Farm/FarmInfo';
import FarmProduce from '../components/Farm/FarmProduce';
import { Link } from 'react-router-dom';



export default function FarmerProfile() {
    return (
        <div >
            <div>
                <span>
                    <Link to="/users/farmProfile/events">
                        <button type='submit'>My Events</button>
                    </Link>
                </span>
                <span>
                    <Link to="/users/eventRegister">
                        <button type='submit'>Schedule Event</button>
                    </Link>
                </span>
            </div>


            <FarmInfo />
            <FarmProduce />
        </div>
    )
}
