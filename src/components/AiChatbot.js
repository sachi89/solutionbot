import '../styles/Chatbox.css';
import DelayInput from './DelayInput';
import Delay from './Delay';
import UserBubble from './UserBubble';
import BotBubble from './BotBubble';
import Form from 'react-bootstrap/Form';
import FormControl from '@material-ui/core/FormControl';
import { bot } from './bot';
import {useState, useEffect, useRef} from 'react';

//component for chatbot

function AiChatbot() {
    // Declare state variables using useState hook
    const [i, setIndex] = useState(0);
    const [data, setData] = useState(null);
    const [user, setUser] = useState('');
    const [replies, setReplies] = useState(i===0 ? [<Delay> 
    <BotBubble>
        Hello, I'm SolutionBot. I'm here to help you find a solution to your problem using Solution Focused Brief Therapy. Before we begin, can I have your name please?
    </BotBubble></Delay>] : []);
    {/* Delay component used to hide response until set time runs out. Then shows child prop */}
    {/* BotBubble component displays JSX elements around child prop */}

  useEffect(() => {
    // call to clear memory api, to clear chatbot's memory when page is reloaded
      fetch('https://3.15.223.229:5000/clear_memory', {
        method: 'POST',
      })
      .then(response => response.json())
      .then(data => console.log(data.message))
      .catch(error => console.error('Error clearing memory:', error));
    }, []);

  const sendMessage = async (message) => {
    if (i===0) {
      message = 'My name is ' + message;
    }
    try {
      const response = await fetch('https://3.15.223.229:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      console.log(data.response);
      setData(data.response);
      setReplies([...replies, <UserBubble>{user}</UserBubble>,
        <Delay><BotBubble>{data.response.replace('System:','')}</BotBubble></Delay>]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //function to automatically scroll into view of referenced element at bottom of responses
  
  const targetElement = useRef();
  const autoScroll = () => {
    const elmnt = targetElement;
    elmnt.current.scrollIntoView({ behavior: "smooth" });
    }

    // handles event listener for onChange, when user types input
    const handleChange= (e) => { // by using arrow functions, no need to bind methods
    //setState used to update the initial state of the object
    //when input typed, sets state of user object as the current input value from the event. e = event.
    setUser(e.target.value);
    }

    //handles event listener for onSubmit, when user submits form
    const handleClick = (e) => {      
            sendMessage(user);
            setIndex(i+1);                      
            setUser(''); 
            autoScroll();    
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
                <div id="fourth" ref={targetElement}></div>
              </div>
          </div>
        </center>

        {/* form container */}
        <div className="textfield d-flex justify-content-center">
          <Form className="App"> {/* event listener to handle form submission */}
                    <div><div className="d-grid gap-2"><Form.Control size="lg" type="text" placeholder="Enter reply" value={user} onChange={handleChange} style={{width: 700}} />
                    <input className="opbutton" type="button" value="Submit" onClick={handleClick}/></div></div>                  
          </Form>
        </div>
      </div>
  );
}

export default AiChatbot;