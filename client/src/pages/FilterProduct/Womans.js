import React from 'react'
import MainPageCard from '../../components/MainPageCard'

function Womans({cards}) {
    return (
        <div className='cards'>
            <MainPageCard 
            description={cards[2].description}
            nameProduct={cards[2].nameProduct}
            imgProduct={cards[2].imgProduct}
            // basketCounter={basketCounter}
            />
            <MainPageCard
            description={cards[3].description}
            nameProduct={cards[3].nameProduct}
            imgProduct={cards[3].imgProduct}
            // basketCounter={basketCounter}
            />
            <MainPageCard 
            description={cards[5].description}
            nameProduct={cards[5].nameProduct}
            imgProduct={cards[5].imgProduct}
            />
           </div> 
    )
}

export default Womans
