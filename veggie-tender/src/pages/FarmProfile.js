import React from 'react';
import FarmInfo from '../components/Farm/FarmInfo';
import FarmProduce from '../components/Farm/FarmProduce';
import Events from '../components/Events/Events'



export default function FarmerProfile() {
    return (
        <div >
            <FarmInfo />
            <Events/>
            <FarmProduce />
        </div>
    )
}
