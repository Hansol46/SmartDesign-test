import React from 'react'
import MainPageCard from '../../components/MainPageCard'

function Mans({cards}) {
    console.log(cards[0].nameProduct)
    return (
        <div className='cards'>
            <MainPageCard 
            description={cards[0].description}
            nameProduct={cards[0].nameProduct}
            imgProduct={cards[0].imgProduct}
            />
            <MainPageCard
            description={cards[1].description}
            nameProduct={cards[1].nameProduct}
            imgProduct={cards[1].imgProduct}
            />
            <MainPageCard 
            description={cards[4].description}
            nameProduct={cards[4].nameProduct}
            imgProduct={cards[4].imgProduct}
            />

        </div>
    )
}

export default Mans
