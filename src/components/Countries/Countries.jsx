import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesFetch }) => {
    const countriesList = use(countriesFetch)
    
    return (
        <div >
            <h2>Total Country : {countriesList.length}</h2>
            <div className='layOut'>
                {
                    countriesList.map(country => <Country country={country}></Country>)
                }
           </div>
        </div>
    );
};

export default Countries;