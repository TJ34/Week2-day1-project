import React, { Component } from 'react';
import './Beer.css';

export default class Beer extends Component{
    constructor(){
        super();

        this.state = {
            beer: ''
        }
    }

    beerChange = (e) => {
        this.setState({beer: e.target.value})
    }

    beerArray = () => {
        this.props.addBeer(this.state.beer);
        this.setState({beer: ''})
    }

    render(){
        return(<div className='Beer'>
            <p>Favorite Beers:</p>
            <input 
                className='inputBox' 
                placeholder="Include brewery name"
                onChange={this.beerChange}
                value={this.state.beer}
            />
            <button onClick={this.beerArray}>Submit</button>
        </div>)
    }
}