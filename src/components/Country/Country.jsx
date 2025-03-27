import React from 'react';
import './Country.css'

const Country = ({ country }) => {
    
    return (
        <div className='cart'>
            <h2>Name : {country?.name?.common}</h2>
            <h3>Capital city : {country?.capital}</h3>
            <img src={country?.flags?.png } alt="flag" />
        </div>
    );
};

export default Country;