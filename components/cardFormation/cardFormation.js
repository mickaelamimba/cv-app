import React from 'react';

const CardFormation = ({school,place,year,diploma}) => {
    return (
        <ul>
            <div>
                <h4 className=" text-xl font-medium text-gray-600 pb-2">{diploma}</h4>
            </div>

            <li className='text-indigo-900'>{school}</li>
            <li>{place}</li>
            <li>{year}</li>
        </ul>
    );
};

export default CardFormation;