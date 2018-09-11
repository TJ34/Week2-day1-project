import React from 'react';

export default function SongMap (props){
    let list = props.songs.map((element,i) => {
        return (
            <div className="SongMap">
            <p key={i}>{element}</p>
            <button className="button" onClick={()=>props.deleteSong(element)}>X</button>
        </div>
        )
    })
    return <div>{list}</div>
} 