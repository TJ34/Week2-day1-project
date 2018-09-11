import React, { Component } from 'react';
import './Band.css'

export default class Band extends Component{
    constructor(){
        super();

        this.state = {
            band: ''
        }
    }

    bandChange = (e) => {
        this.setState({band: e.target.value})
    }

    bandArray = () => {
        this.props.addband(this.state.band);
        this.setState({band: ''})
    }

    render(){
        return(<div className="Band">
            <p>Favorite Bands:</p>
            <input 
                className='inputBox' 
                placeholder="No Boy Bands!"
                onChange={this.bandChange}
                value={this.state.band}
            />
            <button onClick={this.bandArray}>Submit</button>
        </div>)
    }
}