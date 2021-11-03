import './App.css';
import React from 'react';
import './bot';
import Nav from './Nav';
import Chatbox from './Chatbox';


//when using state in React, need to set up constructor
class App extends React.Component
{
    constructor(props) { // used to initialize local state. Not needed if state not being used.
        super(props); // needs to be called or else this.props will be undefined
        //initializing objects with their initial state
        this.state = { //assigns objects to this.state

        };
    }



  render()
  { // render method displays HTML to the UI by returning JSX code to the root element. Can read props and state.
    // Returns JSX code
    //JSX (JavaScript XML) is used to write HTML within the JavaScript code in React, using JavaScript. It is a syntax extension of JavaScript.
    // comments for jsx written within {/*  */}
    return(
      <div> {/* render must be followed with div tag. */}
          <Nav /> {/* Nav bar component */}
          <Chatbox />
      </div>
    );
  }
}

export default App;
