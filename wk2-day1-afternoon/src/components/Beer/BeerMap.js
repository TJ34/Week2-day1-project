import React from 'react';
import './Beer.css';

export default function BeerMap (props){
    let list = props.beers.map((element,i) => {
        return (
        <div className="BeerMap">
            <p key={i}>{element}</p>
            <button className="button" onClick={()=>props.deleteBeer(element)}>X</button>
        </div>
        )
    })
    return <div>{list}</div>
} 