import {useEffect, useState} from React;
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

import React, { useState, useEffect } from 'react';

function AiChatbot() {
    // Declare state variables using useState hook
    const [user, setUser] = useState('');
    const [replies, setReplies] = useState(i===0 ? <Delay> {/* Delay component used to hide response until set time runs out. Then shows child prop */}
    <BotBubble>{/* BotBubble component displays JSX elements around child prop */}
        Hello, I'm SolutionBot. I'm here to help you find a solution to your problem using Solution Focused Brief Therapy. Before we begin, can I have your name please?
    </BotBubble></Delay> : '');
    const [i, setIndex] = useState(0);
    const [data, setData] = useState(null);

  // Use useEffect hook for side effects, such as data fetching or DOM manipulation
  useEffect(() => {
    // This function will run after the component renders
    // It can be used to perform actions that are not directly related to rendering
    // For example, fetching data from an API
    async function fetchData() {
      const response = await fetch('http://localhost:5000/chat?text=${user}&session_id=${i}');
      const jsonData = await response.json();
    
      setData(jsonData);
    }

    fetchData();

    // Specify dependencies for the effect
    // The effect will only run if any of the dependencies have changed
    // If the dependency array is empty, the effect will only run once, after the initial render
  }, []);

  //function to automatically scroll into view of referenced element at bottom of responses
  autoScroll = () => {
    this.bottomResponse.scrollIntoView({ behavior: "smooth" });
    }

    // handles event listener for onChange, when user types input
    handleChange= (e) => { // by using arrow functions, no need to bind methods
    //setState used to update the initial state of the object
    //when input typed, sets state of user object as the current input value from the event. e = event.
    setUser(e.target.value);
    }

    //handles event listener for onSubmit, when user submits form
    handleClick= (e) => {
        //preventDefault method is called on the event to prevent a browser reload or refresh when the form is submitted
        e.preventDefault();
        //if user input is not empty when submitted
        if (user !== "") {        
        //update state of objects and variables
            fetchData();
            // set user to an empty string to reset value in input box to empty after submit
            setUser('');
            //replies array copies styled and formatted user input and bot responses in jsx tags and css to be rendered
            setReplies([...replies, <UserBubble>{user}</UserBubble>,
            <Delay><BotBubble>{i===0 ? user : ''}{data}</BotBubble></Delay>]);
            // increment value of i for index of bot response
            setIndex(i+=1);
            autoScroll();    
        }
    }   

  // Render the component's UI
  return (
    <div>
        <center>
          {/* container for the user and bot messages */}
          {/* must use className instead of class in JSX because class is a reserved word in JavaScript */}
          <div id="chatbox" className="row p-5 m-5 mt-3 d-flex justify-content-center">                        
              {/* prints the array of responses*/}
              {replies}
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
          <Form className="App" onSubmit={handleClick()}> {/* event listener to handle form submission */}
                    <div><div className="d-grid gap-2"><Form.Control size="lg" type="text" placeholder="Enter reply" value={this.state.user} onChange={this.handleChange} style={{width: 700}} />
                    <input className="opbutton" type="submit"/></div></div>                  
          </Form>
        </div>
      </div>
  );
}

export default AiChatbot;