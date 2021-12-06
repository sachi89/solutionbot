import React from 'react';

// component for loading dots in Delay component
class Loading extends React.Component
{//when using state in React, need to set up constructor
    constructor(props) { // used to initialize local state. Not needed if state not being used.
        super(props); // needs to be called or else this.props will be undefined
        //initializing objects with their initial state
        this.state = { //assigns objects to this.state
                      dot1 : true, //set initial state of dot1 to true
                      dot2 : true  //set initial state of dot2 to true
                    };
    }

    componentDidMount() {
       setTimeout(() => { // setTimeoutimeout function used to create delay
           this.setState({dot1: false}); //update state of dot1 to false
       }, 500); //timeout set at 500
   }

   componentDidUpdate() {
        setTimeout(() => { // setTimeoutimeout function used to create delay
            this.setState({dot2: false}); //update state of dot2 to false
        }, 700); //timeout set at 700
    }

   // If dot1 is true, render one dot. If dot1 is false (after timeout at 500), renders statement that if dot2 is true, render two dots
   // If dot2 is false (after timeout at 700), render three dots
   render() {
       return this.state.dot1 ? <div className="dots">.</div> : this.state.dot2 ? <div className="dots">. .</div> : <div className="dots">. . .</div>;
   }
}

export default Loading;
