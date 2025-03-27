import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const [visit, setVisit] = useState(false);
    const handleVisit = () => {
            setVisit(!visit)   
   }

    return (
        <div className='cart'>
            <h2>Name : {country?.name?.common}</h2>
            <h3>Capital city : {country?.capital}</h3>
            <img src={country?.flags?.png} alt="flag" />
            <div className='new'>
                <button onClick={handleVisit}>{visit ? 'Not visit': 'Visit' }</button>
                <button>Add List </button>
            </div>
        </div>
    );
};

export default Country;