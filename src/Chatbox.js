import React from 'react';
import './Chatbox.css';
//import './bot';
import Delay from './Delay';
import './TextBubble.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//initialize i to 0 to use as index for bot response
let i = 0;
// array of bot responses for testing
const bot = ["resp1", "resp2", "resp3", "resp4", "resp5"];

// css for replies style tag
const replystyle = {
  width: 400,
  padding: 10
};


//when using state in React, need to set up constructor
class Chatbox extends React.Component
{
    constructor(props) { // used to initialize local state. Not needed if state not being used.
        super(props); // needs to be called or else this.props will be undefined
        //initializing objects with their initial state
        this.state = { //assigns objects to this.state
          user: '', // set user input box to empty value
          userinputs: [], //will be used to store user inputs in array
          replies: [], // will be used to copy contents of user and bot replies to array
          i: 0 // set initial state of i to 0 so that its state can be updated later
        };
    }

    // handles event listener for onChange, when user types input
    handleChange= (e) => { // by using arrow functions, no need to bind methods
      //setState used to update the initial state of the object
      //when input typed, sets state of user object as the current input value from the event. e = event.
      this.setState({user: e.target.value});
    }

    //handles event listener for onSubmit, when user submits form
    handleClick= (e) => {
        //if user input is not empty when submitted
          if (this.state.user !== "") {
              //preventDefault method is called on the event to prevent a browser reload or refresh when the form is submitted
              e.preventDefault();

              //update state of objects and variables
              this.setState(
                {
                  // set user to an empty string to reset value in input box to empty after click
                  user: '',
                  // copy user responses to userinputs array in case specific user input needs to be accessed later
                  userinputs: [...this.state.userinputs, this.state.user],
                  //replies array copies styled and formatted user input and bot responses in jsx tags and css to be rendered
                  replies: [...this.state.replies, <div id="user"><div className="bubble m-3 float-end grow">
                  <p style={replystyle}> User: {this.state.user}</p></div></div>,
                  <div id="bot" className=""><div className="bubble m-3 float-start grow"><Delay><p style={replystyle}>Bot: {bot[i]}</p></Delay></div></div>],
                  // increment value of i for index of bot response
                  i: i+=1
                }
              );
              console.log(i); //for testing
          }
  }

  render()
  { // render method displays HTML to the UI by returning JSX code to the root element. Can read props and state.
    // Returns JSX code
    //JSX (JavaScript XML) is used to write HTML within the JavaScript code in React, using JavaScript. It is a syntax extension of JavaScript.
    // comments for jsx written within {/*  */}
  return(
    <div>
      <center>
      <div className="platform">
            <div id="chatbox" className="row w-75 p-5 m-5 d-flex justify-content-center grow"> {/* grow from tachyons, other css from bootstrap */}
                {/* container for the user and bot messages */}
                {/* must use className instead of class in JSX because class is a reserved word in JavaScript */}
                <div className = "d-flex"> 
                    <div className="row">
                        <div id="bot" className="">
                          <div className="bubble m-3 float-start grow">
                            <Delay> {/* Delay component used to hide response until set time runs out. Then shows child prop */}
                            <p style={replystyle}> Hello, I'm SolutionBot. I'm here to help you find a solution to your problem using Solution Focused Brief Therapy. Before we begin, can I have your name please? </p>
                            </Delay>
                          </div>
                        </div>
                        {/* prints the array of responses*/}
                        {this.state.replies}
                    </div>
                </div>
            </div>

      </div>
      </center>
      <div className="textfield d-flex justify-content-center">
        <Form className="App" onSubmit={this.handleClick}> {/* event listener to handle form submission */}
        <div className="d-grid gap-2"> {/* event listener to handle change in input */}
          <Form.Control size="lg" type="text" placeholder="Enter reply" value={this.state.user} onChange={this.handleChange} style={{width: 700}} />
          <Button variant="info" size="lg" type="submit">Submit</Button> {/* Form and Button from react-bootstrap */}
          </div>
        </Form>
      </div>
    </div>
  );
}
}

export default Chatbox;
