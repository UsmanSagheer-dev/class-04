import React from 'react';

import DesignCard from '../technologyCard/DesignCard';

export default function AllCardCall() {
    const data = [{
        heading: 'DESIGN',
       
    },
   
   ];
    return (
        <div className='container'>
            {data.map((item, index) => (
                <DesignCard
                    key={index}
                    heading={item.heading} 
                />
            ))}
        </div>
    );
}
