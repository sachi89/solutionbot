import React from 'react';
import BotBubble from './BotBubble';
import Loading from './Loading';

//Delay component for bot responses with loading dots
class Delay extends React.Component
{ //when using state in React, need to set up constructor
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
       }, 1500); //timeout set at 1500
   }

   //if hidden is true renders bot bubble with loading dots from Loading component, if hidden is false renders children
   render() {
       return this.state.hidden ? <BotBubble><Loading></Loading></BotBubble> : this.props.children;
   }
}

export default Delay;
