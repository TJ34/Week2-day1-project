import React from 'react';

export default function BandMap (props){
    let list = props.bands.map((element,i) => {
        return( 
            <div className="BandMap">
            <p key={i}>{element}</p>
            <button className="button" onClick={()=>props.deleteBand(element)}>X</button>
        </div>
        )
    })
    return <div>{list}</div>
} 