import React from 'react';
import img from './3.jpeg'

const Card =({name,image})=>(
    <div style={{width:'25%',padding:'q0px'}}>
        <img src="{image}" alt="{name1}" style={{width:'100%'}}/>
        <h4>{name}</h4>
    </div>
);
const CardBox=({cards})=>(
    <div style={{display:'flex',flexWrap:'wrap'}}>
        {cards.map((card,index)=>(
            <Card key={index} name={card.name} image={card.image}/>
        
        ))}
    </div>
);

export default CardBox;