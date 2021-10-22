import React from 'react';
import FarmInfo from '../components/Farm/FarmInfo';
import FarmProduce from '../components/Farm/FarmProduce';
import Events from '../components/Events/Events'
import { Link } from 'react-router-dom';



export default function FarmerProfile() {
    return (
        <div >
            <FarmInfo />
            <FarmProduce />
            <Events/>
        </div>
    )
}
