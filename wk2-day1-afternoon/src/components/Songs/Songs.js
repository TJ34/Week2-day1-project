import React, { Component } from 'react';
import './Songs.css'

export default class Songs extends Component{
    constructor(){
        super();

        this.state = {
            song: ''
        }
    }

    songChange = (e) => {
        this.setState({song: e.target.value})
    }

    songArray = () => {
        this.props.addsong(this.state.song);
        this.setState({song: ''})
    }

    render(){
        return(<div className="Songs">
            <p>Favorite Songs:</p>
            <input 
                className='inputBox' 
                placeholder="keep 'em coming"
                onChange={this.songChange}
                value={this.state.song}
            />
            <button onClick={this.songArray}>Submit</button>
        </div>)
    }
}