import React from 'react';
import Chambre from './Chambre';
import Cuisine from './Cuisine';
import Salon from './Salon';

export default function Maison() {
  return (
    <div>
        <h1 className='home'>Appart</h1>
        <ul>
            <li>
                < Salon />
            </li>
            <li>
                <Chambre/>
            </li>
            <li>
            < Cuisine/>

            </li>
        </ul>
    </div>
  )
}
