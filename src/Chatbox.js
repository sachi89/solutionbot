import React from 'react';
import './Chatbox.css';
//import TextBubble from './TextBubble';
import './bot';
import Delay from './Delay';
import './TextBubble.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//initialize i to 0 to use as index for bot response
let i = 0;
// array of bot responses for testing
const bot = ["resp1", "resp2", "resp3", "resp4", "resp5"];

// css for reply style tag
const userstyle = {
  width: 400,
  padding: 10
};

const botstyle = {
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
                  userinputs: [...this.state.userinputs, this.state.user],
                  //reply variable styles and formats each user input and bot response in jsx tags and css to be rendered
                  //copy the value of reply to replies array to render all user responses. except current response.
                  //reply value added to replies array to store each user input with jsx, so the input is not replaced each time submit is clicked
                  //this will replace usermsg
                  replies: [...this.state.replies, <div id="user"><div className="bubble m-3 float-end">
                  <p style={userstyle}> User: {this.state.user}</p></div></div>,
                  <div id="bot" className=""><div className="bubble m-3 float-start"><Delay><p style={botstyle}>Bot: {bot[i]}</p></Delay></div></div>],
                  // increment value of i for index of bot array
                  i: i+=1
                }
              );
              console.log(i);
          }
  }

  render()
  { // render method displays HTML to the UI by returning JSX code to the root element. Can read props and state.
    // Returns JSX code
    //JSX (JavaScript XML) is used to write HTML within the JavaScript code in React, using JavaScript. It is a syntax extension of JavaScript.
    // comments for jsx written within {/*  */}
  //  const intro =
  return(
    <div>
      <center>
      <div className="platform">
            <div id="chatbox" className="row w-75 p-5 m-5 d-flex justify-content-center grow">
                {/* container for the user and bot messages */}
                {/* must use className instead of class in JSX because class is a reserved word in JavaScript */}
                <div className = "d-flex"> {/* bootstrap for styling container for chat messages */}
                    <div className="row"> {/* container for user and bot responses */}
                        <div id="bot" className="">
                          <div className="bubble m-3 float-start">
                            <Delay>
                            <p style={botstyle}> Hello, I'm SolutionBot. I'm here to help you find a solution to your problem using Solution Focused Brief Therapy. Before we begin, can I have your name please? </p>
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
        <Form className="App" onSubmit={this.handleClick}>
          <Form.Control size="lg" type="text" placeholder="Enter reply" value={this.state.user} onChange={this.handleChange} style={{width: 700}} />
          {/*<input type='text' className="form-control-lg" value={this.state.user} onChange={this.handleChange} style={{width: 700}}/>*/}
          <Button className="" variant="primary" size="lg">Submit</Button>
        </Form>
      </div>
    </div>
  );
}
}

export default Chatbox;
