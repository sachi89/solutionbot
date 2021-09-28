import React from 'react';
import './bot';

//when using state in React, need to set up constructor
class Delay extends React.Component
{
    constructor(props) { // used to initialize local state. Not needed if state not being used.
        super(props); // needs to be called or else this.props will be undefined
        //initializing objects with their initial state
        this.state = { //assigns objects to this.state
                      hidden : true //set initial state of hidden to true
                    };
    }

    componentDidMount() {
       setTimeout(() => { // setTimeoutimeout function used to create delay
           this.setState({hidden: false}); //update state of hidden to false
       }, 1000); //timeout set at 1000
   }

   //if hidden is true renders ' ', if hidden is false renders children
   render() {
       return this.state.hidden ? '' : this.props.children;
   }
}

export default Delay;
