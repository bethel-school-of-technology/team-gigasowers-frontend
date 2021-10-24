import React from 'react';
import FarmInfo from '../components/Farm/FarmInfo';
import FarmProduce from '../components/ProductInventory/FarmProduce';



export default function FarmerProfile() {
    return (
        <div >
            <FarmInfo />
            <FarmProduce />
        </div>
    )
}
