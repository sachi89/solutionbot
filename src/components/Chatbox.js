import React from 'react';
import '../styles/Chatbox.css';
import DelayInput from './DelayInput';
import Delay from './Delay';
import UserBubble from './UserBubble';
import BotBubble from './BotBubble';
import Form from 'react-bootstrap/Form';
import FormControl from '@material-ui/core/FormControl';
import { bot } from './bot';

//component for chatbot

//initialize i to 0 to use as index for bot response
let i = 0;

//when using state in React, need to set up constructor
class Chatbox extends React.Component
{
  constructor(props) { // used to initialize local state. Not needed if state not being used.
      super(props); // needs to be called or else this.props will be undefined
      //initializing objects with their initial state
      this.state = { //assigns objects to this.state
        user: '', // set user input box to empty value
        replies: [i===0 ? <Delay> {/* Delay component used to hide response until set time runs out. Then shows child prop */}
          <BotBubble>{/* BotBubble component displays JSX elements around child prop */}
              Hello, I'm SolutionBot. I'm here to help you find a solution to your problem using Solution Focused Brief Therapy. Before we begin, can I have your name please?
          </BotBubble></Delay> : ''],
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
      //preventDefault method is called on the event to prevent a browser reload or refresh when the form is submitted
      e.preventDefault();
      //if user input is not empty when submitted
      if (this.state.user !== "") {
        //if index i is less than length of response list
        if (i < bot.length) {
          //update state of objects and variables
          this.setState(
            {
              // set user to an empty string to reset value in input box to empty after submit
              user: '',
              //replies array copies styled and formatted user input and bot responses in jsx tags and css to be rendered
              replies: [...this.state.replies, <UserBubble>{this.state.user}</UserBubble>,
              <Delay><BotBubble>{i===0 ? this.state.user : ''}{bot[i].response}</BotBubble></Delay>],
              // increment value of i for index of bot response
              i: i+=1
            }
          );
        //if i reaches length of response list, reload page to start over
        } else {
            window.location.reload();
        }
      }
  }

  //function to automatically scroll into view of referenced element at bottom of responses
  autoScroll = () => {
  this.bottomResponse.scrollIntoView({ behavior: "smooth" });
  }
  
  //react lifecycle method. If componenet did update use autoScroll function
  componentDidUpdate() {
  this.autoScroll();
  }

  //react lifecycle method. If component unmounts, set i=0 to reset chat.
  componentWillUnmount() {
    i=0;
  }

  render()
  { // Render method displays HTML to the UI by returning JSX code to the root element. Can read props and state.
    // JSX (JavaScript XML) is used to write HTML within the JavaScript code in React, using JavaScript. It is a syntax extension of JavaScript.
    // Comments for jsx written within {/*  */}
    //arrays of values to iterate input buttons using map()
      const issues = ["relationship", "family", "mental health", "acedemic", "work", "legal", "personal", "other"];
      const freq = ["always", "frequently", "sometimes", "occassionally", "rarely"];
      const duration = ["a few days","weeks","months","a year","more than a year"];
      const effect = ["better","worse"];
      const yesno = ["yes","no"];
      const scale1 = [0,1,2,3,4,5,6,7,8,9,10];
      const scale2 = [1,2,3,4,5,6,7,8,9];
      const diff = ["a lot", "a little", "none"];
    return(
      <div>
        <center>
          {/* container for the user and bot messages */}
          {/* must use className instead of class in JSX because class is a reserved word in JavaScript */}
          <div id="chatbox" className="row p-5 m-5 mt-3 d-flex justify-content-center">                        
              {/* prints the array of responses*/}
              {this.state.replies}
              {/* empty space */}
              <p id="third"></p>
              <div className="p-4">
                {/* reference element that is scrolled into view with autoScroll function */}
                <div id="fourth" ref={(el) => { this.bottomResponse = el; }}></div>
              </div>
          </div>
        </center>

        {/* form container */}
        <div className="textfield d-flex justify-content-center">
          <Form className="App" onSubmit={this.handleClick}> {/* event listener to handle form submission */}
            {(() => {
              switch (i) { // Switch statement to switch between input types (text or button options) based on bot response index
                case 1:    //map() iterates input buttons with array of values
                  return (
                    <div className="d-grid gap-2"><DelayInput><FormControl component="fieldset"><div className="btn p-3">
                      {issues.map((issues) => <input className="opbutton p-3 m-3" value={issues} onClick={this.handleChange} type="submit"/>)}
                    </div></FormControl></DelayInput></div>
                  )
                case 3:
                  return (
                    <div className="d-grid gap-2"><DelayInput><FormControl component="fieldset"><div className="btn p-3">
                      {freq.map((freq) => <input className="opbutton p-3 m-3" value={freq} onClick={this.handleChange} type="submit"/>)}
                    </div></FormControl></DelayInput></div>
                  )
                case 4:
                  return (
                    <div className="d-grid gap-2"><DelayInput><FormControl component="fieldset"><div className="btn p-3">
                      {duration.map((duration) => <input className="opbutton p-3 m-3" value={duration} onClick={this.handleChange} type="submit"/>)}
                    </div></FormControl></DelayInput></div>
                  )
                case 10:
                  return (
                    <div className="d-grid gap-2"><DelayInput><FormControl component="fieldset"><div className="btn p-3">
                      {effect.map((effect) => <input className="opbutton p-3 m-3" value={effect} onClick={this.handleChange} type="submit"/>)}
                    </div></FormControl></DelayInput></div>
                  )
                case 14:
                  return (
                    <div className="d-grid gap-2"><DelayInput><FormControl component="fieldset"><div className="btn p-3">
                      {yesno.map((yesno) => <input className="opbutton p-3 m-3" value={yesno} onClick={this.handleChange} type="submit"/>)}
                    </div></FormControl></DelayInput></div>
                  )
                case 16:
                  return (
                    <div className="d-grid gap-2"><DelayInput><FormControl component="fieldset"><div className="btn p-3">
                      {yesno.map((yesno) => <input className="opbutton p-3 m-3" value={yesno} onClick={this.handleChange} type="submit"/>)}
                    </div></FormControl></DelayInput></div>
                  )
                case 17:
                  return (
                    <div className="d-grid gap-2"><DelayInput><FormControl component="fieldset"><div className="btn p-3">
                      {scale1.map((scale1) => <input className="opbutton p-3 m-3" value={scale1} onClick={this.handleChange} type="submit"/>)}
                    </div></FormControl></DelayInput></div>
                  )
                case 18:
                  return (
                    <div className="d-grid gap-2"><DelayInput><FormControl component="fieldset"><div className="btn p-3">
                      {scale2.map((scale2) => <input className="opbutton p-3 m-3" value={scale2} onClick={this.handleChange} type="submit"/>)}
                    </div></FormControl></DelayInput></div>
                  )
                case 30:
                  return (
                    <div className="d-grid gap-2"><DelayInput><FormControl component="fieldset"><div className="btn p-3">
                      {diff.map((diff) => <input className="opbutton p-3 m-3" value={diff} onClick={this.handleChange} type="submit"/>)}
                    </div></FormControl></DelayInput></div>
                  )
              default:
                  return (
                    <div><div className="d-grid gap-2"><Form.Control size="lg" type="text" placeholder="Enter reply" value={this.state.user} onChange={this.handleChange} style={{width: 700}} />
                    <input className="opbutton" type="submit"/></div></div>
                  )
              }
            })()}
          </Form>
        </div>
      </div>
    );
  }
}

export default Chatbox;
