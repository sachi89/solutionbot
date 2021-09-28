import './App.css';
import React from 'react';
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './bot';
import Delay from './Delay';
import Nav from './Nav';


//initialize i to 0 to use as index for bot response
let i = 0;
// array of bot responses for testing
const bot = ["resp1", "resp2", "resp3", "resp4", "resp5"];

// css for reply style tag
const userstyle = {
  backgroundColor: 'lightblue',
  color: 'darkblue',
  width: 200,
  padding: 10
};

const botstyle = {
  backgroundColor: 'lightgreen',
  color: 'darkgreen',
  width: 200,
  padding: 10
};

// css for creating gap between messages in chatbox
const whitespace = {
  backgroundColor: 'white',
  width: 200,
  padding: 10
};

//when using state in React, need to set up constructor
class App extends React.Component
{
    constructor(props) { // used to initialize local state. Not needed if state not being used.
        super(props); // needs to be called or else this.props will be undefined
        //initializing objects with their initial state
        this.state = { //assigns objects to this.state
          user: '', // set user input box to empty value
          userinputs: [], //will be used to store user inputs in array
          reply: '', // will be used to contain current user and bot responses with css styling
          replies: [], // will be used to copy contents of reply to replies array
          i: 0 // set initial state of i to 0 so that its state can be updated later
        };
    }

    // handles event listener for onChange, when user types input
    handleChange= (e) => { // by using arrow functions, no need to bind methods
      //setState used to update the initial state of the object
      //when input typed, sets state of user object as the current input
      this.setState({user: e.target.value});
    }

    //handles event listener for onClick, when user clicks button or presses enter to submit form
    handleClick= (e) => {
        //if user input is not empty when submitted
          if (this.state.user !== "") {
              e.preventDefault();

              //update state of objects and variables
              this.setState(
                {
                  // set user to an empty string to reset value in input box to empty after click
                  user: '',
                  // copy user responses to userinputs array in case specific user input needs to be accessed later
                  userinputs: [...this.state.userinputs, this.state.reply],
                  //reply variable styles and formats each user input and bot response in jsx tags and css to be rendered
                  reply: <div>
                  <p style={userstyle}> User: {this.state.user}</p>
                  {/* has empty paragraph with css to create whitespace effect for spacing between user and bot responses */}
                  <p style={whitespace}></p>
                  {/*renders the item in bot array with current index*/}
                  <Delay> {/* Delay component contains a timeout function that renders ' ' while true and renders the child nodes when false (timer is up) */}
                  <p style={botstyle}> Bot: {bot[i]}</p>
                  <p style={whitespace}></p>
                  </Delay>
                  </div>,
                  //copy the value of reply to replies array to render all user responses. except current response.
                  //reply value added to replies array to store each user input with jsx, so the input is not replaced each time submit is clicked
                  //this will replace usermsg
                  replies: [...this.state.replies, this.state.reply],
                  // increment value of i for index of bot array
                  i: i+=1
                }
              );
          }
  }

  render()
  { // render method displays HTML to the UI by returning JSX code to the root element. Can read props and state.
    // Returns JSX code
    //JSX (JavaScript XML) is used to write HTML within the JavaScript code in React, using JavaScript. It is a syntax extension of JavaScript.
    // comments for jsx written within {/*  */}
    return(
      <div> {/* render must be followed with div tag. */}
      <Nav />
              {/* container for the user and bot messages */}
              {/* must use className instead of class in JSX because class is a reserved word in JavaScript */}
              <div className = "d-flex justify-content-center"> {/* bootstrap for styling container for chat messages */}

                  <div> {/* container for user and bot responses */}
                  <p style={botstyle}> Hello, I'm SolutionBot. I'm here to help you find a solution to your problem using Solution Focused Brief Therapy. Before we begin, can I have your name please? </p>
                  <div><p style={whitespace}></p></div>
                  {/* prints the array of responses except current response*/}
                  {this.state.replies}
                  {/* prints the current response for user and bot. If removed, delay in printing current response until the next submit. */}
                  {this.state.reply}
                  </div>

              </div>

              <div className="footer">
                <form className="App" onSubmit={this.handleClick}>
                  <h1 style={{color: 'blue'}}>{this.state.user}</h1>

                  <input type='text' value={this.state.user} onChange={this.handleChange} style={{width: '80%', float: 'left'}}/>
                  <button>Submit</button>
                </form>
              </div>

      </div>
    );
  }
}

export default App;
