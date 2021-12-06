import React from 'react';
import '../styles/TextBubble.css';
import { SiProbot } from 'react-icons/si';

//component for bot response textbubble

// css for replies style tag
const replystyle = {
  width: 400,
  padding: 10
};

class BotBubble extends React.Component
{
    constructor(props) { // used to initialize local state. Not needed if state not being used.
        super(props); // needs to be called or else this.props will be undefined
        //initializing objects with their initial state
        this.state = { //assigns objects to this.state
                    };
    }

   render() {
    return (
        <div> 
            <div id="bot" className="d-flex grow">
                {/* bot icon from react-icons and bot text bubble */}
                <div className="p-2" style={{color:"darkblue"}}><SiProbot size={22} /></div>
                <div className="bubble m-3 float-start">
                    <p style={replystyle}>{this.props.children}</p>
                </div>
            </div>
        </div>
    );
    }
}

export default BotBubble;
