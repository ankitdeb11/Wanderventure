import React from 'react';
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';
import SelectsCard from './SelectsCard';


const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

        <SelectsCard  bg={BoraBora} text='Lakshadweep' />
        <SelectsCard  bg={BoraBora2} text='Marine Drive' />
        <SelectsCard  bg={Maldives} text='Andaman & Nicobar' />
        <SelectsCard  bg={Maldives2} text='Goa' />
        <SelectsCard  bg={Maldives3} text='Lakshadweep SM' />
        <SelectsCard  bg={KeyWest} text='Kerala Visits' />

    </div>
  )
}

export default Selects