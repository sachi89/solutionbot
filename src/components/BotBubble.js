import React from 'react';
import '../styles/TextBubble.css';

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
            <div id="bot">
                <div className="bubble m-3 float-start grow">
                    <p style={replystyle}>{this.props.children}</p>
                </div>
            </div>
        </div>
    );
    }
}

export default BotBubble;
